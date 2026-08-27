import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { GalerieGrid } from "../components/galerie-grid";
import { AvantApres } from "../components/avant-apres";
import { CtaFinal } from "../components/cta-final";
import { AVANT_APRES } from "../data";
import { PHOTOS } from "../lib-photos";

export const metadata: Metadata = {
  alternates: { canonical: "/realisations" },
  title: "Réalisations des équipes partenaires — cuisines, salles de bain, chantiers | ARCHI PILOTE RÉNOVATION",
  description:
    "Rénovations de maisons en Île-de-France : gros œuvre, second œuvre, cuisines sur-mesure, salles de bain étanches, béton ciré.",
};

export default function RealisationsPage() {
  const sejour = AVANT_APRES[0];
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Réalisations"
        segments={[{ text: "Des chantiers réels," }, { text: "livrés par les équipes partenaires.", serif: true, gradient: true }]}
        lead="La marque est neuve, les équipes ne le sont pas : cuisines, salles de bain, charpentes et menuiseries ci-dessous sont des chantiers réels réalisés par les entreprises partenaires du groupe. Les visuels marqués « illustration » le restent, clairement."
      />
      <AvantApres
        titre="L'ampleur d'une transformation"
        texte={sejour.texte}
        avant={PHOTOS[sejour.avant as keyof typeof PHOTOS]}
        apres={PHOTOS[sejour.apres as keyof typeof PHOTOS]}
        avantLabel={sejour.avantLabel}
        apresLabel={sejour.apresLabel}
        eyebrow="Avant / après"
      />
      <GalerieGrid />
      <CtaFinal />
    </main>
  );
}
