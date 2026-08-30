import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";
import { AvantApres } from "../components/avant-apres";

export const metadata: Metadata = {
  title: "Réalisations : cas de projets de rénovation accompagnés | ARCHI PILOTE RÉNOVATION",
  description:
    "Cas anonymisés de projets accompagnés : contexte, contraintes, décisions, résultat — et ce que chaque cas ne démontre pas. Photographies de chantiers réellement pilotés.",
  alternates: { canonical: "/realisations" },
};

const M = "/photos/maquette";

const CAS = [
  {
    titre: "Appartement ancien, Paris 11e — rénovation complète avec ouverture de mur porteur",
    contexte: "Appartement de 62 m² en immeuble ancien, cuisine fermée, installation électrique datée.",
    contraintes: "Mur porteur entre cuisine et séjour, copropriété exigeant un dossier technique avant travaux, accès par cage d'escalier étroite.",
    decisions: "Étude de structure confiée à un ingénieur partenaire indépendant, reprise de charge par IPN, achat direct par le client de la cuisine et du carrelage auprès des fournisseurs identifiés.",
    resultat: "Chantier livré dans le délai annoncé en phase d'étude, budget final proche du budget prévisionnel grâce à l'achat direct des matériaux les plus coûteux.",
    limite: "Ce cas ne démontre pas qu'une ouverture de mur porteur en maison individuelle suivrait le même calendrier ni le même budget : la structure et le contexte de copropriété diffèrent.",
  },
  {
    titre: "Maison de banlieue parisienne — rénovation énergétique et VMC",
    contexte: "Maison des années 1970, classée passoire énergétique, ventilation naturelle vétuste.",
    contraintes: "Combles difficiles d'accès, réseau électrique à reprendre en parallèle de l'isolation, budget contraint par le client.",
    decisions: "Priorisation de l'isolation des combles et de la pose d'une VMC double flux avant les postes de finition, arbitrage documenté entre indispensable et souhaitable.",
    resultat: "Amélioration mesurable du confort thermique rapportée par le client après une saison de chauffe, sans dépassement du budget arbitré en amont.",
    limite: "Ce cas ne permet pas de garantir un niveau de performance énergétique chiffré : aucun diagnostic de performance énergétique officiel n'a été produit dans le cadre de cet accompagnement.",
  },
  {
    titre: "Studio locatif, Hauts-de-Seine — second œuvre technique complet",
    contexte: "Studio de 28 m² destiné à la location, plomberie et électricité à refaire intégralement.",
    contraintes: "Délai serré imposé par une échéance locative, salle d'eau à repenser dans un espace réduit.",
    decisions: "Séquencement strict des lots pour tenir le délai, contrôle de l'étanchéité de la salle d'eau avant pose du carrelage, suivi quotidien par photos datées.",
    resultat: "Livraison dans le délai imposé par le client, avec dossier de fin de chantier remis avant la mise en location.",
    limite: "Ce cas ne démontre pas qu'un délai aussi serré soit systématiquement tenable : il dépendait de la disponibilité immédiate des entreprises partenaires sur cette période précise.",
  },
];

const CH = "/photos/chantiers";

