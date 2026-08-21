/* ============================================================
   GLOBAL RÉNOVATION — Contenu central
   Nouvelle marque (maquette) — services et fourchettes de prix
   inspirés d'un modèle réel du secteur IDF (voir adn/style-guide.md),
   reste du contenu illustratif (équipe, avis, réalisations).
   ============================================================ */

export const SITE = {
  nom: "Global Rénovation",
  baseline: "Rénovation d'appartement à Paris & Île-de-France",
  zone: "Paris & Île-de-France",
  tel: "+33 1 84 60 00 00", // illustratif
  telAffiche: "01 84 60 00 00",
  whatsapp: "https://wa.me/33184600000",
  email: "contact@global-renovation.fr", // illustratif
  horaires: [
    { jours: "Lundi — Vendredi", heures: "08h30 – 19h00" },
    { jours: "Samedi", heures: "Sur rendez-vous" },
  ],
};

export const STATS = [
  { valeur: 48, prefixe: "", suffixe: "h", label: "pour un devis détaillé", detail: "après la visite technique, sans attendre" },
  { valeur: 5, prefixe: "", suffixe: " j", label: "délai de visite technique", detail: "un chargé de projet se déplace vite" },
  { valeur: 8, prefixe: "", suffixe: "", label: "corps de métier coordonnés", detail: "un seul interlocuteur, zéro sous-traitance opaque" },
  { valeur: 12, prefixe: "", suffixe: " mois", label: "de SAV après livraison", detail: "en plus des garanties légales" },
];

/* ─── Fourchettes de prix RÉELLES IDF 2026 (base de l'estimateur) ─── */
export type Gamme = { id: string; nom: string; prixMin: number; prixMax: number; accroche: string; description: string };

export const GAMMES: Gamme[] = [
  { id: "rafraichissement", nom: "Rafraîchissement", prixMin: 250, prixMax: 450, accroche: "Redonner un coup d'éclat", description: "Peinture, sols simples, petites finitions." },
  { id: "partielle", nom: "Rénovation partielle", prixMin: 600, prixMax: 900, accroche: "Cibler l'essentiel", description: "1 à 2 pièces refaites, plomberie et électricité partielles." },
  { id: "complete", nom: "Rénovation complète", prixMin: 1000, prixMax: 1500, accroche: "Tout reprendre à neuf", description: "Toutes pièces, plomberie et électricité refaites, cuisine et salle de bain neuves." },
  { id: "hautdegamme", nom: "Haut de gamme", prixMin: 1500, prixMax: 2500, accroche: "Matériaux et finitions d'exception", description: "Matériaux premium, design sur-mesure, finitions architecte." },
];

export const PIECES_OPTIONS = [
  { id: "cuisine", nom: "Cuisine sur-mesure", majoration: 6000 },
  { id: "sdb", nom: "Salle de bain étanche", majoration: 4500 },
  { id: "beton-cire", nom: "Béton ciré (sols/murs)", majoration: 3000 },
  { id: "isolation", nom: "Isolation & sortie DPE F/G", majoration: 5500 },
  { id: "parquet", nom: "Parquet point de Hongrie", majoration: 2800 },
];

