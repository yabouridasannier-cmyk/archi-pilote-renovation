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
  structure: "ARCHI PILOTE RÉNOVATION est une marque exploitée par IA RENOV (SASU), RCS 889 976 387 Nanterre, 8 rue Gabriel Péri, 92250 La Garenne-Colombes.",
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
export type Article = { slug: string; titre: string; date: string; dateISO: string; excerpt: string; categorie: string; photo: string; corps: string[] };

export const ARTICLES: Article[] = [
  {
    slug: "prix-renovation-maison-2026",
    titre: "Combien coûtent des travaux de rénovation de maison en 2026 ?",
    date: "18 août 2026", dateISO: "2026-08-18",
    categorie: "Budget",
    excerpt: "Les fourchettes observées sur les projets accompagnés en Île-de-France, poste par poste, pour ne plus avancer à l'aveugle sur votre budget.",
    photo: "chantierRenovation",
    corps: [
      "Le prix d'une rénovation dépend d'abord de son ampleur, bien plus que de la surface seule. Un rafraîchissement (peinture, sols simples) se situe entre 250 et 450 €/m². Une rénovation partielle, qui touche une ou deux pièces avec de la plomberie et de l'électricité, grimpe à 600-900 €/m². Une rénovation complète — toutes les pièces refaites, cuisine et salle de bain neuves — se chiffre entre 1000 et 1500 €/m². Le haut de gamme, avec des matériaux premium et des finitions d'architecte, démarre à 1500 €/m² et peut dépasser 2500 €/m².",
      "Ces fourchettes restent indicatives : seul un devis détaillé après visite technique, remis par l'entreprise qui réalisera les travaux, donne un chiffrage fiable poste par poste. C'est pour cette raison que les devis des entreprises partenaires arrivent sous 48h après la visite — vous devez pouvoir comparer et décider vite, avec des chiffres réels et non des estimations vagues.",
      "Un point souvent oublié : la TVA. Elle est réduite à 10 % sur les travaux d'amélioration d'un logement de plus de 2 ans, et descend à 5,5 % sur les travaux d'amélioration énergétique éligibles. Sur un chantier de 60 000 €, la différence entre 20 % et 10 % de TVA représente 6 000 € — un budget qui peut financer une cuisine entière. Ce taux s'applique aux travaux facturés par l'entreprise ; les matériaux achetés en direct par le client relèvent du taux standard.",
    ],
  },
  {
    slug: "joints-epoxy-vs-ciment",
    titre: "Joints époxy ou joints classiques : pourquoi le choix compte",
    date: "10 août 2026", dateISO: "2026-08-10",
    categorie: "Matériaux",
    excerpt: "Les joints ciment noircissent en quelques mois. Voici pourquoi les entreprises partenaires ne posent plus que de l'époxy en salle de bain et cuisine.",
    photo: "salleBainBeton",
    corps: [
      "Un joint ciment classique est poreux. En quelques mois, il absorbe l'humidité, les moisissures s'y installent, et il noircit — quel que soit le sérieux du nettoyage. Au bout de deux ou trois ans, il se fissure et laisse passer l'eau, avec le risque de dégâts derrière le carrelage.",
      "Le joint époxy est une résine, pas du ciment. Il est non poreux et ne noircit pas — parce qu'il n'y a rien pour les moisissures à quoi s'accrocher. Les fabricants annoncent une durée de vie de 15 à 20 ans, contre 3 à 5 ans pour un joint ciment classique en zone humide.",
      "La pose demande plus de savoir-faire et coûte un peu plus cher à l'installation. Mais rapporté à la durée de vie, le coût annuel réel d'un joint époxy est inférieur à celui d'un joint ciment qu'il faut reprendre tous les 3 ans. C'est pour cette raison qu'il est systématiquement prescrit au cahier des charges des entreprises partenaires en salle de bain et en cuisine — sans supplément caché, c'est le standard, pas une option premium.",
    ],
  },
  {
    slug: "sortir-passoire-energetique",
    titre: "DPE F ou G : comment sortir de la passoire énergétique",
    date: "2 août 2026", dateISO: "2026-08-02",
    categorie: "Isolation & DPE",
    excerpt: "Diagnostic, isolation, chauffage, aides financières : la méthode pour gagner 2 à 3 classes DPE sans se perdre dans les démarches.",
    photo: "chantierIsolation",
    corps: [
      "Un logement classé F ou G n'est pas seulement une facture de chauffage élevée : depuis 2025, ces logements sont progressivement interdits à la location. Sortir de la passoire énergétique est donc devenu un sujet patrimonial autant qu'un sujet de confort.",
      "La méthode commence toujours par un diagnostic complet, qui identifie les postes de déperdition réels — souvent les combles et les murs avant les fenêtres, contrairement à l'intuition. Vient ensuite l'isolation proprement dite, la pose d'une VMC double flux pour éviter les problèmes d'humidité une fois le logement étanche, puis le remplacement du système de chauffage si nécessaire — dimensionné après les travaux d'isolation, pas avant.",
      "Les aides existent et se cumulent souvent : MaPrimeRénov' et les Certificats d'Économie d'Énergie (CEE) peuvent financer une part significative des travaux selon les revenus du foyer et le gain énergétique obtenu. Les règles évoluent régulièrement et doivent être vérifiées au moment du projet. L'accompagnement dans ces démarches administratives fait partie du pilotage d'un chantier d'isolation bien mené — le gain de classe DPE ne sert à rien si le dossier d'aide n'aboutit pas.",
    ],
  },
];

/* Galerie réalisations — illustrative (nouvelle marque, pas de vrai chantier
   photographié). Réduite à 6 visuels et légendée en langage de matière plutôt
   qu'en langage de projet, pour ne jamais affirmer une réalisation qui n'existe
   pas (cf. audit T3 §3.2). Catégorie "appartement" supprimée : hors territoire. */
export type Categorie = "cuisine" | "sdb" | "sejour" | "chambre";
export const GALERIE_CATEGORIES: { id: Categorie; label: string }[] = [
  { id: "sejour", label: "Séjour" },
  { id: "cuisine", label: "Cuisine" },
  { id: "sdb", label: "Salle de bain" },
  { id: "chambre", label: "Chambre" },
];

/* Catégorie "chantier" supprimée : elle n'était remplie que de banque d'images,
   ce qui revient à prétendre montrer un chantier (interdit, dossier V3 §3.1).
   ⚠ Les NOMS DE FICHIERS ne décrivent pas toujours le contenu (nommage initial
   erroné) — les labels ci-dessous sont rédigés d'après les pixels, vérifiés
   image par image le 26/08. Ne jamais se fier au nom de fichier. */
export const GALERIE = [
  { src: "refSalonBalconRue", label: "Cuisine ouverte sur le séjour, crédence en pierre · illustration", cat: "cuisine", portrait: false },
  { src: "refCuisineSejour", label: "Séjour et salle à manger, table en marbre · illustration", cat: "sejour", portrait: false },
  { src: "refChambreDoreeJaune", label: "Salle de bain, baignoire et granit toute hauteur · illustration", cat: "sdb", portrait: false },
  { src: "refSalleBainMarbreClair", label: "Salle d'eau, douche et vasque en pierre claire · illustration", cat: "sdb", portrait: true },
  { src: "refSalleBainMarbreNoir", label: "Chambre, cheminée d'époque et moulures · illustration", cat: "chambre", portrait: false },
  { src: "refChambreTeteLitVelours", label: "Chambre, balcons haussmanniens sur rue · illustration", cat: "chambre", portrait: true },
] as const;
