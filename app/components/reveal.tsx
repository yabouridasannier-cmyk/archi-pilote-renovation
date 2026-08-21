"use client";

import { motion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  variant?: "slide-up" | "fade-blur" | "fade" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
};

const VARIANTS = {
  "slide-up": {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-blur": {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
} as const;

/** Wrapper reveal au viewport — vocabulaire slide-up / fade-blur / scale. */
export function Reveal({
  children,
  variant = "slide-up",
  delay = 0,
  duration = 0.7,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15%" }}
      variants={VARIANTS[variant]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
