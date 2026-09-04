import type { Metadata } from "next";
import Link from "next/link";
import { SpecialtyPage } from "../components/specialty-page";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-toiture-charpente" },
  title: "Toiture et charpente : diagnostic, reprise et couverture | ARCHI PILOTE RÉNOVATION",
  description:
    "Toiture et charpente en rénovation : diagnostic de l'existant, arbitrage entre réparation et remplacement, enchaînement avec l'isolation et la ventilation.",
};

/*
  03/09 : cette page avait été dépliée hors du gabarit partagé <SpecialtyPage> pour pouvoir
  poser des liens dans son corps de texte — le gabarit ne rendait que des chaînes brutes.
  Le gabarit accepte désormais du JSX dans `texte` et un `maillage` propre à chaque page :
  la page est donc remise dessus, et la copie du gabarit supprimée. Les quatre autres pages
  de spécialité bénéficient de la même évolution.
*/

const LINK = "underline underline-offset-4 hover:text-orange-deep transition-colors";

export default function Page() {
  return (
    <SpecialtyPage
      slug="/renovation-toiture-charpente"
      eyebrow="Gros œuvre"
      segments={[{ text: "Toiture et charpente :" }, { text: "traiter l'enveloppe en priorité.", serif: true, gradient: true }]}
      lead="La toiture protège tout le reste. Tant que l'enveloppe n'est pas saine, l'isolation, les finitions et le confort thermique reposent sur un support incertain. Le diagnostic précède donc l'arbitrage, et l'arbitrage précède le devis."
      photo="chCharpenteLevee"
      photoAlt="Charpente bois neuve avant couverture — chantier réel des équipes partenaires"
      sections={[
        {
          titre: "Diagnostic utile",
          texte: (
            <>
              Couverture, zinguerie, points singuliers, bois, humidité, ventilation et isolation existante :
              chaque poste conditionne les suivants. L&apos;état de la charpente et les éventuelles reprises de
              bois relèvent du{" "}
              <Link href="/gros-oeuvre-structure" className={LINK}>gros œuvre et de la structure</Link>, traités
              avec les mêmes exigences de calcul que les autres ouvrages porteurs.
            </>
          ),
        },
        {
          titre: "Réparer ou refaire",
          texte: (
            <>
              Le bon choix dépend de l&apos;état réel, de la compatibilité des matériaux et des objectifs
              thermiques — pas d&apos;une règle générale. Notre article{" "}
              <Link href="/blog/renovation-toiture-reparer-traiter-remplacer" className={LINK}>
                rénovation de toiture : réparer, traiter ou remplacer ?
              </Link>{" "}
              détaille ce que regarde le couvreur avant de trancher.
            </>
          ),
        },
        {
          titre: "Enchaînement des décisions",
          texte: (
            <>
              Fenêtres de toit, isolation, pare-vapeur, ventilation et finitions intérieures doivent être décidés
              ensemble, dans le bon ordre. Cet enchaînement est celui décrit sur la page{" "}
              <Link href="/renovation-energetique" className={LINK}>rénovation énergétique</Link>, où
              l&apos;isolation et le renouvellement d&apos;air sont traités comme un même système.
            </>
          ),
        },
      ]}
      maillage={{
        intro:
          "La toiture ouvre ou ferme la plupart des autres décisions : isolation, surélévation, autorisations d'urbanisme. Voici les pages qui prolongent chacune d'elles.",
        groupes: [
          {
            titre: "Enveloppe et confort",
            liens: [
              { href: "/renovation-energetique", label: "Isolation, ventilation et DPE" },
              { href: "/aides-renovation-energetique", label: "Aides : ce qu'il faut vérifier" },
              { href: "/renovation-maison-pavillon", label: "Rénovation de maison et pavillon" },
            ],
          },
          {
            titre: "Quand la toiture est déposée",
            liens: [
              { href: "/surelevation", label: "Surélévation : créer un étage" },
              { href: "/gros-oeuvre-structure", label: "Charpente et ouvrages porteurs" },
              { href: "/demarches-administratives-renovation", label: "Autorisations d'urbanisme" },
            ],
          },
          {
            titre: "Zone d'intervention",
            liens: [
              { href: "/renovation-hauts-de-seine-92", label: "Hauts-de-Seine" },
              { href: "/renovation-ile-de-france", label: "Île-de-France" },
            ],
          },
        ],
      }}
    />
  );
}
