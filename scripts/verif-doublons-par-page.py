#!/usr/bin/env python3
"""
Garde-fou : refuse deux images visuellement identiques SUR UNE MÊME PAGE.

Complète scripts/doublons-visuels.py (qui cartographie la photothèque entière).
Ici on vérifie l'usage réel : quelles pages affichent deux clichés que le visiteur
percevra comme le même. Combine empreinte MD5 (doublon strict) et dHash (même prise
de vue recadrée — invisible au MD5, c'est le défaut signalé par le client).

Sortie non vide = à corriger.  Code retour 1 si au moins un doublon est trouvé.
"""
import os, re, sys, hashlib, itertools, collections
from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
PHOTOS = os.path.join(ROOT, "public")
SEUIL = 12


def dhash(path, size=16):
    try:
        im = Image.open(path).convert("L").resize((size + 1, size), Image.LANCZOS)
    except Exception:
        return None
    px = list(im.getdata())
    bits = []
    for r in range(size):
        row = px[r * (size + 1):(r + 1) * (size + 1)]
        bits += [1 if row[c] < row[c + 1] else 0 for c in range(size)]
    return int("".join(map(str, bits)), 2)


cache = {}
def sig(rel):
    if rel in cache:
        return cache[rel]
    p = os.path.join(PHOTOS, rel.lstrip("/"))
    if not os.path.exists(p):
        cache[rel] = None
    else:
        cache[rel] = (hashlib.md5(open(p, "rb").read()).hexdigest(), dhash(p))
    return cache[rel]


problems = []
for dp, _, fs in os.walk(os.path.join(ROOT, "app")):
    for f in fs:
        if not f.endswith(".tsx"):
            continue
        full = os.path.join(dp, f)
        txt = open(full, encoding="utf-8").read()
        # ignorer les blocs commentés
        txt = re.sub(r"/\*.*?\*/", "", txt, flags=re.S)
        refs = re.findall(r"/photos/[A-Za-z0-9_./-]+\.(?:jpe?g|png|webp)", txt)
        seen = {}
        for r in dict.fromkeys(refs):
            s = sig(r)
            if s:
                seen[r] = s
        page = os.path.relpath(full, ROOT)
        for (r1, s1), (r2, s2) in itertools.combinations(seen.items(), 2):
            if s1[0] == s2[0]:
                problems.append((page, r1, r2, "MD5 IDENTIQUE"))
            elif s1[1] is not None and s2[1] is not None and bin(s1[1] ^ s2[1]).count("1") <= SEUIL:
                d = bin(s1[1] ^ s2[1]).count("1")
                problems.append((page, r1, r2, f"quasi-doublon visuel (d={d})"))

if not problems:
    print("OK — aucune page n'affiche deux images visuellement identiques.")
    sys.exit(0)

print(f"{len(problems)} doublon(s) intra-page à corriger :\n")
for page, r1, r2, why in sorted(problems):
    print(f"  {page}")
    print(f"    {os.path.basename(r1)}")
    print(f"    {os.path.basename(r2)}   → {why}\n")
sys.exit(1)
