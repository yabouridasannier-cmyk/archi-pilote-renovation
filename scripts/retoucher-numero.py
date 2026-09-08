#!/usr/bin/env python3
"""
Remplace un texte court (numéro de téléphone) dans une image générée, sans la régénérer.

Pourquoi cet outil : les infographies de la marque sont produites par IA et coûtent cher à
régénérer. Quand seul le numéro de téléphone change, on repeint la zone du texte avec la
couleur exacte du fond, puis on rend le nouveau texte et on le ramène EXACTEMENT à
l'empreinte de l'ancien — largeur et hauteur. Comme les deux chaînes ont le même format
(« 06 XX XX XX XX »), le résultat est indiscernable à la taille d'affichage.

Ce qu'il faut lui donner : l'image, et une ZONE APPROXIMATIVE autour de l'ancien texte,
qui exclut les icônes voisines. Il trouve lui-même la boîte serrée des pixels sombres —
le texte — à l'intérieur de cette zone. Ne marche que pour du texte foncé sur fond clair
(ou l'inverse si on inverse le seuil).

Usage :
  python3 scripts/retoucher-numero.py IMAGE.jpg x0 y0 x1 y1 "06 67 11 79 75" [SORTIE.jpg]
Contrôle : une image avant/après ×3 est écrite à côté de la sortie.
"""
import sys
from PIL import Image, ImageDraw, ImageFont, ImageStat

FONT = "/System/Library/Fonts/Helvetica.ttc"

def bbox_texte(im, roi, seuil=140):
    g = im.convert("L").crop(roi)
    bb = g.point(lambda v: 255 if v < seuil else 0).getbbox()
    return (roi[0]+bb[0], roi[1]+bb[1], roi[0]+bb[2], roi[1]+bb[3]) if bb else None

def encre(im, bb):
    px = sorted(im.crop(bb).convert("RGB").getdata(), key=lambda p: sum(p))
    k = max(1, len(px)//8)
    return tuple(sum(p[i] for p in px[:k])//k for i in range(3))

def retoucher(src, roi, nouveau, dst):
    im = Image.open(src).convert("RGB")
    bb = bbox_texte(im, roi)
    if not bb:
        sys.exit("aucun texte sombre trouvé dans la zone")
    x0, y0, x1, y1 = bb
    W, H = x1-x0, y1-y0
    fond = tuple(ImageStat.Stat(im.crop((x0-2, y0-9, x1+2, y0-3))).median)
    enc = encre(im, bb)
    ImageDraw.Draw(im).rectangle((x0-2, y0-3, x1+3, y1+3), fill=fond)
    f = ImageFont.truetype(FONT, 120)
    l, t, r, b = f.getbbox(nouveau)
    calque = Image.new("RGBA", (r-l+8, b-t+8), (0, 0, 0, 0))
    ImageDraw.Draw(calque).text((4-l, 4-t), nouveau, fill=enc+(255,), font=f)
    calque = calque.crop(calque.getbbox()).resize((W, H), Image.LANCZOS)
    im.paste(calque, (x0, y0), calque)
    im.save(dst, quality=94, subsampling=0)
    av = Image.open(src).convert("RGB").crop((x0-45, y0-25, x1+70, y1+25))
    ap = im.crop((x0-45, y0-25, x1+70, y1+25))
    k = 3
    comp = Image.new("RGB", (av.width*k*2+20, av.height*k), "white")
    comp.paste(av.resize((av.width*k, av.height*k), Image.LANCZOS), (0, 0))
    comp.paste(ap.resize((ap.width*k, ap.height*k), Image.LANCZOS), (av.width*k+20, 0))
    ctrl = dst.rsplit(".", 1)[0] + "-avant-apres.png"
    comp.save(ctrl)
    print(f"texte trouvé {bb} · empreinte {W}x{H} · fond {fond} · encre {enc}\n→ {dst}\ncontrôle : {ctrl}")

if __name__ == "__main__":
    if len(sys.argv) < 7:
        sys.exit(__doc__)
    src = sys.argv[1]; roi = tuple(int(v) for v in sys.argv[2:6]); nouveau = sys.argv[6]
    dst = sys.argv[7] if len(sys.argv) > 7 else src
    retoucher(src, roi, nouveau, dst)
