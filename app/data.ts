/* ============================================================
   ARCHI PILOTE RÉNOVATION — Contenu central
   Marque exploitée par IA RENOV (SASU), La Garenne-Colombes.
   Territoire : maison & pavillon en Île-de-France (92, 78, 91, 95, 77),
   gros œuvre en tête. Registre lexical strict : la marque pilote et
   accompagne, elle n'exécute ni ne facture aucun lot. Les entreprises
   partenaires contractent directement avec le client.
   ============================================================ */

export const SITE = {
  nom: "ARCHI PILOTE RÉNOVATION",
  baseline: "Rénovation tous corps d'état — Île-de-France",
  zone: "Île-de-France",
  structure: "ARCHI PILOTE RÉNOVATION est une marque exploitée par IA RENOV (SASU), RCS 889 976 387 Nanterre, 8 bis rue Gabriel Péri, 92250 La Garenne-Colombes.",
  tel: "+33 6 52 79 80 89",
  telAffiche: "06 52 79 80 89",
  whatsapp: "https://wa.me/33652798089", // même numéro que le tel — à confirmer si un numéro WhatsApp distinct existe
  email: "archipiloterenovation@gmail.com",
  horaires: [
    { jours: "Lundi — Vendredi", heures: "08h30 – 19h00" },
    { jours: "Samedi", heures: "Sur rendez-vous" },
  ],
};

export const STATS = [
  { valeur: 48, prefixe: "", suffixe: "h", label: "pour recevoir les devis des entreprises", detail: "après la visite technique, sans attendre" },
  { valeur: 5, prefixe: "", suffixe: " j", label: "délai de visite technique", detail: "un pilote de projet se déplace vite" },
  { valeur: 8, prefixe: "", suffixe: "", label: "corps de métier pilotés", detail: "un seul interlocuteur, des entreprises qui contractent directement avec vous" },
  { valeur: 12, prefixe: "", suffixe: " mois", label: "de suivi après réception", detail: "en plus des garanties légales portées par chaque entreprise" },
];

/* ─── Fourchettes de prix — repères IDF 2026 (base de l'estimateur) ───
   "inclus" liste les options déjà comprises dans la gamme, pour éviter
   qu'un visiteur les paie une seconde fois en les cochant. */
export type Gamme = { id: string; nom: string; prixMin: number; prixMax: number; accroche: string; description: string; inclus: string[] };

export const GAMMES: Gamme[] = [
  { id: "rafraichissement", nom: "Rafraîchissement", prixMin: 250, prixMax: 450, accroche: "Redonner un coup d'éclat", description: "Peinture, sols simples, petites finitions.", inclus: [] },
  { id: "partielle", nom: "Rénovation partielle", prixMin: 600, prixMax: 900, accroche: "Cibler l'essentiel", description: "1 à 2 pièces refaites, plomberie et électricité partielles.", inclus: [] },
  { id: "complete", nom: "Rénovation complète", prixMin: 1000, prixMax: 1500, accroche: "Tout reprendre à neuf", description: "Toutes pièces, plomberie et électricité refaites, cuisine et salle de bain neuves.", inclus: ["cuisine", "sdb"] },
  { id: "hautdegamme", nom: "Haut de gamme", prixMin: 1500, prixMax: 2500, accroche: "Matériaux et finitions d'exception", description: "Matériaux premium, design sur-mesure, finitions architecte.", inclus: ["cuisine", "sdb"] },
];

/* Options renommées "plutôt que standard" pour ne jamais facturer deux fois
   un poste déjà compris dans la gamme choisie (cf. audit T3 §3.3). */
export const PIECES_OPTIONS = [
  { id: "cuisine", nom: "Cuisine sur-mesure plutôt que standard", majoration: 6000 },
  { id: "sdb", nom: "Étanchéité renforcée et niches maçonnées", majoration: 4500 },
  { id: "beton-cire", nom: "Béton ciré, en remplacement des revêtements courants", majoration: 3000 },
  { id: "isolation", nom: "Sortie de passoire énergétique F/G", majoration: 5500 },
  { id: "parquet", nom: "Parquet point de Hongrie plutôt que contrecollé", majoration: 2800 },
];

