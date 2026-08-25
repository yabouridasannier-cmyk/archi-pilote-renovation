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
                    <span className="display block text-xl tracking-tight text-white">ARCHI PILOTE RÉNOVATION</span>
                    <span className="font-mono text-[0.6rem] tracking-[0.28em] text-white/40 uppercase">Rénovation tous corps d&apos;état</span>
                  </div>
                </div>
                <p className="text-white/50 text-[0.95rem] leading-relaxed">
                  Pilotage de travaux de rénovation en Île-de-France. Un seul interlocuteur,
                  du diagnostic à la réception.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Navigation</span>
                  <Link href="/" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Accueil</Link>
                  <Link href="/nos-specialites" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Nos spécialités</Link>
                  <Link href="/realisations" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Réalisations</Link>
                  <Link href="/blog" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Blog</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Île-de-France</span>
                  <Link href="/renovation-ile-de-france" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Toute l&apos;Île-de-France</Link>
                  <Link href="/renovation-hauts-de-seine-92" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Hauts-de-Seine (92)</Link>
                  <Link href="/renovation-yvelines-78" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Yvelines (78)</Link>
                  <Link href="/renovation-complexe-paris" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Paris</Link>
                  <Link href="/renovation-la-garenne-colombes" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">La Garenne-Colombes</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Confiance</span>
                  <Link href="/notre-modele" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Notre modèle</Link>
                  <Link href="/garanties-assurances" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Garanties</Link>
                  <Link href="/notre-methode" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Notre méthode</Link>
                  <Link href="/ce-que-nous-ne-faisons-pas" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Ce que nous ne faisons pas</Link>
                  <Link href="/nos-partenaires-experts" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Nos partenaires</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Ressources</span>
                  <Link href="/bareme-prix-renovation" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Barème des coûts</Link>
                  <Link href="/glossaire-renovation-maison" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Glossaire</Link>
                  <Link href="/aides-renovation-energetique" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Aides & subventions</Link>
                  <Link href="/avant-apres-renovation-maison" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Avant / après</Link>
                  <Link href="/renovation-appartement" className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">Rénovation appartement</Link>
                </div>
                <div className="flex flex-col gap-3">
                  <span className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-white/35">Contact</span>
                  <span className="text-white/70 text-[0.95rem]">{SITE.zone}</span>
                  <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">{SITE.telAffiche}</a>
                  <a href={`mailto:${SITE.email}`} className="text-white/70 hover:text-orange transition-colors text-[0.95rem]">{SITE.email}</a>
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="text-white/70 hover:text-[#25d366] transition-colors text-[0.95rem]">WhatsApp</a>
                </div>
              </div>
            </div>

            <div aria-hidden className="select-none pointer-events-none overflow-hidden -mb-2">
              <span className="display block text-[clamp(2.6rem,10vw,9rem)] leading-[0.85] text-white/[0.05] tracking-tight text-center whitespace-nowrap italic">
                ARCHI PILOTE RÉNOVATION
              </span>
            </div>

            <div className="hr-fade mb-6" />
            <p className="text-white/30 text-[0.76rem] leading-relaxed max-w-3xl mb-4">
              {SITE.structure} ARCHI PILOTE RÉNOVATION n&apos;est pas une entreprise de travaux, n&apos;exécute aucun lot et ne facture aucun
              travaux. Les travaux sont réalisés et facturés par des entreprises partenaires indépendantes, chacune
              titulaire de ses propres assurances de responsabilité civile professionnelle et de garantie décennale.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[0.82rem] text-white/35">
              <span>© 2026 ARCHI PILOTE RÉNOVATION — <Link href="/mentions-legales" className="hover:text-orange transition-colors">Mentions légales</Link></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
