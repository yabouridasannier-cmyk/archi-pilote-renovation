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
  // 01/09 : deux cuisines réelles reçues du client dans un nouvel export (dossier "mur-porteur") ont
  // été vérifiées avant ajout — comparaison visuelle directe, même angle, mêmes éléments au plan de
  // travail : il s'agit des mêmes deux chantiers que chCuisinePlanNoirFacadesCremeVelux.jpeg et
  // chCuisineBlancheBrillanteMarbre.jpeg (déjà utilisées sur second-oeuvre et achat-direct-materiaux),
  // simplement réexportées par le client sous un nouveau nom de fichier (hash MD5 différent, contenu
  // visuel quasi identique). Ajout des DEUX fichiers déjà vétés ici plutôt que doublons quasi-pixel des
  // mêmes cuisines, conformément au nettoyage du 31/08 documenté dans second-oeuvre/page.tsx.
  { src: `${CH}/chCuisinePlanNoirFacadesCremeVelux.jpeg`, alt: "Cuisine sous comble avec plan de travail noir mat, îlot central et fenêtre de toit, four et micro-ondes encastrés en colonne", cap: "Cuisine sous comble livrée, plan de travail noir mat et îlot central, four et micro-ondes encastrés en colonne, éclairée par une fenêtre de toit." },
  { src: `${CH}/chCuisineBlancheBrillanteMarbre.jpeg`, alt: "Cuisine laquée blanche brillante avec bar en bois massif, sol en marbre et suspensions noires", cap: "Cuisine laquée blanche brillante, bar en bois massif prolongeant le plan de travail, sol en marbre et suspensions noires." },
  { src: `${CH}/chSdbVasquesPoseMeubleBeige.jpeg`, alt: "Salle de bain en cours de finition avec meuble sur mesure beige et vasques à poser", cap: "Salle de bain en cours de finition : meuble sur mesure beige, vasques à poser et faïence grand format." },
  { src: `${CH}/chOptiqueComptoirCarcasseBrute.jpeg`, alt: "Carcasse en cours de montage du comptoir d'accueil d'un local commercial d'optique", cap: "Agencement d'un local commercial (opticien) : carcasse du comptoir d'accueil en cours de montage." },
  { src: `${CH}/chOptiqueComptoirAccueilFini.jpeg`, alt: "Comptoir d'accueil livré dans un local commercial d'optique, habillage bois et laque terminés", cap: "Comptoir d'accueil livré dans le même local commercial : habillage bois et laque terminés." },
  { src: `${CH}/chOptiquePresentoirsMuraux.jpeg`, alt: "Présentoirs muraux sur mesure pour un local commercial d'optique avec éclairage intégré", cap: "Présentoirs muraux sur mesure pour un local commercial d'optique, éclairage intégré au caisson bois." },
  { src: `${CH}/chOptiqueAccueilFinition.jpeg`, alt: "Local commercial d'optique livré avec présentoirs muraux et espace d'accueil finis", cap: "Local commercial d'optique livré : présentoirs muraux, espace d'accueil et sol en bois terminés." },
  { src: `${CH}/chOssatureBoisComptoirLocalCommercial.jpeg`, alt: "Ossature bois d'un comptoir en cours de montage dans un local commercial à structure métallique", cap: "Ossature bois d'un comptoir en cours de montage dans un local commercial : structure avant habillage et pose du plan de travail." },
  { src: `${CH}/chOuvertureImposteVitreeDoubleParte.jpeg`, alt: "Ouverture avec imposte vitrée au-dessus d'une double porte coulissante, chantier réel", cap: "Ouverture entre deux pièces avec imposte vitrée au-dessus d'une double porte coulissante, avant peinture des encadrements." },
  { src: `${CH}/chCouloirParquetChevronsPortesOuvertes.jpeg`, alt: "Couloir livré avec parquet posé à chevrons et portes anciennes restaurées, chantier réel", cap: "Couloir livré : parquet posé à chevrons, portes anciennes restaurées et enfilade de pièces dégagée." },
  { src: `${CH}/chPoutreAcierProfilVueLongue.jpeg`, alt: "Profil d'une poutre acier de reprise de charge soudée sur son appui, plafond ouvert avant habillage", cap: "Poutre acier de reprise de charge soudée sur son appui, plafond ouvert avant habillage du plaquiste." },

  { src: `${CH}/chTerrassePiscineMaisonVue.jpeg`, alt: "Terrasse bois livrée devant une maison rénovée, chantier réel", cap: "Terrasse bois livrée en extension extérieure d'une maison rénovée." },
  { src: `${CH}/chTerrasseBoisTransatsVue.jpeg`, alt: "Terrasse bois avec transats livrés, chantier réel", cap: "Terrasse bois livrée, mobilier extérieur installé." },
  { src: `${CH}/chTerrasseBoisEscaliersMobilier.jpeg`, alt: "Terrasse bois avec escaliers et mobilier, chantier réel", cap: "Terrasse bois à plusieurs niveaux avec escaliers intégrés et mobilier extérieur." },
  { src: `${CH}/chTerrasseBoisPiscineChamps.jpeg`, alt: "Terrasse bois autour d'une piscine avec vue sur les champs, chantier réel", cap: "Terrasse bois livrée autour d'une piscine, cadre champêtre." },
  { src: `${CH}/chParquetChevronsPosePiece.jpeg`, alt: "Parquet posé à chevrons dans une pièce vide, chantier réel", cap: "Parquet en cours de pose à chevrons dans une pièce vide." },
  { src: `${CH}/chParquetChevronsCacheRadiateur.jpeg`, alt: "Pièce livrée avec parquet chêne clair posé à chevrons et cache-radiateur sur mesure à claire-voie horizontale dans l'angle", cap: "Parquet chêne clair posé à chevrons jusqu'au pied d'un cache-radiateur sur mesure à claire-voie horizontale, intégré dans l'angle de la pièce. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParquetChevronsCouloirDeuxTeintes.jpeg`, alt: "Raccord entre deux parquets à chevrons de teintes différentes à l'aplomb d'un passage de porte, dans un couloir", cap: "Raccord entre deux parquets à chevrons de teintes différentes : la jonction est calée à l'aplomb du passage de porte, sans barre de seuil rapportée. Chantier réel des équipes partenaires." },
  { src: `${CH}/chCouloirDressingToilettes.jpeg`, alt: "Couloir habillé d'un dressing en chêne du sol au plafond, parquet posé", cap: "Couloir habillé d'un dressing sur mesure en chêne du sol au plafond, finitions livrées." },
  { src: `${CH}/chCouloirBoisEscalierVue.jpeg`, alt: "Couloir habillé de bois avec vue sur un escalier, chantier réel", cap: "Couloir habillé de bois sur mesure, escalier visible en arrière-plan." },
  { src: `${CH}/chCouloirBibliothequeChaleureux.jpeg`, alt: "Couloir avec bibliothèque intégrée et éclairage chaleureux, chantier réel", cap: "Couloir avec bibliothèque intégrée, éclairage chaleureux, finitions livrées." },
  { src: `${CH}/chEscalierBoisConstructionMarches.jpeg`, alt: "Escalier en bois en cours de construction, marches posées, chantier réel", cap: "Escalier en bois en cours de construction, marches posées avant finition." },
  { src: `${CH}/chRangementChantierEncombre.jpeg`, alt: "Rangement sur mesure dans une pièce encore encombrée de chantier, chantier réel", cap: "Rangement sur mesure livré, pièce encore en cours de finition." },
  { src: `${CH}/chCuisineBleuCanardVueDeux.jpeg`, alt: "Cuisine laquée bleu canard, autre vue, chantier réel", cap: "Cuisine laquée bleu canard livrée, autre vue du même chantier." },
  { src: `${CH}/chPorteCoulissanteClaustraChene3.jpeg`, alt: "Porte coulissante claustra en chêne, autre chantier, chantier réel", cap: "Porte coulissante claustra en chêne massif, autre chantier réel des équipes partenaires." },
  { src: `${CH}/chEscalierOuvertConstruction.jpeg`, alt: "Escalier ouvert en cours de construction, chantier réel", cap: "Escalier à structure ouverte en cours de construction." },
  { src: `${CH}/chCouloirParquetChevronsPorteBois.jpeg`, alt: "Couloir avec parquet à chevrons et porte bois, chantier réel", cap: "Couloir livré avec parquet à chevrons et porte bois sur mesure." },
  { src: `${CH}/chCuisineAnthraciteCarreauxVue2.jpeg`, alt: "Cuisine anthracite avec carreaux de ciment, autre vue, chantier réel", cap: "Cuisine laquée anthracite livrée, autre vue avec sol en carreaux de ciment." },
  { src: `${CH}/chBoiserieCourbeNicheEtageres.jpeg`, alt: "Boiserie courbe sur mesure en placage chêne avec niche de rangement intégrée, chantier réel", cap: "Boiserie courbe sur mesure, dessinée pour épouser l'angle réel de la pièce, avec niche de rangement à casiers asymétriques intégrée." },
  { src: `${CH}/chVasqueDoubleBoisCannele.jpeg`, alt: "Meuble vasque double sur mesure en chêne cannelé avec plan en marbre, chantier réel", cap: "Meuble vasque double sur mesure, façade en chêne cannelé et plan de toilette en marbre." },
  { src: `${CH}/chBibliothequeChenePieceComplete.jpeg`, alt: "Bibliothèque sur mesure du sol au plafond en placage chêne occupant une pièce entière, chantier réel", cap: "Bibliothèque sur mesure occupant une pièce entière, du sol au plafond, placage chêne, parquet en cours de pose." },
  { src: `${CH}/chRangementRadiateurEtageresOuvertes.jpeg`, alt: "Ensemble de rangements sur mesure avec étagères ouvertes et niche technique pour radiateur, chantier réel", cap: "Ensemble de rangements sur mesure : étagères ouvertes, niche technique à claire-voie pour le radiateur et dressing fermé sur la même façade." },
];

