"use client";

import { motion } from "motion/react";
import type { JSX } from "react";

type Segment = {
  text: string;
  serif?: boolean;
  gradient?: boolean;
};

type WordRevealProps = {
  segments: Segment[];
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  /** true = anime au mount (hero) ; false = anime au viewport */
  immediate?: boolean;
  delay?: number;
  stagger?: number;
};

const EASE = [0.25, 0.1, 0.25, 1] as const;

/**
 * Titre révélé mot par mot — translation verticale, sans flou.
 * Les segments peuvent être en serif italique et/ou en dégradé or->orange.
 */
export function WordReveal({
  segments,
  as = "h2",
  className = "",
  immediate = false,
  delay = 0,
  stagger = 0.08,
}: WordRevealProps) {
  const Tag = motion[as as "h2"];

  const words = segments.flatMap((seg, si) =>
    seg.text.split(" ").map((word) => ({ word, seg, key: `${si}-${word}` }))
  );

  return (
    <Tag
      className={className}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: { once: true, margin: "-18%" } })}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map(({ word, seg }, i) => (
        <span key={i} className="inline">
          {i > 0 && " "}
          <motion.span
            className={[
              "inline-block will-change-transform",
              seg.serif ? "serif-accent" : "",
              seg.gradient ? "text-gradient" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            variants={{
              hidden: { opacity: 0, y: "60%" },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
