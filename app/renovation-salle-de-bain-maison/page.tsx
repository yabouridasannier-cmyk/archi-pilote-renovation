import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  title: "Rénovation de salle de bain | ARCHI PILOTE",
  description: "Une salle de bain durable dépend du support, de l'étanchéité, des pentes, de la ventilation et des réseaux plus que du style du carrelage.",
};

export default function Page() {
  return (
    <SpecialtyPage
      eyebrow="Second œuvre"
      segments={[{ text: "Salle de bain :" }, { text: "l'étanchéité avant le décor.", serif: true, gradient: true }]}
      lead="Une salle de bain durable dépend du support, de l'étanchéité, des pentes, de la ventilation et des réseaux plus que du style du carrelage."
      photo="salleBainBeton"
      photoAlt="Salle de bain en cours de rénovation, étanchéité sous carrelage"
      sections={[
        { titre: "Étanchéité sous carrelage", texte: "Prescrire un système adapté et documenter sa mise en œuvre — c'est ce qui décide de la durabilité, bien avant le choix du carrelage." },
        { titre: "Ventilation", texte: "Une belle salle d'eau mal ventilée se dégrade vite, quels que soient les matériaux choisis." },
        { titre: "Joints et entretien", texte: "L'époxy peut être pertinent dans certaines zones, mais ne doit jamais être présenté comme une promesse absolue de durée ou d'absence totale de désordre." },
      ]}
    />
  );
}
