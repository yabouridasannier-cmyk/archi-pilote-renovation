import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-rueil-malmaison" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Rueil-Malmaison : maison et rénovation complète | ARCHI PILOTE",
  description: "Projet de rénovation à Rueil-Malmaison : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Rueil-Malmaison"
      eyebrow="Rueil-Malmaison"
      segments={[{ text: "Rénovation à Rueil-Malmaison :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Rueil-Malmaison, l'angle prioritaire est la maison et les projets de grande ampleur : rénovation complète, extension, toiture, énergie, redistribution et montée en gamme des finitions."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète", "Maison ou appartement selon le bien", "Structure et ouvertures", "Réseaux techniques", "Énergie", "Extension / surélévation si pertinent"]}
    />
  );
}
