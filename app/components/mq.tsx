import Link from "next/link";

/* ============================================================
   Kit de composants « maquette Lovable » (batir-optimale, 29/08).
   Éditorial calme : crème, Fraunces, encadrés à filet, sections
   sombres ponctuelles. Composants serveur, contenu 100 % dans le
   HTML initial (recette V3).
   ============================================================ */

export function MqKicker({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function MqHero({ kicker, title, lead, children }: { kicker?: string; title: React.ReactNode; lead?: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="pt-36 md:pt-44 pb-12 md:pb-16">
      <div className="container-site max-w-4xl">
        {kicker && <MqKicker>{kicker}</MqKicker>}
        <h1 className="display text-[clamp(2.4rem,5.4vw,4rem)] text-ivoire text-balance mt-4">{title}</h1>
        {lead && <div className="lead mt-6 max-w-2xl">{lead}</div>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </header>
  );
}

export function MqSection({ kicker, title, lead, children, wide }: { kicker?: string; title?: React.ReactNode; lead?: React.ReactNode; children: React.ReactNode; wide?: boolean }) {
  return (
    <section className="py-12 md:py-16 border-t border-line">
      <div className={`container-site ${wide ? "" : "max-w-4xl"}`}>
        {kicker && <MqKicker>{kicker}</MqKicker>}
        {title && <h2 className="display text-[clamp(1.7rem,3.2vw,2.6rem)] text-ivoire text-balance mt-3">{title}</h2>}
        {lead && <p className="lead mt-4 max-w-2xl">{lead}</p>}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function MqProse({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-4 text-[1.02rem] leading-relaxed text-ivoire/85 max-w-2xl [&_strong]:font-semibold [&_strong]:text-ivoire">{children}</div>;
}

export function MqFig({ src, alt, caption, ratio = "aspect-[4/3]" }: { src: string; alt: string; caption?: string; ratio?: string }) {
  return (
    <figure className="border border-line bg-surface rounded-[2px] overflow-hidden">
      <div className={`relative ${ratio} overflow-hidden`}>
        <img src={src} alt={alt} loading="lazy" className="absolute inset-0 size-full object-cover" />
      </div>
      {caption && <figcaption className="px-4 py-3 text-[0.82rem] leading-snug text-muted border-t border-line">{caption}</figcaption>}
    </figure>
  );
}

export function MqStats({ items }: { items: { dt: string; dd: string }[] }) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line border border-line rounded-[2px] overflow-hidden">
      {items.map((s) => (
        <div key={s.dd} className="bg-surface px-5 py-4">
          <dt className="display text-[1.8rem] text-ivoire">{s.dt}</dt>
          <dd className="text-muted text-[0.85rem] leading-snug mt-1">{s.dd}</dd>
        </div>
      ))}
    </dl>
  );
}

export function MqNumbered({ items, cols = 3 }: { items: { title: string; text: string }[]; cols?: 2 | 3 }) {
  return (
    <div className={`grid grid-cols-1 ${cols === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-x-10 gap-y-8`}>
      {items.map((it, i) => (
        <div key={it.title} className="flex flex-col gap-2">
          <span className="text-orange-deep font-semibold text-[0.85rem] tracking-wide">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="display text-[1.15rem] text-ivoire">{it.title}</h3>
          <p className="text-muted text-[0.92rem] leading-relaxed">{it.text}</p>
        </div>
      ))}
    </div>
  );
}

export function MqChecklist({ items, cols = 2 }: { items: string[]; cols?: 1 | 2 }) {
  return (
    <ul className={`grid grid-cols-1 ${cols === 2 ? "md:grid-cols-2" : ""} gap-x-10 gap-y-3`}>
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-[0.95rem] text-ivoire/85 leading-relaxed">
          <span aria-hidden className="mt-[0.55em] size-1.5 shrink-0 bg-orange-deep" />
          {t}
        </li>
      ))}
    </ul>
  );
}

/* Section sombre — « les huit étapes », listes numérotées sur encre. */
export function MqDark({ kicker, title, lead, children, cta }: { kicker?: string; title: React.ReactNode; lead?: React.ReactNode; children: React.ReactNode; cta?: { href: string; label: string } }) {
  return (
    <section className="py-14 md:py-20" style={{ background: "var(--mq-dark)" }}>
      <div className="container-site max-w-4xl">
        {kicker && <p className="eyebrow" style={{ color: "oklch(75% 0.09 74)" }}>{kicker}</p>}
        <h2 className="display text-[clamp(1.7rem,3.2vw,2.6rem)] text-balance mt-3" style={{ color: "var(--mq-primary-fg)" }}>{title}</h2>
        {lead && <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed" style={{ color: "oklch(80% 0.01 80)" }}>{lead}</p>}
        <div className="mt-8">{children}</div>
        {cta && (
          <div className="mt-10">
            <Link href={cta.href} className="btn" style={{ background: "var(--mq-primary-fg)", color: "var(--mq-dark)" }}>{cta.label}</Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function MqDarkSteps({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="flex flex-col divide-y" style={{ borderColor: "oklch(35% 0.012 60)" }}>
      {steps.map((s, i) => (
        <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 py-5" style={{ borderColor: "oklch(35% 0.012 60)" }}>
          <span className="display text-[1.3rem]" style={{ color: "oklch(66% 0.106 74)" }}>{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3 className="font-semibold text-[1.02rem]" style={{ color: "var(--mq-primary-fg)" }}>{s.title}</h3>
            <p className="text-[0.92rem] leading-relaxed mt-1" style={{ color: "oklch(72% 0.012 75)" }}>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function MqQuotes({ items }: { items: { quote: string; author: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {items.map((q) => (
        <blockquote key={q.author} className="border border-line bg-surface rounded-[2px] p-6 flex flex-col gap-4">
          <p className="text-[0.95rem] leading-relaxed text-ivoire/90">« {q.quote} »</p>
          <footer className="text-muted text-[0.82rem] mt-auto">{q.author}</footer>
        </blockquote>
      ))}
    </div>
  );
}

/* FAQ en <details> natifs — réponses présentes dans le HTML initial. */
export function MqFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="flex flex-col border-t border-line">
      {items.map((f) => (
        <details key={f.q} className="group border-b border-line py-1">
          <summary className="flex items-baseline justify-between gap-6 py-4 cursor-pointer list-none text-[1.02rem] font-medium text-ivoire hover:text-orange-deep transition-colors [&::-webkit-details-marker]:hidden">
            {f.q}
            <span aria-hidden className="text-orange-deep shrink-0 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
          </summary>
          <p className="pb-5 pr-10 text-muted text-[0.95rem] leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function MqCta({ title = "Décrivez votre projet, nous le structurons", lead }: { title?: string; lead?: string }) {
  return (
    <section className="py-16 md:py-24" style={{ background: "var(--mq-dark)" }}>
      <div className="container-site max-w-3xl text-center flex flex-col items-center gap-6">
        <h2 className="display text-[clamp(1.9rem,4vw,3rem)] text-balance" style={{ color: "var(--mq-primary-fg)" }}>{title}</h2>
        {lead && <p className="max-w-xl text-[1rem] leading-relaxed" style={{ color: "oklch(78% 0.012 78)" }}>{lead}</p>}
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="btn" style={{ background: "var(--mq-primary-fg)", color: "var(--mq-dark)" }}>Décrire mon projet</Link>
          <Link href="/estimateur-travaux" className="btn" style={{ border: "1px solid oklch(45% 0.014 70)", color: "var(--mq-primary-fg)" }}>Faire estimer un devis</Link>
        </div>
      </div>
    </section>
  );
}

export function MqReadNext({ items }: { items: { href: string; label: string; sub: string }[] }) {
  return (
    <section className="py-12 md:py-16 border-t border-line">
      <div className="container-site max-w-4xl">
        <h2 className="display text-[1.6rem] text-ivoire">À lire ensuite</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {items.map((l) => (
            <Link key={l.href} href={l.href} className="border border-line bg-surface rounded-[2px] p-5 group hover:border-line-strong transition-colors">
              <span className="font-semibold text-ivoire group-hover:text-orange-deep transition-colors text-[0.98rem]">{l.label}</span>
              <p className="text-muted text-[0.85rem] mt-1 leading-snug">{l.sub}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
