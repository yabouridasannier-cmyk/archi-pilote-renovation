import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  title: "Toiture et charpente | ARCHI PILOTE",
  description: "Une toiture défaillante ruine les finitions. Avant d'isoler ou de repeindre, il faut comprendre l'eau, l'air, la ventilation et la structure.",
};

export default function Page() {
  return (
    <SpecialtyPage
      eyebrow="Gros œuvre"
      segments={[{ text: "Toiture et charpente :" }, { text: "traiter l'enveloppe en priorité.", serif: true, gradient: true }]}
      lead="Une toiture défaillante ruine les finitions. Avant d'isoler ou de repeindre, il faut comprendre l'eau, l'air, la ventilation et la structure."
      photo="chantierIsolation"
      photoAlt="Isolation des combles avant doublage, sous charpente"
      sections={[
        { titre: "Diagnostic utile", texte: "Couverture, zinguerie, points singuliers, bois, humidité, ventilation et isolation existante : chaque poste conditionne les suivants." },
        { titre: "Réparer ou refaire", texte: "Le bon choix dépend de l'état réel, de la compatibilité des matériaux et des objectifs thermiques — pas d'une règle générale." },
        { titre: "Enchaînement des décisions", texte: "Fenêtres de toit, isolation, pare-vapeur, ventilation et finitions intérieures doivent être décidés ensemble, dans le bon ordre." },
      ]}
    />
  );
}
