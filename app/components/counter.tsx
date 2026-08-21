"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/** Chiffre animé au scroll — ease-out cubique, démarre au viewport. */
export function Counter({ value, prefix = "", suffix = "", duration = 1.6, className = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px -8% 0px" });
  const [display, setDisplay] = useState(0);

  // Filet de sécurité : si l'élément est déjà passé au-dessus du viewport
  // (scroll rapide, restauration de position), on affiche la valeur finale.
  useEffect(() => {
    const check = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect && rect.bottom < 0) setDisplay(value);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, [value]);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
