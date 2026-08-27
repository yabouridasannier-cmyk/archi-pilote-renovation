import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/surelevation" },
  title: "Surélévation de maison en Île-de-France | ARCHI PILOTE RÉNOVATION",
  description: "Une surélévation crée de la surface sans emprise supplémentaire, mais elle ajoute des charges et modifie le bâtiment entier.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/surelevation"
      eyebrow="Gros œuvre"
      segments={[{ text: "Surélévation de maison :" }, { text: "vérifier la structure avant le projet.", serif: true, gradient: true }]}
      lead="Une surélévation crée de la surface sans emprise supplémentaire, mais elle ajoute des charges et modifie le bâtiment entier."
      photo="grosOeuvre"
      photoAlt="Élévation en briques grande hauteur, échafaudage intérieur — chantier réel des équipes partenaires"
      sections={[
        { titre: "Diagnostic initial", texte: "Structure porteuse, fondations, planchers, charpente existante et accès de chantier doivent être étudiés avant tout dessin de projet." },
        { titre: "Autorisations et conception", texte: "Le volume créé, la hauteur et l'aspect extérieur imposent une préparation administrative rigoureuse, souvent plus longue que le chantier lui-même." },
        { titre: "Chantier en site existant", texte: "Protection contre les intempéries pendant la dépose de toiture, phasage et maintien de la sécurité sont des sujets majeurs, pas des détails d'organisation." },
      ]}
    />
  );
}
