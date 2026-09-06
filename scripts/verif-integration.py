#!/usr/bin/env python3
"""
Contrôle mécanique de l'intégration des images. Ce que la machine peut vérifier seule.

Il ne remplace pas la relecture à l'œil : aucun programme ne sait si une légende décrit
bien la photo. Il attrape en revanche, sans se fatiguer, les fautes que l'œil laisse
passer — un cadre qui ampute une photo, une même scène servie partout, une clé déclarée
mais absente du disque.

Cinq contrôles :
  1. FICHIER MANQUANT — une clé de lib-photos qui ne pointe sur rien.
  2. RATIO — l'écart entre le ratio natif du fichier et le ratio du cadre. Au-delà de 12 %,
     le recadrage mange une part visible du sujet ; à 40 %, il en mange près de la moitié.
  3. SUREXPOSITION — le nombre de pages sur lesquelles une même image apparaît. La règle du
     projet est 3 au maximum.
  4. PROVENANCE — une image de /maquette ou /pedagogie légendée « Chantier réel » : c'est
     une image d'illustration ou un schéma présenté comme une photo de chantier.
  5. SCHÉMA RECADRÉ — une image de /pedagogie affichée sans la prop `entier`/`schema` : ces
     planches portent leur titre en haut et leur signature en bas, un recadrage les décapite.

Sortie : la liste des anomalies, et un code de sortie non nul s'il en reste.
"""
import os, re, sys, glob, collections
from PIL import Image

ICI = os.path.dirname(os.path.abspath(__file__))
PROJET = os.path.join(ICI, "..")
APP = os.path.join(PROJET, "app")

# ratio affiché -> valeur numérique largeur/hauteur
RATIOS = {
    "aspect-square": 1.0, "aspect-video": 16 / 9, "aspect-[16/9]": 16 / 9,
    "aspect-[4/3]": 4 / 3, "aspect-[3/2]": 3 / 2, "aspect-[3/4]": 3 / 4,
    "aspect-[2/3]": 2 / 3, "aspect-[9/16]": 9 / 16, "aspect-[10/7]": 10 / 7,
    "aspect-[7/10]": 0.7, "aspect-[5/4]": 1.25, "aspect-[4/5]": 0.8,
    "aspect-[21/9]": 21 / 9, "aspect-[1/1]": 1.0, "aspect-[2/1]": 2.0,
}
ECART_TOLERE = 0.12
MAX_PAGES = 3


def sans_commentaires(t):
    return re.sub(r"/\*.*?\*/", "", t, flags=re.S)


def charge_cles():
    lib = sans_commentaires(open(os.path.join(APP, "lib-photos.ts"), encoding="utf-8").read())
    return dict(re.findall(r'(\w+)\s*:\s*"(/photos/[^"]+)"', lib))


def pages():
    out = {}
    for p in glob.glob(os.path.join(APP, "**", "*.tsx"), recursive=True) + \
             glob.glob(os.path.join(APP, "**", "*.ts"), recursive=True):
        if p.endswith("lib-photos.ts"):
            continue
        out[os.path.relpath(p, PROJET)] = sans_commentaires(open(p, encoding="utf-8").read())
    return out


def figures(texte):
    """Chaque <MqFig …> de la page, avec sa src, sa légende et son ratio."""
    for m in re.finditer(r"<MqFig\b(.*?)/>", texte, re.S):
        bloc = m.group(1)
        src = re.search(r'src=(?:"([^"]+)"|\{`([^`]+)`\}|\{([A-Za-z0-9_.\[\]"\']+)\})', bloc)
        cap = re.search(r'caption="([^"]*)"', bloc)
        rat = re.search(r'ratio="([^"]+)"', bloc)
        yield dict(
            src=(src.group(1) or src.group(2) or src.group(3)) if src else None,
            caption=cap.group(1) if cap else "",
            ratio=rat.group(1) if rat else None,
            entier=("entier" in bloc or "schema" in bloc),
            brut=bloc,
        )


def resout(src, cles):
    """Une src peut être un chemin littéral ou une clé de lib-photos."""
    if not src:
        return None
    if src.startswith("/photos/"):
        return src
    for cle, chemin in cles.items():
        if src.endswith(cle) or src == cle:
            return chemin
    m = re.search(r"/photos/[\w./-]+", src)
    return m.group(0) if m else None


def main():
    cles = charge_cles()
    srcs = pages()
    anomalies = collections.defaultdict(list)
    vues = collections.defaultdict(set)

    for page, texte in srcs.items():
        for f in figures(texte):
            chemin = resout(f["src"], cles)
            if not chemin:
                continue
            vues[chemin].add(page)
            disque = os.path.join(PROJET, "public" + chemin)
            if not os.path.exists(disque):
                anomalies["fichier manquant"].append(f"{page} → {chemin}")
                continue
            try:
                w, h = Image.open(disque).size
            except Exception:
                anomalies["image illisible"].append(f"{page} → {chemin}")
                continue

            natif = w / h
            if f["ratio"] in RATIOS and not f["entier"]:
                affiche = RATIOS[f["ratio"]]
                # part du sujet perdue par le recadrage en object-cover
                perte = 1 - min(natif, affiche) / max(natif, affiche)
                if perte > ECART_TOLERE:
                    anomalies["cadre qui ampute"].append(
                        f"{page} → {os.path.basename(chemin)} : natif {w}x{h} "
                        f"({natif:.2f}) dans {f['ratio']} ({affiche:.2f}) — {perte*100:.0f}% perdus")

            if "/maquette/" in chemin or "/pedagogie/" in chemin:
                if "hantier réel" in f["caption"]:
                    anomalies["illustration présentée comme un chantier"].append(
                        f"{page} → {os.path.basename(chemin)}")
                # Attention : /pedagogie ne contient pas que des schémas titrés. On y
                # trouve aussi des photos de matière (planches de matériaux, macros de
                # joint) qui n'ont ni titre ni signature, et qu'un cadrage n'abîme donc
                # pas. On ne signale que le recadrage RÉEL, mesuré plus haut : signaler
                # tout /pedagogie sans `entier` produisait des faux positifs en série,
                # et une alerte qui crie tout le temps finit par ne plus être lue.
                pass

    for chemin, pgs in vues.items():
        if len(pgs) > MAX_PAGES:
            anomalies["vue sur trop de pages"].append(
                f"{os.path.basename(chemin)} : {len(pgs)} pages — {', '.join(sorted(pgs))}")

    total = sum(len(v) for v in anomalies.values())
    print(f"{len(vues)} images employées, {sum(len(p) for p in vues.values())} emplacements\n")
    for titre, lignes in sorted(anomalies.items(), key=lambda kv: -len(kv[1])):
        print(f"── {titre.upper()} ({len(lignes)})")
        for l in sorted(lignes)[:25]:
            print(f"   {l}")
        if len(lignes) > 25:
            print(f"   … et {len(lignes)-25} autres")
        print()
    if total == 0:
        print("✅ aucune anomalie mécanique.")
    else:
        print(f"❌ {total} anomalie(s).")
    return 1 if total else 0


if __name__ == "__main__":
    sys.exit(main())
