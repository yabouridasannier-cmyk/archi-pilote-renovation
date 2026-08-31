import type { Metadata } from "next";
import { MqHero, MqSection, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Glossaire de la rénovation : le vocabulaire du bâtiment | ARCHI PILOTE RÉNOVATION",
  description:
    "Plus de quarante termes techniques de la rénovation, classés par famille : structure, second œuvre, énergie et ventilation, administratif, chiffrage.",
  alternates: { canonical: "/glossaire-renovation" },
};

const FAMILLES = [
  {
    titre: "Structure",
    termes: [
      { t: "Mur porteur", d: "Mur qui supporte une partie du poids du bâtiment, en plus de son propre poids. Sa modification nécessite un renfort adapté et, souvent, l'avis d'un professionnel compétent." },
      { t: "Refend", d: "Mur porteur intérieur qui divise un bâtiment en participant à la stabilité de la structure, distinct des murs de façade." },
      { t: "Trémie", d: "Ouverture pratiquée dans un plancher, par exemple pour un escalier ou un conduit. Sa création modifie la répartition des charges autour de l'ouverture." },
      { t: "Chaînage", d: "Élément en béton armé, horizontal ou vertical, qui renforce la structure et répartit les efforts entre les murs et les planchers." },
      { t: "Linteau", d: "Élément placé au-dessus d'une ouverture (porte, fenêtre) pour reporter les charges du mur vers les points d'appui de part et d'autre." },
      { t: "Fondation", d: "Ouvrage enterré qui transmet les charges du bâtiment au sol. Sa nature dépend de la portance du terrain et du poids de la construction." },
      { t: "Plancher collaborant", d: "Plancher associant une dalle béton et une structure métallique ou bois travaillant ensemble pour reprendre les charges." },
      { t: "Étai", d: "Élément provisoire qui soutient une structure pendant les travaux, avant la mise en place ou la validation d'un renfort définitif." },
      { t: "Sondage structurel", d: "Ouverture ponctuelle et contrôlée réalisée pour observer la composition réelle d'un mur, d'un plancher ou d'une fondation avant travaux." },
      { t: "Descente de charges", d: "Calcul qui suit le trajet des efforts depuis la toiture jusqu'aux fondations, utilisé pour valider une modification de structure." },
    ],
  },
  {
    titre: "Second œuvre",
    termes: [
      { t: "Cloison", d: "Paroi non porteuse qui sépare des espaces intérieurs sans participer à la stabilité du bâtiment." },
      { t: "Doublage", d: "Habillage intérieur d'un mur, souvent isolant, posé pour améliorer le confort thermique ou acoustique." },
      { t: "Ragréage", d: "Enduit appliqué sur un sol pour le rendre plan avant la pose d'un revêtement." },
      { t: "Chape", d: "Couche de mortier appliquée sur une dalle pour recevoir un revêtement de sol ou intégrer un réseau de chauffage." },
      { t: "Faux plafond", d: "Plafond suspendu qui dissimule des réseaux (électricité, ventilation) et permet d'ajuster la hauteur ou l'acoustique d'une pièce." },
      { t: "Tableau électrique", d: "Coffret regroupant les dispositifs de protection et de répartition du courant électrique dans un logement." },
      { t: "Nourrice", d: "Répartiteur de plomberie qui alimente plusieurs points d'eau depuis une arrivée principale unique." },
      { t: "Étanchéité à l'air", d: "Qualité d'une paroi ou d'une menuiserie à limiter les entrées d'air non maîtrisées, essentielle à la performance énergétique." },
      { t: "Menuiserie extérieure", d: "Fenêtre, porte-fenêtre ou porte donnant sur l'extérieur, dont la pose influence l'isolation thermique et acoustique." },
      { t: "Revêtement de sol", d: "Matériau final posé sur la chape ou le ragréage : carrelage, parquet, sol souple, selon l'usage de la pièce." },
    ],
  },
  {
    titre: "Énergie et ventilation",
    termes: [
      { t: "VMC", d: "Ventilation mécanique contrôlée : système qui renouvelle l'air d'un logement en évacuant l'air vicié et en apportant de l'air neuf." },
      { t: "VMC simple flux", d: "Système de ventilation qui extrait l'air vicié des pièces humides, l'air neuf entrant par des entrées d'air dans les pièces sèches." },
      { t: "VMC double flux", d: "Système de ventilation qui extrait l'air vicié et insuffle de l'air neuf préchauffé, en récupérant une partie des calories de l'air extrait." },
      { t: "Passoire énergétique", d: "Terme courant désignant un logement dont la performance énergétique est très dégradée, généralement lié à une isolation insuffisante." },
      { t: "Diagnostic de performance énergétique", d: "Document qui évalue la consommation d'énergie et l'impact carbone d'un logement, utilisé notamment lors d'une vente ou d'une location." },
      { t: "Pont thermique", d: "Point de la construction où l'isolation est interrompue ou affaiblie, provoquant une déperdition de chaleur localisée." },
      { t: "Isolation par l'extérieur", d: "Technique qui place l'isolant sur la façade extérieure du bâtiment, limitant les ponts thermiques mais soumise au règlement de copropriété et à l'urbanisme." },
      { t: "Isolation par l'intérieur", d: "Technique qui place l'isolant côté intérieur des murs, plus simple à mettre en œuvre mais réduisant légèrement la surface habitable." },
      { t: "Pompe à chaleur", d: "Équipement qui transfère la chaleur d'un milieu (air, eau, sol) vers le logement pour le chauffer, parfois de manière réversible pour le rafraîchir." },
      { t: "Condensation", d: "Formation d'humidité sur une paroi froide au contact d'un air chaud et humide, souvent liée à une ventilation insuffisante." },
    ],
  },
  {
    titre: "Administratif",
    termes: [
      { t: "Déclaration préalable de travaux", d: "Autorisation d'urbanisme simplifiée requise pour certains travaux modifiant l'aspect extérieur ou créant une surface limitée." },
      { t: "Permis de construire", d: "Autorisation d'urbanisme requise pour les travaux d'ampleur, notamment les extensions ou surélévations dépassant certains seuils de surface." },
      { t: "Règlement de copropriété", d: "Document qui fixe les règles d'usage des parties privatives et communes d'un immeuble en copropriété, à consulter avant tout projet touchant les communs." },
      { t: "Assemblée générale de copropriété", d: "Réunion annuelle ou exceptionnelle des copropriétaires au cours de laquelle sont votées les autorisations touchant les parties communes." },
      { t: "Syndic de copropriété", d: "Professionnel ou structure chargée de la gestion administrative de l'immeuble et de l'exécution des décisions votées en assemblée générale." },
      { t: "Parties communes", d: "Éléments de l'immeuble utilisés ou profitant à l'ensemble des copropriétaires : façades, toiture, gaines techniques, halls." },
      { t: "Servitude", d: "Charge grevant un bien au profit d'un autre bien ou d'un tiers, pouvant limiter certains travaux (passage, vue, réseaux)." },
      { t: "Code de la construction", d: "Ensemble de textes réglementaires encadrant les normes de construction et de rénovation applicables en France." },
      { t: "Autorisation d'urbanisme", d: "Terme générique regroupant déclaration préalable, permis de construire et permis d'aménager selon la nature et l'ampleur du projet." },
      { t: "Secteur protégé", d: "Zone soumise à des règles d'urbanisme renforcées (abords de monument historique, site patrimonial) pouvant conditionner certains travaux." },
    ],
  },
  {
    titre: "Chiffrage",
    termes: [
      { t: "Devis descriptif", d: "Devis détaillant les prestations poste par poste, avec quantités et prix unitaires, permettant une comparaison précise entre entreprises." },
      { t: "Devis forfaitaire", d: "Devis présentant un prix global sans détail des quantités, rendant la comparaison entre entreprises plus difficile." },
      { t: "Métré", d: "Mesure précise des quantités de matériaux et de surfaces nécessaires à un chantier, base du chiffrage détaillé." },
      { t: "Poste de travaux", d: "Ligne d'un devis correspondant à une prestation ou un lot déterminé, par exemple l'électricité ou la peinture." },
      { t: "Exclusion de devis", d: "Prestation explicitement non comprise dans un devis, à vérifier systématiquement pour éviter les mauvaises surprises." },
      { t: "Aléa de chantier", d: "Imprévu découvert en cours de travaux, par exemple un réseau caché ou un désordre structurel, nécessitant un chiffrage complémentaire." },
      { t: "Provision pour imprévus", d: "Marge budgétaire réservée avant travaux pour absorber les aléas révélés en cours de chantier." },
      { t: "Attestation d'assurance décennale", d: "Document justifiant qu'une entreprise est couverte pour les désordres pouvant affecter la solidité de l'ouvrage pendant dix ans." },
      { t: "Situation de travaux", d: "Décompte intermédiaire de l'avancement du chantier, utilisé pour établir les paiements échelonnés aux entreprises." },
      { t: "Réception de travaux", d: "Acte par lequel le client accepte les travaux réalisés, avec ou sans réserves, marquant le point de départ de certaines garanties." },
    ],
  },
];

