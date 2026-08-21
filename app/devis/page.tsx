import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { DevisEstimateur } from "../components/devis-estimateur";
import { FaqSection } from "../components/faq-section";

export const metadata: Metadata = {
  title: "Estimer mon devis — Archipilote",
  description:
    "Estimez le budget de votre rénovation d'appartement en 3 clics : type de projet, surface, postes spécifiques. Fourchette immédiate, devis détaillé sous 48 h après visite.",
};

export default function DevisPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Estimateur de devis"
        segments={[{ text: "Votre budget," }, { text: "en trois clics.", serif: true, gradient: true }]}
        lead="Une première fourchette immédiate, basée sur nos tarifs réels 2026. Le chiffrage définitif reste celui du devis détaillé, après une visite technique gratuite."
      />
      <section className="relative pb-24 md:pb-36">
        <div className="container-site">
          <DevisEstimateur />
        </div>
      </section>
      <FaqSection />
    </main>
  );
}
