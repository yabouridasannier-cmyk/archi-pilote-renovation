import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Glossaire de la rénovation de maison | ARCHI PILOTE RÉNOVATION",
  description: "IPN, étude structure, doublage, ragréage, VMC, réception, réserve : des définitions courtes pour décoder vos devis.",
};

const TERMES = [
  { mot: "IPN / HEA", def: "Profilés métalliques utilisés pour reprendre les charges après l'ouverture d'un mur porteur. Le choix du profil dépend de l'étude structure, pas d'une règle standard." },
  { mot: "Étude structure", def: "Analyse réalisée par un bureau d'études pour définir la méthode de reprise de charges avant tout chiffrage d'ouverture ou de surélévation." },
  { mot: "Doublage", def: "Habillage intérieur d'un mur (isolant + parement) pour améliorer l'isolation thermique ou phonique sans toucher au gros œuvre." },
  { mot: "Ragréage", def: "Enduit appliqué sur une chape pour en corriger la planéité avant la pose d'un revêtement de sol." },
  { mot: "VMC", def: "Ventilation Mécanique Contrôlée — simple ou double flux — qui renouvelle l'air d'un logement, indispensable dès qu'on améliore l'étanchéité à l'air." },
  { mot: "Réception", def: "Acte par lequel le maître d'ouvrage (vous) accepte les travaux, avec ou sans réserves. C'est le point de départ des garanties légales." },
  { mot: "Réserve", def: "Défaut signalé lors de la réception, que l'entreprise s'engage à corriger dans un délai déterminé." },
  { mot: "Déclaration préalable", def: "Autorisation d'urbanisme simplifiée, requise pour les extensions de faible surface ou les modifications d'aspect extérieur." },
  { mot: "Permis de construire", def: "Autorisation d'urbanisme requise au-delà de certains seuils de surface créée, ou selon la zone (PLU, secteur protégé)." },
  { mot: "Étaiement", def: "Structure provisoire installée pour soutenir un ouvrage pendant les travaux, notamment lors de l'ouverture d'un mur porteur." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Glossaire"
        segments={[{ text: "Comprendre" }, { text: "avant de signer.", serif: true, gradient: true }]}
        lead="Des définitions courtes, reliées à nos pages de fond, pour décoder un devis d'entreprise sans jargon."
      />
      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TERMES.map((t) => (
            <div key={t.mot} className="card-e rounded-2xl p-6">
              <h3 className="display text-[1.05rem] text-orange normal-case mb-1.5">{t.mot}</h3>
              <p className="text-muted text-[0.9rem] leading-relaxed">{t.def}</p>
            </div>
          ))}
        </div>
        <p className="text-muted text-[0.8rem] font-mono uppercase tracking-wider text-center mt-8">Page mise à jour — août 2026</p>
      </section>
      <CtaFinal />
    </main>
  );
}