export const SERVICES = [
  {
    marque: "I", slug: "second-oeuvre", titre: "Second œuvre tous corps d'état", accroche: "Un seul interlocuteur",
    texte: "Plomberie, électricité, plâtrerie, peinture, revêtements, menuiserie. Un pilote unique qui tient l'interface entre vous et chaque entreprise, du diagnostic à la réception.",
    photo: "chantierRenovation",
    details: ["Plomberie & électricité aux normes", "Plâtrerie, cloisons, doublages", "Peinture & revêtements muraux", "Menuiserie intérieure sur-mesure"],
  },
  {
    marque: "II", slug: "cuisine-sur-mesure", titre: "Cuisine sur-mesure", accroche: "Conception sur plan",
    texte: "Cuisine dessinée sur plan, ou caissons standards habillés de façades sur-mesure. L'espace pensé pour l'usage réel, pas pour le catalogue. Vous achetez les éléments en direct, sans marge intermédiaire.",
    photo: "cuisineSurMesure",
    details: ["Conception 3D sur plan", "Caissons standards + façades sur-mesure", "Plan de travail au choix (bois, béton ciré, quartz)", "Électroménager encastré intégré"],
  },
  {
    marque: "III", slug: "salle-de-bain", titre: "Salle de bain étanche", accroche: "Zéro noircissement",
    texte: "Joints époxy et nattes d'étanchéité systématiquement prescrits au cahier des charges. Une solution dont les fabricants annoncent une durée de vie sans commune mesure avec celle des joints ciment.",
    photo: "salleBainBeton",
    details: ["Joints époxy systématiquement prescrits", "Nattes d'étanchéité sous carrelage", "Douche italienne ou baignoire", "Ventilation anti-humidité"],
  },
  {
    marque: "IV", slug: "beton-cire", titre: "Béton ciré", accroche: "Finition monobloc",
    texte: "Sols, murs, douches italiennes, plans de travail. Une matière contemporaine, sans joint, qui unifie l'espace — à condition que le support le permette, ce qui se vérifie à la visite technique.",
    photo: "betonCireDetail",
    details: ["Sols et murs sans joint", "Douches italiennes en béton ciré", "Plans de travail cuisine & salle de bain", "Finition mate ou satinée au choix"],
  },
  {
    marque: "V", slug: "isolation-dpe", titre: "Isolation & DPE", accroche: "Sortir de la passoire énergétique",
    texte: "Diagnostic, isolation, VMC double flux, remplacement du chauffage, accompagnement sur MaPrimeRénov' et les CEE. Objectif visé sur ce type de programme : gagner 2 à 3 classes DPE.",
    photo: "chantierIsolation",
    details: ["Diagnostic énergétique complet", "Isolation murs, combles, sols", "VMC double flux", "Accompagnement MaPrimeRénov' & CEE"],
  },
  {
    marque: "VI", slug: "gros-oeuvre", titre: "Gros œuvre & surélévation", accroche: "Piloté de A à Z",
    texte: "Mur porteur, surélévation, extension, charpente et toiture : pilotés avec un architecte DPLG et un bureau d'études structure partenaires. Toutes les démarches administratives prises en charge.",
    photo: "grosOeuvre",
    details: ["Ouverture de mur porteur", "Surélévation & extension", "Architecte DPLG & bureau d'études partenaires", "Démarches administratives incluses"],
  },
];

export const PROCESS = [
  { numero: "01", titre: "Premier échange", accroche: "Téléphone ou WhatsApp", texte: "Vous décrivez votre projet, votre budget et votre commune. On identifie tout de suite ce qui est faisable et ce qu'il faut vérifier sur place." },
  { numero: "02", titre: "Visite technique", accroche: "Sous 5 jours", texte: "Nous nous déplaçons, relevons les dimensions et identifions les contraintes réelles : structure, réseaux, copropriété, autorisations à prévoir." },
  { numero: "03", titre: "Devis des entreprises", accroche: "Sous 48h", texte: "Chaque entreprise partenaire vous remet son devis en son nom, poste par poste. Vous savez exactement ce qui est inclus avant de signer — et vous signez avec elle, directement." },
  { numero: "04", titre: "Chantier piloté", accroche: "Point d'avancement hebdomadaire", texte: "Tous les corps de métier sont pilotés par le même interlocuteur. Vous recevez un point d'avancement écrit chaque semaine, avec photos datées." },
  { numero: "05", titre: "Réception & suivi", accroche: "12 mois", texte: "Vous prononcez la réception, nous vous accompagnons ce jour-là et suivons les levées de réserves auprès des entreprises. Puis 12 mois de suivi, en plus des garanties légales." },
];

/* Ce sur quoi la marque s'engage — remplace un ancien bloc d'avis clients
   fictifs, incompatible avec une marque qui n'a pas encore de chantier réel
   (cf. audit T3 §3.1 : un faux avis contredisait la page réalisations). */
export const ENGAGEMENTS = [
  { titre: "Aucune marge sur vos matériaux", texte: "Vous achetez carrelage, parquet, robinetterie, appareillage et cuisine en direct, à votre nom, avec votre facture. Rien ne transite par nous." },
  { titre: "Les attestations avant le premier coup de marteau", texte: "Chaque entreprise vous remet son attestation d'assurance décennale en cours de validité avant démarrage. Nous vous indiquons quoi y vérifier." },
  { titre: "Nous n'émettons aucun devis de travaux", texte: "Les devis viennent des entreprises, en leur nom. Vous contractez avec elles, vous les payez directement. Notre rémunération est versée par elles, jamais par vous." },
];

