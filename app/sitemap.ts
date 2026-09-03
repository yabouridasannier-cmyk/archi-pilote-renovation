import type { MetadataRoute } from "next";
import { ALL_ARTICLES } from "./lib-articles";

const BASE = "https://www.archipiloterenovation.com";

/* Arborescence maquette Lovable (34 pages) + pages historiques conservées.
   Les pages locales noindexées et les anciennes URLs redirigées n'y figurent pas. */
const STATIC_PATHS = [
  "/",
  // Expertise
  "/notre-methode",
  "/parcours-expertise",
  "/chantiers-complexes",
  "/savoir-faire-ancien",
  "/tendances-materiaux-francais",
  "/tendances-2026-2027",
  "/charte-qualite",
  // Travaux
  "/renovation-complete",
  "/renovation-appartement",
  "/renovation-maison-pavillon",
  "/gros-oeuvre-structure",
  "/second-oeuvre",
  "/expertise-carrelage-zellige-travertin",
  "/menuiserie-agencement-sur-mesure",
  "/renovation-energetique",
  "/extension-maison",
  "/surelevation",
  // Preuves
  "/clinique-du-devis",
  "/observatoire-prix-renovation",
  "/realisations",
  "/temoignages-clients",
  "/detail-invisible",
  "/reseau-partenaires",
  "/investisseurs-professionnels",
  // Ressources
  "/modele-economique-transparence",
  "/achat-direct-materiaux",
  "/demarches-administratives-renovation",
  "/glossaire-renovation",
  "/guides",
  "/blog",
  "/estimateur-travaux",
  "/faq",
  "/contact",
  // Pages historiques conservées (longue traîne)
  "/services",
  "/nos-specialites",
  "/garanties-assurances",
  "/ce-que-nous-ne-faisons-pas",
  "/aides-renovation-energetique",
  "/ouverture-mur-porteur",
  "/renovation-toiture-charpente",
  "/renovation-cuisine-maison",
  "/renovation-salle-de-bain-maison",
  "/electricite-plomberie-renovation",
  "/sols-finitions-renovation",
  "/mentions-legales",
  "/politique-confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-08-29"),
  }));
  const articleEntries = ALL_ARTICLES.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(a.dateISO),
  }));
  return [...staticEntries, ...articleEntries];
}