/* 02/09 — Lot « photo haut-de-gamme » transmis par le client : 30 vues de réalisations terminées.
   Chaque fichier a été ouvert et décrit visuellement avant rédaction de sa légende (les noms de
   fichiers n'ont pas été pris pour argent comptant). L'essentiel provient d'un même grand
   appartement ancien parisien livré ; deux vues (chHdgChambreLattes*) proviennent d'un autre
   chantier et deux (chHdgSdbMarbreProfilesLaitonPose, chHdgDoucheMarbreLaitonProtection) montrent
   une salle de bain ENCORE EN COURS DE POSE — film de protection au sol, découpe de plan vasque non
   finie, éclairage provisoire —, ce que leur légende dit explicitement. Aucun de ces fichiers
   n'apparaît ailleurs dans cette page. */
const PHOTOS_HDG = [
  /* Réception : séjour et salle à manger */
  { src: `${CH}/chHdgSalonSalleMangerMoulures.jpeg`, alt: "Séjour et salle à manger d'un appartement ancien parisien, boiseries panneautées, cheminée de marbre et parquet à chevrons", cap: "Séjour et salle à manger réunis dans un appartement ancien parisien : boiseries panneautées et corniches ornées restituées, trumeau et cheminée de marbre d'origine conservés, parquet chêne posé à chevrons. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSalonBoucleAppliquesBronze.jpeg`, alt: "Salon aux murs entièrement panneautés, trumeau à cadre de plâtre sculpté et parquet chêne à chevrons", cap: "Le même salon vu vers l'enfilade : panneautage mouluré repris sur les quatre murs et jusque sur les portes, trumeau à cadre de plâtre sculpté conservé, bouches de ventilation traitées en bandeau discret sous la corniche. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSalleMangerTableDressee.jpeg`, alt: "Salle à manger ouverte sur le salon, portes-fenêtres à volets intérieurs persiennés et suspension en lames de verre", cap: "Salle à manger ouverte sur le salon : portes-fenêtres et volets intérieurs persiennés remis en état, garde-corps en fonte d'origine conservés, table en pierre naturelle claire sous une suspension à lames de verre. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSalleMangerSuspensionAlbatre.jpeg`, alt: "Suspension linéaire en lames de verre sur monture laiton au-dessus d'une table en pierre veinée, mur panneauté", cap: "Détail du même ensemble : suspension linéaire à lames de verre montées sur laiton, alignée sur l'axe de la table en pierre naturelle veinée, panneautage et cimaise moulurée en fond de pièce. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgDiptyqueSalonMiroirBalcon.jpeg`, alt: "Diptyque : salon reflété dans un trumeau à cadre de plâtre sculpté, et balcon filant sur une rue parisienne", cap: "Deux vues du même logement : le salon réfléchi dans le trumeau à cadre de plâtre sculpté conservé, et le balcon filant sur rue avec son garde-corps en fonte d'origine. Chantier réel des équipes partenaires." },

  /* Cuisine, entrée et détails de pierre */
  { src: `${CH}/chHdgCuisineOnyxParquetVersailles.jpeg`, alt: "Cuisine à façades bois clair, parement mural en pierre naturelle rubanée et parquet en panneaux de Versailles", cap: "Cuisine ouverte sur le couloir : parement mural en pierre naturelle rubanée monté du plan de travail au plafond, façades en placage bois clair sans poignée ouvrant par gorge en creux, retour de meuble arrondi et parquet chêne posé en panneaux de Versailles. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgSejourCuisineOnyxBanquette.jpeg`, alt: "Pièce de vie avec cuisine intégrée en bois clair, plan en pierre rubanée et parquet en panneaux de Versailles", cap: "La même pièce de vie en enfilade : colonnes de rangement toute hauteur en placage bois clair, plan de travail et retour de comptoir taillés dans la même pierre rubanée que la crédence, parquet en panneaux de Versailles continu jusqu'à la porte d'entrée. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgEntreeCouloirCuisineOnyx.jpeg`, alt: "Entrée et couloir à soubassement mouluré ouvrant sur la cuisine, parquet en panneaux de Versailles", cap: "Entrée et couloir desservant la pièce de vie : soubassement mouluré et corniches restitués sur tout le linéaire, appliques posées en rythme régulier, parquet en panneaux de Versailles posé sans rupture entre le couloir et la cuisine. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgDetailNicheOnyxCheminee.jpeg`, alt: "Diptyque : niche de crédence taillée dans une pierre rubanée, et tablette de cheminée en marbre sculpté conservée", cap: "Deux détails d'ouvrage : à gauche, la niche de crédence dont le fond, la tablette et l'encadrement sont taillés dans la même pierre avec raccord de veinage ; à droite, la tablette de cheminée en marbre sculpté d'origine, conservée avec son foyer en fonte. Chantier réel des équipes partenaires." },

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
  { src: `${CH}/chHdgSdbMarbreProfilesLaitonPose.jpeg`, alt: "Salle de bain en cours de pose : plan vasque en pierre à découpe encore ouverte et profilés laiton sur les arêtes", cap: "Chantier en cours, non livré : le parement de pierre et le plan vasque sont posés, mais la découpe de la vasque n'est pas finie — le chant reste brut et le perçage de robinetterie est encore libre. Les profilés laiton, posés en angle et en nez de tablette, protègent l'arête de la pierre. Chantier réel des équipes partenaires." },
  { src: `${CH}/chHdgDoucheMarbreLaitonProtection.jpeg`, alt: "Douche en cours de pose, sol et receveur couverts d'un film de protection et éclairage provisoire au plafond", cap: "Même salle de bain, toujours en cours de pose : le sol et le receveur de douche sont encore couverts d'un film de protection, l'éclairage est provisoire et la découpe du plan vasque n'est pas terminée ; les profilés laiton sont déjà posés sur toutes les arêtes du parement. Chantier réel des équipes partenaires." },
];

