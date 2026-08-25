import type { Metadata } from "next";
import { LocalPage } from "../components/local-page";

export const metadata: Metadata = {
  title: "Rénovation complexe à Paris : copropriété, structure et réseaux | ARCHI PILOTE",
  description: "Rénovation complète, structure, maison, appartement et projets complexes en Paris. ARCHI PILOTE RÉNOVATION étudie les dossiers selon leur ampleur et leurs contraintes.",
};

export default function Page() {
  return (
    <LocalPage
      variant="departement"
      eyebrow="Paris (75)"
      segments={[{ text: "Rénovation en Paris :" }, { text: "projets complets et transformations complexes.", serif: true, gradient: true }]}
      intro="À Paris, ARCHI PILOTE RÉNOVATION se positionne sur les dossiers où la complexité technique ou administrative justifie un pilotage structuré : redistribution, mur porteur, réseaux, copropriété, ventilation, rénovation complète et interactions avec des professionnels spécialisés. L'objectif n'est pas de dupliquer les pages « rénovation appartement Paris » d'ARCHI RENOV, mais de capter une intention différente : celle du projet complexe."
      bulletsTitle="Projets prioritaires"
      bullets={["Appartement en copropriété complexe", "Ouverture structurelle", "Redistribution avec réseaux", "Rénovation complète à forte technicité", "Projets nécessitant un dossier documenté"]}
    />
  );
}
