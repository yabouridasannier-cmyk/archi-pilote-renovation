import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/expertises-et-cas-par-specialite" },
  title: "Expertises et cas de rénovation | ARCHI PILOTE RÉNOVATION",
  description: "Structure, copropriété, réseaux, énergie, salle de bain, cuisine : les situations techniques et arbitrages que nous documentons projet après projet.",
};

const CATEGORIES = [
  { titre: "Structure", texte: "Ouverture de mur porteur, reprise d'appui, création de trémie, renforcement local, traitement d'une jonction existant / extension. Chaque exemple précisera le contexte, l'étude éventuellement mobilisée, la décision prise et le lot exécutant." },
  { titre: "Appartement en copropriété", texte: "Déplacement d'une cuisine contraint par les évacuations, mur porteur soumis au parcours de copropriété, chantier en site occupé, protection des parties communes, ventilation ou réseaux communs." },
  { titre: "Maison et rénovation complète", texte: "Curage révélant une contrainte inattendue, refonte complète des réseaux, phasage d'une maison occupée, traitement simultané toiture / isolation / ventilation, arbitrage budgétaire entre invisible et finition." },
  { titre: "Salle de bain et étanchéité", texte: "Support à reprendre, pente insuffisante, détail d'étanchéité avant carrelage, ventilation à corriger, choix de système compatible." },
  { titre: "Cuisine", texte: "Plan modifié pour respecter évacuation et alimentation, réservation électrique, intégration de caissons standards avec façades sur mesure, plan de travail soumis à contraintes d'accès." },
  { titre: "Énergie", texte: "Isolation accompagnée d'une réflexion ventilation, ordre des travaux avant changement de chauffage, traitement d'un pont thermique, arbitrage selon le DPE et les contraintes du bâti." },
];

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Expertises et cas"
        segments={[{ text: "Des spécialités prouvées" }, { text: "par les situations rencontrées.", serif: true, gradient: true }]}
        lead="Une liste de services n'est pas une preuve. Cette page devient progressivement l'index des situations réelles documentées : ce qui a été demandé, ce qui a été découvert, ce qui a changé le projet et quels professionnels ont été mobilisés."
      />

      <section className="relative pb-20 md:pb-28">
        <div className="container-site max-w-[42rem] mx-auto flex flex-col gap-6">
          {CATEGORIES.map((c) => (
            <div key={c.titre} className="card-e rounded-none p-6 flex flex-col gap-2">
              <h2 className="display text-[1.15rem] text-ivoire normal-case">{c.titre}</h2>
              <p className="text-muted text-[0.92rem] leading-relaxed">{c.texte}</p>
              <p className="font-mono text-[0.7rem] uppercase tracking-wider text-orange mt-1">Premiers cas documentés à venir</p>
            </div>
          ))}
          <p className="text-center text-muted text-[0.85rem] mt-4">
            Aucun cas n&apos;est inventé pour remplir cette page. Au lancement, mieux vaut six cas authentiques et courts
            que vingt récits génériques — les exemples ci-dessus restent des catégories en attente de preuve réelle.
          </p>
        </div>
      </section>

      <CtaFinal />
    </main>
  );
}