export const FAQ = [
  { question: "Combien coûtent des travaux de rénovation en Île-de-France ?", reponse: "Comptez 250-450 €/m² pour un rafraîchissement, 600-900 €/m² pour une rénovation partielle, 1000-1500 €/m² pour une rénovation complète, 1500-2500 €/m² pour du haut de gamme. Fourchettes indicatives de marché observées en Île-de-France, arrêtées à août 2026 — le prix contractuel reste celui du devis remis par chaque entreprise partenaire. Notre estimateur en ligne donne une première fourchette adaptée à votre projet." },
  { question: "Combien de temps dure une rénovation complète de maison ?", reponse: "Pour une maison de 100 à 150 m² sans reprise de structure lourde, comptez généralement quatre à six mois de travaux, précédés d'un à trois mois de préparation. Dès qu'il y a extension, surélévation ou permis de construire, la phase administrative allonge le calendrier de plusieurs mois avant la première benne." },
  { question: "Pourquoi des joints époxy plutôt que des joints classiques ?", reponse: "Les joints ciment noircissent en quelques mois et se fissurent. Les joints époxy, systématiquement prescrits en salle de bain et cuisine, sont étanches, ne noircissent pas et affichent, selon les fabricants, une durée de vie sans commune mesure avec celle des joints ciment." },
  { question: "Pilotez-vous la rénovation de maisons classées DPE F ou G ?", reponse: "Oui, c'est l'une de nos spécialités. Nous pilotons le traitement des passoires énergétiques de bout en bout : diagnostic, isolation, VMC double flux, remplacement du chauffage, accompagnement MaPrimeRénov' et CEE. L'objectif est de gagner 2 à 3 classes DPE." },
  { question: "Qui garantit les travaux, et pendant combien de temps ?", reponse: "Chaque entreprise partenaire porte les assurances correspondant aux activités qu'elle exécute : garantie décennale (10 ans), garantie biennale (2 ans sur les équipements), garantie de parfait achèvement (1 an). Les attestations sont vérifiées et remises avant tout démarrage de chantier." },
  { question: "Qui signe les devis de travaux, et qui je paie ?", reponse: "Chaque entreprise partenaire remet et signe son propre devis. Vous contractez et payez directement avec elle. ARCHI PILOTE RÉNOVATION n'émet aucun devis de travaux et ne facture aucun chantier — notre rôle est le pilotage et l'accompagnement du projet." },
  { question: "Comment se déroule un projet avec ARCHI PILOTE RÉNOVATION ?", reponse: "Cinq étapes : premier échange par téléphone ou WhatsApp, visite technique sous 5 jours, devis des entreprises sous 48h, chantier piloté avec point d'avancement hebdomadaire, puis réception et 12 mois de suivi." },
];

export const MARQUEE_ITEMS = ["Second œuvre", "Cuisine sur-mesure", "Salle de bain étanche", "Béton ciré", "Isolation & DPE", "Gros œuvre", "Surélévation", "Devis entreprises sous 48h"];

/* Avant/après illustratif — nouvelle marque, pas de vrai chantier disponible.
   Territoire maison/pavillon : plus de vocabulaire "appartement" ni
   "haussmannien", qui appartient au territoire d'ARCHI RENOV. */
export const AVANT_APRES = [
  { id: "sejour", titre: "L'ampleur d'une transformation", avantLabel: "Avant — illustration (autre bien)", apresLabel: "Après — illustration (autre bien)", avant: "sejourAvant", apres: "sejourApres", texte: "Deux intérieurs d'illustration, pas un même chantier : ils montrent l'ampleur qu'un projet piloté peut viser. Cloisons, réseaux, sols et finitions se décident dans le bon ordre — c'est ce qui coûte le moins cher et ce qu'on rate le plus souvent." },
];

/* Articles de blog — contenu ORIGINAL écrit pour ARCHI PILOTE RÉNOVATION, territoire maison/pavillon. */
export type Article = { slug: string; titre: string; date: string; dateISO: string; excerpt: string; categorie: string; photo: string; corps: string[]; img2?: string; img2Caption?: string; img3?: string; img3Caption?: string };

