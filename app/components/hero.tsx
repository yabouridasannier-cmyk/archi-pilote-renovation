"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { WordReveal } from "./word-reveal";
import { PHOTOS } from "../lib-photos";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const SLIDES = [
  { src: PHOTOS.heroHaussmannien, alt: "Chantier de rénovation en cours, structure et gros œuvre", pos: "object-[center_38%]" },
  { src: PHOTOS.chantierIsolation, alt: "Cuisine en cours de rénovation, protections de chantier", pos: "object-center" },
  { src: PHOTOS.detailParquet, alt: "Parquet point de Hongrie, détail de pose", pos: "object-center" },
  { src: PHOTOS.sejourApres, alt: "Séjour rénové, résultat livré", pos: "object-center" },
];

/** Diaporama hero — 4 visuels en fondu, cycle auto ~5s. */
function HeroSlideshow() {
  const [i, setI] = useState(0);
  const [ready, setReady] = useState(false);

  // Précharge les 4 images en amont — sans ça, le navigateur télécharge
  // chaque photo au moment du switch et ça produit un flash/coupure visible.
  useEffect(() => {
    let cancelled = false;
    Promise.all(
      SLIDES.map(
        (s) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => resolve();
            img.onerror = () => resolve();
            img.src = s.src;
          })
      )
    ).then(() => { if (!cancelled) setReady(true); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (!ready) return;
    const t = setInterval(() => setI((v) => (v + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [ready]);

  return (
    <>
      {/* Le zoom (Ken Burns) tourne en continu sur un calque persistant,
          indépendant de la photo affichée — sinon chaque changement de
          slide fait "sauter" le niveau de zoom au moment du fondu. */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.09, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <AnimatePresence>
          <motion.img
            key={i}
            src={SLIDES[i].src}
            alt={SLIDES[i].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
            decoding="async"
            className={`absolute inset-0 size-full object-cover ${SLIDES[i].pos}`}
          />
        </AnimatePresence>
      </motion.div>
      <div className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 z-[1] flex gap-1.5">
        {SLIDES.map((_, k) => (
          <span key={k} className={`h-1 rounded-full transition-all duration-500 ${k === i ? "w-6 bg-orange" : "w-1.5 bg-white/40"}`} />
        ))}
      </div>
    </>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "160px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden flex flex-col grain">
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y }}>
        <HeroSlideshow />
      </motion.div>
      <div className="absolute inset-0 bg-[#20211d]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#20211d]/60 via-transparent to-[#20211d]" />

      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="relative z-10 flex-1 flex items-center justify-center pt-16 pb-10 sm:pt-20 sm:pb-16">
        <div className="container-site flex flex-col items-center text-center gap-4 sm:gap-7">
          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1, ease: EASE }}
            className="glass-pill pl-3 pr-4 py-2 flex items-center gap-2.5"
          >
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full rounded-full bg-orange opacity-70 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-orange" />
            </span>
            <span className="text-[0.78rem] sm:text-[0.82rem] text-white/85 whitespace-nowrap">
              <span className="sm:hidden">Travaux de rénovation — Île-de-France</span>
              <span className="hidden sm:inline">Travaux de rénovation tous corps d&apos;état — Île-de-France</span>
            </span>
          </motion.div>

          <WordReveal
            as="h1"
            immediate
            delay={0.25}
            stagger={0.1}
            segments={[
              { text: "Rénovation tous corps d'état," },
              { text: "du gros œuvre aux finitions.", serif: true, gradient: true },
            ]}
            className="hero-title display text-[clamp(2.5rem,7.6vw,6.4rem)] leading-[1.04] sm:leading-[1.02] tracking-[-0.01em] text-white text-balance max-w-6xl"
          />

          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.85, ease: EASE }}
            className="max-w-xl text-base sm:text-lg md:text-xl leading-snug text-white/75 text-balance"
          >
            <span className="sm:hidden">
              <strong className="text-white font-semibold">Un seul interlocuteur</strong>, devis des entreprises sous 48&nbsp;h.
            </span>
            <span className="hidden sm:inline">
              Second œuvre tous corps d&apos;état, cuisine sur-mesure, salle de bain étanche, isolation.{" "}
              <strong className="text-white font-semibold">Un seul interlocuteur</strong>, devis des entreprises sous 48&nbsp;h.
            </span>
          </motion.p>

          <div className="flex flex-wrap justify-center gap-3 mt-1 sm:mt-2">
            <motion.div initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} transition={{ duration: 1, delay: 1.05, ease: EASE }}>
              <Link href="/devis" className="btn btn-primary">
                Estimer mon budget
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="mt-px"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }} animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }} transition={{ duration: 1, delay: 1.2, ease: EASE }}>
              <Link href="/realisations" className="btn btn-ghost !text-white !border-white/90 hover:!bg-white hover:!text-orange-deep">Voir nos chantiers</Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="hidden sm:flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mt-1 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-white/45"
          >
            <span>Entreprises partenaires assurées</span>
            <span className="size-1 rounded-full bg-orange/60" />
            <span>Devis entreprises sous 48 h</span>
            <span className="size-1 rounded-full bg-orange/60" />
            <span>Visite technique sous 5 jours</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase text-white/40">Découvrir</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block h-8 w-px bg-gradient-to-b from-orange to-transparent" />
      </motion.div>
    </section>
  );
}
