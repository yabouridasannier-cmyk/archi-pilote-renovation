"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";
import { PHOTOS } from "../lib-photos";

/**
 * Split 45/55 — texte à gauche, collage de 2 photos avec parallax différencié.
 */
export function ConceptSplit() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBack = useTransform(scrollYProgress, [0, 1], ["4%", "-6%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="herringbone-ghost absolute top-10 right-0 w-72 h-72 hidden md:block" />
      <div ref={ref} className="container-site">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          <div className="w-full lg:w-[45%] flex flex-col gap-5">
            <Reveal variant="fade-blur"><span className="eyebrow">La méthode Global Rénovation</span></Reveal>
            <WordReveal
              as="h2"
              segments={[{ text: "Un chargé de projet," }, { text: "jamais un standard.", serif: true, gradient: true }]}
              className="display text-[clamp(2.2rem,5vw,4rem)] text-ivoire text-balance"
            />
            <Reveal variant="slide-up" delay={0.15}>
              <p className="lead">
                La rénovation d&apos;appartement échoue rarement sur les travaux eux-mêmes —
                elle échoue sur la coordination. Chez Global Rénovation, un seul chargé de
                projet suit votre chantier du diagnostic à la remise des clés, et pilote tous
                les corps de métier. Vous n&apos;appelez jamais trois numéros différents.
              </p>
            </Reveal>
            <Reveal variant="slide-up" delay={0.25}>
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "Devis détaillé poste par poste, sous 48 h",
                  "Compte-rendu de chantier chaque semaine",
                  "12 mois de SAV en plus des garanties légales",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-ivoire/85">
                    <span className="mt-[7px] size-1.5 rounded-full bg-orange shrink-0" />
                    <span className="text-[0.98rem] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal variant="slide-up" delay={0.35} className="mt-3">
              <Link href="/services" className="btn btn-ghost group">
                Nos services
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform duration-400 group-hover:translate-x-1"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </Reveal>
          </div>

          <div className="w-full lg:w-[55%] relative h-[26rem] md:h-[34rem] xl:h-[38rem]">
            <motion.div style={{ y: yBack }} className="absolute top-0 right-0 w-[72%] h-[84%] rounded-2xl overflow-hidden card-e">
              <img src={PHOTOS.chantierRenovation} alt="Chantier de rénovation en cours dans un appartement parisien" className="size-full object-cover" loading="lazy" />
              <span className="absolute top-3 right-3 glass-pill rounded-full px-3 py-1.5 text-[0.72rem] font-medium text-white/90">Chantier en cours</span>
            </motion.div>
            <motion.div style={{ y: yFront }} className="absolute bottom-0 left-0 w-[52%] h-[58%] rounded-2xl overflow-hidden card-e z-10">
              <img src={PHOTOS.detailParquet} alt="Détail de parquet point de Hongrie posé" className="size-full object-cover" loading="lazy" />
              <span className="absolute bottom-3 left-3 glass-pill rounded-full px-3 py-1.5 text-[0.72rem] font-medium text-white/90">Parquet point de Hongrie</span>
            </motion.div>

            <Reveal variant="scale" delay={0.4} className="absolute -bottom-5 right-6 md:right-14 z-20">
              <div className="card-e rounded-2xl px-5 py-4 flex items-center gap-4">
                <span className="display text-3xl text-gradient leading-none">48h</span>
                <span className="text-[0.82rem] text-muted leading-tight">pour un devis<br />détaillé</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
