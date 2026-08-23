"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";
import { PHOTOS } from "../lib-photos";
import { SITE } from "../data";

export function CtaFinal() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative py-32 md:py-44 overflow-hidden grain">
      <motion.div className="absolute inset-0 scale-[1.25]" style={{ y }}>
        <img src={PHOTOS.detailMoulure} alt="" aria-hidden className="absolute inset-0 size-full object-cover opacity-30" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-carbone via-carbone/70 to-carbone" />

      <div className="container-site relative z-10 flex flex-col items-center text-center gap-8">
        <Reveal variant="fade-blur"><span className="eyebrow">Visite technique gratuite</span></Reveal>
        <WordReveal
          as="h2"
          segments={[{ text: "Votre maison mérite" }, { text: "un vrai chantier, pas un chantier vague.", serif: true, gradient: true }]}
          className="display text-[clamp(2.3rem,6vw,5rem)] text-ivoire text-balance max-w-5xl"
        />
        <Reveal variant="slide-up" delay={0.2}>
          <p className="lead max-w-xl">
            Racontez-nous votre projet — surface, budget, commune. Un chargé de projet vous
            rappelle et se déplace sous 5 jours.
          </p>
        </Reveal>
        <Reveal variant="scale" delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/devis" className="btn btn-primary !px-9 !py-4 text-base">
              Estimer mon budget
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <a href={`tel:${SITE.tel.replace(/\s/g, "")}`} className="btn btn-ghost !px-9 !py-4 text-base">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" /></svg>
              {SITE.telAffiche}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
