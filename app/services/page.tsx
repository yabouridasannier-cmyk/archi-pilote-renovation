import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { ServicesGrid } from "../components/services-grid";
import { ServicesRoadmap } from "../components/services-roadmap";
import { CtaFinal } from "../components/cta-final";

export const metadata: Metadata = {
  title: "Nos services — Archipilote",
  description:
    "Second œuvre tous corps d'état, cuisine sur-mesure, salle de bain étanche, béton ciré, isolation & DPE, gros œuvre & surélévation. Un seul interlocuteur à Paris et en Île-de-France.",
};

export default function ServicesPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Nos services"
        segments={[{ text: "Tous les corps de métier," }, { text: "sous un même toit.", serif: true, gradient: true }]}
        lead="Du second œuvre au gros œuvre, nous coordonnons chaque poste avec les mêmes équipes et le même interlocuteur — du diagnostic à la réception."
      />
      <ServicesGrid />
      <ServicesRoadmap />
      <CtaFinal />
    </main>
  );
}
