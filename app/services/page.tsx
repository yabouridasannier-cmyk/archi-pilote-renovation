import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { ServicesGrid } from "../components/services-grid";
import { ServicesRoadmap } from "../components/services-roadmap";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  alternates: { canonical: "/services" },
  title: "Travaux de rénovation : du gros œuvre au second œuvre — ARCHI PILOTE RÉNOVATION",
  description:
    "Ouverture de mur porteur, extension, surélévation, toiture, cuisine sur-mesure, salle de bain étanche, isolation & DPE. Tous les corps d'état pilotés sur un seul chantier, en Île-de-France.",
};

export default function ServicesPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Nos services"
        segments={[{ text: "Tous les corps de métier," }, { text: "sous un même toit.", serif: true, gradient: true }]}
        lead="Du gros œuvre au second œuvre, nous pilotons chaque poste avec les mêmes entreprises partenaires et le même interlocuteur — du diagnostic à la réception."
      />
      <ServicesGrid />
      <ServicesRoadmap />
      <CtaFinal />
    </main>
  );
}
