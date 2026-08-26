import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-seine-saint-denis-93" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation complexe en Seine-Saint-Denis (93) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Seine-Saint-Denis. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Seine-Saint-Denis (93)"
      segments={[{ text: "Rénovation en Seine-Saint-Denis :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="En Seine-Saint-Denis, la stratégie est sélective : maisons et pavillons à l'est, maisons de ville, appartements ou projets de restructuration plus proches de Paris. Les pages locales ne s'ouvrent que lorsqu'un vrai potentiel et une vraie matière locale existent."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète", "Maison et appartement", "Structure / mur porteur", "Énergie", "Réseaux et second œuvre technique", "Copropriété selon le secteur"]}
    />
  );
}
