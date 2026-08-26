import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-seine-et-marne-77" },
  // Doctrine V3 : page locale sans preuve locale reelle = noindex jusqu'a preuve documentee.
  robots: { index: false, follow: true },
  title: "Rénovation de maison en Seine-et-Marne (77) | ARCHI PILOTE RÉNOVATION",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Seine-et-Marne. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Seine-et-Marne (77)"
      segments={[{ text: "Rénovation en Seine-et-Marne :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="En Seine-et-Marne, l'éloignement impose de privilégier les projets suffisamment importants : maison à rénover intégralement, extension, toiture, structure, énergie et opérations complexes. La page reste transparente sur ce critère plutôt que de prétendre couvrir chaque petit chantier."
      bulletsTitle="Projets prioritaires"
      bullets={["Rénovation complète de maison", "Extension", "Surélévation selon faisabilité", "Toiture / charpente", "Rénovation énergétique", "Redistribution et réseaux"]}
    />
  );
}
