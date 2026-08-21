"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AVIS } from "../data";
import { WordReveal } from "./word-reveal";
import { Reveal } from "./reveal";

/** Carrousel d'avis — quote XL, navigation fléchée + autoplay. */
export function AvisCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + AVIS.length) % AVIS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => go(1), 7000);
    return () => clearInterval(timer);
  }, [go, index]);

  const avis = AVIS[index];

  return (
    <section className="relative py-24 md:py-36 bg-surface/30 border-y border-line overflow-hidden">
<div aria-hidden className="herringbone-ghost absolute bottom-0 right-0 w-56 h-56 hidden md:block" />
      <div className="container-site flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col items-center text-center gap-5">
          <Reveal variant="fade-blur">
            <span className="eyebrow">Ils nous ont confié leur appartement</span>
          </Reveal>
          <WordReveal
            as="h2"
            segments={[
              { text: "Des chantiers tenus," },
              { text: "des clients sereins.", serif: true, gradient: true },
            ]}
            className="display text-[clamp(2.2rem,5.5vw,4.3rem)] text-ivoire"
          />
        </div>

        <div className="relative max-w-4xl mx-auto w-full min-h-[16rem] md:min-h-[13rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: direction * -60, filter: "blur(8px)" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center gap-7"
            >
              <blockquote className="serif-accent text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.35] text-ivoire/90 text-balance">
                «&nbsp;{avis.texte}&nbsp;»
              </blockquote>
              <figcaption className="flex items-center gap-3">
                <span className="flex gap-1 text-ambre" aria-label="5 étoiles">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.9 6.26 6.87.6-5.2 4.53 1.55 6.72L12 16.54l-6.12 3.57 1.55-6.72-5.2-4.53 6.87-.6L12 2z" />
                    </svg>
                  ))}
                </span>
                <span className="text-muted text-[0.9rem]">
                  {avis.auteur} — <span className="text-ivoire font-medium">{avis.vehicule}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={() => go(-1)}
            aria-label="Avis précédent"
            className="size-11 rounded-full glass-pill flex items-center justify-center text-ivoire transition-all duration-300 hover:scale-110 hover:border-orange/50 active:scale-95"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5m0 0 6 6m-6-6 6-6" />
            </svg>
          </button>
          <div className="flex gap-2">
            {AVIS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                aria-label={`Avis ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-orange" : "w-1.5 bg-line-strong hover:bg-muted"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Avis suivant"
            className="size-11 rounded-full glass-pill flex items-center justify-center text-ivoire transition-all duration-300 hover:scale-110 hover:border-orange/50 active:scale-95"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14m0 0-6-6m6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
