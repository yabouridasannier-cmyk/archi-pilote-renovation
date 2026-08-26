import type { MetadataRoute } from "next";
import { ARTICLES } from "./data";

const BASE = "https://archipiloterenovation.fr";

const STATIC_PATHS = [
  "/",
  "/services",
  "/nos-specialites",
  "/expertises-et-cas-par-specialite",
  "/realisations",
  "/blog",
  "/devis",
  "/contact",
  "/modele-economique-transparence",
  "/notre-methode",
  "/garanties-assurances",
  "/nos-partenaires-experts",
  "/ce-que-nous-ne-faisons-pas",
  "/parcours-expertise",
  "/mentions-legales",
  "/bareme-prix-renovation",
  "/glossaire-renovation-maison",
  "/aides-renovation-energetique",
  "/renovation-appartement",
  "/second-oeuvre",
  "/renovation-maison-pavillon",
  "/ouverture-mur-porteur",
  "/extension-maison",
  "/surelevation",
  "/renovation-toiture-charpente",
  "/gros-oeuvre-structure",
  "/renovation-complete",
  "/renovation-salle-de-bain-maison",
  "/renovation-cuisine-maison",
  "/electricite-plomberie-renovation",
  "/renovation-energetique",
  "/sols-finitions-renovation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = STATIC_PATHS.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date("2026-08-25"),
  }));
  const articleEntries = ARTICLES.map((a) => ({
    url: `${BASE}/blog/${a.slug}`,
    lastModified: new Date(a.dateISO),
  }));
  return [...staticEntries, ...articleEntries];
}
