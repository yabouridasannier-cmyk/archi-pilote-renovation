import type { Metadata } from "next";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/electricite-plomberie-renovation" },
  title: "Électricité et plomberie en rénovation | ARCHI PILOTE RÉNOVATION",
  description: "Les réseaux cachés sont difficiles à corriger après doublages, carrelage et peinture. Ils doivent être documentés avant fermeture.",
};

/*
  06/09/2026 — Photos techniques inédites de l'export WhatsApp du client (ossatures de cloisons,
  doublage monté devant un mur d'origine avec ses attentes d'eau et d'électricité, isolation de
  rampant, fenêtre de toit) : AUCUNE n'est posée ici, et ce n'est pas un oubli.

  1) Cette page ne rend qu'UNE image : le visuel d'en-tête de <SpecialtyPage>. Il est déjà occupé
     par chPlacardTableauElectriqueIntegre, photo réelle et exactement dans le sujet (tableau et
     compteur intégrés dans un placard sur mesure, donc restés accessibles après finition).
  2) Afficher une seconde image suppose de modifier app/components/specialty-page.tsx, partagé
     avec quatre autres pages (sols-finitions, cuisine, salle de bain, toiture-charpente) — hors
     périmètre, et le champ `sections[].texte` est rendu dans un <p> : y glisser une <figure>
     produirait un HTML invalide.
  3) Le cadre d'en-tête est figé en aspect-[16/8] avec object-cover. Les photos inédites
     disponibles sont toutes des portraits (900 × 1600 à 1500 × 2000) : y remplacer le visuel
     actuel amputerait les deux tiers du sujet. C'est précisément le défaut de cadrage corrigé
     partout ailleurs cette semaine.
  4) Elles sont donc posées sur /second-oeuvre, page liée depuis le maillage ci-dessous, dans les
     sections qui traitent réellement de leur sujet (cloisons et doublages, points de contrôle
     avant fermeture), et sur /renovation-energetique pour l'isolation de rampant.

  À noter pour qui reprendra ces fichiers partagés : <SpecialtyPage> suffixe systématiquement la
  légende par « — Illustration, non contractuelle », y compris pour une photo de chantier réelle.
*/
export default function Page() {
  return (
    <SpecialtyPage
      slug="/electricite-plomberie-renovation"
      eyebrow="Second œuvre"
      segments={[{ text: "Électricité et plomberie :" }, { text: "refaire les réseaux avant de fermer.", serif: true, gradient: true }]}
      lead="Les réseaux cachés sont difficiles à corriger après doublages, carrelage et peinture. Ils doivent être documentés avant fermeture."
      photo="chPlacardTableauElectriqueIntegre"
      photoAlt="Tableau électrique et compteur intégrés dans un placard sur mesure, chantier réel"
      sections={[
        { titre: "Diagnostic initial", texte: "Tableau, circuits, mise à la terre, distribution d'eau, évacuations, pression et production d'eau chaude — l'état réel avant toute décision." },
        { titre: "Plans de réseaux", texte: "Les plans évitent les décisions improvisées sur chantier, où une erreur coûte cher à corriger une fois les murs fermés." },
        { titre: "Photos avant fermeture", texte: "Une bibliothèque de photos datées, prise avant chaque fermeture de cloison, facilite toute intervention future — sur ce chantier comme sur les suivants." },
      ]}
      maillage={{
        intro:
          "Électricité et plomberie se décident avant la fermeture des cloisons. Ce qui suit détaille le séquencement, les points de contrôle et les arbitrages de budget.",
        groupes: [
          {
            titre: "Avant de refermer les murs",
            liens: [
              { href: "/second-oeuvre", label: "Interfaces entre lots techniques" },
              { href: "/detail-invisible", label: "Les réseaux qu'on ne reverra plus" },
              { href: "/renovation-salle-de-bain-maison", label: "Salle de bain : étanchéité et évacuations" },
            ],
          },
          {
            titre: "Projets concernés",
            liens: [
              { href: "/renovation-appartement", label: "Rénovation d'appartement" },
              { href: "/renovation-complete", label: "Rénovation complète" },
              { href: "/renovation-energetique", label: "Chauffage et ventilation" },
            ],
          },
          {
            titre: "Cadrer le devis",
            liens: [
              { href: "/clinique-du-devis", label: "Lire un devis ligne à ligne" },
              { href: "/garanties-assurances", label: "Garanties et assurances des exécutants" },
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
            ],
          },
        ],
      }}
    />
  );
}
