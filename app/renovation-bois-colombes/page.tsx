import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-bois-colombes" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Bois-Colombes : maison et projets complexes | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Bois-Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Bois-Colombes"
      eyebrow="Bois-Colombes"
      segments={[{ text: "Rénovation à Bois-Colombes :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Bois-Colombes, nous visons principalement les maisons de ville, pavillons et rénovations où l'existant impose une lecture fine de la structure, des réseaux et de l'enveloppe."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
    />
  );
}
