import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  title: "Rénovation de maison dans les Yvelines (78) | ARCHI PILOTE",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Yvelines. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Yvelines (78)"
      segments={[{ text: "Rénovation en Yvelines :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Dans les Yvelines, ARCHI PILOTE RÉNOVATION cible en priorité les maisons et projets suffisamment structurants : rénovation complète, extension, surélévation, toiture, charpente, redistribution intérieure et rénovation énergétique. La page met davantage l'accent sur la maison et le pavillon que sur l'appartement."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
    />
  );
}
