import type { Metadata } from "next";
import Link from "next/link";
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

/* 03/09/2026 — CARTE D'USAGE ET DÉDOUBLONNAGE DE LA GALERIE.
   Le client signale que les mêmes photos reviennent partout. Deux mesures ont été faites sur cette
   page. (a) Comptage `grep` sur app/ (commentaires exclus) du nombre de pages qui servent chaque
   image. (b) Comparaison PERCEPTUELLE des 140 images distinctes de la page deux à deux (empreinte
   32×32 en niveaux de gris, distance quadratique moyenne) : sept paires sont ressorties à une
   distance ≤ 0,005, c'est-à-dire le MÊME cliché enregistré sous deux noms de fichiers différents —
   la galerie les affichait donc deux fois, et trois de ces doublons portaient même la mention
   « autre vue » ou « autre chantier » dans leur légende, ce qui était faux. Chaque paire a été
   revérifiée à l'œil, côte à côte, avant suppression :
     chCuisineNoireBrillantePoigneesCuivrees ≡ chCuisineAnthraciteCarreauxVue2
     chEscalierBoisFlottantPalier            ≡ chEscalierOuvertConstruction
     chEscalierBoisFlottantVueBas            ≡ chEscalierBoisConstructionMarches
     chCuisineBleuCanardBrillante            ≡ chCuisineBleuCanardVueDeux
     chEnsembleRangementRadiateurClaustra    ≡ chRangementRadiateurEtageresOuvertes
     chCouloirParquetChevronsPortesOuvertes  ≡ chCouloirParquetChevronsPorteBois
     chPorteCoulissanteClaustraChene2        ≡ chPorteCoulissanteClaustraChene3
   Dans chaque paire, c'est l'exemplaire employé sur le MOINS de pages du site qui a été conservé.
   S'y ajoutent deux quasi-jumelles (distance 0,14 et 0,31) : chPortiqueAcierAngleGaine /
   chPoutreAcierAngleSoudeVue1 et chDemolitionMursDecapes / chDemolitionDegagementVersSejour, cadrées
   à quelques centimètres près sur le même ouvrage — une seule de chaque est conservée. */
