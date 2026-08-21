"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SITE } from "../data";
import { LogoMark } from "./logo";

export function Footer() {
  const inner = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const measure = () => setHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative z-0 w-full" style={{ height: height ? `${height}px` : "auto", clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
      <div className="fixed bottom-0 w-full" style={{ height: height ? `${height}px` : "auto" }}>
        <footer ref={inner} className="w-full bg-[#181914] border-t border-line pt-16 pb-8 overflow-hidden relative">
          <div className="herringbone-ghost absolute inset-0 opacity-[0.06]" />
          <div aria-hidden className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[60rem] h-[24rem] rounded-full opacity-20 blur-3xl pointer-events-none" style={{ background: "radial-gradient(closest-side, #a9762c, transparent)" }} />

          <div className="container-site relative">
            <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
              <div className="max-w-sm">
                <div className="flex items-center gap-3 mb-5 text-white">
                  <LogoMark size={44} />
                  <div className="leading-none">
                    <span className="display block text-xl tracking-tight text-white">Global Rénovation</span>
                    <span className="font-mono text-[0.6rem] tracking-[0.28em] text-white/40 uppercase">Second œuvre &amp; gros œuvre</span>
                  </div>
                </div>
                <p className="text-white/50 text-[0.95rem] leading-relaxed">
                  Rénovation d&apos;appartement à Paris et en Île-de-France. Un seul interlocuteur,
                  du diagnostic à la remise des clés.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Navigation</span>
                  <Link href="/" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Accueil</Link>
                  <Link href="/services" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Nos services</Link>
                  <Link href="/realisations" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Réalisations</Link>
                  <Link href="/blog" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Blog</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Contact</span>
                  <span className="text-white/70 text-[0.95rem]">{SITE.zone}</span>
                  <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">{SITE.telAffiche}</a>
                  <a href={`mailto:${SITE.email}`} className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">{SITE.email}</a>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Devis</span>
                  <Link href="/devis" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Estimateur en ligne</Link>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="text-white/70 hover:text-[#25d366] transition-colors text-[0.95rem]">WhatsApp</a>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Garanties</span>
                  <span className="text-white/50 text-[0.88rem]">Décennale — 10 ans</span>
                  <span className="text-white/50 text-[0.88rem]">Biennale — 2 ans</span>
                  <span className="text-white/50 text-[0.88rem]">Parfait achèvement</span>
                </div>
              </div>
            </div>

            <div aria-hidden className="select-none pointer-events-none overflow-hidden -mb-2">
              <span className="display block text-[clamp(2.6rem,10vw,9rem)] leading-[0.85] text-white/[0.05] tracking-tight text-center whitespace-nowrap italic">
                Global Rénovation
              </span>
            </div>

            <div className="hr-fade mb-6" />
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[0.82rem] text-white/35">
              <span>© 2026 Global Rénovation. Tous droits réservés.</span>
              <span className="font-mono text-[0.7rem] tracking-widest uppercase">Maquette — Logipro Web</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
