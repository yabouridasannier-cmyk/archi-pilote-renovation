import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  /* Migration vers l'arborescence du DOSSIER UNIQUE FINAL V3 (26/08/2026) —
     anciennes URLs redirigées en 301 pour ne perdre aucun lien existant. */
  async redirects() {
    return [
      { source: "/notre-modele", destination: "/modele-economique-transparence", permanent: true },
      { source: "/renovation-complete-maison", destination: "/renovation-complete", permanent: true },
      { source: "/structure-fondations-maison", destination: "/gros-oeuvre-structure", permanent: true },
      { source: "/extension-maison-ile-de-france", destination: "/extension-maison", permanent: true },
      { source: "/surelevation-maison-ile-de-france", destination: "/surelevation", permanent: true },
      { source: "/renovation-energetique-maison", destination: "/renovation-energetique", permanent: true },
      { source: "/qui-sommes-nous", destination: "/parcours-expertise", permanent: true },
      { source: "/devis", destination: "/estimateur-travaux", permanent: true },
      { source: "/glossaire-renovation-maison", destination: "/glossaire-renovation", permanent: true },
      { source: "/menuiserie-sur-mesure", destination: "/menuiserie-agencement-sur-mesure", permanent: true },
      { source: "/nos-partenaires-experts", destination: "/reseau-partenaires", permanent: true },
      { source: "/bareme-prix-renovation", destination: "/observatoire-prix-renovation", permanent: true },
      { source: "/avant-apres-renovation-maison", destination: "/realisations", permanent: true },
      { source: "/expertises-et-cas-par-specialite", destination: "/realisations", permanent: true },
    ];
  },
};

export default nextConfig;
