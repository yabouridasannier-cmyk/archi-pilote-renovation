import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  title: "Rénovation complète de maison en Île-de-France | ARCHI PILOTE RÉNOVATION",
  description: "Une rénovation complète réussie se joue avant la peinture : structure, eau, air, réseaux et supports doivent être arbitrés dans cet ordre.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/renovation-complete-maison"
      eyebrow="Rénovation complète"
      segments={[{ text: "Rénovation complète de maison :" }, { text: "ordre des travaux et budget.", serif: true, gradient: true }]}
      lead="Une rénovation complète réussie se joue avant la peinture : structure, eau, air, réseaux et supports doivent être arbitrés dans cet ordre."
      photo="chantierRenovation"
      photoAlt="Chantier de rénovation complète en cours, dépose des cloisons"
      sections={[
        { titre: "Phase 1 — rendre le bâtiment sain", texte: "Structure, toiture, humidité et enveloppe : rien d'autre n'a de sens tant que ces points ne sont pas traités." },
        { titre: "Phase 2 — réseaux et performance", texte: "Électricité, plomberie, chauffage, ventilation, isolation — les postes qui se cachent derrière les murs et qu'on ne rouvre pas facilement après." },
        { titre: "Phase 3 — usages et finitions", texte: "Cloisons, cuisine, salles d'eau, sols, peinture, menuiseries intérieures. C'est la phase la plus visible, mais la dernière à décider." },
      ]}
    />
  );
}
