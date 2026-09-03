#!/usr/bin/env python3
"""
Détecte les quasi-doublons de la photothèque par empreinte perceptuelle (dHash 16x16).

Pourquoi : un contrôle MD5 ne voit PAS deux exports de la même prise de vue
recadrés différemment (ex. 1200 px vs 1186 px de large). C'est ce qui a produit
l'effet « la même photo partout » signalé par le client.

Usage :  python3 scripts/doublons-visuels.py [distance_max]
         (distance par défaut : 12 sur 256 bits)
"""
import os, sys, itertools, collections
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "..", "public", "photos")
DIRS = ["chantiers", "maquette", "pedagogie", "etudes"]
SEUIL = int(sys.argv[1]) if len(sys.argv) > 1 else 12


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


def main():
    items = []
    for d in DIRS:
        p = os.path.join(ROOT, d)
        if not os.path.isdir(p):
            continue
        for f in sorted(os.listdir(p)):
            if f.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                h = dhash(os.path.join(p, f))
                if h is not None:
                    items.append((f"{d}/{f}", h))

    parent = {n: n for n, _ in items}

    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x

    for (n1, h1), (n2, h2) in itertools.combinations(items, 2):
        if bin(h1 ^ h2).count("1") <= SEUIL:
            ra, rb = find(n1), find(n2)
            if ra != rb:
                parent[rb] = ra

    groups = collections.defaultdict(list)
    for n, _ in items:
        groups[find(n)].append(n)
    clusters = sorted((sorted(v) for v in groups.values() if len(v) > 1), key=lambda c: -len(c))

    print(f"{len(items)} images analysées · seuil {SEUIL}/256")
    print(f"{len(clusters)} groupes de quasi-doublons · {sum(len(c) for c in clusters)} images concernées\n")
    for c in clusters:
        print(f"[{len(c)}] " + "  ≈  ".join(x.split("/")[-1] for x in c))


if __name__ == "__main__":
    main()
