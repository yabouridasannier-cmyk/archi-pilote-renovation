import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  title: "Rénovation à Asnières-sur-Seine : appartement et maison | ARCHI PILOTE",
  description: "Projet de rénovation à Asnières-sur-Seine : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Asnières-sur-Seine"
      eyebrow="Asnières-sur-Seine"
      segments={[{ text: "Rénovation à Asnières-sur-Seine :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="Asnières combine appartements, petits collectifs et maisons. Nous orientons vers copropriété, rénovation complète, structure et projets de maison selon le bien."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
    />
  );
}
