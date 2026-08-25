import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { AvantApres } from "../components/avant-apres";
import { CtaFinal } from "../components/cta-final";
import { AVANT_APRES } from "../data";
import { PHOTOS } from "../lib-photos";

export const metadata: Metadata = {
  alternates: { canonical: "/avant-apres-renovation-maison" },
  title: "Avant / après rénovation de maison | ARCHI PILOTE RÉNOVATION",
  description: "Chaque cas réel comporte commune, type de maison, contrainte, lots et durée observée. Aucun visuel d'illustration n'est présenté comme une réalisation.",
};

export default function Page() {
  const sejour = AVANT_APRES[0];
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Avant / après"
        segments={[{ text: "Montrer la transformation," }, { text: "sans fabriquer de preuve.", serif: true, gradient: true }]}
        lead="Nouvelle marque : les visuels ci-dessous sont des illustrations, clairement signalées. Chaque vrai chantier comportera commune, contrainte technique, lots et durée observée."
      />
      <AvantApres
        titre="L'ampleur d'une transformation"
        texte={sejour.texte}
        avant={PHOTOS[sejour.avant as keyof typeof PHOTOS]}
        apres={PHOTOS[sejour.apres as keyof typeof PHOTOS]}
        avantLabel={sejour.avantLabel}
        apresLabel={sejour.apresLabel}
      />
      <CtaFinal />
    </main>
  );
}
