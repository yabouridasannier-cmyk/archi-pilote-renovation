"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Recalcule les positions des ScrollTrigger une fois que tout est chargé
    // (images, fonts) — évite que des reveals restent invisibles si le layout
    // bouge après la création des triggers.
    const refresh = () => ScrollTrigger.refresh();
    const timers = [setTimeout(refresh, 400), setTimeout(refresh, 1200)];
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);
    document.querySelectorAll("img").forEach((img) => {
      if (!img.complete) img.addEventListener("load", refresh, { once: true });
    });

    return () => {
      gsap.ticker.remove(raf);
      window.removeEventListener("load", refresh);
      timers.forEach(clearTimeout);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
