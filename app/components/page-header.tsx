"use client";

import { WordReveal } from "./word-reveal";
import { motion } from "motion/react";

type Segment = { text: string; serif?: boolean; gradient?: boolean };

type PageHeaderProps = {
  eyebrow: string;
  segments: Segment[];
  lead?: string;
};

/** En-tête de page interne — eyebrow + titre géant mot-par-mot + lead. */
export function PageHeader({ eyebrow, segments, lead }: PageHeaderProps) {
  return (
    <header className="relative pt-40 md:pt-48 pb-16 md:pb-20 overflow-hidden">
      {/* Halo discret */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[50rem] h-[26rem] rounded-full opacity-[0.09] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(closest-side, #a9762c, transparent)" }}
      />
      <div className="container-site relative flex flex-col items-center text-center gap-6">
        <motion.span
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.span>
        <WordReveal
          as="h1"
          immediate
          delay={0.15}
          stagger={0.08}
          segments={segments}
          className="display text-[clamp(2.6rem,7vw,5.6rem)] text-ivoire text-balance max-w-5xl"
        />
        {lead && (
          <motion.p
            initial={{ opacity: 0, filter: "blur(8px)", y: 16 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="lead max-w-2xl"
          >
            {lead}
          </motion.p>
        )}
      </div>
    </header>
  );
}
