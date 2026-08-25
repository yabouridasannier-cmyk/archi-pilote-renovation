import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-maison-pavillon" },
  title: "Rénovation de maison et pavillon : un bâtiment entier à comprendre | ARCHI PILOTE RÉNOVATION",
  description:
    "Une maison réunit enveloppe, structure, réseaux et usages : la rénover se pilote du sol à la toiture, dans le bon ordre. Pilotage de rénovation de maisons et pavillons en Île-de-France.",
};

/* Page "Maison & pavillon" — fiche PAGE PRINCIPALE · 11 du dossier V3
   (fiche reçue partiellement : le brief des visuels 2-4 est dans la partie
   tronquée du document — page construite sur le texte disponible, à compléter
   à réception de la fin de la fiche et de la partie B). */
export default function Page() {
  return (
    <SpecialtyPage
      eyebrow="Maison & pavillon"
      segments={[{ text: "Une maison se rénove" }, { text: "du sol à la toiture.", serif: true, gradient: true }]}
      lead="Un pavillon n'est pas une somme de pièces : c'est un bâtiment complet, avec une enveloppe qui protège, une structure qui porte, des réseaux qui traversent et des usages qui évoluent. Rénover une maison, c'est d'abord comprendre comment ces couches tiennent ensemble — puis décider dans le bon ordre, de la toiture aux finitions, pour que chaque lot prépare le suivant au lieu de le contredire."
      photo="grosOeuvre"
      photoAlt="Maison individuelle en cours de travaux, échafaudage en façade"
      slug="/renovation-maison-pavillon"
      sections={[
        { titre: "Chaque maison réunit enveloppe, structure et usages", texte: "Toiture, murs, menuiseries forment l'enveloppe ; fondations, murs porteurs et planchers, la structure ; électricité, eau, chauffage et ventilation, les réseaux. Un projet de rénovation sérieux commence par une lecture de ces trois couches sur le bâtiment réel — pas sur un prix au mètre carré." },
        { titre: "L'ordre des décisions protège le budget", texte: "La structure se traite avant les réseaux, les réseaux avant les cloisons, la ventilation avant l'étanchéité à l'air, les finitions en dernier. Inverser deux étapes, c'est payer deux fois : le pilotage consiste à séquencer les interventions des entreprises pour que rien ne soit refait." },
        { titre: "Le pavillon francilien a ses pathologies propres", texte: "Meulière des années 30, pavillon d'après-guerre ou maison des années 70 : chaque génération de bâti francilien a ses points de vigilance — fondations, humidité des sous-sols, charpentes, isolation d'origine. La visite technique sert précisément à identifier ce que la maison impose avant de figer un budget." },
        { titre: "Un seul pilote, des entreprises qui contractent avec vous", texte: "ARCHI PILOTE RÉNOVATION structure le projet, organise les visites, met en relation avec les entreprises partenaires et suit le chantier jusqu'à la réception. Chaque entreprise vous remet son devis, contracte directement avec vous et porte ses propres assurances — la marque ne réalise ni ne facture aucun travaux." },
      ]}
      faqExtra={[
        { q: "Intervenez-vous sur les maisons anciennes ?", r: "Oui — bâti ancien, meulière, pavillon d'après-guerre : le point de départ reste le même, une visite technique pour lire l'existant avant tout chiffrage." },
      ]}
    />
  );
}