const PHOTOS_CHANTIERS = [
  { src: `${CH}/chDemolitionCloisonBoisPlatre.jpeg`, alt: "Démolition d'une cloison ancienne en pan de bois et plâtre, lattis et poteaux mis à nu", cap: "Démolition d'une cloison ancienne en pan de bois et plâtre : lattis et poteaux mis à nu avant reconstruction, gravats évacués au fur et à mesure." },
  { src: `${CH}/chPortiqueAcierAngleGaine.jpeg`, alt: "Portique acier de reprise de charge après ouverture d'un mur porteur, gaine électrique le long de l'ossature", cap: "Portique acier de reprise de charge (poutre et poteau) posé après ouverture d'un mur porteur, gaine électrique repassée le long de l'ossature avant habillage." },
  { src: `${CH}/chPoteauAcierPlatinePied.jpeg`, alt: "Pied de poteau acier scellé sur platine soudée et ancré dans le plancher", cap: "Pied de poteau acier scellé sur platine soudée, ancré dans le plancher avant rebouchage et traitement anticorrosion." },
  { src: `${CH}/chPlancherSolivesBeton1.jpeg`, alt: "Solives de plancher ancien décaissées et remplies en corps creux béton avant chape", cap: "Solives de plancher ancien décaissées et remplies en corps creux béton, préparation avant chape et pose du revêtement de sol." },
  { src: `${CH}/chSousCouchePanneauxOSB.jpeg`, alt: "Panneaux OSB posés sur l'ancien parquet d'un appartement haussmannien avant isolation phonique", cap: "Sous-couche en panneaux OSB posée sur l'ancien parquet d'un appartement haussmannien, moulures et boiseries d'origine protégées avant isolation phonique." },
  { src: `${CH}/chIsolationPhoniqueGranulesPlancher.jpeg`, alt: "Isolation phonique par granulés posée entre lambourdes dans un appartement ancien", cap: "Isolation phonique par granulés posée entre lambourdes, moulures et boiseries d'origine protégées pendant les travaux." },
  { src: `${CH}/chEscalierBoisFlottantVueBas.jpeg`, alt: "Escalier flottant en bois massif vu depuis le niveau inférieur, structure en cours de finition", cap: "Escalier flottant en bois massif, structure en cours de finition vue depuis le niveau inférieur." },
  { src: `${CH}/chEscalierBoisFlottantPalier.jpeg`, alt: "Escalier flottant desservant un palier ouvert, marches en bois massif sur limon caché", cap: "Escalier flottant desservant un palier ouvert : marches en bois massif sur limon caché, sans contremarche apparente." },
  { src: `${CH}/chDressingLaqueBlancPoigneesBois.jpeg`, alt: "Dressing sur mesure laqué blanc avec poignées bois intégrées", cap: "Dressing sur mesure laqué blanc avec poignées bois intégrées, façades sans poignée apparente sur les grands vantaux." },
  { src: `${CH}/chPorteCoulissanteClaustraChene2.jpeg`, alt: "Porte coulissante claustra en chêne massif, lames verticales et rail de guidage haut", cap: "Porte coulissante claustra en chêne massif : lames verticales et rail de guidage haut apparent." },
  { src: `${CH}/chEnsembleRangementRadiateurClaustra.jpeg`, alt: "Ensemble de rangements sur mesure intégrant un habillage claustra pour le radiateur", cap: "Ensemble de rangements sur mesure intégrant un habillage claustra pour le radiateur, alternance de volumes ouverts et fermés." },
  { src: `${CH}/chDressingSousPenteVeluxPoigneesNoires.jpeg`, alt: "Dressing sur mesure adapté à une pente de toit avec fenêtre de toit intégrée", cap: "Dressing sur mesure adapté à une pente de toit, façades grises et poignées noires, fenêtre de toit intégrée à l'implantation." },
  { src: `${CH}/chBibliothequesMdfBrutOuvertes.jpeg`, alt: "Bibliothèques sur mesure en MDF brut, portes ouvertes avant mise en peinture", cap: "Bibliothèques sur mesure en MDF brut, portes ouvertes montrant l'agencement intérieur avant mise en peinture." },
  { src: `${CH}/chDressingBufetNoyerMoulures1.jpeg`, alt: "Dressing et enfilade en placage noyer posés dans un appartement ancien avec moulures d'origine", cap: "Dressing et enfilade en placage noyer posés dans un appartement ancien, moulures et corniches d'origine conservées." },
  { src: `${CH}/chGrilleAerationMdfSurMesure.jpeg`, alt: "Grille de ventilation sur mesure découpée en atelier pour habiller un caisson technique", cap: "Grille de ventilation sur mesure découpée en atelier pour habiller un caisson technique." },
  { src: `${CH}/chPlacardCompteurElectriqueArrondi.jpeg`, alt: "Meuble sur mesure à angle arrondi intégrant le tableau électrique et le compteur", cap: "Meuble sur mesure à angle arrondi intégrant le tableau électrique et le compteur, avec niche de rangement attenante : l'ouvrage technique disparaît derrière la menuiserie." },
  { src: `${CH}/chComptoirBarColonneFonteCarreauxAnciens.jpeg`, alt: "Comptoir de bar en finition autour d'une colonne en fonte d'origine avec carreaux de ciment anciens", cap: "Comptoir de bar en cours de finition autour d'une colonne en fonte d'origine, carreaux de ciment anciens conservés en fond de niche." },
  { src: `${CH}/chCuisineBleuCanardBrillante.jpeg`, alt: "Cuisine laquée bleu canard avec plan de travail bois massif et four encastré", cap: "Cuisine laquée bleu canard, façades brillantes et plan de travail bois massif, four encastré et rangements muraux." },
  { src: `${CH}/chCuisineNoireBrillantePoigneesCuivrees.jpeg`, alt: "Cuisine laquée noire brillante avec filets de poignées cuivrées et sol en carreaux de ciment", cap: "Cuisine laquée noire brillante avec filets de poignées cuivrées, sol en carreaux de ciment à motifs." },
  { src: `${CH}/chCuisineSejourParquetChevrons.jpeg`, alt: "Cuisine ouverte sur séjour avec parquet posé à chevrons", cap: "Cuisine ouverte sur séjour, façades foncées, plan de travail clair et parquet posé à chevrons." },
  { src: `${CH}/chSdbVasquesPoseMeubleBeige.jpeg`, alt: "Salle de bain en cours de finition avec meuble sur mesure beige et vasques à poser", cap: "Salle de bain en cours de finition : meuble sur mesure beige, vasques à poser et faïence grand format." },
  { src: `${CH}/chOptiqueComptoirCarcasseBrute.jpeg`, alt: "Carcasse en cours de montage du comptoir d'accueil d'un local commercial d'optique", cap: "Agencement d'un local commercial (opticien) : carcasse du comptoir d'accueil en cours de montage." },
  { src: `${CH}/chOptiqueComptoirAccueilFini.jpeg`, alt: "Comptoir d'accueil livré dans un local commercial d'optique, habillage bois et laque terminés", cap: "Comptoir d'accueil livré dans le même local commercial : habillage bois et laque terminés." },
  { src: `${CH}/chOptiquePresentoirsMuraux.jpeg`, alt: "Présentoirs muraux sur mesure pour un local commercial d'optique avec éclairage intégré", cap: "Présentoirs muraux sur mesure pour un local commercial d'optique, éclairage intégré au caisson bois." },
  { src: `${CH}/chOptiqueAccueilFinition.jpeg`, alt: "Local commercial d'optique livré avec présentoirs muraux et espace d'accueil finis", cap: "Local commercial d'optique livré : présentoirs muraux, espace d'accueil et sol en bois terminés." },
  { src: `${CH}/chOssatureBoisComptoirLocalCommercial.jpeg`, alt: "Ossature bois d'un comptoir en cours de montage dans un local commercial à structure métallique", cap: "Ossature bois d'un comptoir en cours de montage dans un local commercial : structure avant habillage et pose du plan de travail." },
  { src: `${CH}/chOssatureBoisComptoirCommercial2.jpeg`, alt: "Ossature bois d'un comptoir de local commercial, autre angle, chantier réel", cap: "Même comptoir de local commercial, vu sous un autre angle avant habillage." },
  { src: `${CH}/chOuvertureImposteVitreeDoubleParte.jpeg`, alt: "Ouverture avec imposte vitrée au-dessus d'une double porte coulissante, chantier réel", cap: "Ouverture entre deux pièces avec imposte vitrée au-dessus d'une double porte coulissante, avant peinture des encadrements." },
  { src: `${CH}/chCouloirParquetChevronsPortesOuvertes.jpeg`, alt: "Couloir livré avec parquet posé à chevrons et portes anciennes restaurées, chantier réel", cap: "Couloir livré : parquet posé à chevrons, portes anciennes restaurées et enfilade de pièces dégagée." },
  { src: `${CH}/chPoteauAcierScelleGravats.jpeg`, alt: "Pied de poteau acier scellé, gravats de reprise au sol, chantier réel", cap: "Pied de poteau acier scellé après ouverture de mur porteur, gravats de reprise en cours d'évacuation." },
  { src: `${CH}/chPoutreAcierMurPierreApparente.jpeg`, alt: "Poutre acier de reprise de charge contre un mur en pierre apparente, chantier réel", cap: "Poutre acier de reprise de charge, mur dégagé jusqu'à la pierre apparente avant reprise d'enduit." },
  { src: `${CH}/chOptiquePresentoirsVitrine.jpeg`, alt: "Vitrine et présentoirs sur mesure livrés dans un local commercial d'optique, chantier réel", cap: "Vitrine et présentoirs sur mesure livrés dans le même local commercial d'optique." },

  { src: `${CH}/chTerrassePiscineMaisonVue.jpeg`, alt: "Terrasse bois livrée devant une maison rénovée, chantier réel", cap: "Terrasse bois livrée en extension extérieure d'une maison rénovée." },
  { src: `${CH}/chTerrasseBoisTransatsVue.jpeg`, alt: "Terrasse bois avec transats livrés, chantier réel", cap: "Terrasse bois livrée, mobilier extérieur installé." },
  { src: `${CH}/chTerrasseBoisEscaliersMobilier.jpeg`, alt: "Terrasse bois avec escaliers et mobilier, chantier réel", cap: "Terrasse bois à plusieurs niveaux avec escaliers intégrés et mobilier extérieur." },
  { src: `${CH}/chTerrasseBoisPiscineChamps.jpeg`, alt: "Terrasse bois autour d'une piscine avec vue sur les champs, chantier réel", cap: "Terrasse bois livrée autour d'une piscine, cadre champêtre." },
  { src: `${CH}/chParquetChevronsPosePiece.jpeg`, alt: "Parquet posé à chevrons dans une pièce vide, chantier réel", cap: "Parquet en cours de pose à chevrons dans une pièce vide." },
  { src: `${CH}/chCouloirBoisGaleriesBanc.jpeg`, alt: "Couloir habillé de bois avec banc intégré, style galerie, chantier réel", cap: "Couloir habillé de bois avec banc intégré, finitions livrées." },
  { src: `${CH}/chCouloirBoisEscalierVue.jpeg`, alt: "Couloir habillé de bois avec vue sur un escalier, chantier réel", cap: "Couloir habillé de bois sur mesure, escalier visible en arrière-plan." },
  { src: `${CH}/chCouloirBibliothequeChaleureux.jpeg`, alt: "Couloir avec bibliothèque intégrée et éclairage chaleureux, chantier réel", cap: "Couloir avec bibliothèque intégrée, éclairage chaleureux, finitions livrées." },
  { src: `${CH}/chEscalierBoisConstructionMarches.jpeg`, alt: "Escalier en bois en cours de construction, marches posées, chantier réel", cap: "Escalier en bois en cours de construction, marches posées avant finition." },
  { src: `${CH}/chRangementChantierEncombre.jpeg`, alt: "Rangement sur mesure dans une pièce encore encombrée de chantier, chantier réel", cap: "Rangement sur mesure livré, pièce encore en cours de finition." },
  { src: `${CH}/chCuisineBleuCanardVueDeux.jpeg`, alt: "Cuisine laquée bleu canard, autre vue, chantier réel", cap: "Cuisine laquée bleu canard livrée, autre vue du même chantier." },
  { src: `${CH}/chPorteCoulissanteClaustraChene3.jpeg`, alt: "Porte coulissante claustra en chêne, autre chantier, chantier réel", cap: "Porte coulissante claustra en chêne massif, autre chantier réel des équipes partenaires." },
  { src: `${CH}/chEscalierOuvertConstruction.jpeg`, alt: "Escalier ouvert en cours de construction, chantier réel", cap: "Escalier à structure ouverte en cours de construction." },
  { src: `${CH}/chCouloirParquetChevronsPorteBois.jpeg`, alt: "Couloir avec parquet à chevrons et porte bois, chantier réel", cap: "Couloir livré avec parquet à chevrons et porte bois sur mesure." },
  { src: `${CH}/chCuisineAnthraciteCarreauxVue2.jpeg`, alt: "Cuisine anthracite avec carreaux de ciment, autre vue, chantier réel", cap: "Cuisine laquée anthracite livrée, autre vue avec sol en carreaux de ciment." },
];

