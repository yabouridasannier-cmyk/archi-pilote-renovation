#!/usr/bin/env python3
"""
Inventorie TOUTES les photos que le client a transmises, et dit lesquelles sont
réellement nouvelles par rapport à ce que le site publie déjà.

Sources balayées (toutes celles où le client a envoyé quelque chose) :
  - l'export de la conversation WhatsApp (extrait dans le bac à sable)
  - les images WhatsApp restées en vrac dans ~/Downloads
  - le dossier ARCHI-PILOTE-ADS

Deux dédoublonnages successifs, parce qu'ils n'attrapent pas la même chose :
  1. MD5 : le fichier strictement identique, déjà publié sous un autre nom.
  2. Empreinte perceptuelle : la MÊME PRISE réexportée par WhatsApp — donc
     recompressée, parfois redimensionnée — dont le MD5 diffère alors que l'image
     est la même. C'est le cas majoritaire ici : les photos du site viennent déjà
     de WhatsApp, elles ont juste transité autrement.

La méthode d'empreinte et les mesures de qualité sont reprises telles quelles de
memes-scenes.py et qualite-photos.py, pour que les scores restent comparables
d'un outil à l'autre.

Sortie : un TSV trié par intérêt décroissant, exploitable par les agents.
"""
import os, sys, json, hashlib, collections
from PIL import Image, ImageFilter, ImageStat

ICI = os.path.dirname(os.path.abspath(__file__))
PROJET = os.path.join(ICI, "..")
SITE = os.path.join(PROJET, "public", "photos")
SCRATCH = "/private/tmp/claude-501/-Users-yanis/35a34bbb-1022-4e2f-813a-1848c9e3cf23/scratchpad"

SOURCES = [
    ("whatsapp-export", os.path.join(SCRATCH, "wa")),
    ("whatsapp-vrac", "/Users/yanis/Downloads"),
    ("ads", "/Users/yanis/Downloads/ARCHI-PILOTE-ADS"),
]

COTE = 32
LARGEUR_AFFICHAGE = 760
NOYAU = ImageFilter.Kernel((3, 3), [0, 1, 0, 1, -4, 1, 0, 1, 0], scale=1, offset=128)
EXT = (".jpg", ".jpeg", ".png", ".webp")
# En dessous, l'image ne peut pas remplir un cadre du site sans bouillir.
LARGEUR_MINI = 900
SEUIL_IDENTIQUE = 0.055   # même seuil de famille que memes-scenes.py


def md5(chemin):
    h = hashlib.md5()
    with open(chemin, "rb") as f:
        for b in iter(lambda: f.read(1 << 16), b""):
            h.update(b)
    return h.hexdigest()


def empreinte(chemin):
    im = Image.open(chemin).convert("L").resize((COTE, COTE), Image.LANCZOS)
    im = im.filter(ImageFilter.GaussianBlur(1.2))
    px = list(im.getdata())
    lo, hi = min(px), max(px)
    ecart = (hi - lo) or 1
    return [(v - lo) / ecart for v in px]


def distance(a, b):
    return sum(abs(x - y) for x, y in zip(a, b)) / len(a)


def mesures(chemin):
    im = Image.open(chemin)
    l, h = im.size
    g = im.convert("L")
    ga = g.resize((LARGEUR_AFFICHAGE, max(1, round(h * LARGEUR_AFFICHAGE / l))), Image.LANCZOS) if l > LARGEUR_AFFICHAGE else g
    piq = ImageStat.Stat(ga.filter(NOYAU)).stddev[0] ** 2
    hist = g.histogram(); total = sum(hist) or 1
    return dict(l=l, h=h, piq=piq,
                blancs=sum(hist[253:256]) / total,
                noirs=sum(hist[0:3]) / total,
                lum=ImageStat.Stat(g).mean[0],
                octets=os.path.getsize(chemin))


def balaye(racine, recursif=True):
    out = []
    if not os.path.isdir(racine):
        return out
    if recursif:
        for r, _, fs in os.walk(racine):
            for f in fs:
                if f.lower().endswith(EXT) and not f.startswith("."):
                    out.append(os.path.join(r, f))
    else:
        for f in os.listdir(racine):
            p = os.path.join(racine, f)
            if os.path.isfile(p) and f.lower().endswith(EXT) and not f.startswith("."):
                out.append(p)
    return out


def main():
    # ── ce que le site publie déjà
    refs = balaye(SITE)
    print(f"site : {len(refs)} images publiées", file=sys.stderr)
    md5_site = set()
    emp_site = []
    for p in refs:
        try:
            md5_site.add(md5(p))
            emp_site.append(empreinte(p))
        except Exception:
            pass

    # ── les candidates
    cands = []
    for nom, racine in SOURCES:
        # « whatsapp-vrac » = les images posées à plat dans Downloads, sans descendre
        # dans les dossiers de projets qui n'ont rien à voir avec ce client.
        fichiers = balaye(racine, recursif=(nom != "whatsapp-vrac"))
        if nom == "whatsapp-vrac":
            fichiers = [f for f in fichiers if "whatsapp" in os.path.basename(f).lower()]
        for f in fichiers:
            cands.append((nom, f))
    print(f"candidates : {len(cands)}", file=sys.stderr)

    vus_md5 = set()
    lignes = []
    for i, (src, p) in enumerate(cands):
        if i % 100 == 0:
            print(f"  … {i}/{len(cands)}", file=sys.stderr)
        try:
            h = md5(p)
            if h in md5_site:
                continue                      # déjà publiée, fichier identique
            if h in vus_md5:
                continue                      # doublon interne aux sources
            vus_md5.add(h)
            m = mesures(p)
            if m["l"] < LARGEUR_MINI and m["h"] < LARGEUR_MINI:
                continue                      # trop petite pour un cadre du site
            e = empreinte(p)
            if any(distance(e, es) < SEUIL_IDENTIQUE for es in emp_site):
                continue                      # même prise, déjà publiée
            lignes.append(dict(src=src, chemin=p, **m))
        except Exception:
            continue

    # tri : d'abord le piqué (une photo floue ne sert à rien), puis la définition
    lignes.sort(key=lambda d: (-min(d["piq"], 400), -(d["l"] * d["h"])))
    print(f"\nNOUVELLES : {len(lignes)}", file=sys.stderr)

    print("piq\tpx\tblancs%\tsrc\tchemin")
    for d in lignes:
        print(f"{d['piq']:.0f}\t{d['l']}x{d['h']}\t{d['blancs']*100:.1f}\t{d['src']}\t{d['chemin']}")

    with open(os.path.join(SCRATCH, "nouvelles-photos.json"), "w") as f:
        json.dump(lignes, f, indent=1, ensure_ascii=False)
    print(f"→ {SCRATCH}/nouvelles-photos.json", file=sys.stderr)


if __name__ == "__main__":
    main()