export const SERVICES = [
  { marque: "I", slug: "second-oeuvre", titre: "Second œuvre tous corps d'état", accroche: "Un seul interlocuteur", texte: "Plomberie, électricité, plâtrerie, peinture, revêtements, menuiserie. Une équipe qui coordonne tous les corps de métier, du diagnostic à la réception.", photo: "chantierRenovation" },
  { marque: "II", slug: "cuisine-sur-mesure", titre: "Cuisine sur-mesure", accroche: "Conception sur plan", texte: "Cuisine dessinée sur plan ou optimisation IKEA Metod avec façades sur-mesure. L'espace pensé pour l'usage réel, pas pour le catalogue.", photo: "cuisineSurMesure" },
  { marque: "III", slug: "salle-de-bain", titre: "Salle de bain étanche", accroche: "Zéro noircissement", texte: "Joints époxy et nattes d'étanchéité posés systématiquement. Une étanchéité totale qui dure 15 à 20 ans — pas des joints ciment à refaire dans 3 ans.", photo: "salleBainBeton" },
  { marque: "IV", slug: "beton-cire", titre: "Béton ciré", accroche: "Finition monobloc", texte: "Sols, murs, douches italiennes, plans de travail. Une matière contemporaine, sans joint, qui unifie l'espace.", photo: "betonCireDetail" },
  { marque: "V", slug: "isolation-dpe", titre: "Isolation & DPE", accroche: "Sortir de la passoire énergétique", texte: "Audit DPE, isolation, VMC double flux, remplacement du chauffage, accompagnement MaPrimeRénov' et CEE. Objectif : gagner 2 à 3 classes DPE.", photo: "chantierIsolation" },
  { marque: "VI", slug: "gros-oeuvre", titre: "Gros œuvre & surélévation", accroche: "Orchestré de A à Z", texte: "Mur porteur, surélévation, extension : pilotés avec nos partenaires architectes DPLG et ingénieurs structure. Toutes les démarches administratives prises en charge.", photo: "grosOeuvre" },
];

export const PROCESS = [
  { numero: "01", titre: "Premier échange", accroche: "Téléphone ou WhatsApp", texte: "Vous décrivez votre projet, votre budget et votre commune. On identifie tout de suite ce qui est faisable et ce qu'il faut vérifier sur place." },
  { numero: "02", titre: "Visite technique", accroche: "Sous 5 jours", texte: "Un chargé de projet se déplace, prend les mesures, identifie les contraintes réelles (structure, réseaux, copropriété)." },
  { numero: "03", titre: "Devis détaillé", accroche: "Sous 48h", texte: "Un chiffrage poste par poste, pas une estimation vague. Vous savez exactement ce qui est inclus avant de signer." },
  { numero: "04", titre: "Travaux coordonnés", accroche: "Compte-rendu hebdomadaire", texte: "Tous les corps de métier sont pilotés par le même interlocuteur. Vous recevez un point d'avancement chaque semaine." },
  { numero: "05", titre: "Livraison & SAV", accroche: "12 mois de suivi", texte: "Réception du chantier, levée des réserves, puis 12 mois de service après-vente en plus des garanties légales." },
];

/* Avis illustratifs — nouvelle marque, aucun avis réel disponible */
export const AVIS = [
  { texte: "Un seul interlocuteur du premier appel à la remise des clés — exactement ce qu'on nous avait promis. Le chantier a tenu le planning annoncé au devis.", auteur: "Camille R.", vehicule: "Rénovation complète — Paris 11e" },
  { texte: "Les joints époxy de la salle de bain, deux ans après, sont toujours impeccables. On nous avait prévenus que ça durerait — c'est le cas.", auteur: "Thomas L.", vehicule: "Salle de bain — Boulogne-Billancourt" },
  { texte: "Le devis détaillé est arrivé en deux jours comme annoncé, poste par poste. Aucune surprise pendant le chantier, ce qui n'était pas gagné d'avance.", auteur: "Nadia B.", vehicule: "Cuisine sur-mesure — Vincennes" },
];

