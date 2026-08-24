import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Architecte DPLG et bureau d'études structure — nos partenaires | ARCHI PILOTE",
  description: "Nos partenaires experts en Île-de-France : architecte DPLG et bureau d'études structure, mobilisés dès qu'un projet touche à la descente de charges.",
};

const PARTENAIRES = [
  { role: "Architecte DPLG partenaire", texte: "Intervient sur les projets de surélévation, d'extension ou touchant à l'aspect extérieur — obligatoire au-delà de 150 m² de surface de plancher pour un particulier, souvent décisif pour un dossier d'urbanisme accepté du premier coup." },
  { role: "Bureau d'études structure partenaire", texte: "Définit l'hypothèse de reprise de charges avant toute ouverture de mur porteur ou reprise de plancher. Sans cette étude, les devis d'entreprises ne sont pas comparables entre eux." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Nos partenaires"
        segments={[{ text: "Un architecte, un ingénieur," }, { text: "dès que la structure l'exige.", serif: true, gradient: true }]}
        lead="ARCHI PILOTE ne se substitue jamais à ces expertises réglementées — nous mobilisons les bons partenaires au bon moment du projet."
      />
      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-5">
          {PARTENAIRES.map((p) => (
            <div key={p.role} className="card-e rounded-2xl p-7 flex flex-col gap-2">
              <h2 className="display text-[1.2rem] text-ivoire normal-case">{p.role}</h2>
              <p className="text-muted text-[0.95rem] leading-relaxed">{p.texte}</p>
            </div>
          ))}
          <p className="text-muted text-[0.85rem] leading-relaxed mt-2">
            Les entreprises d&apos;exécution sont choisies par lot, présentées au client, qui signe et contracte
            directement avec elles. ARCHI PILOTE tient l&apos;interface entre tous ces intervenants.
          </p>
        </div>
      </section>
      <CtaFinal />
    </main>
  );
}
