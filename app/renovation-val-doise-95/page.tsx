import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  title: "Rénovation de maison dans le Val-d'Oise (95) | ARCHI PILOTE",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Val-d'Oise. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Val-d'Oise (95)"
      segments={[{ text: "Rénovation en Val-d'Oise :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Dans le Val-d'Oise, le positionnement privilégie les maisons, pavillons et projets de rénovation globale : enveloppe, toiture, énergie, extension, redistribution et lots techniques."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
    />
  );
}
