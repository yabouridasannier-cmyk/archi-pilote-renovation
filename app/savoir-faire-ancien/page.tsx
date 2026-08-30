import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/savoir-faire-ancien" },
  title: "Charme de l'ancien : fenêtres à l'identique, crémones et moulures restituées | ARCHI PILOTE RÉNOVATION",
  description:
    "Restituer un décor ancien demande un relevé avant démolition, des fournisseurs capables de refaire un profil et une mise aux normes pensée pour rester invisible.",
};

const OUVRAGES = [
  {
    title: "Fenêtres reproduites à l'identique",
    text: "Relevé du châssis existant, report des sections de montants et de petits bois, dépose soignée puis repose de la crémone en laiton d'origine sur un châssis neuf à double vitrage feuilleté.",
  },
  {
    title: "Crémones, espagnolettes et quincaillerie",
    text: "La quincaillerie ancienne est démontée, décapée, remise en fonctionnement et reposée. Lorsqu'une pièce manque, elle est refaite en laiton sur modèle plutôt que remplacée par un modèle courant.",
  },
  {
    title: "Moulures, corniches et rosaces",
    text: "Les profils sont moulés d'après un fragment prélevé sur place, puis fournis par la maison Guimier. Les raccords entre partie conservée et partie restituée sont retouchés au plâtre traditionnel.",
  },
  {
    title: "Parquets et boiseries",
    text: "Parquets point de Hongrie et bâtons rompus déposés lame par lame, purgés, recalés puis complétés en chêne de récupération. Boiseries repeintes en laque après rebouchage et égrenage.",
  },
  {
    title: "Cheminées et pierre",
    text: "Trumeaux et cheminées en marbre conservés, nettoyés et rejointoyés. Les conduits sont contrôlés avant tout habillage ou obturation.",
  },
  {
    title: "Mise aux normes invisible",
    text: "Réseaux électriques et de ventilation intégrés dans les doublages et faux plafonds pour éviter la saignée destructrice dans un décor d'origine.",
  },
];

const DEROULE = [
  {
    src: "chantier-etat-initial",
    alt: "Pièce d'appartement ancien vide avant travaux, murs jaunis et fissurés, parquet usé et cheminée d'origine encrassée",
    caption: "État initial relevé avant intervention : fissures de surface, parquet désaffleuré, cheminée et corniches d'origine à conserver.",
  },
  {
    src: "chantier-demolition",
    alt: "Phase de démolition d'un logement ancien avec cloisons déposées, gravats en sacs et protections de sol",
    caption: "Démolition sélective : dépose des cloisons non porteuses, tri et évacuation en sacs, protection intégrale des sols conservés.",
  },
  {
    src: "chantier-ouverture-mur-etaiement",
    alt: "Ouverture percée dans un mur porteur en briques avec trois étais métalliques soutenant le plancher supérieur",
    caption: "Ouverture de mur porteur : étaiement du plancher haut avant percement, conformément à la note de calcul de l'ingénieur structure.",
  },
  {
    src: "chantier-ipn-habillage",
    alt: "Poutre acier IPN posée au-dessus d'une ouverture entre deux pièces, en cours d'habillage en plaques de plâtre",
    caption: "IPN scellée sur appuis maçonnés puis habillée par le plaquiste : coffrage coupe-feu et raccord d'enduit avant peinture.",
  },
  {
    src: "chantier-plomberie-encastree",
    alt: "Réseaux de plomberie encastrés en tubes multicouche rouges et bleus avec collecteur dans une salle de bain en travaux",
    caption: "Réseaux encastrés : alimentation en multicouche depuis un collecteur, repérage chaud/froid et essai de mise en pression avant fermeture.",
  },
  {
    src: "chantier-tableau-electrique-neuf",
    alt: "Tableau électrique neuf ouvert avec rangées de disjoncteurs, interrupteurs différentiels 30 mA et circuits étiquetés",
    caption: "Tableau refait selon la norme NF C 15-100 : différentiels 30 mA, circuits dédiés et étiquetage complet remis au client.",
  },
  {
    src: "chantier-vmc-caisson-gaines",
    alt: "Caisson de ventilation mécanique contrôlée suspendu en faux plafond avec gaines isolées raccordées",
    caption: "Caisson de ventilation mécanique contrôlée posé en faux plafond : gaines isolées, pentes maîtrisées et accès de maintenance réservé.",
  },
  {
    src: "chantier-carottage-facade",
    alt: "Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation",
    caption: "Carottage de façade pour ventilation : bâti fixé, carottage à l'eau, carotte extraite — après accord écrit du syndic sur la partie commune.",
  },
  {
    src: "chantier-isolation-laine",
    alt: "Chantier d'isolation intérieure : laine minérale entre rails métalliques sur murs et plafond avant pose du placo",
    caption: "Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre.",
  },
  {
    src: "chantier-ossature-placo-plafond",
    alt: "Ossature métallique de plafond suspendu et doublage mural en plaques de plâtre sur un chantier de rénovation",
    caption: "Plafond suspendu sur ossature métallique et doublage périphérique : passage des réseaux électriques réservé avant fermeture.",
  },
  {
    src: "moulures-corniches-pose",
    alt: "Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant les finitions",
    caption: "Corniches, rosace et boiseries restituées en plâtre traditionnel : profils moulés d'après l'existant, fournis par la maison Guimier.",
  },
  {
    src: "plateau-livre-parquet-chene",
    alt: "Grand plateau livré après rénovation avec parquet chêne massif, éclairage sur rails et embrasures cintrées en bois",
    caption: "Plateau livré : parquet chêne posé sur support ragréé, rails d'éclairage intégrés au plafond et embrasures cintrées habillées sur mesure.",
  },
];

