import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-nanterre" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Nanterre : maison, pavillon et rénovation complète | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Nanterre : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Nanterre"
      eyebrow="Nanterre"
      segments={[{ text: "Rénovation à Nanterre :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Nanterre, nous privilégions la maison, le pavillon, la rénovation énergétique, la redistribution et les transformations globales, tout en restant ouverts aux appartements complexes."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
    />
  );
}
