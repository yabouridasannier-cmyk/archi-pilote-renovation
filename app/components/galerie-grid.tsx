"use client";

import { useState } from "react";
import { GALERIE, GALERIE_CATEGORIES, type Categorie } from "../data";
import { PHOTOS } from "../lib-photos";
import { Reveal } from "./reveal";

/** Galerie masonry filtrable par catégorie — structure inspirée d'un site de référence du secteur. */
export function GalerieGrid() {
  const [filtre, setFiltre] = useState<Categorie | "tout">("tout");
  const items = filtre === "tout" ? GALERIE : GALERIE.filter((p) => p.cat === filtre);

  return (
    <section className="relative pb-24 md:pb-36">
      <div className="container-site">
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          <button
            onClick={() => setFiltre("tout")}
            className={`px-5 py-2.5 text-[0.88rem] font-medium border transition-all duration-300 cursor-pointer ${
              filtre === "tout" ? "border-orange bg-orange/15 text-orange" : "border-line-strong text-muted hover:text-ivoire hover:border-line-strong"
            }`}
          >
            Tout <span className="font-mono text-[0.72rem] opacity-60">({GALERIE.length})</span>
          </button>
          {GALERIE_CATEGORIES.map((c) => {
            const n = GALERIE.filter((p) => p.cat === c.id).length;
            return (
              <button
                key={c.id}
                onClick={() => setFiltre(c.id)}
                className={`px-5 py-2.5 text-[0.88rem] font-medium border transition-all duration-300 cursor-pointer ${
                  filtre === c.id ? "border-orange bg-orange/15 text-orange" : "border-line-strong text-muted hover:text-ivoire hover:border-line-strong"
                }`}
              >
                {c.label} <span className="font-mono text-[0.72rem] opacity-60">({n})</span>
              </button>
            );
          })}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {items.map((photo, i) => (
            <Reveal key={photo.src} variant="slide-up" delay={(i % 3) * 0.08}>
              <figure className="group relative rounded-none overflow-hidden card-e break-inside-avoid">
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
                  <span className="text-white text-[0.95rem] font-medium leading-snug">{photo.label}</span>
                  <span className="glass-pill px-3 py-1 font-mono text-[0.6rem] tracking-[0.16em] uppercase text-white/85 shrink-0">
                    {GALERIE_CATEGORIES.find((c) => c.id === photo.cat)?.label ?? photo.cat}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {items.length === 0 && <p className="text-center text-muted py-12">Aucune photo dans cette catégorie pour l&apos;instant.</p>}

        <p className="mt-8 text-center font-mono text-[0.66rem] tracking-[0.2em] uppercase text-muted">
          Nouvelle marque — visuels d&apos;illustration, en attente de vos premiers chantiers
        </p>
      </div>
    </section>
  );
}
