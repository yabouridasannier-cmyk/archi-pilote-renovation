import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { DevisEstimateur } from "../components/devis-estimateur";
import { FaqSection } from "../components/faq-section";

export const metadata: Metadata = {
  title: "Estimer mon budget — ARCHI PILOTE RÉNOVATION",
  description:
    "Estimez le budget de vos travaux de rénovation en 3 clics : type de projet, surface, montées en gamme. Fourchette immédiate, devis des entreprises sous 48 h après visite technique.",
};

export default function DevisPage() {
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Estimateur de budget"
        segments={[{ text: "Votre budget," }, { text: "en trois clics.", serif: true, gradient: true }]}
        lead="Une première fourchette immédiate, basée sur les fourchettes observées sur les projets accompagnés en 2026. Le chiffrage définitif reste celui des devis remis par les entreprises, après une visite technique gratuite."
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