export const ARTICLES: Article[] = [
  {
    slug: "extension-ou-surelevation-maison",
    titre: "Extension ou surélévation : comment choisir selon votre terrain",
    date: "29 août 2026", dateISO: "2026-08-29",
    categorie: "Extension",
    excerpt: "Deux façons de gagner de la surface sans déménager, mais deux logiques de faisabilité radicalement différentes : le terrain tranche avant le budget.",
    photo: "chCharpenteMaisonEchafaudage",
    img2: "chTerrassePiscineMaisonVue",
    img2Caption: "Terrasse bois livrée en extension extérieure d'une maison — chantier réel des équipes partenaires.",
    img3: "chCharpenteParpaingConstruction",
    img3Caption: "Extension en parpaings avec charpente bois posée — chantier réel des équipes partenaires.",
    corps: [
      "Agrandir une maison sans déménager passe par deux voies très différentes : construire au sol, en extension, ou construire en hauteur, en surélévation. Le choix ne se décide pas sur un coup de cœur esthétique : il dépend d'abord de ce que le terrain et le bâti existant permettent réellement.",
      "L'extension exige une emprise au sol disponible et compatible avec le plan local d'urbanisme, ainsi qu'une étude de sol préalable pour dimensionner des fondations adaptées. La surélévation, elle, dispense de terrain supplémentaire mais impose un diagnostic de portance des murs existants par un ingénieur structure : un mur construit pour porter une toiture ne porte pas automatiquement un étage habitable de plus.",
      "Dans les deux cas, une déclaration préalable ou un permis de construire est nécessaire selon la surface créée, et le délai administratif — souvent sous-estimé — conditionne le calendrier bien avant le premier coup de pioche. Le diagnostic de faisabilité, réalisé en amont avec un architecte ou un ingénieur structure partenaire, évite d'engager un budget sur un projet qui ne passera pas l'instruction du dossier.",
    ],
  },
  {
    slug: "signes-mur-porteur-avant-travaux",
    titre: "Mur porteur : les signes qui doivent alerter avant travaux",
    date: "25 août 2026", dateISO: "2026-08-25",
    categorie: "Structure",
    excerpt: "Aucun indice ne suffit seul pour juger si un mur porte le bâtiment : voici ceux qu'il faut recouper avant de valider un devis d'ouverture.",
    photo: "chPoutreAcierMurPierreApparente",
    img2: "chPoteauAcierScelleGravats",
    img2Caption: "Pied de poteau acier scellé, gravats de reprise au sol — chantier réel des équipes partenaires.",
    img3: "chDemolitionLattisPlatreChantier1",
    img3Caption: "Démolition d'une cloison en lattis et plâtre, structure mise à nu — chantier réel des équipes partenaires.",
    corps: [
      "Un mur épais n'est pas automatiquement porteur, et un mur fin en briques ou en carreaux de plâtre n'est pas automatiquement sans rôle structurel. C'est l'erreur la plus fréquente chez qui juge « à l'œil » avant travaux.",
      "Quatre indices se recoupent : l'épaisseur du mur, son alignement vertical avec un mur de l'étage du dessous ou du dessus, le sens de pose des solives ou poutrelles du plancher, et sa position par rapport aux façades et aux refends principaux du bâtiment. Pris isolément, chacun n'est qu'une présomption ; ensemble, ils orientent un diagnostic fiable.",
      "Quand le doute persiste, un sondage ponctuel dans une cloison ou un doublage permet d'observer la maçonnerie réelle sans engager une ouverture complète. Pour tout ouvrage engageant la stabilité de plusieurs niveaux, l'avis d'un ingénieur structure partenaire indépendant est sollicité avant toute validation de devis — cette étape, perçue comme une dépense évitable, protège en réalité le budget global du chantier.",
    ],
  },
  {
    slug: "prix-renovation-maison-2026",
    titre: "Combien coûtent des travaux de rénovation de maison en 2026 ?",
    date: "18 août 2026", dateISO: "2026-08-18",
    categorie: "Budget",
    excerpt: "Les fourchettes observées sur les projets accompagnés en Île-de-France, poste par poste, pour ne plus avancer à l'aveugle sur votre budget.",
    photo: "chCuisineBlancheFinieIlot",
    img2: "chCuisineAnthraciteGalerie",
    img2Caption: "Cuisine anthracite livrée, vue en enfilade — chantier réel des équipes partenaires.",
    img3: "chEscalierBoisConstructionMarches",
    img3Caption: "Escalier en bois en cours de construction, marches posées — chantier réel des équipes partenaires.",
    corps: [
      "Le prix d'une rénovation dépend d'abord de son ampleur, bien plus que de la surface seule. Un rafraîchissement (peinture, sols simples) se situe entre 250 et 450 €/m². Une rénovation partielle, qui touche une ou deux pièces avec de la plomberie et de l'électricité, grimpe à 600-900 €/m². Une rénovation complète — toutes les pièces refaites, cuisine et salle de bain neuves — se chiffre entre 1000 et 1500 €/m². Le haut de gamme, avec des matériaux premium et des finitions d'architecte, démarre à 1500 €/m² et peut dépasser 2500 €/m².",
      "Ces fourchettes restent indicatives : seul un devis détaillé après visite technique, remis par l'entreprise qui réalisera les travaux, donne un chiffrage fiable poste par poste. C'est pour cette raison que les devis des entreprises partenaires arrivent sous 48h après la visite — vous devez pouvoir comparer et décider vite, avec des chiffres réels et non des estimations vagues.",
      "Un point souvent oublié : la TVA. Elle est réduite à 10 % sur les travaux d'amélioration d'un logement de plus de 2 ans, et descend à 5,5 % sur les travaux d'amélioration énergétique éligibles. Sur un chantier de 60 000 €, la différence entre 20 % et 10 % de TVA représente 6 000 € — un budget qui peut financer une cuisine entière. Ce taux s'applique aux travaux facturés par l'entreprise ; les matériaux achetés en direct par le client relèvent du taux standard.",
    ],
  },
  {
    slug: "devis-travaux-lignes-a-verifier",
    titre: "Devis de travaux : les lignes à vérifier avant de signer",
    date: "14 août 2026", dateISO: "2026-08-14",
    categorie: "Devis",
    excerpt: "Un devis forfaitaire de trois lignes ne se compare à rien. Voici ce qu'un devis détaillé doit préciser pour être réellement comparable.",
    photo: "chDetailPoigneePorteMain1",
    img2: "chDetailPoigneePorteMain2",
    img2Caption: "Détail d'une poignée de porte vérifiée à la main — chantier réel des équipes partenaires.",
    img3: "chVasqueMarbreVanite",
    img3Caption: "Vasque en marbre encastrée dans un meuble vanité en cours de finition — chantier réel des équipes partenaires.",
    corps: [
      "Deux devis affichant le même total peuvent recouvrir des prestations très différentes. Le premier réflexe consiste à vérifier que le devis détaille des quantités réelles — mètres carrés, mètres linéaires, unités — et non un forfait global impossible à décomposer.",
      "Trois points méritent une attention particulière : les exclusions écrites noir sur blanc (évacuation des gravats, protection des sols, reprise de peinture après un autre lot), la marque et la référence exacte des matériaux prévus plutôt qu'une simple catégorie, et le délai d'exécution engagé, pas seulement une date de début.",
      "Un devis qui ne mentionne aucune de ces précisions n'est pas nécessairement malhonnête, mais il ne permet pas de comparer objectivement deux entreprises. Faire reformuler ces points avant signature coûte un échange de plus et évite le risque d'un avenant surprise en cours de chantier.",
    ],
  },
  {
    slug: "joints-epoxy-vs-ciment",
    titre: "Joints époxy ou joints classiques : pourquoi le choix compte",
    date: "10 août 2026", dateISO: "2026-08-10",
    categorie: "Matériaux",
    excerpt: "Les joints ciment noircissent en quelques mois. Voici pourquoi les entreprises partenaires ne posent plus que de l'époxy en salle de bain et cuisine.",
    photo: "chSdbVasquesPoseMeubleBeige",
    img2: "chCuisineAnthraciteCarreauxVue2",
    img2Caption: "Cuisine anthracite avec sol en carreaux de ciment — chantier réel des équipes partenaires.",
    corps: [
      "Un joint ciment classique est poreux. En quelques mois, il absorbe l'humidité, les moisissures s'y installent, et il noircit — quel que soit le sérieux du nettoyage. Au bout de deux ou trois ans, il se fissure et laisse passer l'eau, avec le risque de dégâts derrière le carrelage.",
      "Le joint époxy est une résine, pas du ciment. Il est non poreux et ne noircit pas — parce qu'il n'y a rien pour les moisissures à quoi s'accrocher. Les fabricants annoncent une durée de vie de 15 à 20 ans, contre 3 à 5 ans pour un joint ciment classique en zone humide.",
      "La pose demande plus de savoir-faire et coûte un peu plus cher à l'installation. Mais rapporté à la durée de vie, le coût annuel réel d'un joint époxy est inférieur à celui d'un joint ciment qu'il faut reprendre tous les 3 ans. C'est pour cette raison qu'il est systématiquement prescrit au cahier des charges des entreprises partenaires en salle de bain et en cuisine — sans supplément caché, c'est le standard, pas une option premium.",
    ],
  },
  {
    slug: "cuisine-sur-mesure-ou-caissons-standards",
    titre: "Cuisine sur mesure ou caissons standards : où se joue vraiment l'économie",
    date: "7 août 2026", dateISO: "2026-08-07",
    categorie: "Cuisine & agencement",
    excerpt: "Le caisson disparaît derrière la façade une fois la cuisine posée : voici pourquoi l'écart de prix ne se voit presque jamais sur le résultat.",
    photo: "chCuisineBlanchePendantsFinie",
    img2: "chCuisineNoireSejourFinie",
    img2Caption: "Cuisine noire ouverte sur séjour, livrée — chantier réel des équipes partenaires.",
    img3: "chDressingNoyerMouluresAngle1",
    img3Caption: "Dressing et enfilade en placage noyer, appartement ancien — chantier réel des équipes partenaires.",
    corps: [
      "Une cuisine intégralement sur mesure coûte cher parce que chaque caisson est fabriqué à l'unité. Or le caisson est invisible une fois la cuisine posée : il n'intervient ni dans l'esthétique ni dans la perception de la qualité par un visiteur.",
      "L'alternative consiste à conserver des caissons standards de bonne facture, aux dimensions normalisées et aux quincailleries fiables, et à faire fabriquer sur mesure uniquement ce qui se voit et se touche : façades, plan de travail, plinthes et joues d'habillage contre les murs biais, fréquents en logement ancien.",
      "L'écart de budget constaté sur un projet équivalent se situe généralement entre 30 et 50 % sur le poste mobilier, sans écart visible sur le résultat livré. La question à poser avant de chiffrer une cuisine n'est donc pas « sur mesure ou standard », mais « qu'est-ce qui doit vraiment être sur mesure ».",
    ],
  },
  {
    slug: "sortir-passoire-energetique",
    titre: "DPE F ou G : comment sortir de la passoire énergétique",
    date: "2 août 2026", dateISO: "2026-08-02",
    categorie: "Isolation & DPE",
    excerpt: "Diagnostic, isolation, chauffage, aides financières : la méthode pour gagner 2 à 3 classes DPE sans se perdre dans les démarches.",
    photo: "chIsolationPhoniqueGranulesPlancher2",
    img2: "chSousCouchePanneauxOSB2",
    img2Caption: "Sous-couche en panneaux OSB avant isolation phonique — chantier réel des équipes partenaires.",
    img3: "chPlancherSolivesBoisRangees",
    img3Caption: "Plancher ancien en solives bois vérifiées avant pose du revêtement — chantier réel des équipes partenaires.",
    corps: [
      "Un logement classé F ou G n'est pas seulement une facture de chauffage élevée : depuis 2025, ces logements sont progressivement interdits à la location. Sortir de la passoire énergétique est donc devenu un sujet patrimonial autant qu'un sujet de confort.",
      "La méthode commence toujours par un diagnostic complet, qui identifie les postes de déperdition réels — souvent les combles et les murs avant les fenêtres, contrairement à l'intuition. Vient ensuite l'isolation proprement dite, la pose d'une VMC double flux pour éviter les problèmes d'humidité une fois le logement étanche, puis le remplacement du système de chauffage si nécessaire — dimensionné après les travaux d'isolation, pas avant.",
      "Les aides existent et se cumulent souvent : MaPrimeRénov' et les Certificats d'Économie d'Énergie (CEE) peuvent financer une part significative des travaux selon les revenus du foyer et le gain énergétique obtenu. Les règles évoluent régulièrement et doivent être vérifiées au moment du projet. L'accompagnement dans ces démarches administratives fait partie du pilotage d'un chantier d'isolation bien mené — le gain de classe DPE ne sert à rien si le dossier d'aide n'aboutit pas.",
    ],
  },
  {
    slug: "coproprietaire-autorisations-avant-travaux",
    titre: "Copropriété : les autorisations à obtenir avant de lancer un chantier",
    date: "28 juillet 2026", dateISO: "2026-07-28",
    categorie: "Copropriété",
    excerpt: "Un chantier qui touche une partie commune ou l'aspect extérieur du bâtiment ne se lance pas sans passer par le syndic — parfois bien avant le premier devis.",
    photo: "chFacadeRavalementEchafaudage1",
    img2: "chDemolitionOuvertureCouloir",
    img2Caption: "Démolition sélective dans un couloir d'appartement ancien, l'une des phases les plus bruyantes d'un chantier — chantier réel des équipes partenaires.",
    img3: "chFacadeRavalementVillage",
    img3Caption: "Ravalement de façade d'un bâtiment ancien, échafaudage en place — chantier réel des équipes partenaires.",
    corps: [
      "En copropriété, le règlement encadre toute intervention touchant les éléments communs, la structure porteuse commune ou l'aspect extérieur du bâtiment. Selon la nature exacte des travaux, une simple information écrite au syndic peut suffire, ou au contraire une autorisation formelle votée en assemblée générale devient nécessaire avant tout démarrage.",
      "C'est notamment le cas d'une ouverture touchant un mur porteur mitoyen d'une partie commune, du remplacement d'une fenêtre visible depuis la rue, ou de la création d'une sortie de ventilation en façade. Ces dossiers doivent être présentés en amont, avec un descriptif technique précis, pour être inscrits à l'ordre du jour de la prochaine assemblée générale — dont la fréquence, généralement annuelle, doit être anticipée dans le calendrier du projet.",
      "En immeuble occupé, les horaires des phases bruyantes comme la démolition ou le carottage sont généralement encadrés par arrêté municipal, et une information écrite préalable des voisins limite les tensions pendant le chantier. Ignorer ces étapes administratives ne fait pas gagner de temps : cela expose au contraire à un arrêt de chantier ordonné en cours de travaux.",
    ],
  },
  {
    slug: "parquet-massif-contrecolle-stratifie",
    titre: "Parquet massif, contrecollé ou stratifié : quel revêtement pour quel usage",
    date: "22 juillet 2026", dateISO: "2026-07-22",
    categorie: "Matériaux",
    excerpt: "Les trois solutions se ressemblent une fois posées, mais leur épaisseur de bois réel change tout pour la durée de vie et les rénovations futures.",
    photo: "chParquetChevronsPosePiece",
    img2: "chCouloirParquetChevronsPorteBois",
    img2Caption: "Couloir livré avec parquet à chevrons et porte bois — chantier réel des équipes partenaires.",
    img3: "chCouloirBoisGaleriesBanc",
    img3Caption: "Couloir habillé de bois avec banc intégré, style galerie — chantier réel des équipes partenaires.",
    corps: [
      "Le parquet massif est en bois plein sur toute son épaisseur, généralement 14 à 22 mm. Il se ponce et se rénove plusieurs fois sur des décennies, ce qui en fait la solution la plus durable — et la plus chère à l'achat comme à la pose, notamment en pose traditionnelle à bâtons rompus ou point de Hongrie.",
      "Le parquet contrecollé associe une fine couche de bois noble, en général 2 à 6 mm, collée sur un support en contreplaqué ou en fibres de bois. Il coûte nettement moins cher que le massif et se ponce une à deux fois selon l'épaisseur de la couche d'usure — un compromis pertinent pour la plupart des chantiers de rénovation.",
      "Le stratifié, enfin, n'est pas du bois mais un décor imprimé sur un support en fibres à haute densité. Il ne se ponce ni ne se rénove : rayé ou abîmé, il se remplace lame par lame ou intégralement. Sa résistance à l'usure quotidienne en fait un choix pertinent dans une pièce à fort passage, sous réserve d'accepter cette limite plutôt que d'y voir une alternative économique au bois véritable.",
    ],
  },
  {
    slug: "maprimerenov-cee-2026",
    titre: "MaPrimeRénov' et CEE : ce qu'il faut vérifier avant de compter sur une aide",
    date: "15 juillet 2026", dateISO: "2026-07-15",
    categorie: "Aides financières",
    excerpt: "Les aides à la rénovation énergétique se cumulent parfois, mais leurs règles et leurs montants évoluent d'une année sur l'autre : ce qui ne change pas, c'est l'ordre dans lequel les vérifier.",
    photo: "chCharpenteToitureOSBChantier",
    img2: "chIsolationCombles",
    img2Caption: "Isolation thermique par l'intérieur, laine minérale posée entre ossature métallique avant fermeture — chantier réel des équipes partenaires.",
    img3: "chRangementChantierEncombre",
    img3Caption: "Rangement sur mesure livré, pièce encore en cours de finition — chantier réel des équipes partenaires.",
    corps: [
      "MaPrimeRénov' et les Certificats d'Économie d'Énergie (CEE) sont les deux dispositifs les plus mobilisés pour financer une part des travaux d'isolation, de ventilation ou de remplacement de chauffage. Leurs montants dépendent des revenus du foyer et du gain énergétique obtenu, et leurs règles d'éligibilité sont révisées régulièrement — parfois en cours d'année.",
      "Avant de compter sur l'une de ces aides dans un budget, trois vérifications s'imposent : la date exacte des barèmes en vigueur au moment du dépôt de dossier, la nécessité de faire réaliser les travaux par une entreprise certifiée RGE (Reconnu Garant de l'Environnement), sans laquelle aucune aide n'est versée, et l'ordre des démarches — la demande doit généralement être déposée avant la signature du devis, jamais après le début des travaux.",
      "Un projet mal séquencé peut perdre le bénéfice d'une aide pour une simple question de date de dossier, même si les travaux réalisés étaient parfaitement éligibles sur le fond. L'accompagnement dans ces démarches fait partie du pilotage d'un chantier d'isolation : le gain de classe énergétique ne sert à rien si le dossier d'aide n'aboutit pas.",
    ],
  },
  {
    slug: "escalier-bois-massif-structure-ouverte-fermee",
    titre: "Escalier : bois massif, structure ouverte ou fermée, quel choix pour quel budget",
    date: "8 juillet 2026", dateISO: "2026-07-08",
    categorie: "Menuiserie",
    excerpt: "Un escalier n'est pas qu'un accès entre deux niveaux : sa structure, son limon et son parement pèsent directement sur le budget et sur l'aspect final.",
    photo: "chEscalierOuvertConstruction",
    img2: "chEscalierBoisFlottantVueBas",
    img2Caption: "Escalier flottant en bois massif, structure en cours de finition — chantier réel des équipes partenaires.",
    img3: "chEscalierBoisFlottantPalier",
    img3Caption: "Escalier flottant desservant un palier ouvert, marches sur limon caché — chantier réel des équipes partenaires.",
    corps: [
      "Un escalier se définit d'abord par sa structure porteuse, pas par son revêtement final. Un limon central en acier ou en bois massif, une structure à crémaillère apparente ou un escalier fermé sur deux limons latéraux ne répondent pas au même budget ni au même rendu visuel.",
      "L'escalier à structure ouverte (marches suspendues, sans contremarche) dégage de la lumière et allège visuellement un volume, mais impose un calcul de structure plus poussé et un garde-corps conforme à la réglementation sur toute la hauteur de chute. Un escalier fermé classique reste la solution la plus économique et la plus simple à sécuriser, notamment en présence de jeunes enfants.",
      "Le choix du bois — massif, contrecollé, ou une structure métallique habillée de marches bois — dépend de l'usage, du budget et du style recherché. Un escalier reste un ouvrage structurel avant d'être un objet de décoration : sa fixation au plancher et au mur engage la même rigueur qu'une reprise de charge classique.",
    ],
  },
  {
    slug: "amenagement-local-commercial-difference-logement",
    titre: "Aménager un local commercial : ce qui change par rapport à un logement",
    date: "1 juillet 2026", dateISO: "2026-07-01",
    categorie: "Local commercial",
    excerpt: "Accueil du public, vitrine, normes ERP : l'agencement d'un local commercial obéit à des règles différentes de celles d'un logement, dès la phase de conception.",
    photo: "chOptiqueComptoirCarcasseBrute2",
    img2: "chOptiqueComptoirAccueilFini2",
    img2Caption: "Comptoir d'accueil livré dans un local commercial d'optique — chantier réel des équipes partenaires.",
    img3: "chOssatureBoisComptoirCommercial2",
    img3Caption: "Ossature bois d'un comptoir de local commercial, avant habillage — chantier réel des équipes partenaires.",
    corps: [
      "Un local recevant du public (ERP) répond à des règles distinctes d'un logement : accessibilité PMR, largeur de circulation, issues de secours et parfois classement au titre de la sécurité incendie selon la surface et l'activité. Ces contraintes se vérifient avant de dessiner l'agencement, pas après.",
      "L'aménagement d'un comptoir d'accueil, d'une vitrine ou de présentoirs muraux sur mesure suit la même logique que la menuiserie résidentielle — relevé du volume réel, dessin coté, fabrication en atelier — mais avec des contraintes d'usage intensif : résistance à l'abrasion, entretien facilité et parfois éclairage technique intégré au mobilier.",
      "Les réseaux électriques et de climatisation d'un local commercial sont généralement plus denses que dans un logement, en particulier pour l'éclairage d'exposition et les équipements spécifiques à l'activité. Le séquencement des lots — réseaux d'abord, agencement ensuite — reste la même règle que pour tout chantier bien piloté.",
    ],
  },
];