export default function Page() {
  return (
    <main>
      <MqHero
        kicker="Glossaire technique"
        title="Le vocabulaire du bâtiment, expliqué simplement"
        lead="Ce glossaire réunit plus de quarante termes techniques utilisés en rénovation, classés par famille : structure, second œuvre, énergie et ventilation, administratif et chiffrage. Chaque définition tient en une à trois phrases et vise à faciliter la lecture des devis, des diagnostics et des échanges avec les entreprises partenaires."
      />

      {/*
        À GÉNÉRER — Visuel 1, seul visuel de cette page. Le client est explicite :
        "la page doit rester rapide et scannable ; une image par définition serait une
        erreur" — donc UN SEUL visuel compact ici, jamais un par terme du glossaire.
        Vérifié le 31/08 dans /public/photos/pedagogie/ (7 schémas déjà produits :
        01-beton-cire, 02-transformer-methode, 03-menuiserie-condensation,
        04-circuit-air, 05-menuiserie-moulures, 06-huit-etapes, 07-modele-economique) —
        aucun ne correspond au sujet demandé.
        Sujet : planche technique sobre regroupant poutre, pare-vapeur, nourrice, VMC,
        chape et joint époxy.
        Alt à utiliser : "Principaux éléments techniques expliqués dans le glossaire de
        la rénovation."
        Une fois produite, l'ajouter ici (hero compact, format large) via
        <div className="container-site max-w-4xl pb-12 md:pb-16">
          <MqFig src="..." alt="..." ratio="aspect-[21/9]" caption="..." />
        </div>
        avant la première <MqSection> des familles de termes — compact, PAS une image
        par définition.
        Prompt FR exact pour la génération :
        "Planche technique éditoriale et sobre présentant six pictogrammes techniques
        alignés sur une seule ligne horizontale, fond ivoire uni, traits fins noir mat,
        courte légende en français sous chaque élément : une poutre de reprise en coupe,
        un pare-vapeur en coupe de paroi, une nourrice de plomberie avec ses départs,
        une bouche de VMC avec son conduit, une chape en coupe sur dalle, un joint en
        époxy entre deux carreaux. Style schéma pédagogique cohérent avec les
        illustrations techniques déjà produites pour ce site (mêmes gris/noir sur ivoire,
        aucune touche de couleur vive), aucune photographie, aucun personnage, format
        large 21:9, compact et lisible en petite taille."
      */}

      {FAMILLES.map((f) => (
        <MqSection key={f.titre} kicker={f.titre} wide>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {f.termes.map((term) => (
              <div key={term.t} className="border-b border-line pb-4">
                <dt className="display text-[1.05rem] text-ivoire">{term.t}</dt>
                <dd className="text-muted text-[0.9rem] mt-1 leading-relaxed">{term.d}</dd>
              </div>
            ))}
          </dl>
        </MqSection>
      ))}

      <MqSection>
        <p className="text-[0.82rem] text-muted max-w-3xl">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqReadNext items={[
        { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
        { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Isolation, VMC, passoire énergétique" },
        { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Comprendre un devis ligne à ligne" },
      ]} />
    </main>
  );
}