export const FAQ = [
  { question: "Combien coûte une rénovation d'appartement ?", reponse: "Comptez 250-450 €/m² pour un rafraîchissement, 600-900 €/m² pour une rénovation partielle, 1000-1500 €/m² pour une rénovation complète, 1500-2500 €/m² pour du haut de gamme. Utilisez notre estimateur en ligne pour une première fourchette adaptée à votre projet." },
  { question: "Combien de temps dure une rénovation complète ?", reponse: "Une rénovation partielle dure 3 à 6 semaines. Une rénovation complète d'un appartement de 50-80 m² s'étale sur 8 à 14 semaines. Au-delà de 100 m² ou en haut de gamme, comptez 4 à 6 mois. Le planning précis est remis avec le devis." },
  { question: "Pourquoi des joints époxy plutôt que des joints classiques ?", reponse: "Les joints ciment noircissent en quelques mois et se fissurent. Les joints époxy que nous posons systématiquement en salle de bain et cuisine sont étanches, ne noircissent pas, ne bougent pas, et durent 15 à 20 ans." },
  { question: "Sortez-vous les appartements classés DPE F ou G ?", reponse: "Oui, c'est l'une de nos expertises. Nous traitons les passoires énergétiques de bout en bout : audit DPE, isolation, VMC double flux, remplacement du chauffage, accompagnement MaPrimeRénov' et CEE. L'objectif est de gagner 2 à 3 classes DPE." },
  { question: "Quelles garanties offrez-vous sur les travaux ?", reponse: "Trois garanties légales sur tous nos chantiers : garantie décennale (10 ans), garantie biennale (2 ans sur les équipements), garantie de parfait achèvement (1 an). Plus une responsabilité civile professionnelle à jour, avec attestations fournies avant démarrage." },
  { question: "Comment se déroule un projet avec Global Rénovation ?", reponse: "Cinq étapes : premier échange par téléphone ou WhatsApp, visite technique sous 5 jours, devis détaillé sous 48h, travaux coordonnés tous corps d'état avec compte-rendu hebdomadaire, puis livraison et SAV 12 mois." },
];

export const MARQUEE_ITEMS = ["Second œuvre", "Cuisine sur-mesure", "Salle de bain étanche", "Béton ciré", "Isolation & DPE", "Gros œuvre", "Surélévation", "Devis sous 48h"];

/* Avant/après illustratifs (nouvelle marque, pas de vrai chantier disponible) */
export const AVANT_APRES = [
  { id: "sejour", titre: "Le même séjour, complètement transformé", avantLabel: "Avant — appartement à rénover", apresLabel: "Après — séjour rénové", avant: "sejourAvant", apres: "sejourApres", texte: "Un séjour haussmannien retrouve son cachet : moulures restaurées, parquet point de Hongrie posé, luminosité recomposée." },
];

/* Articles de blog — contenu ORIGINAL écrit pour Global Rénovation (thèmes inspirés du secteur) */
export type Article = { slug: string; titre: string; date: string; excerpt: string; categorie: string; photo: string; corps: string[] };

