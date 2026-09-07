#!/usr/bin/env python3
"""
Classe les SCÈNES par nombre de pages où le visiteur les voit.

Une « scène » = un groupe de fichiers qui montrent la même chose (cf. memes-scenes.py).
Compter les fichiers ne suffit pas : le même salon existe sous deux noms de fichiers
sans rapport (chDemolitionBoiseriesHaussmannien et chIsolationPhoniqueGranulesPlancher),
et un comptage par fichier le voyait donc comme deux images distinctes employées deux
fois chacune, alors que le visiteur, lui, voit la même pièce quatre fois.

Les commentaires du code sont retirés avant comptage : une image seulement CITÉE dans
un commentaire n'est pas affichée.

Usage :  python3 scripts/surexposition.py [seuil_scene]
"""
import os, re, sys, itertools, importlib.util

ICI = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("ms", os.path.join(ICI, "memes-scenes.py"))
ms = importlib.util.module_from_spec(spec); spec.loader.exec_module(ms)

RACINE = os.path.join(ICI, "..", "public", "photos")
APP = os.path.join(ICI, "..", "app")
SEUIL = float(sys.argv[1]) if len(sys.argv) > 1 else 0.06

fichiers = []
for d in ["chantiers", "maquette", "pedagogie", "etudes"]:
    base = os.path.join(RACINE, d)
    if os.path.isdir(base):
        for n in sorted(os.listdir(base)):
            if n.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                fichiers.append((d, n, os.path.join(base, n)))

emp = {}
for d, n, c in fichiers:
    try: emp[(d, n)] = ms.empreinte(c)
    except Exception: pass

cles = sorted(emp)
parent = {k: k for k in cles}
def racine(x):
    while parent[x] != x:
        parent[x] = parent[parent[x]]; x = parent[x]
    return x
for a, b in itertools.combinations(cles, 2):
    if ms.distance(emp[a], emp[b]) <= SEUIL:
        parent[racine(a)] = racine(b)
groupes = {}
for k in cles:
    groupes.setdefault(racine(k), []).append(k)

# Table clé → chemin de lib-photos.ts : la plupart des pages désignent une image par
# sa CLÉ (photo: "chParquetVitrifie"), pas par son chemin de fichier. Chercher seulement
# le nom de fichier faisait passer ces emplois pour inexistants.
CLES = {}
lib = open(os.path.join(APP, "lib-photos.ts"), encoding="utf-8").read()
lib = re.sub(r"/\*.*?\*/", "", lib, flags=re.S)
for cle, chemin in re.findall(r'(\w+)\s*:\s*"(/photos/[^"]+)"', lib):
    CLES.setdefault(os.path.basename(chemin), []).append(cle)

# code des pages, commentaires retirés
sources = {}
for root, _, fs in os.walk(APP):
    for f in fs:
        if f.endswith((".ts", ".tsx")) and f != "lib-photos.ts":
            p = os.path.join(root, f)
            t = open(p, encoding="utf-8").read()
            t = re.sub(r"/\*.*?\*/", "", t, flags=re.S)
            t = re.sub(r"\{\s*/\*.*?\*/\s*\}", "", t, flags=re.S)
            rel = os.path.relpath(p, os.path.join(ICI, ".."))
            if f == "data.ts":
                # data.ts contient les 30 articles de blog : compté en bloc, il ne pesait
                # qu'une « page », alors que deux articles employant la même scène font
                # bien deux pages pour le visiteur. On découpe donc par article.
                morceaux = re.split(r'\n\s*\{\s*\n\s*slug:\s*"([^"]+)"', t)
                sources[rel] = morceaux[0]
                for i in range(1, len(morceaux), 2):
                    sources[f"blog/{morceaux[i]}"] = morceaux[i + 1]
            else:
                sources[rel] = t

lignes = []
for membres in groupes.values():
    pages = set()
    for _, n in membres:
        # Bornes de mot obligatoires. Sans elles, « chBibliotheque » était compté
        # partout où figurait « chBibliothequeNicheGrisTaupe » ou
        # « chBibliothequePanneauxMoulures » — le premier nom est un préfixe des
        # autres. Le script annonçait alors des scènes vues sur 5 pages qui ne
        # l'étaient pas, et l'inverse est tout aussi grave : une alerte fausse
        # fait perdre confiance dans celles qui sont vraies.
        base = re.escape(os.path.splitext(n)[0])
        motifs = [rf"{base}\.(?:jpe?g|png|webp)\b", rf"\b{base}(?![\w-])"] + \
                 [rf"\b{re.escape(c)}\b" for c in CLES.get(n, [])]
        for p, t in sources.items():
            if any(re.search(m, t) for m in motifs):
                pages.add(p)
    lignes.append((len(pages), len(membres), sorted(membres), sorted(pages)))

lignes.sort(key=lambda x: -x[0])
print(f"{len(groupes)} scènes distinctes pour {len(cles)} fichiers\n")
print("SCÈNES VUES SUR 3 PAGES OU PLUS — c'est ce que le visiteur ressent comme « toujours les mêmes photos »\n")
for npages, nfich, membres, pages in lignes:
    if npages < 3: continue
    print(f"{npages} pages | {nfich} fichier(s)")
    for d, n in membres: print(f"      {d}/{n}")
    for p in pages: print(f"    → {p}")
    print()
inutil = [(m, p) for np_, nf, m, p in lignes if np_ == 0]
print(f"\n{len(inutil)} scène(s) affichée(s) NULLE PART (réserve disponible) :")
for membres, _ in inutil:
    print("     " + ", ".join(f"{d}/{n}" for d, n in membres))
