import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/electricite-plomberie-renovation" },
  title: "Électricité et plomberie en rénovation | ARCHI PILOTE RÉNOVATION",
  description: "Les réseaux cachés sont difficiles à corriger après doublages, carrelage et peinture. Ils doivent être documentés avant fermeture.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/electricite-plomberie-renovation"
      eyebrow="Second œuvre"
      segments={[{ text: "Électricité et plomberie :" }, { text: "refaire les réseaux avant de fermer.", serif: true, gradient: true }]}
      lead="Les réseaux cachés sont difficiles à corriger après doublages, carrelage et peinture. Ils doivent être documentés avant fermeture."
      photo="chPlacardTableauElectriqueIntegre"
      photoAlt="Tableau électrique et compteur intégrés dans un placard sur mesure, chantier réel"
      sections={[
        { titre: "Diagnostic initial", texte: "Tableau, circuits, mise à la terre, distribution d'eau, évacuations, pression et production d'eau chaude — l'état réel avant toute décision." },
        { titre: "Plans de réseaux", texte: "Les plans évitent les décisions improvisées sur chantier, où une erreur coûte cher à corriger une fois les murs fermés." },
        { titre: "Photos avant fermeture", texte: "Une bibliothèque de photos datées, prise avant chaque fermeture de cloison, facilite toute intervention future — sur ce chantier comme sur les suivants." },
      ]}
    />
  );
}