/* 01/09 — Lot de photos de chantier transmis par le client : ouvrages techniques (étanchéité et
   isolation de pièces d'eau, plomberie, électricité). Regroupés dans leur propre section plutôt
   qu'ajoutés à la galerie ci-dessus, qui documente surtout des ouvrages finis : la lecture reste
   possible et la démonstration « le budget part dans ce qu'on ne voit plus » devient explicite.
   Aucun de ces fichiers n'apparaît ailleurs dans cette page. */
const PHOTOS_TECHNIQUES = [
  /* Étanchéité et isolation des pièces d'eau */
  { src: `${CH}/chEtancheiteSolDoucheTrameArmee.jpeg`, alt: "Sol de douche à l'italienne en préparation, treillis d'armature déroulé sur la dalle et évacuation PVC en attente", cap: "Sol de douche à l'italienne en préparation : treillis d'armature déroulé sur la dalle, évacuation PVC raccordée en attente au droit de la réservation, cloisons en plaque hydrofuge déjà montées. Chantier réel des équipes partenaires." },
  { src: `${CH}/chEtancheiteReceveurDoucheLaser.jpeg`, alt: "Implantation d'un receveur de douche au niveau laser sur des cloisons en plaque hydrofuge", cap: "Implantation d'un receveur de douche au niveau laser : la ligne verte donne la même référence d'altimétrie sur tout le pourtour, attentes de robinetterie et évacuation repérées au crayon avant la pose. Chantier réel des équipes partenaires." },
  { src: `${CH}/chIsolationLaineUrsaVarioSdb.jpeg`, alt: "Doublage isolé d'une salle de bain, laine minérale entre montants et bandes adhésives d'étanchéité à l'air sur chaque ossature", cap: "Doublage isolé d'une salle de bain : laine minérale posée entre montants, chaque ossature recouverte d'une bande adhésive d'étanchéité à l'air, attentes de robinetterie déjà sorties. Chantier réel des équipes partenaires." },
  { src: `${CH}/chIsolationFenetreSdbLaineVario.jpeg`, alt: "Même mur de salle de bain isolé, vu jusqu'au plafond, jonctions adhésivées autour de la fenêtre", cap: "Le même mur vu jusqu'au plafond : les jonctions sont adhésivées en continu autour de la fenêtre et en tête de cloison, là où les fuites d'air se logent en priorité. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParVapeurSopremaFenetreSdb.jpeg`, alt: "Pare-vapeur déroulé sur l'isolant d'un mur de salle de bain, recouvrements et traversées adhésivés", cap: "Pare-vapeur déroulé par-dessus l'isolant : chaque lé est recouvert puis adhésivé, y compris au droit de la gaine électrique et des attentes de robinetterie qui le traversent. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParVapeurFenetreSdbFinition.jpeg`, alt: "Pourtour d'une fenêtre de salle de bain entièrement traité au pare-vapeur avant pose des plaques", cap: "Traitement du pourtour de fenêtre : le pare-vapeur est raccordé et adhésivé sur tout le tableau, point le plus exposé à la condensation dans une pièce d'eau. Chantier réel des équipes partenaires." },
  { src: `${CH}/chParVapeurSopremaMuralSdb.jpeg`, alt: "Mur de salle de bain repris sous pare-vapeur, carrelage blanc existant conservé sur la paroi voisine", cap: "Rénovation partielle d'une salle de bain : seul le mur déposé est réisolé et repris sous pare-vapeur, le carrelage existant de la paroi voisine étant conservé. Chantier réel des équipes partenaires." },
  { src: `${CH}/chPlacoHydroSopremaFenetreSdb.jpeg`, alt: "Cloison de salle de bain fermée en plaque hydrofuge, réservation laissée ouverte sur les attentes de robinetterie", cap: "Fermeture de la cloison en plaque hydrofuge : le pare-vapeur disparaît derrière les plaques, seule la réservation d'accès aux attentes de robinetterie reste ouverte. Chantier réel des équipes partenaires." },

  /* Plomberie : distribution, nourrices, production d'eau chaude */
  { src: `${CH}/chPlomberieColonneCuivreVannes.jpeg`, alt: "Colonne montante en cuivre dans une gaine technique, piquages vannés et étiquettes de repérage numérotées", cap: "Colonne montante en cuivre dans une gaine technique : chaque piquage reçoit sa vanne d'arrêt en laiton et son étiquette numérotée, les départs étant protégés par gaine annelée. Chantier réel des équipes partenaires." },
  { src: `${CH}/chNourriceMulticoucheRadiateurs.jpeg`, alt: "Distribution de chauffage reprise avec raccords à sertir en laiton et nourrices en extrémité de ligne", cap: "Reprise d'une distribution de chauffage : antennes horizontales assemblées par raccords à sertir, descentes maintenues au collier et nourrices laiton en extrémité de ligne. Chantier réel des équipes partenaires." },
  { src: `${CH}/chPlomberieMulticoucheDistributionMurale.jpeg`, alt: "Distribution murale en tube multicouche, tracé d'implantation au crayon, raccords sertis et colliers doubles", cap: "Distribution murale en tube multicouche : implantation tracée au crayon avant pose, raccords sertis, tubes maintenus par colliers doubles et sortie de robinetterie en applique calée sur le tracé. Chantier réel des équipes partenaires." },
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
  { src: `${CH}/chElectriciteFauxPlafondRailsCablage.jpeg`, alt: "Ossature de faux plafond terminée, gaines clipsées sur les fourrures et attente de point lumineux au centre de la pièce", cap: "Ossature de faux plafond terminée : gaines clipsées sur les fourrures et attente de point lumineux descendue au centre de la pièce, plaques de doublage stockées sur place avant pose. Chantier réel des équipes partenaires." },
  { src: `${CH}/chTableauElectriqueDisjoncteurs.jpeg`, alt: "Tableau électrique en cours de câblage dans une niche, rangées de disjoncteurs divisionnaires et borniers de répartition", cap: "Tableau électrique en cours de câblage : rangées de disjoncteurs alimentées par peignes, borniers de répartition repérés bleu et rouge, platine de comptage et disjoncteur de branchement en partie haute. Chantier réel des équipes partenaires." },
];

const DEROULE = [
  { src: `${CH}/chDemolitionDegagementVersSejour.jpeg`, alt: "Dégagement en cours de démolition dans un appartement ancien, papier peint d'origine partiellement déposé et réseaux mis à nu", cap: "Premières semaines de chantier : dégagement en cours vers le séjour, papier peint d'origine encore visible par endroits, lattis mis à nu et réseaux posés au sol avant chape. Chantier réel des équipes partenaires." },
  { src: `/photos/chantiers/chDemolitionMursDecapes.jpeg`, alt: "Pièce d'un logement ancien entièrement décapée après démolition, murs mis à nu", cap: "Démolition sélective : cloisons non porteuses déposées, murs décapés jusqu'au support avant reprise, sols protégés." },
  { src: `${CH}/chPoutreAcierAngleSoudeVue1.jpeg`, alt: "Gaine électrique et câble repassés le long d'un angle de structure acier soudé, avant habillage", cap: "Autre chantier réel : gaine électrique et câblage repassés le long d'un angle de structure acier soudé, avant habillage par le plaquiste." },
  { src: `/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg`, alt: "Portique acier de reprise de charge posé après ouverture d'un mur porteur, avant habillage", cap: "Portique acier de reprise de charge (poutre et poteau) scellé sur ses appuis après ouverture du mur porteur, avant habillage par le plaquiste." },
  { src: `${M}/chantier-plomberie-encastree.jpg`, alt: "Réseaux de plomberie encastrés en tubes multicouche rouges et bleus avec collecteur dans une salle de bain en travaux", cap: "Illustration de référence (hors chantier documenté sur cette page) : principe de réseaux encastrés en multicouche depuis un collecteur, repérage chaud/froid avant fermeture." },
  { src: `${CH}/chPlacardTableauElectriqueIntegre.jpeg`, alt: "Tableau électrique et compteur intégrés dans un aménagement de placard sur mesure", cap: "Tableau électrique et compteur intégrés dans un placard sur mesure : le réseau reste accessible pour l'entretien tout en disparaissant derrière la menuiserie. Chantier réel des équipes partenaires." },
  { src: `${M}/chantier-vmc-caisson-gaines.jpg`, alt: "Caisson de ventilation mécanique contrôlée suspendu en faux plafond avec gaines isolées raccordées", cap: "Illustration de référence (hors chantier documenté sur cette page) : principe d'un caisson de VMC en faux plafond, gaines isolées et pentes maîtrisées." },
  { src: `${M}/chantier-carottage-facade.jpg`, alt: "Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation", cap: "Illustration de référence (hors chantier documenté sur cette page) : carottage de façade pour ventilation, après accord écrit du syndic sur la partie commune." },
  { src: `${M}/moulures-corniches-pose.jpg`, alt: "Salon haussmannien avec corniches en plâtre, rosace et boiseries restituées pendant la rénovation", cap: "Illustration de référence (hors chantier documenté sur cette page) : restitution de corniches, rosace et boiseries en plâtre traditionnel d'après l'existant." },
  { src: `${CH}/chParquetVitrifie.jpeg`, alt: "Séjour livré avec parquet ancien poncé et vitrifié, cheminée et moulures d'origine conservées", cap: "Autre chantier réel des équipes partenaires, sans lien avec les photos de démolition en tête de série : parquet ancien poncé et vitrifié, cheminée et moulures d'origine conservées et restaurées." },
];

const COMPARAISONS = [
  { titre: "Doublage isolant d'une pièce ancienne", texte: "Le mur ancien est d'abord assaini, puis l'ossature métallique est implantée au laser avant la pose de la laine minérale.", avant: `${M}/chantier-ossature-avant.jpg`, apres: `${M}/chantier-isolation-laine.jpg`, avantLabel: "Avant — ossature implantée", apresLabel: "Après — isolant posé", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "De l'ossature brute à la pièce livrée", texte: "Le plafond suspendu absorbe les réseaux ; la pièce est livrée après enduit, peinture et pose du parquet.", avant: `${M}/chantier-ossature-placo-plafond.jpg`, apres: `${M}/chambre-livree-parquet-chene.jpg`, avantLabel: "Avant — ossature", apresLabel: "Après — chambre livrée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "De l'état initial au plateau livré", texte: "Relevé de l'existant, dépose complète, reprise des sols et des plafonds : le volume est restitué avant la pose du parquet chêne.", avant: `/photos/chantiers/chDemolitionDegagementVersSejour.jpeg`, apres: `/photos/chantiers/chParquetVitrifie.jpeg`, avantLabel: "Avant — dégagement", apresLabel: "Après — parquet vitrifié", note: "Photographies de chantiers réels des équipes partenaires (deux chantiers de rénovation d'appartement ancien, présentés en progression type)." },
  { titre: "Ouvrir un mur porteur : de l'étaiement à l'IPN habillée", texte: "Le plancher haut est étayé avant percement ; la poutre acier est ensuite scellée sur ses appuis puis habillée par le plaquiste.", avant: `${M}/chantier-ouverture-mur-etaiement.jpg`, apres: `${M}/chantier-ipn-habillage.jpg`, avantLabel: "Avant — étaiement", apresLabel: "Après — IPN habillée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Réseaux encastrés puis pièce d'eau livrée", texte: "Essai de mise en pression et photographies des réseaux avant fermeture : la finition ne masque jamais un ouvrage non contrôlé.", avant: `${M}/chantier-plomberie-encastree.jpg`, apres: `${M}/salle-bain-ebene-marbre.jpg`, avantLabel: "Avant — réseaux contrôlés", apresLabel: "Après — pièce d'eau livrée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Étanchéité sous carrelage puis salle d'eau livrée", texte: "La natte d'étanchéité, les bandes d'angle et la pente sont contrôlées et photographiées avant la pose de la pierre : c'est l'ouvrage caché qui garantit la durabilité.", avant: `${M}/chantier-nappe-etancheite-douche.jpg`, apres: `${M}/tendance-travertin-salle-bain.jpg`, avantLabel: "Avant — étanchéité posée", apresLabel: "Après — travertin posé", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Pose du zellige, de la crédence brute à la cuisine livrée", texte: "Support dressé, boîtes mélangées, calepinage tracé à sec puis joint époxy : la crédence en zellige se prépare avant d'être posée.", avant: `${M}/chantier-pose-zellige-credence.jpg`, apres: `${M}/tendance-cuisine-facades-sur-mesure-chene.jpg`, avantLabel: "Avant — pose du zellige", apresLabel: "Après — cuisine livrée", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Caissons standards, façades sur mesure", texte: "Les caissons standards sont conservés et optimisés ; seules les façades, les plinthes et les habillages sont fabriqués sur mesure, ce qui réduit fortement le coût à rendu équivalent.", avant: "/photos/pedagogie/35-realisations-cuisine-avant.jpeg", apres: "/photos/pedagogie/36-realisations-cuisine-apres.jpeg", avantLabel: "Avant — caissons optimisés", apresLabel: "Après — cuisine livrée", note: "Illustration pédagogique cohérente (avant/après composés pour ce comparatif), hors chantier documenté sur cette page." },
  { titre: "Pavillon francilien : de la façade fatiguée à l'enveloppe performante", texte: "Isolation thermique par l'extérieur, remplacement des menuiseries, reprise de couverture et traitement des abords : l'enveloppe est traitée comme un ensemble cohérent.", avant: `${M}/pavillon-facade-avant.jpg`, apres: `${M}/pavillon-facade-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Combles : de l'isolant tassé à la double couche croisée", texte: "Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur continu : le premier poste de déperdition d'une passoire énergétique.", avant: `${M}/combles-non-isoles-avant.jpg`, apres: `${M}/combles-isoles-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Électricité : du tableau vétuste à l'installation conforme", texte: "Différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité remise au client à la réception.", avant: `${M}/tableau-electrique-vetuste-avant.jpg`, apres: `${M}/tableau-electrique-neuf-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
  { titre: "Salle d'eau : de la condensation chronique à la ventilation maîtrisée", texte: "La cause est traitée avant la finition : extraction VMC dimensionnée, étanchéité sous carrelage, puis pose du travertin et de la robinetterie.", avant: `${M}/salle-eau-condensation-avant.jpg`, apres: `${M}/salle-eau-vmc-apres.jpg`, avantLabel: "Avant", apresLabel: "Après", note: "Illustration d'un chantier type, hors chantier documenté sur cette page." },
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

      <MqSection kicker="Réalisations haut de gamme" title="Un appartement ancien parisien livré, pièce par pièce" lead="Ces photographies proviennent pour l'essentiel d'un même grand appartement ancien parisien, prises après travaux : ouvrages de pierre, menuiseries sur mesure et éléments d'origine conservés. Quelques vues ont été prises sur d'autres chantiers et deux montrent une salle de bain encore en cours de pose — la légende le précise à chaque fois." wide>
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
