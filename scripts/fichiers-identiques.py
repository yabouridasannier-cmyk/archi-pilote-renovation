#!/usr/bin/env python3
"""
Liste les fichiers d'images STRICTEMENT identiques enregistrés sous des noms différents.

Pourquoi cet outil, en plus des deux autres :
  - memes-scenes.py trouve les photos qui montrent la même chose, recadrages compris ;
  - surexposition.py compte sur combien de pages une scène est vue ;
  - celui-ci attrape le cas le plus bête et le plus traître : le MÊME FICHIER, au bit près,
    présent deux fois sous deux noms sans rapport. Un rédacteur qui se demande « cette photo
    est-elle déjà employée ? » fait une recherche textuelle sur le nom du fichier ; elle ne
    trouve rien, et l'image repart sur une deuxième page.

Mesuré le 05/09/2026 : 22 paires de ce type dans public/photos/. C'est l'une des trois
causes du « les mêmes photos reviennent partout » signalé par le client — avec les
recadrages du même cliché (memes-scenes.py) et les alias de clés de lib-photos.ts.

Sortie : un groupe par contenu dupliqué, avec le nombre de pages employant chaque nom.
Code de sortie 1 seulement si un contenu est servi sous PLUSIEURS noms à la fois : c'est le
seul cas qui produit un doublon réellement visible par le visiteur. Un fichier dupliqué
mais employé sous un seul nom est du désordre, pas un défaut.
"""
import os, sys, re, hashlib, collections

ICI = os.path.dirname(os.path.abspath(__file__))
RACINE = os.path.join(ICI, "..", "public", "photos")
APP = os.path.join(ICI, "..", "app")


def empreinte_exacte(chemin):
    h = hashlib.md5()
    with open(chemin, "rb") as f:
        for bloc in iter(lambda: f.read(1 << 16), b""):
            h.update(bloc)
    return h.hexdigest()


def pages_employant(nom_fichier, cles, sources):
    """Bornes de mot obligatoires sur TOUS les motifs.

    Sans elles, « chOptiqueComptoirCarcasseBrute » était compté comme employé partout où
    figurait « chOptiqueComptoirCarcasseBrute2 » — le premier nom est un préfixe du second.
    L'outil signalait alors des conflits qui n'existaient pas."""
    base = re.escape(os.path.splitext(nom_fichier)[0])
    motifs = [rf"{base}\.(?:jpe?g|png|webp)\b", rf"\b{base}(?![\w-])"]
    motifs += [rf"\b{re.escape(c)}(?![\w-])" for c in cles.get(nom_fichier, [])]
    return {p for p, t in sources.items() if any(re.search(m, t) for m in motifs)}


def main():
    groupes = collections.defaultdict(list)
    for dossier, _, fichiers in os.walk(RACINE):
        for n in fichiers:
            if n.lower().endswith((".jpg", ".jpeg", ".png", ".webp")):
                c = os.path.join(dossier, n)
                groupes[empreinte_exacte(c)].append(os.path.relpath(c, RACINE))

    doublons = {k: sorted(v) for k, v in groupes.items() if len(v) > 1}

    # Table clé → fichier de lib-photos : la plupart des pages désignent une image par sa
    # CLÉ, pas par son chemin. Sans cette résolution, les emplois passeraient inaperçus.
    cles = collections.defaultdict(list)
    lib = re.sub(r"/\*.*?\*/", "",
                 open(os.path.join(APP, "lib-photos.ts"), encoding="utf-8").read(), flags=re.S)
    for cle, chemin in re.findall(r'(\w+)\s*:\s*"(/photos/[^"]+)"', lib):
        cles[os.path.basename(chemin)].append(cle)

    sources = {}
    for root, _, fs in os.walk(APP):
        for f in fs:
            if f.endswith((".ts", ".tsx")) and f != "lib-photos.ts":
                p = os.path.join(root, f)
                t = open(p, encoding="utf-8").read()
                t = re.sub(r"/\*.*?\*/", "", t, flags=re.S)
                sources[os.path.relpath(p, os.path.join(ICI, ".."))] = t

    conflits = 0
    total = sum(len(v) for v in doublons.values())
    print(f"{total} fichiers pour {len(doublons)} contenus dupliqués\n")
    for membres in sorted(doublons.values(), key=lambda m: -len(m)):
        emplois = {m: pages_employant(os.path.basename(m), cles, sources) for m in membres}
        employes = [m for m, p in emplois.items() if p]
        marque = ""
        if len(employes) > 1:
            conflits += 1
            marque = "   ← MÊME IMAGE SERVIE SOUS PLUSIEURS NOMS"
        print(f"contenu identique{marque}")
        for m in membres:
            n = len(emplois[m])
            print(f"    {m:<62} {n} page(s)" + ("" if n else "   (inemployé)"))
        print()

    if conflits:
        print(f"❌ {conflits} contenu(s) servis sous plusieurs noms à la fois — doublon visible.")
        return 1
    print("✅ aucun contenu identique n'est servi sous deux noms différents.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
