import Link from "next/link";
import { ARTICLES } from "../data";
import { PHOTOS } from "../lib-photos";

/** Grille magazine des articles — carte photo + catégorie + titre + extrait. */
export function BlogGrid() {
  return (
    <section className="py-12 md:py-16">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="group border border-line bg-surface rounded-[2px] overflow-hidden flex flex-col h-full block">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={PHOTOS[a.photo as keyof typeof PHOTOS]} alt={a.titre} className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-black/45 border border-white/25 px-3 py-1 font-mono text-[0.62rem] tracking-[0.14em] uppercase text-white/90">{a.categorie}</span>
                </div>
                <div className="flex flex-col gap-2.5 p-6 flex-1">
                  <span className="font-mono text-[0.7rem] text-muted">{a.date}</span>
                  <h3 className="display text-[1.35rem] leading-tight text-ivoire normal-case group-hover:text-orange transition-colors">{a.titre}</h3>
                  <p className="text-muted text-[0.88rem] leading-relaxed line-clamp-3">{a.excerpt}</p>
                  <span className="mt-auto pt-2 text-orange-deep text-[0.85rem] font-medium inline-flex items-center gap-1.5">
                    Lire l&apos;article
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                </div>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
