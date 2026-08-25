import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Garanties travaux : décennale, biennale, parfait achèvement — ARCHI PILOTE RÉNOVATION",
  description: "Qui garantit quoi, pendant combien de temps, et comment vérifier une attestation d'assurance décennale avant le début des travaux.",
};

const GARANTIES = [
  { titre: "Garantie décennale", duree: "10 ans", texte: "Couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination (structure, toiture, étanchéité). Portée par l'entreprise qui a exécuté le lot concerné." },
  { titre: "Garantie biennale", duree: "2 ans", texte: "Couvre le bon fonctionnement des équipements dissociables du bâti : volets, chauffage, VMC, robinetterie. Portée par l'entreprise qui les a installés." },
  { titre: "Garantie de parfait achèvement", duree: "1 an", texte: "Couvre toute malfaçon signalée dans l'année suivant la réception, y compris celles non visibles le jour de la réception. Portée par chaque entreprise pour ses propres travaux." },
];

export default function GarantiesPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Garanties et assurances"
        segments={[{ text: "Qui garantit les travaux," }, { text: "et pendant combien de temps.", serif: true, gradient: true }]}
        lead="Chaque entreprise partenaire porte les assurances correspondant aux activités qu'elle exécute. Les attestations sont vérifiées et remises avant tout démarrage de chantier."
      />

      <section className="relative pb-16 md:pb-24">
        <div className="container-site grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {GARANTIES.map((g) => (
            <div key={g.titre} className="card-e rounded-none p-7 flex flex-col gap-2">
              <span className="display text-2xl text-gradient normal-case">{g.duree}</span>
              <h3 className="display text-[1.15rem] text-ivoire normal-case">{g.titre}</h3>
              <p className="text-muted text-[0.9rem] leading-relaxed">{g.texte}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-6 text-ivoire/85 text-[1.02rem] leading-relaxed">
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Qui porte quoi</h2>
            <p>
              ARCHI PILOTE RÉNOVATION ne porte aucune de ces garanties : nous n&apos;exécutons aucun lot. Chaque entreprise
              partenaire porte les assurances correspondant aux activités qu&apos;elle exécute chez vous, et reste
              votre interlocuteur direct en cas de malfaçon sur son lot.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">Ce que nous vérifions avant le premier coup de marteau</h2>
            <p>
              Avant tout démarrage, chaque entreprise remet son attestation d&apos;assurance décennale en cours de
              validité. Nous vous indiquons quoi y vérifier : l&apos;activité réellement couverte, la période de
              validité, et l&apos;identité de l&apos;assuré — trois points qui, en cas de sinistre, décident si la
              garantie s&apos;applique vraiment.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="display text-2xl text-ivoire normal-case">En cas de malfaçon</h2>
            <p>
              Vous êtes en relation contractuelle directe avec l&apos;entreprise qui a exécuté le lot concerné, et
              c&apos;est son assurance qui joue. Nous vous accompagnons dans les constats, les échanges écrits et le
              suivi des reprises — cet accompagnement ne se substitue à aucune assurance.
            </p>
          </div>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
