import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/menuiserie-sur-mesure" },
  title: "Menuiserie et rangements sur-mesure : bibliothèques, dressings, claustras | ARCHI PILOTE RÉNOVATION",
  description:
    "Bibliothèques, dressings, lits cabane, claustras et arches en bois : la menuiserie sur-mesure dessinée pour le lieu, fabriquée et posée par les ateliers partenaires. Pilotage en Île-de-France.",
};

/* Page ajoutée le 27/08 à la demande du client (« un détail sur la menuiserie
   sur-mesure ») — illustrée par les photos réelles de fabrications du groupe. */
export default function Page() {
  return (
    <SpecialtyPage
      eyebrow="Menuiserie sur-mesure"
      segments={[{ text: "Des rangements dessinés" }, { text: "pour le lieu, pas pour un catalogue.", serif: true, gradient: true }]}
      lead="Une bibliothèque toute hauteur qui épouse un mur en pierre, un dressing qui absorbe une sous-pente, un lit cabane qui transforme une chambre d'enfant, un claustra qui filtre la lumière sans fermer l'espace : la menuiserie sur-mesure règle ce que le mobilier standard ne sait pas régler. Elle se dessine à partir des contraintes réelles du lieu — hauteurs, angles, réseaux, lumière — puis se fabrique en atelier et se pose par les menuisiers partenaires, en coordination avec les autres lots."
      photo="chLitCabane"
      photoAlt="Lit cabane et rangements en bois sur-mesure en cours de montage dans une chambre d'enfant — chantier réel des équipes partenaires"
      slug="/menuiserie-sur-mesure"
      sections={[
        { titre: "Le sur-mesure commence par le relevé", texte: "Avant tout dessin : un relevé précis du lieu — hauteurs sous plafond, faux aplombs, plinthes, réseaux qui passent derrière. C'est ce relevé qui distingue un meuble qui semble avoir toujours été là d'un caisson standard habillé. Le dessin se valide ensuite sur plan, avec les usages réels : ce qu'on range, ce qu'on montre, ce qu'on cache." },
        { titre: "Bibliothèques, dressings, arches et claustras", texte: "Les ateliers partenaires fabriquent des bibliothèques toute hauteur, des dressings en sous-pente, des arches de passage, des claustras et panneaux ajourés qui structurent l'espace sans le cloisonner. Le bois se choisit selon la pièce et l'entretien : chêne, frêne, panneaux plaqués ou laqués." },
        { titre: "La pose se coordonne avec les autres lots", texte: "Un meuble sur-mesure arrive après les réseaux, après les supports, avant les finitions murales définitives. Les réservations électriques (éclairage intégré, prises dans les niches) se décident au moment du dessin, pas au moment de la pose — c'est exactement le genre d'interface que le pilotage verrouille entre menuisier et électricien." },
        { titre: "Un meuble documenté, comme le reste du chantier", texte: "Plans validés, essences choisies, quincaillerie référencée : la menuiserie sur-mesure entre dans le dossier du projet comme chaque lot. En cas de retouche ou d'extension du meuble des années plus tard, tout est retrouvable." },
      ]}
      faqExtra={[
        { q: "Le sur-mesure coûte-t-il forcément plus cher que le standard ?", r: "À qualité égale, le sur-mesure est plus cher qu'un meuble en kit — mais il exploite des volumes que le standard perd (sous-pentes, angles, grandes hauteurs). Le chiffrage exact est celui du devis remis par l'atelier partenaire." },
      ]}
    />
  );
}
