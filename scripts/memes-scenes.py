#!/usr/bin/env python3
"""
Regroupe les photos qui montrent LA MÊME SCÈNE, même recadrées différemment.

Pourquoi un second outil : scripts/doublons-visuels.py compare des empreintes dHash,
qui décrivent la structure fine de l'image. Deux exports du même cliché recadrés à
quelques centimètres près en ressortent ÉLOIGNÉS (mesuré : 97/256 et 144/256 sur des
paires que l'œil reconnaît instantanément comme la même pièce), alors qu'un visiteur,
lui, voit la même photo revenir. C'est précisément ce que le client reprochait au site.

Le principe retenu ici est donc l'inverse : on détruit volontairement le détail pour ne
garder que la composition d'ensemble — l'image est ramenée en 32×32 niveaux de gris,
fortement floutée, puis normalisée en contraste (pour absorber les écarts d'exposition
entre deux exports). Deux vues de la même pièce conservent alors la même « silhouette »
de taches claires et sombres, quel que soit le recadrage.

La distance est l'écart absolu moyen entre les deux empreintes, sur 0–1.
Repères mesurés sur cette photothèque :
    < 0,02  même fichier ré-encodé
    < 0,06  même scène, recadrage ou zoom différent   ← le cas qui gênait le client
    > 0,12  scènes différentes

Usage :  python3 scripts/memes-scenes.py [seuil]     (défaut : 0.06)
"""
import os, sys, itertools
from PIL import Image, ImageFilter

RACINE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "photos")
DOSSIERS = ["chantiers", "maquette", "pedagogie", "etudes"]
SEUIL = float(sys.argv[1]) if len(sys.argv) > 1 else 0.06
COTE = 32


def empreinte(chemin):
    im = Image.open(chemin).convert("L").resize((COTE, COTE), Image.LANCZOS)
    im = im.filter(ImageFilter.GaussianBlur(1.2))
    px = list(im.getdata()) if not hasattr(im, "get_flattened_data") else list(im.get_flattened_data())
    lo, hi = min(px), max(px)
    ecart = (hi - lo) or 1
    # normalisation du contraste : deux exports de la même prise n'ont pas la même
    # courbe de rendu, sans ça ils se retrouveraient artificiellement éloignés.
    return [(v - lo) / ecart for v in px]


def distance(a, b):
    return sum(abs(x - y) for x, y in zip(a, b)) / len(a)


def main():
    fichiers = []
    for d in DOSSIERS:
        base = os.path.join(RACINE, d)
        if not os.path.isdir(base):
            continue
        for n in sorted(os.listdir(base)):
            if n.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                fichiers.append((f"{d}/{n}", os.path.join(base, n)))

    emp = {}
    for nom, chemin in fichiers:
        try:
            emp[nom] = empreinte(chemin)
        except Exception as e:
            print(f"!! {nom} : {e}")

    noms = sorted(emp)
    # regroupement par proximité transitive : A~B et B~C ⇒ même scène
    parent = {n: n for n in noms}

    def racine(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    paires = []
    for a, b in itertools.combinations(noms, 2):
        d = distance(emp[a], emp[b])
        if d <= SEUIL:
            paires.append((d, a, b))
            parent[racine(a)] = racine(b)

    groupes = {}
    for n in noms:
        groupes.setdefault(racine(n), []).append(n)
    groupes = {k: v for k, v in groupes.items() if len(v) > 1}

    total = sum(len(v) for v in groupes.values())
    print(f"{len(noms)} images | seuil {SEUIL}")
    print(f"{len(groupes)} scènes vues plusieurs fois, représentant {total} fichiers "
          f"({total * 100 // len(noms)} % de la photothèque)\n")
    for i, (_, membres) in enumerate(sorted(groupes.items(), key=lambda kv: -len(kv[1])), 1):
        print(f"SCÈNE {i} — {len(membres)} fichiers")
        for m in sorted(membres):
            print(f"    {m}")
        print()


if __name__ == "__main__":
    main()
