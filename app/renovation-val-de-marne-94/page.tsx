import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-val-de-marne-94" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation dans le Val-de-Marne (94) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Val-de-Marne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Val-de-Marne (94)"
      segments={[{ text: "Rénovation en Val-de-Marne :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Le Val-de-Marne offre un mix pertinent de maisons, appartements et petites copropriétés. ARCHI PILOTE RÉNOVATION y étudie les rénovations complètes, les projets structurels, les extensions, les transformations énergétiques et les appartements techniquement complexes."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète", "Maison et appartement", "Structure / mur porteur", "Énergie", "Réseaux et second œuvre technique", "Copropriété selon le secteur"]}
    />
  );
}