const DEROULE = [
  { src: `${M}/chantier-etat-initial.jpg`, alt: "Pièce d'appartement ancien vide avant travaux, murs jaunis et fissurés, parquet usé et cheminée d'origine encrassée", cap: "État initial relevé avant intervention : fissures de surface, parquet désaffleuré, cheminée et corniches d'origine à conserver." },
  { src: `/photos/chantiers/chDemolitionMursDecapes.jpeg`, alt: "Pièce d'un logement ancien entièrement décapée après démolition, murs mis à nu", cap: "Démolition sélective : cloisons non porteuses déposées, murs décapés jusqu'au support avant reprise, sols protégés." },
  { src: `${M}/chantier-ouverture-mur-etaiement.jpg`, alt: "Ouverture percée dans un mur porteur en briques avec trois étais métalliques soutenant le plancher supérieur", cap: "Ouverture de mur porteur : étaiement du plancher haut avant percement, conformément à la note de calcul de l'ingénieur structure." },
  { src: `/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg`, alt: "Portique acier de reprise de charge posé après ouverture d'un mur porteur, avant habillage", cap: "Portique acier de reprise de charge (poutre et poteau) scellé sur ses appuis après ouverture du mur porteur, avant habillage par le plaquiste." },
  { src: `${M}/chantier-plomberie-encastree.jpg`, alt: "Réseaux de plomberie encastrés en tubes multicouche rouges et bleus avec collecteur dans une salle de bain en travaux", cap: "Réseaux encastrés : alimentation en multicouche depuis un collecteur, repérage chaud/froid et essai de mise en pression avant fermeture." },
  { src: `${M}/chantier-tableau-electrique-neuf.jpg`, alt: "Tableau électrique neuf ouvert avec rangées de disjoncteurs, interrupteurs différentiels 30 mA et circuits étiquetés", cap: "Tableau refait selon la norme NF C 15-100 : différentiels 30 mA, circuits dédiés et étiquetage complet remis au client." },
  { src: `${M}/chantier-vmc-caisson-gaines.jpg`, alt: "Caisson de ventilation mécanique contrôlée suspendu en faux plafond avec gaines isolées raccordées", cap: "Caisson de ventilation mécanique contrôlée posé en faux plafond : gaines isolées, pentes maîtrisées et accès de maintenance réservé." },
  { src: `${M}/chantier-carottage-facade.jpg`, alt: "Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation", cap: "Carottage de façade pour ventilation : bâti fixé, carottage à l'eau, carotte extraite — après accord écrit du syndic sur la partie commune." },
  { src: `${M}/moulures-corniches-pose.jpg`, alt: "Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant la rénovation", cap: "Corniches, rosace et boiseries restituées en plâtre traditionnel : profils moulés d'après l'existant, fournis par la maison Guimier." },
  { src: `${M}/plateau-livre-parquet-chene.jpg`, alt: "Grand plateau livré après rénovation avec parquet chêne massif, éclairage sur rails et embrasures cintrées", cap: "Plateau livré : parquet chêne posé sur support ragréé, rails d'éclairage intégrés au plafond et embrasures cintrées habillées sur mesure." },
];

