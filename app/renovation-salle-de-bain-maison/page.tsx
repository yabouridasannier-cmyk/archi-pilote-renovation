import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-salle-de-bain-maison" },
  title: "Rénovation de salle de bain | ARCHI PILOTE RÉNOVATION",
  description: "Une salle de bain durable dépend du support, de l'étanchéité, des pentes, de la ventilation et des réseaux plus que du style du carrelage.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/renovation-salle-de-bain-maison"
      eyebrow="Second œuvre"
      segments={[{ text: "Salle de bain :" }, { text: "l'étanchéité avant le décor.", serif: true, gradient: true }]}
      lead="Une salle de bain durable dépend du support, de l'étanchéité, des pentes, de la ventilation et des réseaux plus que du style du carrelage."
      photo="salleBainBeton"
      photoAlt="Douche carreaux de ciment et vasque en pierre, en fin de chantier — chantier réel des équipes partenaires"
      sections={[
        { titre: "Étanchéité sous carrelage", texte: "Prescrire un système adapté et documenter sa mise en œuvre — c'est ce qui décide de la durabilité, bien avant le choix du carrelage." },
        { titre: "Ventilation", texte: "Une belle salle d'eau mal ventilée se dégrade vite, quels que soient les matériaux choisis." },
        { titre: "Joints et entretien", texte: "L'époxy peut être pertinent dans certaines zones, mais ne doit jamais être présenté comme une promesse absolue de durée ou d'absence totale de désordre." },
      ]}
      maillage={{
        intro:
          "Une salle de bain se juge sur ce qui ne se voit plus : étanchéité, pentes, ventilation. Ces pages reprennent chacun de ces points.",
        groupes: [
          {
            titre: "L'ouvrage caché",
            liens: [
              { href: "/detail-invisible", label: "Étanchéité et réseaux avant carrelage" },
              { href: "/electricite-plomberie-renovation", label: "Alimentation et évacuations" },
              { href: "/renovation-energetique", label: "Ventilation et condensation" },
            ],
          },
          {
            titre: "Matières et finitions",
            liens: [
              { href: "/expertise-carrelage-zellige-travertin", label: "Carrelage, zellige et travertin" },
              { href: "/sols-finitions-renovation", label: "Sols et finitions" },
              { href: "/menuiserie-agencement-sur-mesure", label: "Meuble vasque sur mesure" },
            ],
          },
          {
            titre: "Cadrer le projet",
            liens: [
              { href: "/clinique-du-devis", label: "Vérifier le devis avant de signer" },
              { href: "/renovation-appartement", label: "Salle de bain en appartement" },
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
            ],
          },
        ],
      }}
    />
  );
}
