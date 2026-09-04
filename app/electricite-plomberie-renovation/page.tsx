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
      maillage={{
        intro:
          "Électricité et plomberie se décident avant la fermeture des cloisons. Ce qui suit détaille le séquencement, les points de contrôle et les arbitrages de budget.",
        groupes: [
          {
            titre: "Avant de refermer les murs",
            liens: [
              { href: "/second-oeuvre", label: "Interfaces entre lots techniques" },
              { href: "/detail-invisible", label: "Les réseaux qu'on ne reverra plus" },
              { href: "/renovation-salle-de-bain-maison", label: "Salle de bain : étanchéité et évacuations" },
            ],
          },
          {
            titre: "Projets concernés",
            liens: [
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/renovation-complete", label: "Rénovation complète" },
              { href: "/renovation-energetique", label: "Chauffage et ventilation" },
            ],
          },
          {
            titre: "Cadrer le devis",
            liens: [
              { href: "/clinique-du-devis", label: "Lire un devis ligne à ligne" },
              { href: "/garanties-assurances", label: "Garanties et assurances des exécutants" },
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
            ],
          },
        ],
      }}
    />
  );
}