/* Galerie réalisations — illustrative (nouvelle marque, pas de vrai chantier
   photographié). Réduite à 6 visuels et légendée en langage de matière plutôt
   qu'en langage de projet, pour ne jamais affirmer une réalisation qui n'existe
   pas (cf. audit T3 §3.2). Catégorie "appartement" supprimée : hors territoire. */
export type Categorie = "cuisine" | "sdb" | "sejour" | "chambre" | "menuiserie" | "chantier";
export const GALERIE_CATEGORIES: { id: Categorie; label: string }[] = [
  { id: "cuisine", label: "Cuisine" },
  { id: "sdb", label: "Salle de bain" },
  { id: "menuiserie", label: "Menuiserie sur-mesure" },
  { id: "chantier", label: "Chantier en cours" },
  { id: "sejour", label: "Séjour" },
  { id: "chambre", label: "Chambre" },
];

/* Photos « · chantier des équipes partenaires » = RÉELLES, fournies par le
   client le 27/08 et vérifiées image par image (registre docs/REGISTRE-MEDIAS.md).
   Les entrées « · illustration » restent des visuels de niveau de finition.
   ⚠ Ne jamais se fier au nom de fichier : les labels décrivent les pixels. */
export const GALERIE = [
  { src: "chCuisineSauge", label: "Cuisine vert sauge, crédence en pierre verte · chantier des équipes partenaires", cat: "cuisine", portrait: true },
  { src: "chCuisineCremeIlot", label: "Cuisine crème, îlot central et plans noirs · chantier des équipes partenaires", cat: "cuisine", portrait: false },
  { src: "chCuisineTerracotta", label: "Cuisine terracotta et blanc sous corniches d'époque · chantier des équipes partenaires", cat: "cuisine", portrait: true },
  { src: "chCuisineBlancheU", label: "Cuisine blanche en U, plans bois · chantier des équipes partenaires", cat: "cuisine", portrait: true },
  { src: "chSdbCarreauxCiment", label: "Douche carreaux de ciment, vasque en pierre · chantier des équipes partenaires", cat: "sdb", portrait: true },
  { src: "chSdbBaignoireTeck", label: "Baignoire îlot et meuble teck, fin de pose · chantier des équipes partenaires", cat: "sdb", portrait: false },
  { src: "chBibliotheque", label: "Bibliothèque toute hauteur contre mur en pierre · chantier des équipes partenaires", cat: "menuiserie", portrait: true },
  { src: "chLitCabane", label: "Lit cabane et rangements d'enfant, en fabrication · chantier des équipes partenaires", cat: "menuiserie", portrait: true },
  { src: "chMenuiserieClaustra", label: "Mur de tasseaux et porte intégrée, en pose · chantier des équipes partenaires", cat: "menuiserie", portrait: false },
  { src: "chCharpenteLevee", label: "Charpente bois levée avant couverture · chantier des équipes partenaires", cat: "chantier", portrait: false },
  { src: "chSurelevationBrique", label: "Élévation briques grande hauteur, échafaudage intérieur · chantier des équipes partenaires", cat: "chantier", portrait: false },
  { src: "chIsolationCombles", label: "Isolation sous rampants, plaquage en grande hauteur · chantier des équipes partenaires", cat: "chantier", portrait: true },
  { src: "chParquetVitrifie", label: "Parquet ancien poncé et vitrifié, cheminée conservée · chantier des équipes partenaires", cat: "sejour", portrait: false },
  { src: "refCuisineSejour", label: "Séjour et salle à manger, table en marbre · illustration", cat: "sejour", portrait: false },
  { src: "refSalleBainMarbreClair", label: "Salle d'eau, douche et vasque en pierre claire · illustration", cat: "sdb", portrait: true },
  { src: "refChambreTeteLitVelours", label: "Chambre, balcons haussmanniens sur rue · illustration", cat: "chambre", portrait: true },
] as const;
