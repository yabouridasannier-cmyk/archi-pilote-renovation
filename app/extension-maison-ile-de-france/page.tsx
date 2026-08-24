import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  title: "Extension de maison en Île-de-France | ARCHI PILOTE RÉNOVATION",
  description: "Une extension modifie surface, enveloppe, structure et parfois fiscalité ou autorisations. Le projet doit être cadré avant les devis.",
};

export default function Page() {
  return (
    <SpecialtyPage
      slug="/extension-maison-ile-de-france"
      eyebrow="Gros œuvre"
      segments={[{ text: "Extension de maison :" }, { text: "cadrer avant de construire.", serif: true, gradient: true }]}
      lead="Une extension modifie surface, enveloppe, structure et parfois fiscalité ou autorisations. Le projet doit être cadré avant les devis."
      photo="grosOeuvre"
      photoAlt="Extension de maison en cours de gros œuvre"
      sections={[
        { titre: "Urbanisme et faisabilité", texte: "PLU, emprise au sol, hauteur, recul et voisinage peuvent décider du projet avant même le dessin final." },
        { titre: "Connexion à l'existant", texte: "Le point faible n'est pas toujours l'extension neuve mais sa liaison avec la maison : structure, étanchéité, niveaux, réseaux et thermique." },
        { titre: "Budget complet", texte: "Études, terrassement, structure, toiture, menuiseries, réseaux, finitions et remise en état des abords — le budget se pense sur l'ensemble, pas sur le seul volume créé." },
      ]}
    />
  );
}
