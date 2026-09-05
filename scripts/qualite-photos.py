#!/usr/bin/env python3
"""
Note la qualité TECHNIQUE d'une photo telle que le visiteur la voit.

Pourquoi ce script : « mauvaise qualité » est un jugement à l'œil, mais il a des
causes mesurables, et les mesurer permet de trier 244 fichiers sans en ouvrir 244.
Quatre défauts sont recherchés, chacun visible à l'écran :

  1. DÉFINITION INSUFFISANTE — l'image est affichée plus large qu'elle n'est large.
     Le navigateur l'agrandit, elle devient floue/pixelisée. C'est le défaut n°1
     des photos reçues par messagerie (WhatsApp recompresse à 1600 px puis moins).
  2. FLOU / MANQUE DE PIQUÉ — mesuré par la variance du laplacien, calculée APRÈS
     réduction à la largeur d'affichage réelle : une photo de 4000 px floue reste
     floue une fois réduite, une photo nette le reste aussi. C'est donc bien le
     piqué PERÇU qui est noté, pas le piqué du fichier.
  3. COMPRESSION EXCESSIVE — octets par mégapixel. Sous ~120 ko/Mpx, les aplats
     (murs, ciel, plafond) se cassent en blocs et en halos autour des arêtes.
  4. EXPOSITION RATÉE — proportion de pixels écrêtés (blancs brûlés / noirs bouchés)
     et luminosité moyenne. Une fenêtre cramée ou un angle de pièce noir ne se
     rattrape pas : l'information n'est plus dans le fichier.

Le script ne décide RIEN seul : il classe et signale, la sélection finale se fait
à l'œil sur les photos qu'il remonte.

Usage :  python3 scripts/qualite-photos.py [dossier ...]
"""
import os, sys, math
from PIL import Image, ImageFilter, ImageStat

RACINE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "photos")

# Largeur d'affichage réelle sur le site : la galerie des réalisations est une
# grille de 3 colonnes dans un conteneur de ~1200 px, soit ~380 px de large, mais
# les écrans Retina en demandent le double. On juge donc le piqué à 760 px.
LARGEUR_AFFICHAGE = 760
# Les vignettes en pleine largeur (héros, avant/après) montent à ~1200 px logiques.
LARGEUR_PLEINE = 1600

NOYAU_LAPLACIEN = ImageFilter.Kernel((3, 3), [0, 1, 0, 1, -4, 1, 0, 1, 0], scale=1, offset=128)


def mesures(chemin, largeur_cible=LARGEUR_AFFICHAGE):
    im = Image.open(chemin)
    l, h = im.size
    im = im.convert("L")
    # Réduction à la taille d'affichage : c'est là qu'on juge le piqué perçu.
    if l > largeur_cible:
        im_a = im.resize((largeur_cible, max(1, round(h * largeur_cible / l))), Image.LANCZOS)
    else:
        im_a = im
    lap = im_a.filter(NOYAU_LAPLACIEN)
    st = ImageStat.Stat(lap)
    piq = st.stddev[0] ** 2

    hist = im.histogram()
    total = sum(hist)
    noirs = sum(hist[0:3]) / total
    blancs = sum(hist[253:256]) / total
    lum = ImageStat.Stat(im).mean[0]
    contraste = ImageStat.Stat(im).stddev[0]

    octets = os.path.getsize(chemin)
    mpx = (l * h) / 1_000_000
    ko_mpx = (octets / 1024) / mpx if mpx else 0
    return dict(l=l, h=h, mpx=mpx, piq=piq, noirs=noirs, blancs=blancs,
                lum=lum, contraste=contraste, ko_mpx=ko_mpx, octets=octets)


def defauts(m, largeur_cible):
    d = []
    if m["l"] < largeur_cible:
        d.append(f"DÉFINITION {m['l']}px < {largeur_cible}px affichés")
    if m["piq"] < 60:
        d.append(f"FLOU (piqué {m['piq']:.0f})")
    elif m["piq"] < 110:
        d.append(f"mou (piqué {m['piq']:.0f})")
    if m["ko_mpx"] < 120:
        d.append(f"COMPRESSÉE ({m['ko_mpx']:.0f} ko/Mpx)")
    if m["blancs"] > 0.06:
        d.append(f"HAUTES LUMIÈRES BRÛLÉES ({m['blancs']*100:.0f}%)")
    if m["noirs"] > 0.10:
        d.append(f"NOIRS BOUCHÉS ({m['noirs']*100:.0f}%)")
    if m["lum"] < 62:
        d.append(f"SOUS-EXPOSÉE (lum {m['lum']:.0f})")
    if m["contraste"] < 32:
        d.append(f"TERNE (contraste {m['contraste']:.0f})")
    return d


def main():
    dossiers = sys.argv[1:] or ["chantiers"]
    lignes = []
    for dossier in dossiers:
        base = os.path.join(RACINE, dossier)
        for nom in sorted(os.listdir(base)):
            if not nom.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                continue
            chemin = os.path.join(base, nom)
            try:
                m = mesures(chemin)
            except Exception as e:
                print(f"!! {nom} : {e}")
                continue
            d = defauts(m, LARGEUR_AFFICHAGE)
            grave = sum(1 for x in d if x[0].isupper() and x.split()[0].isupper())
            lignes.append((grave, -len(d), f"{dossier}/{nom}", m, d))

    lignes.sort(key=lambda x: (-x[0], x[1], -x[3]["piq"]))
    print(f"{len(lignes)} images analysées\n")
    print(f"{'fichier':<62} {'px':>11} {'piqué':>6} {'ko/Mpx':>7}  défauts")
    print("-" * 150)
    for grave, _, nom, m, d in lignes:
        print(f"{nom:<62} {m['l']}x{m['h']:<6} {m['piq']:6.0f} {m['ko_mpx']:7.0f}  {'; '.join(d)}")


if __name__ == "__main__":
    main()
