import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "../../data";
import { PHOTOS } from "../../lib-photos";
import { Reveal } from "../../components/reveal";
import { WordReveal } from "../../components/word-reveal";
import { CtaFinal } from "../../components/cta-final";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return {};
  return { title: `${article.titre} — ARCHI PILOTE RÉNOVATION`, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);
  if (!article) return notFound();

  const autres = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <main className="relative z-10 bg-carbone">
      <header className="relative pt-40 md:pt-48 pb-14 overflow-hidden">
        <div className="container-site relative flex flex-col items-center text-center gap-5">
          <Reveal variant="fade-blur">
            <Link href="/blog" className="eyebrow inline-flex items-center gap-2 hover:opacity-70 transition-opacity">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5m0 0 6 6m-6-6 6-6" /></svg>
              {article.categorie}
            </Link>
          </Reveal>
          <WordReveal as="h1" immediate delay={0.1} stagger={0.06} segments={[{ text: article.titre }]} className="display text-[clamp(2rem,5vw,3.6rem)] text-ivoire text-balance max-w-4xl" />
          <Reveal variant="slide-up" delay={0.3}><span className="font-mono text-[0.78rem] text-muted">{article.date}</span></Reveal>
        </div>
      </header>

      <Reveal variant="scale" className="container-site mb-14 md:mb-20">
        <div className="relative aspect-[16/8] rounded-3xl overflow-hidden card-e">
          <img src={PHOTOS[article.photo as keyof typeof PHOTOS]} alt={article.titre} className="absolute inset-0 size-full object-cover" />
        </div>
      </Reveal>

      <article className="container-site pb-20 md:pb-28">
        <div className="max-w-[42rem] mx-auto flex flex-col gap-6">
          {article.corps.map((p, i) => (
            <Reveal key={i} variant="slide-up" delay={i * 0.05}>
              <p className="text-ivoire/85 text-[1.05rem] leading-[1.75]">{p}</p>
            </Reveal>
          ))}
          <Reveal variant="slide-up" delay={0.2} className="mt-4">
            <Link href="/devis" className="btn btn-primary w-fit">
              Estimer mon projet
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </Reveal>
        </div>
      </article>

      {autres.length > 0 && (
        <section className="relative pb-24 md:pb-36 border-t border-line pt-16">
          <div className="container-site flex flex-col gap-8">
            <span className="eyebrow text-center">À lire aussi</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full">
              {autres.map((a) => (
                <Link key={a.slug} href={`/blog/${a.slug}`} className="group card-e rounded-2xl overflow-hidden flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img src={PHOTOS[a.photo as keyof typeof PHOTOS]} alt={a.titre} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col gap-1.5">
                    <span className="font-mono text-[0.66rem] text-orange uppercase tracking-[0.1em]">{a.categorie}</span>
                    <h3 className="display text-[1.1rem] text-ivoire normal-case group-hover:text-orange transition-colors leading-tight">{a.titre}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaFinal />
    </main>
  );
}
