import { Hero } from "./components/hero";
import { Marquee } from "./components/marquee";
import { StatsBand } from "./components/stats-band";
import { ConceptSplit } from "./components/concept-split";
import { AvantApres } from "./components/avant-apres";
import { ServicesList } from "./components/services-list";
import { ProcessTimeline } from "./components/process-timeline";
import { AvisCarousel } from "./components/avis-carousel";
import { FaqSection } from "./components/faq-section";
import { CtaFinal } from "./components/cta-final";
import { MARQUEE_ITEMS, AVANT_APRES } from "./data";
import { PHOTOS } from "./lib-photos";

export default function Home() {
  const sejour = AVANT_APRES[0];
  return (
    <main className="relative z-10 bg-carbone">
      <Hero />
      <div className="py-10 border-b border-line">
        <Marquee items={MARQUEE_ITEMS} speed={38} />
      </div>
      <StatsBand />
      <ConceptSplit />
      <AvantApres
        titre="Le même séjour"
        texte={sejour.texte}
        avant={PHOTOS[sejour.avant as keyof typeof PHOTOS]}
        apres={PHOTOS[sejour.apres as keyof typeof PHOTOS]}
        avantLabel={sejour.avantLabel}
        apresLabel={sejour.apresLabel}
      />
      <ServicesList />
      <ProcessTimeline />
      <AvisCarousel />
      <FaqSection />
      <CtaFinal />
    </main>
  );
}
