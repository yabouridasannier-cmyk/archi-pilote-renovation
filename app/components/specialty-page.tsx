import Link from "next/link";
import { PageHeader } from "./page-header";
import { CtaFinal } from "./cta-final";
import { PHOTOS, srcSetOf } from "../lib-photos";

type Segment = { text: string; serif?: boolean; gradient?: boolean };
type Section = { titre: string; texte: string };

/**
 * Gabarit commun aux pages de spécialité (gros œuvre, second œuvre, ressources).
 * FAQ et maillage interne identiques sur toutes ces pages — cf. brief SEO :
 * "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ? Non, l'entreprise spécialisée réalise et
 * facture le lot" doit rester visible et cohérent partout, pas réécrit page à page.
 */
export function SpecialtyPage({
  eyebrow,
  segments,
  lead,
  sections,
  photo,
  photoAlt,
  faqExtra,
  slug,
}: {
  eyebrow: string;
  segments: Segment[];
  lead: string;
  sections: Section[];
  photo: keyof typeof PHOTOS;
  photoAlt: string;
  faqExtra?: { q: string; r: string }[];
  /** Chemin de la page (ex. "/ouverture-mur-porteur") — génère Service + BreadcrumbList. */
  slug?: string;
}) {
  const pageTitle = segments.map((s) => s.text).join(" ");
  const jsonLd = slug && [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: pageTitle,
      description: lead,
      areaServed: ["Hauts-de-Seine", "Yvelines", "Essonne", "Val-d'Oise", "Seine-et-Marne", "Île-de-France"],
      provider: { "@type": "ProfessionalService", name: "ARCHI PILOTE RÉNOVATION" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://archipiloterenovation.fr/" },
        { "@type": "ListItem", position: 2, name: eyebrow, item: "https://archipiloterenovation.fr/services" },
        { "@type": "ListItem", position: 3, name: pageTitle, item: `https://archipiloterenovation.fr${slug}` },
      ],
    },
  ];

  const FAQ_COMMUNE = [
    { q: "ARCHI PILOTE RÉNOVATION exécute-t-il ce lot ?", r: "Non. La marque structure et suit le projet ; l'entreprise partenaire spécialisée réalise et facture le lot, sous sa propre responsabilité." },
    { q: "Une visite technique est-elle nécessaire ?", r: "Oui, pour tout chiffrage sérieux : l'existant et l'accès changent fortement les hypothèses de chantier." },
    { q: "Les prix affichés sont-ils garantis ?", r: "Non. Les fourchettes éventuellement publiées sont datées et indicatives ; le prix contractuel reste celui du devis remis par l'entreprise." },
    { q: "Intervenez-vous depuis La Garenne-Colombes ?", r: "Oui, avec une zone d'intervention plus large en Île-de-France selon la nature du projet." },
    ...(faqExtra ?? []),
  ];

  return (
    <main className="relative z-10 bg-carbone">
      {jsonLd && jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <PageHeader eyebrow={eyebrow} segments={segments} lead={lead} />

      {slug && (
        <nav aria-label="Fil d'Ariane" className="container-site max-w-4xl mx-auto -mt-6 mb-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted">
            <li><Link href="/" className="hover:text-orange transition-colors">Accueil</Link></li>
            <li aria-hidden>›</li>
            <li><Link href="/services" className="hover:text-orange transition-colors">{eyebrow}</Link></li>
            <li aria-hidden>›</li>
            <li className="text-ivoire/70">{pageTitle}</li>
          </ol>
        </nav>
      )}

      <section className="relative pb-10">
        <div className="container-site max-w-4xl mx-auto">
          <figure>
            <div className="relative aspect-[16/8] rounded-none overflow-hidden card-e">
              <img src={PHOTOS[photo]} srcSet={srcSetOf(PHOTOS[photo])} sizes="(min-width: 1024px) 896px, 100vw" alt={photoAlt} loading="lazy" className="absolute inset-0 size-full object-cover" />
            </div>
            <figcaption className="mt-2 font-mono text-[0.66rem] tracking-[0.12em] uppercase text-muted">
              {photoAlt} — Illustration, non contractuelle
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-7 text-ivoire/85 text-[1.02rem] leading-relaxed">
          {sections.map((s) => (
            <div key={s.titre} className="flex flex-col gap-2">
              <h2 className="display text-2xl text-ivoire normal-case">{s.titre}</h2>
              <p>{s.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative pb-16 md:pb-24">
        <div className="container-site max-w-3xl mx-auto flex flex-col gap-4">
          {FAQ_COMMUNE.map((f) => (
            <div key={f.q} className="card-e rounded-none p-6">
              <h3 className="display text-[1.05rem] text-ivoire normal-case mb-1.5">{f.q}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{f.r}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-3xl mx-auto flex flex-wrap gap-2.5 justify-center">
          {[
            { href: "/notre-methode", label: "Notre méthode" },
            { href: "/modele-economique-transparence", label: "Notre modèle" },
            { href: "/garanties-assurances", label: "Garanties et assurances" },
            { href: "/devis", label: "Estimer un budget" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="btn btn-ghost !py-2.5 !px-5 text-sm">
              {l.label}
            </Link>
          ))}
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