const PHOTOS_CHANTIERS = [
  /* chDemolitionCloisonBoisPlatre était employée sur 4 pages (demarches-administratives-renovation,
     gros-oeuvre-structure, renovation-appartement et ici) : c'est le mur éventré que le client voit
     revenir. Attention au piège : chDemolitionGravatsChantier, qui semblait un remplaçant idéal
     (employée nulle part), est en réalité LE MÊME cliché (distance 0,00) — le renommer n'aurait rien
     changé pour le visiteur. La remplaçante retenue, chDemolitionLattisPlatreChantier1, n'est employée
     sur aucune page et montre un autre ouvrage : une cloison en pan de bois dont le plâtre a été
     décroché, poteaux et lattes apparents. */
  /* 05/09 : chDemolitionLattisPlatreChantier1 retirée de la galerie. Elle illustre
     désormais la section démolition de /gros-oeuvre-structure, et elle reste employée par
     deux articles de blog — la garder ici en faisait une quatrième apparition. La galerie
     conserve une scène de démolition, chDemolitionMursDecapes, plus bas. */
  { src: `${CH}/chPortiqueAcierAngleGaine.jpeg`, alt: "Portique acier de reprise de charge après ouverture d'un mur porteur, gaine électrique le long de l'ossature", cap: "Portique acier de reprise de charge (poutre et poteau) posé après ouverture d'un mur porteur, gaine électrique repassée le long de l'ossature avant habillage." },
  { src: `${CH}/chPoteauAcierPlatinePied.jpeg`, alt: "Pied de poteau acier scellé sur platine soudée et ancré dans le plancher", cap: "Pied de poteau acier scellé sur platine soudée, ancré dans le plancher avant rebouchage et traitement anticorrosion." },
  { src: `${CH}/chPlancherSolivesBeton1.jpeg`, alt: "Solives de plancher ancien décaissées et remplies en corps creux béton avant chape", cap: "Solives de plancher ancien décaissées et remplies en corps creux béton, préparation avant chape et pose du revêtement de sol." },
  /* chIsolationPhoniqueGranulesPlancher a été retirée d'ici pour deux raisons cumulées. (1) Elle est
     identique au bit près à chDemolitionBoiseriesHaussmannien, employée sur /renovation-complete et
     /savoir-faire-ancien : le visiteur voyait donc ce salon quatre fois sur le site. (2) Elle était
     affichée juste à côté de chSousCouchePanneauxOSB ci-dessous, qui est LE MÊME ANGLE DE LA MÊME
     PIÈCE à une étape plus tard (même boiserie panneautée, mêmes volets persiennés, même fenêtre sur
     cour, même câble blanc en travers) : deux vignettes voisines sur le même coin de pièce.
     La vue conservée est celle qui est employée sur le moins de pages.
     Légende de chSousCouchePanneauxOSB corrigée au passage : elle annonçait des panneaux posés « sur
     l'ancien parquet » et des boiseries « protégées », alors que la vue jumelle montre justement le
     parquet déposé jusqu'aux solives et qu'aucune protection n'est visible sur les boiseries. */
  { src: `${CH}/chSousCouchePanneauxOSB.jpeg`, alt: "Panneaux OSB posés sur toute la surface du plancher d'un salon haussmannien, boiseries panneautées et volets intérieurs persiennés en place", cap: "Plancher d'un salon haussmannien refait : panneaux OSB posés bord à bord sur toute la surface, prêts à recevoir le revêtement de sol. Les boiseries panneautées, les volets intérieurs persiennés et la porte-fenêtre sur cour sont restés en place pendant l'opération. Chantier réel des équipes partenaires." },
  { src: `${CH}/chEscalierBoisFlottantVueBas.jpeg`, alt: "Escalier flottant en bois massif vu depuis le niveau inférieur, structure en cours de finition", cap: "Escalier flottant en bois massif, structure en cours de finition vue depuis le niveau inférieur." },
  { src: `${CH}/chEscalierBoisFlottantPalier.jpeg`, alt: "Escalier flottant desservant un palier ouvert, marches en bois massif sur limon caché", cap: "Escalier flottant desservant un palier ouvert : marches en bois massif sur limon caché, sans contremarche apparente." },
  { src: `${CH}/chDressingLaqueBlancPoigneesBois.jpeg`, alt: "Dressing sur mesure laqué blanc avec poignées bois intégrées", cap: "Dressing sur mesure laqué blanc avec poignées bois intégrées, façades sans poignée apparente sur les grands vantaux." },
  { src: `${CH}/chPorteCoulissanteClaustraChene2.jpeg`, alt: "Porte coulissante claustra en chêne massif, lames verticales et rail de guidage haut", cap: "Porte coulissante claustra en chêne massif : lames verticales et rail de guidage haut apparent." },
  { src: `${CH}/chEnsembleRangementRadiateurClaustra.jpeg`, alt: "Ensemble de rangements sur mesure intégrant un habillage claustra pour le radiateur", cap: "Ensemble de rangements sur mesure intégrant un habillage claustra pour le radiateur, alternance de volumes ouverts et fermés." },
  { src: `${CH}/chDressingSousPenteVeluxPoigneesNoires.jpeg`, alt: "Dressing sur mesure adapté à une pente de toit avec fenêtre de toit intégrée", cap: "Dressing sur mesure adapté à une pente de toit, façades grises et poignées noires, fenêtre de toit intégrée à l'implantation." },
  { src: `${CH}/chBibliothequesMdfBrutOuvertes.jpeg`, alt: "Bibliothèques sur mesure en MDF brut, portes ouvertes avant mise en peinture", cap: "Bibliothèques sur mesure en MDF brut, portes ouvertes montrant l'agencement intérieur avant mise en peinture." },
  { src: `${CH}/chDressingBufetNoyerMoulures1.jpeg`, alt: "Dressing et enfilade en placage noyer posés dans un appartement ancien avec moulures d'origine", cap: "Dressing et enfilade en placage noyer posés dans un appartement ancien, moulures et corniches d'origine conservées." },
  { src: `${CH}/chGrilleAerationMdfSurMesure.jpeg`, alt: "Grille de ventilation sur mesure découpée en atelier pour habiller un caisson technique", cap: "Grille de ventilation sur mesure découpée en atelier pour habiller un caisson technique." },
  /* chPlacardCompteurElectriqueArrondi (3 pages : charte-qualite, renovation-complete, ici) laisse la
     place à chDressingArrondiCouloirParquet1, employée nulle part. Premier remplaçant envisagé et
     écarté : chBibliothequeRadiateurIntegre, également inemployée, mais la comparaison perceptuelle
     l'a située à 0,57 de chEnsembleRangementRadiateurClaustra déjà présente en tête de galerie, et la
     vérification à l'œil a confirmé qu'il s'agit du MÊME mur de rangements, photographié une porte
     ouverte : deux vignettes quasi jumelles sur la même page. La retenue est à 1,13 de sa plus proche
     voisine, soit franchement distincte. Le meuble technique arrondi reste visible sur /charte-qualite,
     et l'idée « le technique disparaît derrière la menuiserie » reste portée ici par
     chGrilleAerationMdfSurMesure et par toute la section « L'ouvrage caché ». */
  { src: `${CH}/chDressingArrondiCouloirParquet1.jpeg`, alt: "Volume de rangement toute hauteur à angle arrondi bordant un dégagement, ouvertures par gorge en creux, bandeau lumineux en couronnement et parquet chêne à chevrons", cap: "Volume de rangement toute hauteur à angle arrondi : ouverture par gorges en creux sans poignée apparente, bandeau lumineux encastré en couronnement. Il borde le dégagement entre l'escalier et la porte vitrée à châssis métallique de la cuisine, sur un parquet chêne posé à chevrons. Chantier réel des équipes partenaires." },
  /* Remplace chComptoirBarColonneFonteCarreauxAnciens, désormais réservée à /savoir-faire-ancien où
     les ouvrages anciens conservés sont le sujet. chComptoirBarMouluresFinition n'était employée nulle
     part et montre le même local en plan large. Légende refaite : l'ancienne annonçait des « carreaux
     de ciment anciens conservés en fond de niche » et un comptoir « en cours de finition » — à l'image,
     ce sont des carreaux émaillés à motif floral (le matériau ne s'identifie pas depuis la photo),
     ils courent le long du mur et non en fond de niche, et le comptoir est en MDF brut avant peinture. */
  { src: `${CH}/chComptoirBarMouluresFinition.jpeg`, alt: "Comptoir de bar en MDF brut à panneaux moulurés en cours de montage, panneau de carreaux anciens à motif floral au mur, pilier en pierre et colonne en fonte", cap: "Local commercial en travaux : le comptoir en MDF brut à panneaux moulurés attend sa peinture, tandis que le panneau de carreaux anciens à motif floral, le pilier en pierre et la colonne en fonte sont laissés apparents et servent de fond aux étagères. Chantier réel des équipes partenaires." },
  /* chCuisineBleuCanardBrillante était employée sur 3 pages (menuiserie-agencement-sur-mesure,
     second-oeuvre, ici) ET faisait doublon avec chCuisineBleuCanardVueDeux plus bas dans cette même
     galerie — même cliché, légendé « autre vue du même chantier ». C'est l'exemplaire le moins
     sollicité qui est conservé (voir plus bas), celui-ci est supprimé. */
  { src: `${CH}/chCuisineNoireBrillantePoigneesCuivrees.jpeg`, alt: "Cuisine laquée noire brillante avec filets de poignées cuivrées et sol en carreaux de ciment", cap: "Cuisine laquée noire brillante avec filets de poignées cuivrées, sol en carreaux de ciment à motifs." },
  /* chCuisineSejourParquetChevrons était employée sur 3 pages (renovation-complete,
     temoignages-clients, ici). Remplacée par chCuisineTerracotta, employée nulle part, qui a de plus
     l'intérêt de montrer une cuisine posée sous une corniche moulurée ancienne. */
  { src: `${CH}/chCuisineTerracotta.jpeg`, alt: "Cuisine linéaire à façades terracotta et meubles hauts crème, plaque à induction, sol en carreaux de ciment à motif géométrique, corniche moulurée au plafond", cap: "Cuisine linéaire livrée dans une pièce ancienne : façades terracotta en partie basse, meubles hauts crème, plaque à induction encastrée et sol en carreaux de ciment à motif géométrique. La corniche moulurée du plafond court au-dessus des colonnes. Chantier réel des équipes partenaires." },
  // 01/09 : deux cuisines réelles reçues du client dans un nouvel export (dossier "mur-porteur") ont
  // été vérifiées avant ajout — comparaison visuelle directe, même angle, mêmes éléments au plan de
  // travail : il s'agit des mêmes deux chantiers que chCuisinePlanNoirFacadesCremeVelux.jpeg et
  // chCuisineBlancheBrillanteMarbre.jpeg (déjà utilisées sur second-oeuvre et achat-direct-materiaux),
  // simplement réexportées par le client sous un nouveau nom de fichier (hash MD5 différent, contenu
  // visuel quasi identique). Ajout des DEUX fichiers déjà vétés ici plutôt que doublons quasi-pixel des
  // mêmes cuisines, conformément au nettoyage du 31/08 documenté dans second-oeuvre/page.tsx.
  { src: `${CH}/chCuisinePlanNoirFacadesCremeVelux.jpeg`, alt: "Cuisine sous comble avec plan de travail noir mat, îlot central et fenêtre de toit, four et micro-ondes encastrés en colonne", cap: "Cuisine sous comble livrée, plan de travail noir mat et îlot central, four et micro-ondes encastrés en colonne, éclairée par une fenêtre de toit." },
  { src: `${CH}/chCuisineBlancheBrillanteMarbre.jpeg`, alt: "Cuisine laquée blanche brillante avec bar en bois massif, sol en marbre et suspensions noires", cap: "Cuisine laquée blanche brillante, bar en bois massif prolongeant le plan de travail, sol en marbre et suspensions noires." },
  /* Trois vignettes retirées ici :
     — chSdbVasquesPoseMeubleBeige était employée sur 3 pages (expertise-carrelage-zellige-travertin,
       renovation-appartement, ici). Aucune salle de bain inutilisée ne pouvait la remplacer : les deux
       candidates du dossier, chVasqueMarbreVanite et chVasqueBoisMuraleChantier, se sont révélées être
       (distances 0,00 et 0,01) les mêmes clichés que chSdbVasquesPoseMeubleBeige et que
       chVasqueDoubleBoisCannele, déjà employée plus bas. La vignette est donc simplement retirée ; la
       page compte par ailleurs toute la série de pièces d'eau « haut de gamme » et « ouvrage caché ».
     — chOptiqueComptoirCarcasseBrute et chOptiqueComptoirAccueilFini s'affichaient DEUX FOIS sur cette
       page : ici, puis en avant/après dans la section « Avant / après ». C'est le comparatif qui est
       conservé — c'est le seul de la page à porter un vrai avant/après du même ouvrage —, et le local
       reste illustré ici par chOptiquePresentoirsMuraux, chOptiqueAccueilFinition et
       chOssatureBoisComptoirLocalCommercial. */
  { src: `${CH}/chOptiquePresentoirsMuraux.jpeg`, alt: "Présentoirs muraux sur mesure pour un local commercial d'optique avec éclairage intégré", cap: "Présentoirs muraux sur mesure pour un local commercial d'optique, éclairage intégré au caisson bois." },
  { src: `${CH}/chOptiqueAccueilFinition.jpeg`, alt: "Local commercial d'optique livré avec présentoirs muraux et espace d'accueil finis", cap: "Local commercial d'optique livré : présentoirs muraux, espace d'accueil et sol en bois terminés." },
  { src: `${CH}/chOssatureBoisComptoirLocalCommercial.jpeg`, alt: "Ossature bois d'un comptoir en cours de montage dans un local commercial à structure métallique", cap: "Ossature bois d'un comptoir en cours de montage dans un local commercial : structure avant habillage et pose du plan de travail." },
  { src: `${CH}/chOuvertureImposteVitreeDoubleParte.jpeg`, alt: "Ouverture avec imposte vitrée au-dessus d'une double porte coulissante, chantier réel", cap: "Ouverture entre deux pièces avec imposte vitrée au-dessus d'une double porte coulissante, avant peinture des encadrements." },
  /* chCouloirParquetChevronsPortesOuvertes et son doublon chCouloirParquetChevronsPorteBois (même
     cliché, distance 0,004) montraient tous deux ce couloir : la page l'affichait donc deux fois. Une
     seule occurrence est nécessaire, et elle est plus utile sur /savoir-faire-ancien, où le parquet à
     chevrons et les portes à panneaux moulurés d'un logement ancien sont le sujet même de la page.
     Les deux vignettes sont retirées ici ; la photo n'est plus employée que sur cette page-là. */
  { src: `${CH}/chPoutreAcierProfilVueLongue.jpeg`, alt: "Profil d'une poutre acier de reprise de charge soudée sur son appui, plafond ouvert avant habillage", cap: "Poutre acier de reprise de charge soudée sur son appui, plafond ouvert avant habillage du plaquiste." },

  { src: `${CH}/chTerrassePiscineMaisonVue.jpeg`, alt: "Terrasse bois livrée devant une maison rénovée, chantier réel", cap: "Terrasse bois livrée en extension extérieure d'une maison rénovée." },
  { src: `${CH}/chTerrasseBoisTransatsVue.jpeg`, alt: "Terrasse bois avec transats livrés, chantier réel", cap: "Terrasse bois livrée, mobilier extérieur installé." },
  { src: `${CH}/chTerrasseBoisEscaliersMobilier.jpeg`, alt: "Terrasse bois avec escaliers et mobilier, chantier réel", cap: "Terrasse bois à plusieurs niveaux avec escaliers intégrés et mobilier extérieur." },
  { src: `${CH}/chTerrasseBoisPiscineChamps.jpeg`, alt: "Terrasse bois autour d'une piscine avec vue sur les champs, chantier réel", cap: "Terrasse bois livrée autour d'une piscine, cadre champêtre." },
  /* 03/09 : cette photo était légendée « parquet à chevrons » sur trois pages. Vérification à
     l'image : motif de veinage répétitif identique d'une lame à l'autre, about droits (pas de
     coupe d'onglet), lames posées flottantes sur mousse blanche, chutes clipsables au sol —
     c'est un sol stratifié imitation chêne posé en bâtons rompus, pas du chêne massif à
     chevrons. Légende corrigée ici et sur /achat-direct-materiaux et /renovation-appartement. */
  /* chParquetChevronsPosePiece (le sol stratifié imitation chêne) était employée sur 4 pages
     (achat-direct-materiaux, renovation-appartement, second-oeuvre et ici). Elle est retirée de cette
     galerie : la pose de sol y reste illustrée par chParquetChevronsCacheRadiateur et
     chParquetChevronsCouloirDeuxTeintes juste en dessous, qui sont du vrai chêne à chevrons. La
     correction de légende du 03/09 (stratifié, pas chêne massif) reste en place sur les trois autres
     pages, qui ne relèvent pas de ce passage. */
  { src: `${CH}/chParquetChevronsCacheRadiateur.jpeg`, alt: "Pièce livrée avec parquet chêne clair posé à chevrons et cache-radiateur sur mesure à claire-voie horizontale dans l'angle", cap: "Parquet chêne clair posé à chevrons jusqu'au pied d'un cache-radiateur sur mesure à claire-voie horizontale, intégré dans l'angle de la pièce. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParquetChevronsCouloirDeuxTeintes.jpeg`, alt: "Raccord entre deux parquets à chevrons de teintes différentes à l'aplomb d'un passage de porte, dans un couloir", cap: "Raccord entre deux parquets à chevrons de teintes différentes : la jonction est calée à l'aplomb du passage de porte, sans barre de seuil rapportée. Chantier réel des équipes partenaires." },
  { src: `${CH}/chCouloirDressingToilettes.jpeg`, alt: "Couloir habillé d'un dressing en chêne du sol au plafond, parquet posé", cap: "Couloir habillé d'un dressing sur mesure en chêne du sol au plafond, finitions livrées." },
  { src: `${CH}/chCouloirBoisEscalierVue.jpeg`, alt: "Couloir habillé de bois avec vue sur un escalier, chantier réel", cap: "Couloir habillé de bois sur mesure, escalier visible en arrière-plan." },
  { src: `${CH}/chCouloirBibliothequeChaleureux.jpeg`, alt: "Couloir avec bibliothèque intégrée et éclairage chaleureux, chantier réel", cap: "Couloir avec bibliothèque intégrée, éclairage chaleureux, finitions livrées." },
  /* Bloc de doublons supprimé. Ces six vignettes rejouaient six clichés déjà présents plus haut dans
     la même galerie, sous un autre nom de fichier et avec une légende qui annonçait à tort une
     nouveauté :
       chEscalierBoisConstructionMarches  = chEscalierBoisFlottantVueBas
       chCuisineBleuCanardVueDeux         = chCuisineBleuCanardBrillante  (« autre vue du même chantier »)
       chPorteCoulissanteClaustraChene3   = chPorteCoulissanteClaustraChene2 (« autre chantier »)
       chEscalierOuvertConstruction       = chEscalierBoisFlottantPalier
       chCouloirParquetChevronsPorteBois  = chCouloirParquetChevronsPortesOuvertes
       chCuisineAnthraciteCarreauxVue2    = chCuisineNoireBrillantePoigneesCuivrees (« autre vue »)
     Seule exception du bloc : la cuisine bleu canard. Là, c'est l'exemplaire du HAUT qui a été
     supprimé, parce qu'il portait le nom employé sur deux autres pages du site
     (menuiserie-agencement-sur-mesure et second-oeuvre) ; celui-ci n'est employé nulle part ailleurs
     et est donc conservé, avec une légende qui ne prétend plus être une seconde vue. */
  { src: `${CH}/chCuisineBleuCanardVueDeux.jpeg`, alt: "Cuisine laquée bleu canard sur toute la longueur d'une pièce, plan de travail en bois massif, meubles hauts brillants et niches ouvertes en bout de linéaire", cap: "Cuisine laquée bleu canard livrée : linéaire complet sous meubles hauts brillants, plan de travail en bois massif, évier et four encastrés, niches ouvertes en bout de meuble. Chantier réel des équipes partenaires." },
  { src: `${CH}/chRangementChantierEncombre.jpeg`, alt: "Rangement sur mesure dans une pièce encore encombrée de chantier, chantier réel", cap: "Rangement sur mesure livré, pièce encore en cours de finition." },
  { src: `${CH}/chBoiserieCourbeNicheEtageres.jpeg`, alt: "Boiserie courbe sur mesure en placage chêne avec niche de rangement intégrée, chantier réel", cap: "Boiserie courbe sur mesure, dessinée pour épouser l'angle réel de la pièce, avec niche de rangement à casiers asymétriques intégrée." },
  { src: `${CH}/chVasqueDoubleBoisCannele.jpeg`, alt: "Meuble vasque double sur mesure en chêne cannelé avec plan en marbre, chantier réel", cap: "Meuble vasque double sur mesure, façade en chêne cannelé et plan de toilette en marbre." },
  { src: `${CH}/chBibliothequeChenePieceComplete.jpeg`, alt: "Bibliothèque sur mesure du sol au plafond en placage chêne occupant une pièce entière, chantier réel", cap: "Bibliothèque sur mesure occupant une pièce entière, du sol au plafond, placage chêne, parquet en cours de pose." },
  /* chRangementRadiateurEtageresOuvertes supprimée : même cliché que
     chEnsembleRangementRadiateurClaustra en tête de galerie (distance 0,004). */
];

/* 02/09 — Lot « photo haut-de-gamme » transmis par le client : 30 vues de réalisations terminées.
   Chaque fichier a été ouvert et décrit visuellement avant rédaction de sa légende (les noms de
   fichiers n'ont pas été pris pour argent comptant). L'essentiel provient d'un même grand
   appartement ancien parisien livré ; deux vues (chHdgChambreLattes*) proviennent d'un autre
   chantier et une (chHdgDoucheMarbreLaitonProtection) montre une salle de bain ENCORE EN COURS DE
   POSE — film de protection au sol, éclairage provisoire —, ce que sa légende dit explicitement.
   Aucun de ces fichiers n'apparaît ailleurs dans cette page.

   03/09 — le lot passe de 30 à 27 vues. Les trois retirées étaient les trois images du lot employées
   sur 3 pages ou plus du site : chHdgSalonBoucleAppliquesBronze (3), chHdgDetailNicheOnyxCheminee (4)
   et chHdgSdbMarbreProfilesLaitonPose (4). Le détail de chaque suppression est en commentaire à
   l'endroit où elle a eu lieu. */
const PHOTOS_HDG = [
  /* Réception : séjour et salle à manger */
  { src: `${CH}/chHdgSalonSalleMangerMoulures.jpeg`, alt: "Séjour et salle à manger d'un appartement ancien parisien, boiseries panneautées, cheminée de marbre et parquet à chevrons", cap: "Séjour et salle à manger réunis dans un appartement ancien parisien : boiseries panneautées et corniches ornées restituées, trumeau et cheminée de marbre d'origine conservés, parquet chêne posé à chevrons. Chantier réel des équipes partenaires." },
  /* chHdgSalonBoucleAppliquesBronze retirée : employée sur 3 pages (la page d'accueil,
     tendances-2026-2027 et ici), c'est la seconde vue du salon déjà montré juste au-dessus. Garder
     deux vues d'un même salon sur une page qui en compte trente n'ajoutait rien et faisait revenir sur
     /realisations une image que le visiteur voit déjà en page d'accueil. */
  { src: `${CH}/chHdgSalleMangerTableDressee.jpeg`, alt: "Salle à manger ouverte sur le salon, portes-fenêtres à volets intérieurs persiennés et suspension en lames de verre", cap: "Salle à manger ouverte sur le salon : portes-fenêtres et volets intérieurs persiennés remis en état, garde-corps en fonte d'origine conservés, table en pierre naturelle claire sous une suspension à lames de verre. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSalleMangerSuspensionAlbatre.jpeg`, alt: "Suspension linéaire en lames de verre sur monture laiton au-dessus d'une table en pierre veinée, mur panneauté", cap: "Détail du même ensemble : suspension linéaire à lames de verre montées sur laiton, alignée sur l'axe de la table en pierre naturelle veinée, panneautage et cimaise moulurée en fond de pièce. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgDiptyqueSalonMiroirBalcon.jpeg`, alt: "Diptyque : salon reflété dans un trumeau à cadre de plâtre sculpté, et balcon filant sur une rue parisienne", cap: "Deux vues du même logement : le salon réfléchi dans le trumeau à cadre de plâtre sculpté conservé, et le balcon filant sur rue avec son garde-corps en fonte d'origine. Chantier réel des équipes partenaires." },

  /* Cuisine, entrée et détails de pierre */
  { src: `${CH}/chHdgCuisineOnyxParquetVersailles.jpeg`, alt: "Cuisine à façades bois clair, parement mural en pierre naturelle rubanée et parquet en panneaux de Versailles", cap: "Cuisine ouverte sur le couloir : parement mural en pierre naturelle rubanée monté du plan de travail au plafond, façades en placage bois clair sans poignée ouvrant par gorge en creux, retour de meuble arrondi et parquet chêne posé en panneaux de Versailles. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSejourCuisineOnyxBanquette.jpeg`, alt: "Pièce de vie avec cuisine intégrée en bois clair, plan en pierre rubanée et parquet en panneaux de Versailles", cap: "La même pièce de vie en enfilade : colonnes de rangement toute hauteur en placage bois clair, plan de travail et retour de comptoir taillés dans la même pierre rubanée que la crédence, parquet en panneaux de Versailles continu jusqu'à la porte d'entrée. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgEntreeCouloirCuisineOnyx.jpeg`, alt: "Entrée et couloir à soubassement mouluré ouvrant sur la cuisine, parquet en panneaux de Versailles", cap: "Entrée et couloir desservant la pièce de vie : soubassement mouluré et corniches restitués sur tout le linéaire, appliques posées en rythme régulier, parquet en panneaux de Versailles posé sans rupture entre le couloir et la cuisine. Chantier réel des équipes partenaires." },
  /* chHdgDetailNicheOnyxCheminee retirée : c'était l'image la plus recyclée de ce lot — 4 pages
     (menuiserie-agencement-sur-mesure, tendances-2026-2027, savoir-faire-ancien et ici). Le détail de
     pierre taillée reste illustré ici par chHdgDetailMarbreGrisVasque et chHdgSalleEauPierreDouche, et
     la cheminée en marbre sculpté par chHdgChambreChemineeMiroirMoulure et
     chHdgSuiteMarbreNoirBaignoire : aucun sujet n'est perdu. */

  /* Chambres */
  { src: `${CH}/chHdgChambreVeloursTaupeBalcon.jpeg`, alt: "Chambre avec mur de tête de lit en panneaux capitonnés taupe, portes-fenêtres sur balcon et parquet à chevrons", cap: "Chambre sur rue : mur de tête de lit habillé de panneaux capitonnés taupe sur soubassement en placage bois, appliques en laiton fixées à travers le capitonnage, radiateur en fonte d'origine conservé et parquet chêne à chevrons. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreVeloursNicheBureau.jpeg`, alt: "Chambre avec panneaux capitonnés, niche-bureau en bois clair encastrée et radiateur en fonte ancien", cap: "Autre chambre du même logement : niche-bureau en placage bois clair encastrée dans l'épaisseur de la cloison en prolongement du capitonnage, appliques en laiton à globe opalin, radiateur en fonte ancien conservé sous la fenêtre. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreCapitonneeSuspension.jpeg`, alt: "Chambre avec panneaux capitonnés crème, soubassement en chêne et porte-fenêtre ouverte sur balcon", cap: "Chambre livrée : panneautage capitonné crème descendant sur un soubassement en chêne qui se prolonge en tête de lit, profilé laiton en tableau, porte-fenêtre et volets intérieurs persiennés conservés. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreTeteVeloursMarbre.jpeg`, alt: "Chambre ouverte sur une salle de bain en marbre sombre, mur de tête de lit capitonné et parquet à chevrons", cap: "Chambre ouverte sur sa salle de bain : le capitonnage vient buter contre le retour de marbre sombre, le seuil de la pièce d'eau est traité en marche de marbre pleine masse et le parquet à chevrons s'arrête au nu de la pierre. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgDiptyqueChambreSdbBaignoire.jpeg`, alt: "Diptyque : chambre capitonnée avec applique en laiton, et salle de bain en pierre claire avec baignoire îlot", cap: "Deux vues d'une même suite : le capitonnage et l'applique en laiton côté chambre ; la salle de bain attenante entièrement doublée d'une pierre claire très mouvementée, baignoire îlot posée sur une estrade de pierre au raccord du parquet à chevrons. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreChemineeMiroirMoulure.jpeg`, alt: "Chambre avec cheminée de marbre et trumeau cintré d'origine conservés, dressing en placage bois clair", cap: "Chambre livrée : cheminée de marbre sculpté, foyer en fonte et trumeau cintré d'origine conservés, dressing toute hauteur en placage bois clair posé au nu du panneautage, corniche ornée reprise sur tout le pourtour. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreDressingChevrons.jpeg`, alt: "Même chambre vue depuis la salle d'eau, étagères en chêne sur le retour de cloison et parquet à chevrons", cap: "La même chambre vue depuis la salle d'eau attenante : étagères en chêne sur le retour de cloison, plan de la pièce d'eau en marbre gris au premier plan, parquet chêne à chevrons posé jusque sous le dressing. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreBalconApplique.jpeg`, alt: "Chambre d'angle à mur arrondi, deux portes-fenêtres sur balcons à garde-corps en fonte et applique en laiton", cap: "Chambre d'angle sous rotonde : le mur courbe est conservé, les deux portes-fenêtres ouvrent sur des balcons à garde-corps en fonte, applique en laiton et radiateur en fonte ancien maintenu en place. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambrePlacardMoulure.jpeg`, alt: "Chambre avec placard toute hauteur à façades moulurées et mur de tête de lit en enduit décoratif", cap: "Chambre livrée : placard toute hauteur dont les façades reprennent le dessin des panneaux moulurés de la pièce, corniche redescendue en retour sur le caisson, mur de tête de lit traité en enduit décoratif. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreLustreSdbOuverte.jpeg`, alt: "Chambre avec salle de bain ouverte en niche de pierre claire, encadrée de deux dressings en placage bois clair", cap: "Chambre avec salle de bain ouverte : la pièce d'eau est logée dans une niche entièrement doublée de pierre claire, encadrée par deux volumes de dressing en placage bois clair qui montent jusqu'à la corniche. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSuiteMarbreNoirBaignoire.jpeg`, alt: "Suite parentale ouverte sur une salle de bain en marbre sombre, baignoire îlot et cheminée d'origine", cap: "Suite parentale ouverte sur sa salle de bain : parement de marbre sombre monté toute hauteur, baignoire îlot à finition bronze mat, cheminée de marbre d'origine conservée en limite de pièce d'eau et dressings en placage bois clair. Chantier réel des équipes partenaires." },

  /* Pièces d'eau livrées */
  { src: `${CH}/chHdgSdbMarbreNoirDoubleVasque.jpeg`, alt: "Salle de bain en marbre sombre veiné, baignoire îlot, deux vasques monolithes et cheminée d'origine", cap: "Salle de bain en marbre sombre veiné : baignoire îlot à finition bronze mat, deux vasques monolithes taillées pleine masse et robinetterie murale en bronze, cheminée de marbre d'origine conservée dans l'angle. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSdbMarbreClairBaignoire.jpeg`, alt: "Salle de bain doublée d'une pierre claire très mouvementée, baignoire îlot sable et vasque monolithe sur socle", cap: "Salle de bain doublée d'une pierre claire très mouvementée, murs et sol dans le même matériau : baignoire îlot à finition sable mat, vasque monolithe posée sur un socle en gradins taillé dans la même pierre, robinetterie murale en bronze. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSalleEauPierreDouche.jpeg`, alt: "Salle d'eau en pierre claire avec vasque-auge monolithe, miroir bandeau et douche à l'italienne cannelée", cap: "Salle d'eau en pierre claire : vasque-auge monolithe à bord biseauté, robinetterie murale en bronze sortant du parement, miroir bandeau pleine largeur et douche à l'italienne de plain-pied dont le fond est habillé d'une pierre à cannelures verticales. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgDetailMarbreGrisVasque.jpeg`, alt: "Détail d'une salle d'eau en marbre gris veiné : vasque-auge suspendue et robinetterie murale en bronze", cap: "Détail d'exécution en marbre gris veiné : vasque-auge suspendue taillée dans la même dalle que le parement, veinage raccordé d'un panneau à l'autre, robinetterie et prise encastrées directement dans la pierre. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSdbMarbreGrisPassageChambre.jpeg`, alt: "Passage entre une salle d'eau en marbre gris et une chambre, encadrement habillé en placage bois clair", cap: "Passage entre la salle d'eau et la chambre : encadrement et cloison habillés en placage bois clair, marbre gris veiné monté du sol au plafond côté pièce d'eau, radiateur en fonte ancien conservé côté chambre. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgDetailCeramiqueRobinetterie.jpeg`, alt: "Diptyque : étagère en bois clair sur fond strié, et commandes de douche encastrées en bronze sur pierre cannelée", cap: "Deux détails de finition : à gauche, une étagère en bois clair dont le fond est strié dans la masse ; à droite, les trois commandes de douche encastrées sur platines en bronze patiné dans un parement de pierre à cannelures verticales. Chantier réel des équipes partenaires." },

  /* Autre chantier : habillage en tasseaux de bois */
  { src: `${CH}/chHdgChambreLattesBoisTv.jpeg`, alt: "Chambre d'un autre chantier, mur en tasseaux de bois sur feutre noir et faux plafond incurvé", cap: "Autre chantier : chambre dont le mur de télévision est habillé de tasseaux de bois sur feutre noir, faux plafond incurvé intégrant les spots orientables, l'éclairage indirect et la reprise de ventilation. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgChambreLattesCacheRadiateur.jpeg`, alt: "Cache-radiateur sur mesure en tôle perforée sous une niche habillée de tasseaux de bois", cap: "Même chantier : le radiateur est enfermé dans un coffrage laqué fermé par une tôle perforée sur mesure, surmonté d'une niche en tasseaux de bois qui reçoit la télévision ; la cloison voisine est habillée de textile tendu dans un encadrement cintré. Chantier réel des équipes partenaires." },

  /* Salle de bain encore en cours de pose — signalée comme telle */
  /* Des deux vues de cette salle de bain non livrée, une seule est conservée :
     chHdgSdbMarbreProfilesLaitonPose était employée sur 4 pages (renovation-appartement,
     tendances-2026-2027, tendances-materiaux-francais et ici), la vue conservée sur 3. Le propos —
     montrer un chantier NON LIVRÉ et le dire — tient avec une seule photographie, et sa légende a été
     réécrite pour ne plus renvoyer à une image qui n'est plus là. */
  { src: `${CH}/chHdgDoucheMarbreLaitonProtection.jpeg`, alt: "Douche en cours de pose, parement de pierre monté, sol et receveur couverts d'un film de protection, éclairage provisoire au plafond", cap: "Chantier en cours, non livré : le parement de pierre est monté et les profilés laiton sont déjà posés sur toutes les arêtes, mais le sol et le receveur de douche restent couverts d'un film de protection et l'éclairage est encore provisoire. Chantier réel des équipes partenaires." },
];

/* 01/09 — Lot de photos de chantier transmis par le client : ouvrages techniques (étanchéité et
   isolation de pièces d'eau, plomberie, électricité). Regroupés dans leur propre section plutôt
   qu'ajoutés à la galerie ci-dessus, qui documente surtout des ouvrages finis : la lecture reste
   possible et la démonstration « le budget part dans ce qu'on ne voit plus » devient explicite.
   Aucun de ces fichiers n'apparaît ailleurs dans cette page. */
const PHOTOS_TECHNIQUES = [
  /* Étanchéité et isolation des pièces d'eau */
  { src: `${CH}/chEtancheiteSolDoucheTrameArmee.jpeg`, alt: "Sol de douche à l'italienne en préparation, treillis d'armature déroulé sur la dalle et évacuation PVC en attente", cap: "Sol de douche à l'italienne en préparation : treillis d'armature déroulé sur la dalle, évacuation PVC raccordée en attente au droit de la réservation, cloisons en plaque hydrofuge déjà montées. Chantier réel des équipes partenaires." },
  /* 03/09 — chEtancheiteReceveurDoucheLaser retirée : employée sur 3 pages (renovation-appartement,
     second-oeuvre et ici) et redondante avec la vignette ci-dessus, qui montre la même préparation de
     sol de douche à une étape voisine. */
  { src: `${CH}/chIsolationLaineUrsaVarioSdb.jpeg`, alt: "Doublage isolé d'une salle de bain, laine minérale entre montants et bandes adhésives d'étanchéité à l'air sur chaque ossature", cap: "Doublage isolé d'une salle de bain : laine minérale posée entre montants, chaque ossature recouverte d'une bande adhésive d'étanchéité à l'air, attentes de robinetterie déjà sorties. Chantier réel des équipes partenaires." },
  { src: `${CH}/chIsolationFenetreSdbLaineVario.jpeg`, alt: "Même mur de salle de bain isolé, vu jusqu'au plafond, jonctions adhésivées autour de la fenêtre", cap: "Le même mur vu jusqu'au plafond : les jonctions sont adhésivées en continu autour de la fenêtre et en tête de cloison, là où les fuites d'air se logent en priorité. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParVapeurSopremaFenetreSdb.jpeg`, alt: "Pare-vapeur déroulé sur l'isolant d'un mur de salle de bain, recouvrements et traversées adhésivés", cap: "Pare-vapeur déroulé par-dessus l'isolant : chaque lé est recouvert puis adhésivé, y compris au droit de la gaine électrique et des attentes de robinetterie qui le traversent. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParVapeurFenetreSdbFinition.jpeg`, alt: "Pourtour d'une fenêtre de salle de bain entièrement traité au pare-vapeur avant pose des plaques", cap: "Traitement du pourtour de fenêtre : le pare-vapeur est raccordé et adhésivé sur tout le tableau, point le plus exposé à la condensation dans une pièce d'eau. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParVapeurSopremaMuralSdb.jpeg`, alt: "Mur de salle de bain repris sous pare-vapeur, carrelage blanc existant conservé sur la paroi voisine", cap: "Rénovation partielle d'une salle de bain : seul le mur déposé est réisolé et repris sous pare-vapeur, le carrelage existant de la paroi voisine étant conservé. Chantier réel des équipes partenaires." },
  { src: `${CH}/chPlacoHydroSopremaFenetreSdb.jpeg`, alt: "Cloison de salle de bain fermée en plaque hydrofuge, réservation laissée ouverte sur les attentes de robinetterie", cap: "Fermeture de la cloison en plaque hydrofuge : le pare-vapeur disparaît derrière les plaques, seule la réservation d'accès aux attentes de robinetterie reste ouverte. Chantier réel des équipes partenaires." },

  /* Plomberie : distribution, nourrices, production d'eau chaude */
  { src: `${CH}/chPlomberieColonneCuivreVannes.jpeg`, alt: "Colonne montante en cuivre dans une gaine technique, piquages vannés et étiquettes de repérage numérotées", cap: "Colonne montante en cuivre dans une gaine technique : chaque piquage reçoit sa vanne d'arrêt en laiton et son étiquette numérotée, les départs étant protégés par gaine annelée. Chantier réel des équipes partenaires." },
  { src: `${CH}/chNourriceMulticoucheRadiateurs.jpeg`, alt: "Distribution de chauffage reprise avec raccords à sertir en laiton et nourrices en extrémité de ligne", cap: "Reprise d'une distribution de chauffage : antennes horizontales assemblées par raccords à sertir, descentes maintenues au collier et nourrices laiton en extrémité de ligne. Chantier réel des équipes partenaires." },
  /* 03/09 — chPlomberieMulticoucheDistributionMurale retirée : employée sur 3 pages
     (renovation-appartement, second-oeuvre et ici). La distribution en multicouche reste illustrée
     par les cinq autres vignettes de plomberie de cette série. */
  { src: `${CH}/chPlomberieDistributionVannesBeton.jpeg`, alt: "Tableau de distribution d'eau monté sur un voile béton brut, une vanne quart-de-tour rouge par départ", cap: "Distribution d'eau montée sur voile béton brut : chaque antenne part de sa propre vanne quart-de-tour, l'implantation ayant été tracée et repérée sur le béton avant la pose. Chantier réel des équipes partenaires." },
  { src: `${CH}/chPlomberieVannesRougesBetonDetail.jpeg`, alt: "Détail des vannes quart-de-tour et des raccords laiton d'une distribution d'eau sur mur béton", cap: "Détail du même ouvrage : une vanne d'arrêt par antenne permet d'isoler un logement ou une pièce sans couper toute la colonne. Chantier réel des équipes partenaires." },
  { src: `${CH}/chNourriceManometreEvacuationPvc.jpeg`, alt: "Nourrice de plomberie équipée d'un manomètre pour l'essai de mise en pression, réseau d'évacuation PVC monté à côté", cap: "Essai de mise en pression : manomètre monté sur la nourrice, départs repérés chaud en rouge et froid en bleu, réseau d'évacuation PVC assemblé à côté avant fermeture. Chantier réel des équipes partenaires." },
  { src: `${CH}/chPlomberieAlimentationEvacuationPlacoHydro.jpeg`, alt: "Alimentations en multicouche et évacuations PVC posées ensemble sur une cloison en plaque hydrofuge, attentes bouchonnées", cap: "Alimentations en multicouche et évacuations PVC posées ensemble sur cloison hydrofuge : chaque attente est bouchonnée et repérée avant l'essai de mise en pression et la pose des appareils sanitaires. Chantier réel des équipes partenaires." },
  { src: `${CH}/chNourriceLaitonDoubleDeparts.jpeg`, alt: "Deux nourrices laiton superposées, une vanne quart-de-tour par circuit et tubes multicouche fixés au collier", cap: "Deux nourrices laiton superposées : arrivée générale vannée, puis un robinet d'arrêt par circuit, l'ensemble fixé au collier sur la cloison hydrofuge avant habillage. Chantier réel des équipes partenaires." },
  { src: `${CH}/chNourriceLaiton12Departs.jpeg`, alt: "Nourrice laiton à douze départs multicouche, chaque circuit équipé de sa propre vanne d'arrêt", cap: "Nourrice laiton à douze départs multicouche : chaque circuit est vanné individuellement, ce qui permet de couper un point d'eau sans priver le reste du logement. Chantier réel des équipes partenaires." },
  { src: `${CH}/chNourriceLaitonVanneGenerale.jpeg`, alt: "Même nourrice laiton vue de face, vanne générale rouge en extrémité de collecteur", cap: "La même nourrice vue de face : vanne générale rouge en extrémité de collecteur, étiquettes fabricant laissées en place et descentes maintenues par colliers réguliers. Chantier réel des équipes partenaires." },
  { src: `${CH}/chNourriceDoubleAnglePlafond.jpeg`, alt: "Deux nourrices laiton implantées en tête de cloison sous plafond, circuits plongeant dans la trémie du plancher", cap: "Deux nourrices implantées en tête de cloison : les circuits plongent directement dans la trémie du plancher, où ils rejoignent les gaines déjà tirées. Chantier réel des équipes partenaires." },
  { src: `${CH}/chChaudiereMuraleSaunierDuval.jpeg`, alt: "Chaudière murale posée sur un mur de pierre en local technique, vannes d'arrêt et filtre en Y en pied d'appareil", cap: "Chaudière murale posée en local technique sur un mur de pierre : vanne d'arrêt sur chaque départ, filtre en Y en pied d'appareil et canalisations calorifugées. Chantier réel des équipes partenaires." },

  /* Électricité */
  { src: `${CH}/chElectriciteFauxPlafondFaisceaux.jpeg`, alt: "Faux plafond en cours de montage, faisceaux de gaines tirés au-dessus de l'ossature métallique et attentes de câbles le long du voile béton", cap: "Faux plafond en cours de montage : ossature métallique posée, faisceaux de gaines tirés au-dessus et attentes de câbles descendues le long du voile béton avant plaquage. Chantier réel des équipes partenaires." },
  /* 03/09 — chElectriciteFauxPlafondRailsCablage retirée : employée sur 3 pages
     (renovation-appartement, second-oeuvre et ici) et très proche de la vignette ci-dessus, qui montre
     le même faux plafond avec ses faisceaux de gaines une étape plus tôt. */
  { src: `${CH}/chTableauElectriqueDisjoncteurs.jpeg`, alt: "Tableau électrique en cours de câblage dans une niche, rangées de disjoncteurs divisionnaires et borniers de répartition", cap: "Tableau électrique en cours de câblage : rangées de disjoncteurs alimentées par peignes, borniers de répartition repérés bleu et rouge, platine de comptage et disjoncteur de branchement en partie haute. Chantier réel des équipes partenaires." },
];

/* 03/09 — Le « déroulé » passe de 10 à 5 vignettes. Cinq y étaient soit un doublon d'une image déjà
   présente ailleurs sur la page, soit l'un des visuels les plus recyclés du site :
   — chDemolitionDegagementVersSejour : quasi-jumelle de chDemolitionMursDecapes qui la suivait
     immédiatement (distance 0,31 : même couloir, même huisserie, même fenêtre au fond), et employée
     en plus sur /ouverture-mur-porteur. C'est celle qui n'est employée nulle part ailleurs qui reste.
   — chPoutreAcierAngleSoudeVue1 : quasi-jumelle de chPortiqueAcierAngleGaine, déjà en galerie
     ci-dessus (distance 0,14, même angle d'acier, même gaine annelée) ; sa légende annonçait pourtant
     « autre chantier réel ». Retirée ; elle reste sur /ouverture-mur-porteur.
   — chPlacardTableauElectriqueIntegre (3 pages) : gardée sur /savoir-faire-ancien, où « la mise aux
     normes invisible » est le sujet nommé, et retirée ici où le même propos est déjà tenu par
     chBibliothequeRadiateurIntegre en galerie et par chTableauElectriqueDisjoncteurs dans « L'ouvrage
     caché ».
   — chantier-vmc-caisson-gaines (4 pages) et chantier-carottage-facade (4 pages) : deux images de
     stock, employées sur trois autres pages chacune, dont la légende reconnaissait déjà qu'elles ne
     documentent aucun chantier de cette page. La légende du carottage affirmait de surcroît un
     « accord écrit du syndic » qu'aucune photographie ne peut montrer. Elles restent en place sur
     /renovation-energetique et /second-oeuvre, où la ventilation est le sujet. */
const DEROULE = [
  { src: `/photos/chantiers/chDemolitionMursDecapes.jpeg`, alt: "Pièce d'un logement ancien mise à nu après démolition : murs décapés jusqu'au support, lambeaux de papier peint ancien, cloison en pan de bois apparente et alimentations neuves en pied de mur", cap: "Pièce mise à nu après démolition : murs décapés jusqu'au support où subsistent des lambeaux de papier peint ancien, cloison en pan de bois et lattis apparente à droite, alimentations neuves repérées chaud et froid déjà tirées en pied de mur, huisserie conservée au premier plan. Chantier réel des équipes partenaires." },
  { src: `/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg`, alt: "Portique acier de reprise de charge posé après ouverture d'un mur porteur, avant habillage", cap: "Portique acier de reprise de charge (poutre et poteau) scellé sur ses appuis après ouverture du mur porteur, avant habillage par le plaquiste." },
  { src: `${M}/chantier-plomberie-encastree.jpg`, alt: "Réseaux de plomberie encastrés en tubes multicouche rouges et bleus avec collecteur dans une salle de bain en travaux", cap: "Illustration de référence (hors chantier documenté sur cette page) : principe de réseaux encastrés en multicouche depuis un collecteur, repérage chaud/froid avant fermeture." },
  { src: `${M}/moulures-corniches-pose.jpg`, alt: "Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant la rénovation", cap: "Illustration de référence (hors chantier documenté sur cette page) : restitution de corniches, rosace et boiseries en plâtre traditionnel d'après l'existant." },
  { src: `${CH}/chParquetVitrifie.jpeg`, alt: "Séjour livré avec parquet ancien poncé et vitrifié, cheminée et moulures d'origine conservées", cap: "Autre chantier réel des équipes partenaires, sans lien avec la photo de démolition en tête de série : parquet ancien poncé et vitrifié, cheminée en marbre et moulures d'origine conservées et restaurées." },
];

/* 03/09 — Les avant/après passent de 15 à 8 paires. Sept ont été retirées, toutes pour des raisons de
   RÉPÉTITION, mesurées et non supposées :
   — « De l'état initial au plateau livré » et « Réseaux encastrés puis pièce d'eau livrée » affichaient
     une seconde fois, dans cette même page, chDemolitionDegagementVersSejour, chParquetVitrifie et
     chantier-plomberie-encastree, déjà présentes dans le « déroulé ». Le visiteur voyait donc trois
     images deux fois. (La note de la première reconnaissait d'ailleurs qu'il s'agissait de DEUX
     chantiers différents « présentés en progression type ».)
   — « Ouvrir un mur porteur » reposait sur chantier-ouverture-mur-etaiement (3 pages) et
     chantier-ipn-habillage, deux images de stock, alors que la page montre quatre photographies
     RÉELLES d'ouvertures de murs porteurs et de portiques acier : la démonstration était déjà faite,
     mieux, quelques écrans plus haut.
   — « Étanchéité sous carrelage » (chantier-nappe-etancheite-douche, 3 pages) et « Salle d'eau :
     condensation » (salle-eau-condensation-avant, 3 pages) faisaient double emploi avec la section
     « L'ouvrage caché », qui documente la même chose en photos réelles (trame armée, receveur au
     laser, pare-vapeur, plaque hydrofuge).
   — « Pavillon francilien » (2 images sur 3 pages) et « Combles » (2 images sur 4 pages) sont les
     paires les plus recyclées du site ; elles portent sur l'enveloppe d'une maison individuelle et ont
     chacune leur page dédiée (/renovation-maison-pavillon, /renovation-energetique), d'où elles
     restent accessibles.
   Les huit paires conservées sont celles qui montrent réellement le même ouvrage avant et après, sans
   image employée plus de deux fois sur le site. */
const COMPARAISONS = [
  { titre: "Doublage isolant d'une pièce ancienne", texte: "Le mur ancien est d'abord assaini, puis l'ossature métallique est implantée au laser avant la pose de la laine minérale.", avant: `${M}/chantier-ossature-avant.jpg`, apres: `${M}/chantier-isolation-laine.jpg`, avantLabel: "Avant — ossature implantée", apresLabel: "Après — isolant posé", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "De l'ossature brute à la pièce livrée", texte: "Le plafond suspendu absorbe les réseaux ; la pièce est livrée après enduit, peinture et pose du parquet.", avant: `${M}/chantier-ossature-placo-plafond.jpg`, apres: `${M}/chambre-livree-parquet-chene.jpg`, avantLabel: "Avant — ossature", apresLabel: "Après — chambre livrée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Pose du zellige, de la crédence brute à la cuisine livrée", texte: "Support dressé, boîtes mélangées, calepinage tracé à sec puis joint époxy : la crédence en zellige se prépare avant d'être posée.", avant: `${M}/chantier-pose-zellige-credence.jpg`, apres: `${M}/tendance-cuisine-facades-sur-mesure-chene.jpg`, avantLabel: "Avant — pose du zellige", apresLabel: "Après — cuisine livrée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Caissons standards, façades sur mesure", texte: "Les caissons standards sont conservés et optimisés ; seules les façades, les plinthes et les habillages sont fabriqués sur mesure, ce qui réduit fortement le coût à rendu équivalent.", avant: "/photos/pedagogie/35-realisations-cuisine-avant.jpeg", apres: "/photos/pedagogie/36-realisations-cuisine-apres.jpeg", avantLabel: "Avant — caissons optimisés", apresLabel: "Après — cuisine livrée", note: "Illustration pédagogique cohérente (avant/après composés pour ce comparatif), hors chantier documenté sur cette page." },
  { titre: "Électricité : du tableau vétuste à l'installation conforme", texte: "Différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité remise au client à la réception.", avant: `${M}/tableau-electrique-vetuste-avant.jpg`, apres: `${M}/tableau-electrique-neuf-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Extension : du jardin encombré au volume contemporain", texte: "Étude de sol, déclaration préalable, fondations adaptées puis ossature bois et grandes baies : le raccord à la meulière existante est traité au détail.", avant: `${M}/jardin-avant-extension.jpg`, apres: `${M}/extension-livree-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Surélévation : un étage gagné sans démolir", texte: "Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée et mise hors d'eau rapide pour limiter l'exposition du bâti.", avant: `${M}/maison-avant-surelevation.jpg`, apres: `${M}/maison-surelevee-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Local commercial : de la carcasse brute au comptoir d'accueil livré", texte: "Agencement d'un local commercial (opticien) : la carcasse du comptoir est montée sur site puis habillée en bois et laque avant réception.", avant: `/photos/chantiers/chOptiqueComptoirCarcasseBrute.jpeg`, apres: `/photos/chantiers/chOptiqueComptoirAccueilFini.jpeg`, avantLabel: "Avant — carcasse brute", apresLabel: "Après — comptoir livré", note: "Chantier réel des équipes partenaires, même local commercial du début à la fin des travaux." },
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

      <MqSection kicker="Réalisations haut de gamme" title="Un appartement ancien parisien livré, pièce par pièce" lead="Ces photographies proviennent pour l'essentiel d'un même grand appartement ancien parisien, prises après travaux : ouvrages de pierre, menuiseries sur mesure et éléments d'origine conservés. Quelques vues ont été prises sur d'autres chantiers et l'une montre une salle de bain encore en cours de pose — la légende le précise à chaque fois." wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHOTOS_HDG.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="L'ouvrage caché" title="Étanchéité, plomberie, électricité : ce qui disparaît derrière les finitions" lead="Ces ouvrages ne se voient plus une fois le chantier livré, et ce sont pourtant eux qui décident de sa durabilité. Ils sont photographiés systématiquement avant fermeture : c'est la seule trace exploitable si un doute survient plus tard." wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PHOTOS_TECHNIQUES.map((p) => (
            <MqFig key={p.src} src={p.src} alt={p.alt} caption={p.cap} />
          ))}
        </div>
      </MqSection>

      <MqSection kicker="Déroulé d'un chantier" title="De l'état initial à la livraison, étape par étape" lead="Étapes types d'un chantier de rénovation, illustrées en priorité par nos propres photographies de chantiers réels ; quelques schémas et visuels de référence complètent les phases les moins photogéniques (réseaux encastrés, carottage), signalés comme tels en légende." wide>
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
              <p className="mt-2 text-center font-mono text-[0.64rem] tracking-[0.16em] uppercase text-muted">{c.note}</p>
            </div>
          ))}
        </div>
      </MqSection>

      {/*
        03/09 : ces deux études de cas existaient depuis la mise en ligne mais AUCUNE page du
        site ne pointait vers elles — donc invisibles pour un visiteur comme pour un moteur.
        Détecté par le contrôle des pages orphelines. Elles sont désormais rattachées ici,
        d'où elles relèvent.
      */}
      <MqSection kicker="Cas détaillés" title="Deux chantiers suivis de bout en bout" lead="Ces deux dossiers sont racontés en entier : la contrainte de départ, les arbitrages, le déroulé et ce que le cas ne permet pas de généraliser.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Link
            href="/realisations/pavillon-annees-30-hauts-de-seine"
            className="border border-line bg-surface rounded-[2px] p-6 flex flex-col gap-2 hover:border-orange-deep/40 transition-colors"
          >
            <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted">Hauts-de-Seine</span>
            <span className="display text-[1.15rem] text-ivoire">Pavillon des années 30, rénovation complète</span>
            <span className="text-muted text-[0.9rem] leading-relaxed">
              118 m², douze lots pilotés en dix-neuf semaines, avec un calendrier imposé par une date de fin de bail.
            </span>
          </Link>
          <Link
            href="/realisations/extension-yvelines"
            className="border border-line bg-surface rounded-[2px] p-6 flex flex-col gap-2 hover:border-orange-deep/40 transition-colors"
          >
            <span className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-muted">Yvelines</span>
            <span className="display text-[1.15rem] text-ivoire">Extension de plain-pied, 28 m² gagnés</span>
            <span className="text-muted text-[0.9rem] leading-relaxed">
              Emprise au sol contrainte par le PLU, jardin en pente, vide sanitaire ventilé et raccordement de niveau avec le séjour existant.
            </span>
          </Link>
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
