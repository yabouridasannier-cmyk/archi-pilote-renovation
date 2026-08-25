import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/gros-oeuvre-structure" },
  title: "Structure et fondations | ARCHI PILOTE RÉNOVATION",
  description: "Fissures, affaissement, planchers ou reprises de charge nécessitent un diagnostic adapté avant toute solution cosmétique.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/gros-oeuvre-structure"
      eyebrow="Gros œuvre"
      segments={[{ text: "Structure et fondations :" }, { text: "comprendre le bâtiment avant les finitions.", serif: true, gradient: true }]}
      lead="Fissures, affaissement, planchers ou reprises de charge nécessitent un diagnostic adapté avant toute solution cosmétique."
      photo="grosOeuvre"
      photoAlt="Reprise de structure, fondations à nu"
      sections={[
        { titre: "Ne pas diagnostiquer à distance", texte: "Une fissure n'a pas une cause unique. Aucun diagnostic sérieux ne se pose sur photo, sans visite ni étude." },
        { titre: "Quand mobiliser un bureau d'études", texte: "Dès qu'une modification ou un désordre peut affecter la stabilité de l'ouvrage ou la reprise de charges." },
        { titre: "Tracer les décisions", texte: "Plans, notes de calcul, photos avant fermeture et références des matériaux doivent être archivés — utile pour toute intervention future." },
      ]}
    />
  );
}
