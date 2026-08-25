import type { MetadataRoute } from "next";
import { ARTICLES } from "./data";

const BASE = "https://archipiloterenovation.fr";

const STATIC_PATHS = [
  "/",
  "/services",
  "/nos-specialites",
  "/expertises-et-cas-par-specialite",
  "/realisations",
  "/realisations/pavillon-annees-30-hauts-de-seine",
  "/realisations/extension-yvelines",
  "/blog",
  "/devis",
  "/contact",
  "/notre-modele",
  "/notre-methode",
  "/garanties-assurances",
  "/nos-partenaires-experts",
  "/ce-que-nous-ne-faisons-pas",
  "/qui-sommes-nous",
  "/mentions-legales",
  "/bareme-prix-renovation",
  "/glossaire-renovation-maison",
  "/aides-renovation-energetique",
  "/avant-apres-renovation-maison",
  "/renovation-appartement",
  "/ouverture-mur-porteur",
  "/extension-maison-ile-de-france",
  "/surelevation-maison-ile-de-france",
  "/renovation-toiture-charpente",
  "/structure-fondations-maison",
  "/renovation-complete-maison",
  "/renovation-salle-de-bain-maison",
  "/renovation-cuisine-maison",
  "/electricite-plomberie-renovation",
  "/renovation-energetique-maison",
  "/sols-finitions-renovation",
  "/renovation-ile-de-france",
  "/renovation-complexe-paris",
  "/renovation-hauts-de-seine-92",
  "/renovation-yvelines-78",
  "/renovation-val-de-marne-94",
  "/renovation-val-doise-95",
  "/renovation-essonne-91",
  "/renovation-seine-et-marne-77",
  "/renovation-seine-saint-denis-93",
  "/renovation-la-garenne-colombes",
  "/renovation-colombes",
  "/renovation-bois-colombes",
  "/renovation-courbevoie",
  "/renovation-asnieres-sur-seine",
  "/renovation-nanterre",
  "/renovation-rueil-malmaison",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-08-25"),
  }));
  const articleEntries = ARTICLES.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date("2026-08-25"),
  }));
  return [...staticEntries, ...articleEntries];
}
