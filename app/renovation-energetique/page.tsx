import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-energetique" },
  title: "Chauffage, isolation et ventilation | ARCHI PILOTE RÉNOVATION",
  description: "Changer le chauffage avant de réduire les besoins peut conduire à un équipement mal dimensionné. L'enveloppe, l'air et les systèmes doivent être étudiés ensemble.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/renovation-energetique"
      eyebrow="Second œuvre"
      segments={[{ text: "Rénovation énergétique :" }, { text: "isolation, ventilation, chauffage dans le bon ordre.", serif: true, gradient: true }]}
      lead="Changer le chauffage avant de réduire les besoins peut conduire à un équipement mal dimensionné. L'enveloppe, l'air et les systèmes doivent être étudiés ensemble."
      photo="chantierIsolation"
      photoAlt="Isolation des combles avant doublage"
      sections={[
        { titre: "Commencer par les déperditions", texte: "Toiture, murs, planchers, menuiseries et fuites d'air — c'est là que se joue la majeure partie des pertes, avant même de parler de chauffage." },
        { titre: "Ventiler après avoir étanchéifié", texte: "Une maison plus étanche doit conserver un renouvellement d'air maîtrisé, sous peine de problèmes d'humidité." },
        { titre: "Dimensionner le chauffage après travaux", texte: "Le besoin final dépend des gains obtenus sur l'enveloppe — dimensionner avant revient à surpayer un équipement mal adapté." },
      ]}
    />
  );
}
