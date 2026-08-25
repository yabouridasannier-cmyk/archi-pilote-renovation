import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-hauts-de-seine-92" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation dans les Hauts-de-Seine (92) | ARCHI PILOTE",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Hauts-de-Seine. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Hauts-de-Seine (92)"
      segments={[{ text: "Rénovation en Hauts-de-Seine :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Le 92 est le territoire prioritaire d'ARCHI PILOTE RÉNOVATION. Il concentre des projets de maison, d'appartement en copropriété et de transformation complexe : rénovation complète, structure, extension, surélévation, énergie et lots techniques. La proximité avec La Garenne-Colombes permet une forte réactivité sur les communes du premier cercle."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète", "Maison et appartement", "Structure / mur porteur", "Énergie", "Réseaux et second œuvre technique", "Copropriété selon le secteur"]}
    />
  );
}