const COMPARATIFS: {
  title: string;
  text: string;
  avant?: { src: string; caption: string };
  apres?: { src: string; caption: string };
}[] = [
  {
    title: "Doublage isolant d'une pièce ancienne",
    text: "Le mur ancien est d'abord assaini, puis l'ossature métallique est implantée au laser avant la pose de la laine minérale.",
    avant: {
      src: "chantier-ossature-avant",
      caption: "État avant doublage : murs anciens dégradés, rails et montants métalliques implantés au laser pour rattraper les faux aplombs.",
    },
    apres: {
      src: "chantier-isolation-laine",
      caption: "Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre.",
    },
  },
  {
    title: "De l'ossature brute à la pièce livrée",
    text: "Le plafond suspendu absorbe les réseaux ; la pièce est livrée après enduit, peinture et pose du parquet.",
    avant: {
      src: "chantier-ossature-placo-plafond",
      caption: "Plafond suspendu sur ossature métallique et doublage périphérique : passage des réseaux électriques réservé avant fermeture.",
    },
    apres: {
      src: "chambre-livree-parquet-chene",
      caption: "Chambre livrée : niche d'origine conservée, étagères sur mesure, parquet chêne posé et finitions peinture réceptionnées.",
    },
  },
  {
    title: "De l'état initial au plateau livré",
    text: "Relevé de l'existant, dépose complète, reprise des sols et des plafonds : le volume est restitué avant la pose du parquet chêne.",
    avant: {
      src: "chantier-etat-initial",
      caption: "État initial relevé avant intervention : fissures de surface, parquet désaffleuré, cheminée et corniches d'origine à conserver.",
    },
    apres: {
      src: "plateau-livre-parquet-chene",
      caption: "Plateau livré : parquet chêne posé sur support ragréé, rails d'éclairage intégrés au plafond et embrasures cintrées habillées sur mesure.",
    },
  },
  {
    title: "Ouvrir un mur porteur : de l'étaiement à l'IPN habillée",
    text: "Le plancher haut est étayé avant percement ; la poutre acier est ensuite scellée sur ses appuis puis habillée par le plaquiste.",
    avant: {
      src: "chantier-ouverture-mur-etaiement",
      caption: "Ouverture de mur porteur : étaiement du plancher haut avant percement, conformément à la note de calcul de l'ingénieur structure.",
    },
    apres: {
      src: "chantier-ipn-habillage",
      caption: "IPN scellée sur appuis maçonnés puis habillée par le plaquiste : coffrage coupe-feu et raccord d'enduit avant peinture.",
    },
  },
  {
    title: "Réseaux encastrés puis pièce d'eau livrée",
    text: "Essai de mise en pression et photographies des réseaux avant fermeture : la finition ne masque jamais un ouvrage non contrôlé.",
    avant: {
      src: "chantier-plomberie-encastree",
      caption: "Réseaux encastrés : alimentation en multicouche depuis un collecteur, repérage chaud/froid et essai de mise en pression avant fermeture.",
    },
    apres: {
      src: "salle-bain-ebene-marbre",
      caption: "Salle de bain haut de gamme en finition : panneaux en placage ébène, porte à affleurement sans encadrement et plan en marbre.",
    },
  },
  {
    title: "Étanchéité sous carrelage puis salle d'eau livrée",
    text: "La natte d'étanchéité, les bandes d'angle et la pente sont contrôlées et photographiées avant la pose de la pierre : c'est l'ouvrage caché qui garantit la durabilité.",
    avant: {
      src: "chantier-nappe-etancheite-douche",
      caption: "Étanchéité sous carrelage posée avant zellige ou travertin : natte continue murs et sol, bandes d'angle de renfort, pente vers le siphon contrôlée au niveau laser.",
    },
    apres: {
      src: "tendance-travertin-salle-bain",
      caption: "Travertin en salle d'eau : pierre naturelle appliquée en grand format, joints minces et traitement hydrofuge obligatoire avant mise en service.",
    },
  },
  {
    title: "Pose du zellige, de la crédence brute à la cuisine livrée",
    text: "Support dressé, boîtes mélangées, calepinage tracé à sec puis joint époxy : la crédence en zellige se prépare avant d'être posée.",
    avant: {
      src: "chantier-pose-zellige-credence",
      caption: "Pose de zellige en crédence : boîtes mélangées pour répartir les nuances, encollage au peigne adapté et croisillons de calage avant joint époxy.",
    },
    apres: {
      src: "tendance-cuisine-facades-sur-mesure-chene",
      caption: "Façades cannelées en chêne massif, plan en pierre naturelle et crédence zellige : ensemble sur mesure acheté en direct par le client, posé par l'entreprise partenaire.",
    },
  },
  {
    title: "Caissons standards, façades sur mesure",
    text: "Les caissons standards sont conservés et optimisés ; seules les façades, les plinthes et les habillages sont fabriqués sur mesure, ce qui réduit fortement le coût à rendu équivalent.",
    avant: {
      src: "cuisine-caissons-facades-sur-mesure",
      caption: "Caissons standards optimisés et façades sur mesure en chêne : la qualité visuelle du sur-mesure pour un budget contenu, sous moulures d'origine conservées.",
    },
    apres: {
      src: "cuisine-renovee-vert-sauge",
      caption: "Cuisine livrée après rénovation complète : implantation linéaire, four encastré, crédence pleine hauteur et sol grès cérame posé sur chape ragréée.",
    },
  },
  {
    title: "Pavillon francilien : de la façade fatiguée à l'enveloppe performante",
    text: "Isolation thermique par l'extérieur, remplacement des menuiseries, reprise de couverture et traitement des abords : l'enveloppe est traitée comme un ensemble cohérent.",
    avant: {
      src: "pavillon-facade-avant",
      caption: "État initial d'un pavillon francilien : enduit fissuré, menuiseries simple vitrage, absence d'isolation extérieure et étanchéité de toiture en fin de vie.",
    },
    apres: {
      src: "pavillon-facade-apres",
      caption: "Le même pavillon après pilotage complet : isolation thermique par l'extérieur, menuiseries à rupture de pont thermique, couverture reprise et abords paysagers.",
    },
  },
  {
    title: "Combles : de l'isolant tassé à la double couche croisée",
    text: "Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur continu : le premier poste de déperdition d'une passoire énergétique.",
    avant: {
      src: "combles-non-isoles-avant",
      caption: "Combles perdus avant intervention : isolant tassé et discontinu, ponts thermiques en périphérie, premier poste de déperdition d'une passoire énergétique.",
    },
    apres: {
      src: "combles-isoles-apres",
      caption: "Combles traités : deux couches croisées de laine minérale, pare-vapeur continu jointoyé et chemin de circulation pour l'entretien des réseaux.",
    },
  },
  {
    title: "Électricité : du tableau vétuste à l'installation conforme",
    text: "Différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité remise au client à la réception.",
    avant: {
      src: "tableau-electrique-vetuste-avant",
      caption: "Tableau électrique vétuste : porte-fusibles anciens, absence de différentiel 30 mA et circuits non repérés, non conforme à la norme NF C 15-100.",
    },
    apres: {
      src: "tableau-electrique-neuf-apres",
      caption: "Tableau remis aux normes : différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité fournie à la réception.",
    },
  },
  {
    title: "Salle d'eau : de la condensation chronique à la ventilation maîtrisée",
    text: "La cause est traitée avant la finition : extraction VMC dimensionnée, étanchéité sous carrelage, puis pose du travertin et de la robinetterie.",
    avant: {
      src: "salle-eau-condensation-avant",
      caption: "Pathologie classique : ventilation absente ou obstruée, condensation permanente et moisissures. Le traitement commence par le renouvellement d'air, pas par la peinture.",
    },
    apres: {
      src: "salle-eau-vmc-apres",
      caption: "Salle d'eau assainie et livrée : extraction VMC dimensionnée, étanchéité sous carrelage, travertin clair et robinetterie laiton brossé.",
    },
  },
  {
    title: "Extension : du jardin encombré au volume contemporain",
    text: "Étude de sol, déclaration préalable, fondations adaptées puis ossature bois et grandes baies : le raccord à la meulière existante est traité au détail.",
    avant: {
      src: "jardin-avant-extension",
      caption: "Avant extension : terrasse béton fissurée et abri vétuste. Le relevé, l'étude de sol Geo2Mo et la déclaration préalable précèdent tout terrassement.",
    },
    apres: {
      src: "extension-livree-apres",
      caption: "Extension livrée : ossature bois, grandes baies à menuiseries acier, toiture zinc et raccord soigné à la meulière conservée.",
    },
  },
  {
    title: "Surélévation : un étage gagné sans démolir",
    text: "Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée et mise hors d'eau rapide pour limiter l'exposition du bâti.",
    avant: {
      src: "maison-avant-surelevation",
      caption: "Avant surélévation : combles bas inexploitables. La faisabilité dépend du PLU, de la portance des murs et du diagnostic de l'ingénieur structure.",
    },
    apres: {
      src: "maison-surelevee-apres",
      caption: "Surélévation livrée : étage à ossature bois, charges reprises sur les murs confortés, bardage clair et toiture zinc à faible pente.",
    },
  },
  {
    title: "Trémie d'escalier : du chevêtre brut à l'escalier livré",
    text: "Étaiement, découpe des solives, chevêtre et linçoirs sur sabots métalliques : l'escalier n'est posé qu'après validation de la note de calcul.",
    avant: {
      src: "tremie-chevetre-chantier",
      caption: "Création de trémie : étaiement, découpe des solives, chevêtre et linçoirs sur sabots métalliques, conformément à la note de calcul de l'ingénieur structure.",
    },
    apres: {
      src: "escalier-duplex-tremie",
      caption: "Référence de style : escalier chêne et acier posé après création de trémie et reprise du plancher par chevêtre.",
    },
  },
];

