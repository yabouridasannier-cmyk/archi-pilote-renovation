"use client";

import { GALERIE } from "../data";
import { PHOTOS } from "../lib-photos";
import { Reveal } from "./reveal";

/** Galerie masonry des vraies photos de chantier — labels métier. */
export function GalerieGrid() {
  return (
    <section className="relative pb-24 md:pb-36">
      <div className="container-site">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {GALERIE.map((photo, i) => (
            <Reveal key={photo.src} variant="slide-up" delay={(i % 3) * 0.08}>
              <figure className="group relative rounded-2xl overflow-hidden card-e break-inside-avoid">
                <img
                  src={PHOTOS[photo.src as keyof typeof PHOTOS]}
                  alt={photo.label}
                  className={`w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] ${
                    photo.portrait ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
                  <span className="text-white text-[0.95rem] font-medium leading-snug">
                    {photo.label}
                  </span>
                  <span className="glass-pill rounded-full px-3 py-1 font-mono text-[0.6rem] tracking-[0.16em] uppercase text-white/85 shrink-0">
                    {photo.cat}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-mono text-[0.66rem] tracking-[0.2em] uppercase text-muted">
          Nouvelle marque — visuels d&apos;illustration, en attente de vos premiers chantiers
        </p>
      </div>
    </section>
  );
}
