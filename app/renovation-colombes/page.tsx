import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-colombes" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Colombes : maison, extension et appartement | ARCHI PILOTE RÉNOVATION",
  description: "Projet de rénovation à Colombes : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Colombes"
      eyebrow="Colombes"
      segments={[{ text: "Rénovation à Colombes :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Colombes, nous privilégions les maisons, pavillons, transformations complètes et projets combinant structure, énergie et second œuvre, tout en conservant une porte d'entrée pour les appartements en copropriété."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
    />
  );
}