const FAQ = [
  {
    q: "Peut-on remplacer des fenêtres anciennes sans perdre le cachet du logement ?",
    a: "Oui, à condition de reproduire le châssis à l'identique : mêmes sections de montants, mêmes petits bois, même partition des vantaux. Le double vitrage feuilleté se loge dans un profil traditionnel, et la crémone en laiton d'origine est remontée sur le nouveau châssis lorsqu'elle est récupérable.",
  },
  {
    q: "D'où proviennent les moulures et corniches posées sur vos chantiers ?",
    a: "Les profils sont fournis par la maison Guimier, à partir d'un relevé ou d'un fragment prélevé sur place. Cela permet de restituer une corniche disparue avec le même profil que celle conservée dans la pièce voisine.",
  },
  {
    q: "Qui achète les matériaux et auprès de qui ?",
    a: "Le client achète en direct. Les matériaux techniques proviennent du groupe Saint-Gobain et sont retirés à La Plateforme du Bâtiment. Cette organisation supprime la marge habituellement appliquée sur la fourniture et contribue à l'économie constatée sur le budget travaux.",
  },
  {
    q: "Une mise aux normes électrique abîme-t-elle nécessairement les décors anciens ?",
    a: "Non. Les réseaux sont majoritairement passés dans les doublages, les faux plafonds et les plinthes techniques. Les saignées sont réservées aux zones sans décor, et les traversées de corniche sont proscrites.",
  },
  {
    q: "Faut-il une autorisation pour modifier des fenêtres sur rue ?",
    a: "En copropriété, la façade est une partie commune : la modification d'aspect d'une menuiserie sur rue relève d'une autorisation de l'assemblée générale, et parfois d'une déclaration préalable en mairie, notamment en secteur protégé.",
  },
];

