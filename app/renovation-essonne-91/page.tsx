import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-essonne-91" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation complète dans l'Essonne (91) | ARCHI PILOTE",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Essonne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Essonne (91)"
      segments={[{ text: "Rénovation en Essonne :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="Dans l'Essonne, ARCHI PILOTE RÉNOVATION intervient de manière sélective sur les rénovations complètes et projets à forte valeur de pilotage, notamment lorsqu'ils combinent plusieurs lots, performance énergétique, structure ou transformation importante."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
    />
  );
}
