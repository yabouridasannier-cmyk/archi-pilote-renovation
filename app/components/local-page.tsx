import Link from "next/link";
import { PageHeader } from "./page-header";
import { CtaFinal } from "./cta-final";

type Segment = { text: string; serif?: boolean; gradient?: boolean };

const GATING_NOTE =
  "L'agence ne décline pas cette page automatiquement par commune. Une page ville n'est créée qu'avec au moins quatre éléments sur six réunis : potentiel commercial, demande observée, différence de bâti ou de contraintes, preuve ou chantier, contenu local original, capacité opérationnelle à servir la zone.";

const FAQ_LOCALE_TEMPLATE = (ville: string) => [
  { q: `Intervenez-vous à ${ville} ?`, r: "Oui, les projets y sont étudiés selon leur ampleur, le nombre de lots, les contraintes et la disponibilité opérationnelle." },
  { q: "Pouvez-vous intervenir sur un seul lot ?", r: "ARCHI PILOTE RÉNOVATION est surtout pertinent lorsque plusieurs décisions ou intervenants doivent être structurés. Pour un lot isolé, une orientation directe vers une entreprise peut être plus adaptée selon le besoin." },
  { q: "Faut-il vérifier le PLU ou le règlement de copropriété ?", r: "Oui dès que le projet touche à l'extérieur, à la création de surface, à certains éléments communs ou à la structure. La règle applicable se vérifie sur le bien concerné." },
];

export function LocalPage({
  eyebrow,
  segments,
  lead,
  intro,
  bulletsTitle,
  bullets,
  variant,
  ville,
}: {
  eyebrow: string;
  segments: Segment[];
  lead?: string;
  intro: string;
  bulletsTitle: string;
  bullets: string[];
  variant: "departement" | "ville";
  ville?: string;
}) {
  const faq = variant === "ville" && ville ? FAQ_LOCALE_TEMPLATE(ville) : [];

  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader eyebrow={eyebrow} segments={segments} lead={lead} />

      <section className="relative pb-10 md:pb-16">
        <div className="container-site max-w-[42rem] mx-auto">
          <p className="text-ivoire/85 text-[1.02rem] leading-relaxed">{intro}</p>
        </div>
      </section>

      <section className="relative pb-16 md:pb-20">
        <div className="container-site max-w-[42rem] mx-auto">
          <h2 className="display text-2xl text-ivoire normal-case mb-4">{bulletsTitle}</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-ivoire/85 text-[0.95rem]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--c-orange)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0"><path d="M20 6 9 17l-5-5" /></svg>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {variant === "ville" ? (
        <>
          <section className="relative pb-16 md:pb-20">
            <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="display text-2xl text-ivoire normal-case">Notre méthode locale</h2>
                <p className="text-ivoire/85 text-[1rem] leading-relaxed">
                  Une page locale ne doit pas donner l&apos;illusion qu&apos;une commune change les règles techniques d&apos;un
                  chantier. À {ville}, notre méthode reste la même : comprendre le bien, vérifier les contraintes, définir
                  les études nécessaires, rendre le budget lisible, consulter les entreprises et documenter les jalons.
                  Ce qui change réellement est le type de bâti, l&apos;urbanisme, la copropriété, les accès et les
                  conditions du projet ; ces éléments sont vérifiés au cas par cas.
                </p>
              </div>
              <div className="card-e rounded-2xl p-6">
                <h3 className="display text-[1.05rem] text-ivoire normal-case mb-1.5">Preuve locale à ajouter dès qu&apos;elle existe</h3>
                <p className="text-muted text-[0.9rem] leading-relaxed">
                  Dès le premier projet documenté à {ville} ou à proximité immédiate, un bloc « Projet dans le secteur »
                  sera ajouté ici : type de bien, surface approximative, objectif, principale contrainte, décision
                  structurante et lien vers l&apos;étude de cas complète.
                </p>
              </div>
            </div>
          </section>
          <section className="relative pb-20 md:pb-28">
            <div className="container-site max-w-3xl mx-auto flex flex-col gap-4">
              {faq.map((f) => (
                <div key={f.q} className="card-e rounded-2xl p-6">
                  <h3 className="display text-[1.05rem] text-ivoire normal-case mb-1.5">{f.q}</h3>
                  <p className="text-muted text-[0.92rem] leading-relaxed">{f.r}</p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <section className="relative pb-20 md:pb-28">
          <div className="container-site max-w-[42rem] mx-auto">
            <div className="card-e rounded-2xl p-6">
              <h3 className="display text-[1.05rem] text-ivoire normal-case mb-1.5">Comment une future page ville sera autorisée</h3>
              <p className="text-muted text-[0.9rem] leading-relaxed">{GATING_NOTE}</p>
            </div>
          </div>
        </section>
      )}

      <section className="relative pb-16 md:pb-20">
        <div className="container-site max-w-3xl mx-auto flex flex-wrap gap-2.5 justify-center">
          {[
            { href: "/nos-specialites", label: "Nos spécialités" },
            { href: "/notre-methode", label: "Notre méthode" },
            { href: "/devis", label: "Estimer un budget" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="btn btn-ghost !py-2.5 !px-5 text-sm">{l.label}</Link>
          ))}
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
