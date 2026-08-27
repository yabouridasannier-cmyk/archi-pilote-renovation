import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-cuisine-maison" },
  title: "Rénovation de cuisine | ARCHI PILOTE RÉNOVATION",
  description: "La cuisine combine ergonomie, électricité, plomberie, ventilation, menuiserie et électroménager. Les cotes finales arrivent après validation des supports.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/renovation-cuisine-maison"
      eyebrow="Second œuvre"
      segments={[{ text: "Cuisine :" }, { text: "décider les réseaux avant les façades.", serif: true, gradient: true }]}
      lead="La cuisine combine ergonomie, électricité, plomberie, ventilation, menuiserie et électroménager. Les cotes finales arrivent après validation des supports."
      photo="chCuisineSauge"
      photoAlt="Cuisine vert sauge posée, crédence en pierre verte — chantier réel des équipes partenaires"
      sections={[
        { titre: "Plan fonctionnel", texte: "Circulations, hauteurs, points d'eau, cuisson et éclairage — l'implantation se décide avant le style." },
        { titre: "Standard et sur-mesure", texte: "Des caissons standards peuvent être habillés de façades spécifiques pour arbitrer entre budget et rendu, sans sacrifier l'un pour l'autre." },
        { titre: "Commandes longues", texte: "Plan de travail, façades, électroménager et menuiseries doivent être intégrés au planning tôt — ce sont souvent les délais les plus longs du chantier." },
      ]}
    />
  );
}
