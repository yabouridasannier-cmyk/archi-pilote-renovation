import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  title: "Ouverture de mur porteur | ARCHI PILOTE",
  description: "Modifier un mur porteur engage la structure. Étude, plans, phasage, entreprise assurée et réception doivent être préparés avant démolition.",
};

export default function Page() {
  return (
    <SpecialtyPage
      eyebrow="Gros œuvre"
      segments={[{ text: "Ouverture de mur porteur :" }, { text: "étude, autorisations, travaux.", serif: true, gradient: true }]}
      lead="Modifier un mur porteur engage la structure. Étude, plans, phasage, entreprise assurée et réception doivent être préparés avant démolition."
      photo="grosOeuvre"
      photoAlt="Ouverture de mur porteur, structure en cours de reprise"
      sections={[
        { titre: "Pourquoi l'étude structure vient avant le prix", texte: "Le dimensionnement et la méthode de reprise conditionnent le chiffrage. Faire chiffrer une ouverture avant d'avoir défini l'hypothèse structurelle produit des devis incomparables entre eux." },
        { titre: "Les points à vérifier", texte: "Nature du mur, charges reprises, plancher, fondations, accès, mitoyenneté et finitions autour de l'ouverture — chacun de ces points change la méthode retenue." },
        { titre: "Le séquencement", texte: "Protection, étaiement, démolition contrôlée, pose du renfort selon l'étude, reprises, contrôles et finitions. Un ordre qui ne se négocie pas une fois le chantier lancé." },
      ]}
    />
  );
}