export const ARTICLES: Article[] = [
  {
    slug: "prix-renovation-appartement-2026",
    titre: "Combien coûte une rénovation d'appartement en 2026 ?",
    date: "18 août 2026",
    categorie: "Budget",
    excerpt: "Les fourchettes réelles observées en Île-de-France, poste par poste, pour ne plus avancer à l'aveugle sur votre budget.",
    photo: "chantierRenovation",
    corps: [
      "Le prix d'une rénovation dépend d'abord de son ampleur, bien plus que de la surface seule. Un rafraîchissement (peinture, sols simples) se situe entre 250 et 450 €/m². Une rénovation partielle, qui touche une ou deux pièces avec de la plomberie et de l'électricité, grimpe à 600-900 €/m². Une rénovation complète — toutes les pièces refaites, cuisine et salle de bain neuves — se chiffre entre 1000 et 1500 €/m². Le haut de gamme, avec des matériaux premium et des finitions d'architecte, démarre à 1500 €/m² et peut dépasser 2500 €/m².",
      "Ces fourchettes restent indicatives : seul un devis détaillé après visite technique donne un chiffrage fiable, poste par poste. C'est pour cette raison que nous nous engageons sur un délai de 48h après la visite — vous devez pouvoir comparer et décider vite, avec des chiffres réels et non des estimations vagues.",
      "Un point souvent oublié : la TVA. Elle est réduite à 10 % sur les travaux d'amélioration d'un logement de plus de 2 ans, et descend à 5,5 % sur les travaux d'amélioration énergétique éligibles. Sur un chantier de 60 000 €, la différence entre 20 % et 10 % de TVA représente 6 000 € — un budget qui peut financer une cuisine entière.",
    ],
  },
  {
    slug: "joints-epoxy-vs-ciment",
    titre: "Joints époxy ou joints classiques : pourquoi le choix compte",
    date: "10 août 2026",
    categorie: "Matériaux",
    excerpt: "Les joints ciment noircissent en quelques mois. Voici pourquoi nous ne posons plus que de l'époxy en salle de bain et cuisine.",
    photo: "salleBainBeton",
    corps: [
      "Un joint ciment classique est poreux. En quelques mois, il absorbe l'humidité, les moisissures s'y installent, et il noircit — quel que soit le sérieux du nettoyage. Au bout de deux ou trois ans, il se fissure et laisse passer l'eau, avec le risque de dégâts derrière le carrelage.",
      "Le joint époxy est une résine, pas du ciment. Il est totalement étanche, non poreux, et ne noircit pas — parce qu'il n'y a rien pour les moisissures à quoi s'accrocher. Sa durée de vie constatée est de 15 à 20 ans, contre 3 à 5 ans pour un joint ciment classique en zone humide.",
      "La pose demande plus de savoir-faire et coûte un peu plus cher à l'installation. Mais rapporté à la durée de vie, le coût annuel réel d'un joint époxy est inférieur à celui d'un joint ciment qu'il faut reprendre tous les 3 ans. C'est pour cette raison que nous le posons systématiquement en salle de bain et en cuisine, sans supplément caché — c'est notre standard, pas une option premium.",
    ],
  },
  {
    slug: "sortir-passoire-energetique",
    titre: "DPE F ou G : comment sortir de la passoire énergétique",
    date: "2 août 2026",
    categorie: "Isolation & DPE",
    excerpt: "Audit, isolation, chauffage, aides financières : la méthode pour gagner 2 à 3 classes DPE sans se perdre dans les démarches.",
    photo: "chantierIsolation",
    corps: [
      "Un logement classé F ou G n'est pas seulement une facture de chauffage élevée : depuis 2025, ces logements sont progressivement interdits à la location. Sortir de la passoire énergétique est donc devenu un sujet patrimonial autant qu'un sujet de confort.",
      "La méthode commence toujours par un audit DPE complet, qui identifie les postes de déperdition réels — souvent les combles et les murs avant les fenêtres, contrairement à l'intuition. Vient ensuite l'isolation proprement dite, la pose d'une VMC double flux pour éviter les problèmes d'humidité une fois le logement étanche, puis le remplacement du système de chauffage si nécessaire.",
      "Les aides existent et se cumulent souvent : MaPrimeRénov' et les Certificats d'Économie d'Énergie (CEE) peuvent financer une part significative des travaux selon les revenus du foyer et le gain énergétique obtenu. L'accompagnement dans ces démarches administratives fait partie intégrante d'un chantier d'isolation bien mené — le gain de classe DPE ne sert à rien si le dossier d'aide n'aboutit pas.",
    ],
  },
];

/* Galerie réalisations — illustratives (nouvelle marque, pas de vrai chantier photographié) */
export const GALERIE = [
  { src: "sejourApres", label: "Séjour haussmannien rénové", cat: "Second œuvre", portrait: false },
  { src: "cuisineSurMesure", label: "Cuisine sur-mesure, façades laquées", cat: "Cuisine", portrait: true },
  { src: "salleBainBeton", label: "Salle de bain, béton ciré et joints époxy", cat: "Salle de bain", portrait: true },
  { src: "detailParquet", label: "Parquet point de Hongrie restauré", cat: "Second œuvre", portrait: false },
  { src: "chantierRenovation", label: "Chantier en cours, dépose des cloisons", cat: "Gros œuvre", portrait: false },
  { src: "detailMoulure", label: "Moulures d'origine restaurées", cat: "Patrimoine", portrait: true },
  { src: "betonCireDetail", label: "Douche italienne en béton ciré", cat: "Salle de bain", portrait: true },
  { src: "chantierIsolation", label: "Isolation des combles avant doublage", cat: "Isolation & DPE", portrait: false },
];
