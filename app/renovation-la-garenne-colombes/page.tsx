import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-la-garenne-colombes" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à La Garenne-Colombes : pilotage et travaux complexes | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à La Garenne-Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="La Garenne-Colombes"
      eyebrow="La Garenne-Colombes"
      segments={[{ text: "Rénovation à La Garenne-Colombes :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="Base locale d'ARCHI PILOTE RÉNOVATION, La Garenne-Colombes est notre page locale la plus solide : proximité, capacité de passage rapide, mix appartement / maison de ville et connaissance opérationnelle du secteur."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
    />
  );
}
