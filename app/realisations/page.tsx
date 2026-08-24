import type { Metadata } from "next";
import { PageHeader } from "../components/page-header";
import { GalerieGrid } from "../components/galerie-grid";
import { AvantApres } from "../components/avant-apres";
import { CtaFinal } from "../components/cta-final";
import { AVANT_APRES } from "../data";
import { PHOTOS } from "../lib-photos";

export const metadata: Metadata = {
  title: "Nos chantiers de rénovation en Île-de-France — ARCHI PILOTE RÉNOVATION",
  description:
    "Rénovations de maisons en Île-de-France : gros œuvre, second œuvre, cuisines sur-mesure, salles de bain étanches, béton ciré.",
};

export default function RealisationsPage() {
  const sejour = AVANT_APRES[0];
  return (
    <main className="relative z-10 bg-carbone">
      <PageHeader
        eyebrow="Réalisations"
        segments={[{ text: "Nouvelle marque," }, { text: "premiers chantiers à venir.", serif: true, gradient: true }]}
        lead="ARCHI PILOTE RÉNOVATION démarre : les visuels ci-dessous illustrent le niveau de finition visé. Vos vrais chantiers viendront remplacer cette galerie, projet après projet."
      />
      <AvantApres
        titre="Le même séjour"
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
