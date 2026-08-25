import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-courbevoie" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation à Courbevoie : appartement, copropriété et structure | ARCHI PILOTE",
  description: "Projet de rénovation à Courbevoie : rénovation complète, structure, maison, appartement et lots techniques selon le bien. Étude et pilotage par ARCHI PILOTE RÉNOVATION.",
};

export default function Page() {
  return (
    <LocalPage
      variant="ville"
      ville="Courbevoie"
      eyebrow="Courbevoie"
      segments={[{ text: "Rénovation à Courbevoie :" }, { text: "un projet cadré avant le chantier.", serif: true, gradient: true }]}
      intro="À Courbevoie, l'angle prioritaire est l'appartement et la copropriété : redistribution, réseaux, structure, accès, voisinage et pilotage d'un chantier multi-lots."
      bulletsTitle="Ce que nous pouvons étudier"
      bullets={["Rénovation complète d'appartement", "Copropriété et démarches", "Ouverture de mur porteur avec professionnels compétents", "Cuisine / salle de bain / réseaux", "Ventilation et rénovation énergétique", "Chantier multi-lots en site occupé"]}
    />
  );
}