export default function SavoirFaireAncienPage() {
  return (
    <main>
      <MqHero
        kicker="Savoir-faire"
        title="Charme de l'ancien : fenêtres à l'identique, crémones et moulures restituées"
        lead={
          <>
            <p>
              Restituer un décor ancien demande un relevé avant démolition, des fournisseurs capables de refaire un profil et une mise aux
              normes pensée pour rester invisible.
            </p>
            <p className="mt-4">
              Préserver le charme de l'ancien consiste à relever l'existant avant toute dépose, puis à reproduire les ouvrages disparus à
              l'identique : sections de petits bois, crémones en laiton, profils de corniche, hauteurs de plinthe. ARCHI PILOTE RÉNOVATION
              fait mouler les moulures et corniches par la maison Guimier et fait approvisionner les matériaux techniques du groupe
              Saint-Gobain à La Plateforme du Bâtiment, achetés en direct par le client. Les mises aux normes contemporaines — électricité,
              ventilation, étanchéité — sont intégrées sans dénaturer le décor d'origine.
            </p>
          </>
        }
      />

      <MqSection
        kicker="Ce que nous préservons"
        title="Les ouvrages qui font le cachet d'un logement ancien"
        lead="Six familles d'ouvrages concentrent l'essentiel du caractère d'un appartement haussmannien ou d'une maison de ville ancienne."
      >
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {OUVRAGES.map((o) => (
              <div key={o.title} className="flex flex-col gap-2">
                <h3 className="display text-[1.15rem] text-ivoire">{o.title}</h3>
                <p className="text-muted text-[0.92rem] leading-relaxed">{o.text}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/fenetre-identique-cremone-laiton.jpg"
              alt="Fenêtre en bois reproduite à l'identique dans un appartement haussmannien, petits bois et crémone en laiton"
              caption="Fenêtre reproduite à l'identique : section des petits bois relevée sur l'existant, crémone en laiton restaurée et remontée sur le nouveau châssis."
            />
            <MqFig
              src="/photos/maquette/moulures-corniches-pose.jpg"
              alt="Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant les finitions"
              caption="Corniches, rosace et boiseries restituées en plâtre traditionnel : profils moulés d'après l'existant, fournis par la maison Guimier."
            />
            <MqFig
              src="/photos/maquette/bibliotheque-chene-haussmannien.jpg"
              alt="Bibliothèque en chêne massif encastrée dans un mur d'appartement haussmannien avec moulures et parquet point de Hongrie"
              caption="Bibliothèque encastrée en chêne dans un appartement haussmannien : reprise des moulures existantes et raccord au parquet point de Hongrie."
            />
            <MqFig
              src="/photos/maquette/sejour-haussmannien-renove.jpg"
              alt="Séjour d'appartement haussmannien rénové avec moulures, cheminée en marbre et parquet chêne point de Hongrie"
              caption="Référence de style : séjour haussmannien rénové, moulures et corniches restituées, parquet point de Hongrie et cheminée conservée."
            />
            <MqFig
              src="/photos/chantiers/chComptoirBarColonneFonteCarreauxAnciens.jpeg"
              alt="Colonne en fonte d'origine et carreaux de ciment anciens conservés autour d'un comptoir en cours de finition, chantier réel"
              caption="Colonne en fonte d'origine et carreaux de ciment anciens conservés en fond de niche, intégrés à un comptoir neuf. Chantier réel des équipes partenaires."
            />
            <MqFig
              src="/photos/chantiers/chComptoirBarMouluresFinition.jpeg"
              alt="Comptoir en bois mouluré fini autour d'une colonne en fonte d'origine, chantier réel"
              caption="Comptoir en bois mouluré, panneaux à cadres et moulures, fini autour de la colonne en fonte conservée. Chantier réel des équipes partenaires."
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Menuiseries"
        title="Reproduire une fenêtre à l'identique, crémone comprise"
        lead="Une fenêtre reproduite à l'identique conserve les proportions d'origine tout en atteignant les performances thermiques et acoustiques attendues aujourd'hui."
      >
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/fenetre-identique-cremone-laiton.jpg"
              alt="Fenêtre en bois reproduite à l'identique dans un appartement haussmannien, petits bois et crémone en laiton"
              caption="Fenêtre reproduite à l'identique : section des petits bois relevée sur l'existant, crémone en laiton restaurée et remontée sur le nouveau châssis."
            />
            <MqFig
              src="/photos/maquette/schema-deperditions.jpg"
              alt="Diagramme des déperditions thermiques d'une maison par la toiture, les murs, les menuiseries et le plancher"
              caption="Répartition indicative des déperditions thermiques : la toiture et les murs concentrent l'essentiel des pertes d'un logement ancien."
            />
          </div>
          <MqProse>
            <h3 className="display text-[1.3rem] text-ivoire">Le relevé précède toujours la dépose</h3>
            <p>Chaque châssis est mesuré et photographié avant démontage, quincaillerie comprise.</p>
            <p>
              Sont relevés : la section des montants et traverses, le dessin et l'épaisseur des petits bois, la profondeur de feuillure, la
              hauteur d'allège, le sens d'ouverture et le modèle de crémone. Ce relevé constitue le cahier des charges transmis au menuisier.
            </p>
            <p>
              Sans ce relevé, la menuiserie neuve arrive avec des montants plus larges : la surface vitrée diminue, les proportions se
              déséquilibrent et le cachet disparaît, même avec un matériau noble.
            </p>
            <h3 className="display text-[1.3rem] text-ivoire mt-4">Crémones et espagnolettes : réemploi avant remplacement</h3>
            <p>La quincaillerie ancienne est remise en service chaque fois qu'elle est récupérable.</p>
            <p>
              Les crémones en laiton sont déposées, décapées, lubrifiées et reposées sur le châssis neuf après adaptation des gâches. Une
              pièce manquante est refaite sur modèle plutôt que remplacée par une poignée courante.
            </p>
            <h3 className="display text-[1.3rem] text-ivoire mt-4">Performance sans dénaturation</h3>
            <p>Double vitrage feuilleté, joints d'étanchéité et calfeutrement se logent dans un profil traditionnel.</p>
            <p>
              Le gain acoustique est souvent le premier bénéfice ressenti en front de rue. Le gain thermique n'a de sens que combiné à la
              ventilation : une menuiserie étanche sans extraction correcte déplace le problème vers la condensation.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Plâtrerie décorative"
        title="Moulures, corniches et rosaces : profils moulés par la maison Guimier"
        lead="Les décors en plâtre disparus sont restitués à partir d'un fragment prélevé sur place, non choisis sur catalogue."
      >
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/moulures-corniches-pose.jpg"
              alt="Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant les finitions"
              caption="Corniches, rosace et boiseries restituées en plâtre traditionnel : profils moulés d'après l'existant, fournis par la maison Guimier."
            />
            <MqFig
              src="/photos/maquette/sejour-haussmannien-renove.jpg"
              alt="Séjour d'appartement haussmannien rénové avec moulures, cheminée en marbre et parquet chêne point de Hongrie"
              caption="Référence de style : séjour haussmannien rénové, moulures et corniches restituées, parquet point de Hongrie et cheminée conservée."
            />
          </div>
          <MqChecklist
            cols={1}
            items={[
              "Prélèvement d'un fragment de corniche conservée et relevé du développé.",
              "Commande du profil correspondant auprès de la maison Guimier.",
              "Pose au plâtre traditionnel, calage au cordeau et raccord des angles à la main.",
              "Retouche des jonctions entre partie ancienne conservée et partie restituée.",
              "Peinture après séchage complet, en finition mate pour révéler le relief.",
              "Réservation des réseaux en amont pour éviter toute traversée du décor.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Approvisionnement"
        title="Matériaux du groupe Saint-Gobain, retirés à La Plateforme du Bâtiment"
        lead="Le client achète ses matériaux en direct : la fourniture n'est jamais une source de marge cachée."
      >
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/approvisionnement-materiaux-plateforme.jpg"
              alt="Entrepôt de matériaux de construction avec palettes de plaques de plâtre, laine minérale et sacs d'enduit"
              caption="Approvisionnement en direct : plaques, isolants et enduits du groupe Saint-Gobain retirés à La Plateforme du Bâtiment, facturés au client sans marge."
            />
            <MqFig
              src="/photos/maquette/schema-repartition-budget.jpg"
              alt="Répartition indicative d'un budget de rénovation complète par poste de travaux en pourcentage"
              caption="Répartition indicative d'un budget de rénovation complète par poste : ordres de grandeur, à confirmer par un chiffrage détaillé."
            />
          </div>
          <MqChecklist
            cols={1}
            items={[
              "Les matériaux techniques — plaques de plâtre, isolants, enduits, chapes, colles — proviennent du groupe Saint-Gobain.",
              "Le retrait s'effectue à La Plateforme du Bâtiment, avec un compte ouvert au nom du client lorsqu'il le souhaite.",
              "Le client achète en direct et conserve les factures : aucune marge n'est prise sur la fourniture.",
              "Les quantités sont calculées par ouvrage et vérifiées avant commande pour limiter les chutes et les reliquats.",
              "Les moulures, corniches et rosaces sont commandées auprès de la maison Guimier sur relevé du profil existant.",
              "Le calendrier d'approvisionnement est aligné sur le planning des lots pour éviter le stockage sur chantier.",
            ]}
          />
          <MqProse>
            <p>
              Cette organisation, héritée des méthodes d'achat des foncières, explique une part importante de l'économie constatée sur le
              budget travaux, jusqu'à 20 % d'économies sur le budget travaux.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Déroulé"
        title="Un chantier ancien, de l'état initial à la livraison"
        lead="Douze étapes documentées par photographies datées, transmises au client au fil du chantier."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEROULE.map((f) => (
            <MqFig key={f.caption} src={`/photos/maquette/${f.src}.jpg`} alt={f.alt} caption={f.caption} />
          ))}
        </div>
      </MqSection>

      <MqSection
        kicker="Comparatifs"
        title="Avant / après sur les ouvrages déterminants"
        lead="Les comparatifs portent sur les ouvrages structurants, pas seulement sur les finitions."
      >
        <div className="flex flex-col gap-12">
          {COMPARATIFS.map((c) => (
            <div key={c.title} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="display text-[1.3rem] text-ivoire">{c.title}</h3>
                <p className="text-muted text-[0.95rem] leading-relaxed">{c.text}</p>
              </div>
              {c.avant && c.apres && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <MqFig src={`/photos/maquette/${c.avant.src}.jpg`} alt={c.avant.caption} caption={`Avant : ${c.avant.caption}`} />
                  <MqFig src={`/photos/maquette/${c.apres.src}.jpg`} alt={c.apres.caption} caption={`Après : ${c.apres.caption}`} />
                </div>
              )}
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        kicker="Pédagogie"
        title="Trois schémas pour comprendre les arbitrages techniques"
        lead="Ventilation, étanchéité et structure conditionnent la durabilité d'une rénovation dans l'ancien."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/maquette/schema-vmc.jpg"
            alt="Schéma d'une ventilation mécanique contrôlée avec entrées d'air, bouches d'extraction, gaines et caisson"
            caption="Principe de la ventilation mécanique contrôlée : entrées d'air en pièces sèches, extraction en cuisine et salle d'eau, réseau raccordé au caisson."
          />
          <MqFig
            src="/photos/maquette/schema-etancheite-salle-eau.jpg"
            alt="Coupe d'une salle d'eau montrant la natte d'étanchéité sous carrelage, la bande d'angle, la pente et le siphon"
            caption="Étanchéité sous carrelage : continuité de la natte entre murs et sol, bandes de renfort en angle et pente d'évacuation de 1 à 2 %."
          />
          <MqFig
            src="/photos/maquette/schema-mur-porteur.jpg"
            alt="Schéma en coupe d'une ouverture de mur porteur avec poutre de reprise et poteaux de descente de charge"
            caption="Ouverture de mur porteur : la charge est reprise par une poutre dimensionnée par un ingénieur structure, puis descendue jusqu'aux appuis."
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Rénover l'ancien sans le dénaturer">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-8 border-t border-line">
        <div className="container-site max-w-4xl">
          <p className="border border-line bg-surface rounded-[2px] px-5 py-4 text-[0.85rem] leading-relaxed text-muted">
            <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
            les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque
            nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises
            concernées.
          </p>
        </div>
      </section>

      <MqCta
        title="Un bien ancien à rénover sans perdre son cachet ?"
        lead="Envoyez-nous quelques photographies des décors existants : nous identifions ce qui doit être conservé, restitué ou remplacé, et nous chiffrons les ouvrages correspondants."
      />

      <MqReadNext
        items={[
          { href: "/renovation-appartement", label: "Rénovation d'appartement", sub: "Copropriété, évacuations, ventilation" },
          { href: "/detail-invisible", label: "Le détail invisible", sub: "Ce qui se joue avant les finitions" },
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Achats en direct, transparence" },
        ]}
      />
    </main>
  );
}