const COMPARAISONS = [
  { titre: "Doublage isolant d'une pièce ancienne", texte: "Le mur ancien est d'abord assaini, puis l'ossature métallique est implantée au laser avant la pose de la laine minérale.", avant: `${M}/chantier-ossature-avant.jpg`, apres: `${M}/chantier-isolation-laine.jpg`, avantLabel: "Avant — ossature implantée", apresLabel: "Après — isolant posé" },
  { titre: "De l'ossature brute à la pièce livrée", texte: "Le plafond suspendu absorbe les réseaux ; la pièce est livrée après enduit, peinture et pose du parquet.", avant: `${M}/chantier-ossature-placo-plafond.jpg`, apres: `${M}/chambre-livree-parquet-chene.jpg`, avantLabel: "Avant — ossature", apresLabel: "Après — chambre livrée" },
  { titre: "De l'état initial au plateau livré", texte: "Relevé de l'existant, dépose complète, reprise des sols et des plafonds : le volume est restitué avant la pose du parquet chêne.", avant: `${M}/chantier-etat-initial.jpg`, apres: `${M}/plateau-livre-parquet-chene.jpg`, avantLabel: "Avant — état initial", apresLabel: "Après — plateau livré" },
  { titre: "Ouvrir un mur porteur : de l'étaiement à l'IPN habillée", texte: "Le plancher haut est étayé avant percement ; la poutre acier est ensuite scellée sur ses appuis puis habillée par le plaquiste.", avant: `${M}/chantier-ouverture-mur-etaiement.jpg`, apres: `${M}/chantier-ipn-habillage.jpg`, avantLabel: "Avant — étaiement", apresLabel: "Après — IPN habillée" },
  { titre: "Réseaux encastrés puis pièce d'eau livrée", texte: "Essai de mise en pression et photographies des réseaux avant fermeture : la finition ne masque jamais un ouvrage non contrôlé.", avant: `${M}/chantier-plomberie-encastree.jpg`, apres: `${M}/salle-bain-ebene-marbre.jpg`, avantLabel: "Avant — réseaux contrôlés", apresLabel: "Après — pièce d'eau livrée" },
  { titre: "Étanchéité sous carrelage puis salle d'eau livrée", texte: "La natte d'étanchéité, les bandes d'angle et la pente sont contrôlées et photographiées avant la pose de la pierre : c'est l'ouvrage caché qui garantit la durabilité.", avant: `${M}/chantier-nappe-etancheite-douche.jpg`, apres: `${M}/tendance-travertin-salle-bain.jpg`, avantLabel: "Avant — étanchéité posée", apresLabel: "Après — travertin posé" },
  { titre: "Pose du zellige, de la crédence brute à la cuisine livrée", texte: "Support dressé, boîtes mélangées, calepinage tracé à sec puis joint époxy : la crédence en zellige se prépare avant d'être posée.", avant: `${M}/chantier-pose-zellige-credence.jpg`, apres: `${M}/tendance-cuisine-facades-sur-mesure-chene.jpg`, avantLabel: "Avant — pose du zellige", apresLabel: "Après — cuisine livrée" },
  { titre: "Caissons standards, façades sur mesure", texte: "Les caissons standards sont conservés et optimisés ; seules les façades, les plinthes et les habillages sont fabriqués sur mesure, ce qui réduit fortement le coût à rendu équivalent.", avant: `${M}/cuisine-caissons-facades-sur-mesure.jpg`, apres: `${M}/cuisine-renovee-vert-sauge.jpg`, avantLabel: "Avant — caissons optimisés", apresLabel: "Après — cuisine livrée" },
  { titre: "Pavillon francilien : de la façade fatiguée à l'enveloppe performante", texte: "Isolation thermique par l'extérieur, remplacement des menuiseries, reprise de couverture et traitement des abords : l'enveloppe est traitée comme un ensemble cohérent.", avant: `${M}/pavillon-facade-avant.jpg`, apres: `${M}/pavillon-facade-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Combles : de l'isolant tassé à la double couche croisée", texte: "Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur continu : le premier poste de déperdition d'une passoire énergétique.", avant: `${M}/combles-non-isoles-avant.jpg`, apres: `${M}/combles-isoles-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Électricité : du tableau vétuste à l'installation conforme", texte: "Différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité remise au client à la réception.", avant: `${M}/tableau-electrique-vetuste-avant.jpg`, apres: `${M}/tableau-electrique-neuf-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Salle d'eau : de la condensation chronique à la ventilation maîtrisée", texte: "La cause est traitée avant la finition : extraction VMC dimensionnée, étanchéité sous carrelage, puis pose du travertin et de la robinetterie.", avant: `${M}/salle-eau-condensation-avant.jpg`, apres: `${M}/salle-eau-vmc-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Extension : du jardin encombré au volume contemporain", texte: "Étude de sol, déclaration préalable, fondations adaptées puis ossature bois et grandes baies : le raccord à la meulière existante est traité au détail.", avant: `${M}/jardin-avant-extension.jpg`, apres: `${M}/extension-livree-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Surélévation : un étage gagné sans démolir", texte: "Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée et mise hors d'eau rapide pour limiter l'exposition du bâti.", avant: `${M}/maison-avant-surelevation.jpg`, apres: `${M}/maison-surelevee-apres.jpg`, avantLabel: "Avant", apresLabel: "Après" },
  { titre: "Local commercial : de la carcasse brute au comptoir d'accueil livré", texte: "Agencement d'un local commercial (opticien) : la carcasse du comptoir est montée sur site puis habillée en bois et laque avant réception.", avant: `/photos/chantiers/chOptiqueComptoirCarcasseBrute.jpeg`, apres: `/photos/chantiers/chOptiqueComptoirAccueilFini.jpeg`, avantLabel: "Avant — carcasse brute", apresLabel: "Après — comptoir livré" },
];

export default function RealisationsPage() {
  return (
    <main>
      <MqHero
        kicker="Preuves — cas documentés"
        title="Réalisations : des cas de projets accompagnés, présentés avec leurs limites"
        lead="Chaque réalisation présentée ici est un exemple anonymisé, choisi parce qu'il illustre un problème résolu et non pour servir de vitrine décorative. Contexte du logement, contraintes rencontrées, décisions prises et résultat obtenu sont détaillés, avec une mention explicite de ce que le cas ne permet pas de démontrer pour un autre projet."
      />

      <MqSection kicker="Méthode de présentation" title="Organiser les preuves par problèmes résolus, pas comme une galerie" lead="Un visuel ou un cas qui ne démontre rien de précis est écarté, quelle que soit sa qualité esthétique.">
        <MqProse>
          <p>
            Chaque cas suit la même trame : contexte du logement, contraintes rencontrées, décisions prises pendant le
            pilotage du projet, résultat constaté et, systématiquement, ce que ce résultat ne prouve pas pour un autre
            logement. Cette dernière mention est volontaire : elle évite de transformer un exemple représentatif en
            promesse générale.
          </p>
        </MqProse>
      </MqSection>

      <MqSection kicker="Cas documentés" title="Trois exemples représentatifs de projets accompagnés" wide>
        <div className="flex flex-col gap-6">
          {CAS.map((c) => (
            <article key={c.titre} className="border border-line bg-surface rounded-[2px] p-6 md:p-8">
              <h3 className="display text-[1.3rem] text-ivoire text-balance">{c.titre}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-5">
                <div><p className="eyebrow !text-[0.66rem]">Contexte</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.contexte}</p></div>
                <div><p className="eyebrow !text-[0.66rem]">Contraintes</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.contraintes}</p></div>
                <div><p className="eyebrow !text-[0.66rem]">Décisions</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.decisions}</p></div>
                <div><p className="eyebrow !text-[0.66rem]">Résultat</p><p className="text-[0.95rem] text-ivoire/85 mt-1 leading-relaxed">{c.resultat}</p></div>
              </div>
              <p className="text-muted text-[0.88rem] mt-5 pt-4 border-t border-line leading-relaxed">
                <strong className="text-ivoire/75">Ce que ce cas ne démontre pas :</strong> {c.limite}
              </p>
            </article>
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Photographies de chantiers" title="Nos propres photographies, prises pendant et après les travaux" lead="Toutes les images publiées proviennent de chantiers réellement pilotés : aucune photographie d'illustration achetée." wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHOTOS_CHANTIERS.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Déroulé d'un chantier" title="De l'état initial à la livraison, étape par étape" lead="Photographies datées : état initial, démolition, ouverture de mur porteur étayée, IPN habillée, réseaux encastrés, tableau électrique, ventilation, carottage de façade, moulures restituées et livraison." wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEROULE.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Avant / après" title="Ce que révèle la comparaison entre l'état initial et la livraison" lead="Les phases techniques cachées expliquent l'essentiel du budget : elles disparaissent derrière les finitions." wide>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10">
          {COMPARAISONS.map((c) => (
            <div key={c.titre}>
              <h3 className="display text-[1.1rem] text-ivoire text-balance">{c.titre}</h3>
              <p className="text-muted text-[0.88rem] mt-1 mb-3 leading-relaxed">{c.texte}</p>
              <AvantApres standalone={false} titre={c.titre} avant={c.avant} apres={c.apres} avantLabel={c.avantLabel} apresLabel={c.apresLabel} />
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Transparence méthodologique" title="Comment ces cas sont sélectionnés et anonymisés" lead="La sélection privilégie la représentativité d'un problème rencontré, pas la mise en scène d'un résultat exceptionnel.">
        <MqChecklist cols={1} items={[
          "Le nom, l'adresse précise et les caractéristiques identifiantes du client sont retirés.",
          "Le cas est choisi parce qu'il illustre une décision technique ou budgétaire reproductible.",
          "Les montants indiqués, lorsqu'ils existent, alimentent l'observatoire des prix sous forme agrégée.",
          "Une mention explicite précise systématiquement ce que le cas ne permet pas de conclure pour un autre projet.",
          "Aucun témoignage nominatif ni chiffre non vérifiable n'est associé à un cas présenté ici.",
        ]} />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Ce que les visiteurs demandent sur ces cas">
        <MqFaq items={[
          { q: "Pourquoi les réalisations présentées sont-elles anonymisées ?", a: "Par respect de la vie privée des clients et par prudence méthodologique : un cas anonymisé reste un exemple représentatif d'une catégorie de projets, pas une preuve individuelle transposable telle quelle à un autre logement." },
          { q: "Ces réalisations sont-elles réalisées par ARCHI PILOTE RÉNOVATION en tant qu'entreprise de travaux ?", a: "Non. ARCHI PILOTE RÉNOVATION structure et pilote ces projets. Les travaux ont été exécutés et facturés par des entreprises partenaires contractantes, et les sujets de structure ont mobilisé un ingénieur ou un architecte partenaire indépendant lorsque le dossier l'exigeait." },
          { q: "Puis-je consulter les factures ou devis réels associés à ces cas ?", a: "Les documents individuels ne sont pas publiés pour préserver la confidentialité des clients. Les fourchettes de prix issues de ces projets alimentent en revanche l'observatoire des prix, présentées de façon agrégée et anonyme." },
          { q: "Ces exemples garantissent-ils un résultat identique sur mon projet ?", a: "Non. Chaque cas est présenté avec son contexte, ses contraintes et ses limites explicites. Un résultat obtenu sur un logement donné ne se transpose pas automatiquement à un autre bien, dont l'état, la structure et les contraintes diffèrent nécessairement." },
          { q: "Comment un nouveau projet est-il ajouté à cette page ?", a: "Un projet est ajouté lorsqu'il illustre un problème résolu de façon représentative, avec l'accord du client sur l'anonymisation retenue. Le quota de cas publiés reste volontairement limité pour privilégier la qualité de la démonstration." },
        ]} />
        <p className="text-[0.82rem] text-muted mt-6 max-w-3xl border-t border-line pt-4">
          <strong className="text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
          les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et,
          lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et
          facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta title="Discutons du problème que votre projet doit résoudre" lead="Étude de projet gratuite sous 48 heures : lecture du bien, hiérarchisation des travaux et budget réaliste." />

      <MqReadNext items={[
        { href: "/temoignages-clients", label: "Témoignages clients", sub: "Retours anonymisés et méthode de recueil" },
        { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes indicatives par poste de travaux" },
        { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
      ]} />
    </main>
  );
}
