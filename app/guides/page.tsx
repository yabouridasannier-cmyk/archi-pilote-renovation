import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqFig, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Guides et conseils pour réussir sa rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Douze guides thématiques pour orienter un projet de rénovation, du budget à la structure en passant par l'énergie et les démarches en copropriété.",
  alternates: { canonical: "/guides" },
};

const M = "/photos/maquette";

const GUIDES = [
  { kicker: "Estimer un budget avant de contacter des entreprises", q: "Combien coûte une rénovation complète ?", texte: "Fourchettes constatées par type de bien et niveau de finition, avec les postes qui font varier le prix. Renvoie vers l'observatoire des prix pour les données détaillées.", href: "/observatoire-prix-renovation" },
  { kicker: "Sécuriser un projet touchant la structure", q: "Comment reconnaître un mur porteur ?", texte: "Les indices visibles et les vérifications indispensables avant toute ouverture. Renvoie vers la page gros œuvre et structure pour le détail des travaux concernés.", href: "/gros-oeuvre-structure" },
  { kicker: "Décider de l'ampleur des travaux de second œuvre", q: "Faut-il refaire l'électricité en rénovation ?", texte: "Les signes d'une installation à reprendre et l'ordre logique des lots techniques. Renvoie vers la page second œuvre technique pour l'accompagnement complet.", href: "/second-oeuvre" },
  { kicker: "Prioriser les travaux d'isolation et de ventilation", q: "Comment sortir un logement du statut de passoire énergétique ?", texte: "Isolation, ventilation et menuiseries : la méthode pour hiérarchiser les postes selon le diagnostic. Renvoie vers la page rénovation énergétique.", href: "/renovation-energetique" },
  { kicker: "Comparer deux façons d'agrandir un bien", q: "Extension ou surélévation : quelle solution choisir ?", texte: "Les critères de faisabilité (terrain, structure, urbanisme) qui orientent le choix. Renvoie vers les pages extension de maison et surélévation.", href: "/extension-maison" },
  { kicker: "Éviter les forfaits opaques et comparer plusieurs devis", q: "Comment lire un devis de travaux ligne à ligne ?", texte: "La méthode pour repérer les quantités, les exclusions et les postes sous-évalués. Renvoie vers la clinique du devis pour une analyse complète.", href: "/clinique-du-devis" },
  { kicker: "Anticiper le passage en assemblée générale", q: "Quelles démarches avant de commencer un chantier en copropriété ?", texte: "Les validations possibles selon la nature des travaux et le rôle du syndic. Renvoie vers la page démarches administratives.", href: "/demarches-administratives-renovation" },
  { kicker: "Comprendre les étapes avant de s'engager", q: "Comment se déroule un chantier piloté de A à Z ?", texte: "Du diagnostic à la livraison, les huit étapes de la méthode et les points de vigilance à chaque phase. Renvoie vers la page notre méthode.", href: "/notre-methode" },
  { kicker: "Identifier si un projet nécessite des compétences spécifiques", q: "Quels chantiers sont considérés comme complexes ?", texte: "Structure, copropriété, aléas cachés : les situations qui justifient un accompagnement renforcé. Renvoie vers la page chantiers complexes.", href: "/chantiers-complexes" },
  { kicker: "Comprendre qui facture quoi avant de s'engager", q: "Comment est structuré le modèle économique d'ARCHI PILOTE RÉNOVATION ?", texte: "Achats en direct, transparence sur la facturation des entreprises partenaires et rôle du pilotage. Renvoie vers la page modèle économique.", href: "/modele-economique-transparence" },
  { kicker: "Comprendre les termes utilisés par les entreprises et les diagnostics", q: "Quel est le vocabulaire indispensable avant de lancer des travaux ?", texte: "Structure, second œuvre, énergie, administratif, chiffrage : plus de quarante définitions courtes. Renvoie vers le glossaire technique.", href: "/glossaire-renovation" },
  { kicker: "Comprendre qui fait quoi sur un chantier", q: "Quelles entreprises et compétences interviennent sur un projet de rénovation ?", texte: "Entreprises partenaires, architectes DPLG et ingénieurs structure : critères de sélection et périmètre de chacun. Renvoie vers la page réseau de partenaires.", href: "/reseau-partenaires" },
];

export default function Page() {
  return (
    <main>
      <MqHero
        kicker="Guides & conseils"
        title="Choisissez votre question de départ"
        lead="Cette page pilier regroupe douze guides thématiques pour orienter un projet de rénovation, du budget à la structure en passant par l'énergie et les démarches en copropriété. Chaque entrée résume l'intention de recherche et renvoie vers la page de service correspondante, sans article séparé à parcourir."
      />

      {/*
        Diagnostic client (antérieur à la refonte qui a porté cette page à 12 guides) :
        "les quatre illustrations actuelles sont pertinentes mais visuellement
        hétérogènes." Vérifié le 31/08 : la page compte bien 12 guides aujourd'hui
        (tableau GUIDES ci-dessus) mais la grille "Repères visuels" n'affiche encore
        que 4 vignettes, et les 12 cartes de guides plus bas n'ont elles-mêmes AUCUNE
        vignette — l'écart entre "douze vignettes cohérentes, une par question" (brief)
        et l'état réel est donc à la fois un écart de nombre (4 sur 12) et de style.

        Hétérogénéité précise des 4 images actuelles :
        - schema-repartition-budget.jpg, schema-mur-porteur.jpg et
          schema-demarches-copropriete.jpg (dossier /photos/maquette) appartiennent à
          UNE MÊME série d'illustrations techniques générées : même registre de schéma
          pédagogique dessiné, même palette ivoire/trait noir. Cohérentes entre elles.
        - chIsolationCombles.jpeg (dossier /photos/chantiers, légende "chantier réel des
          équipes partenaires") est une PHOTOGRAPHIE RÉELLE de chantier, pas un schéma
          généré : registre visuel opposé (photo vs dessin technique). C'est cette
          quatrième image qui casse la cohérence de la série et qui correspond très
          précisément à l'hétérogénéité signalée par le client.

        Régénérer 12 vignettes cohérentes (une par guide) est hors scope pour cette
        passe (page P1, priorité plus basse que les pages déjà traitées). Piste pour une
        passe dédiée : 1) remplacer chIsolationCombles.jpeg par un 4e schéma généré dans
        la même série que les 3 autres ; 2) étendre à 12 vignettes, une par entrée de
        GUIDES, chacune représentant la DÉCISION posée par la question (ex. "reconnaître
        un mur porteur" → un repérage visuel du mur, pas une pièce déjà rénovée) plutôt
        que le résultat rêvé (budget, structure, énergie, autorisation, méthode) —
        conformément à la règle Visuel 2 du brief, à appliquer aussi si des vignettes
        sont un jour ajoutées aux 12 cartes de guides ci-dessous, qui n'en ont aucune
        pour l'instant.
      */}
      <MqSection kicker="Repères visuels" title="Quatre illustrations pédagogiques pour situer les sujets les plus consultés" wide>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <MqFig src={`${M}/schema-repartition-budget.jpg`} alt="Répartition indicative d'un budget de rénovation complète par poste de travaux en pourcentage" caption="Répartition indicative d'un budget de rénovation complète par poste : ordres de grandeur, à confirmer par un chiffrage détaillé." />
          <MqFig src={`${M}/schema-mur-porteur.jpg`} alt="Schéma en coupe d'une ouverture de mur porteur avec poutre de reprise et poteaux de descente de charge" caption="Ouverture de mur porteur : la charge est reprise par une poutre dimensionnée par un ingénieur structure, puis descendue jusqu'aux appuis." />
          <MqFig src={`${M}/schema-demarches-copropriete.jpg`} alt="Parcours administratif d'un chantier en copropriété : syndic, assemblée générale, autorisation, déclaration en mairie" caption="Parcours administratif en copropriété : demande au syndic, passage en assemblée générale, puis déclaration préalable en mairie si nécessaire." />
          <MqFig src="/photos/chantiers/chIsolationCombles.jpeg" alt="Isolation thermique par l'intérieur en cours, laine minérale entre ossature métallique, chantier réel" caption="Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre. Chantier réel des équipes partenaires." />
        </div>
      </MqSection>

      <MqSection kicker="Les douze guides" title="Chaque guide répond à une décision précise et renvoie vers la page utile" wide>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GUIDES.map((g) => (
            <Link key={g.href + g.q} href={g.href} className="group border border-line bg-surface rounded-[2px] p-6 flex flex-col gap-2 hover:border-line-strong transition-colors">
              <span className="font-mono text-[0.64rem] font-bold tracking-[0.14em] uppercase text-orange-deep">{g.kicker}</span>
              <h3 className="display text-[1.1rem] text-ivoire text-balance group-hover:text-orange-deep transition-colors">{g.q}</h3>
              <p className="text-muted text-[0.88rem] leading-relaxed">{g.texte}</p>
            </Link>
          ))}
        </div>
      </MqSection>

      <MqCta lead="Étude de projet gratuite sous 48 heures : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste." />

      <MqReadNext items={[
        { href: "/faq", label: "Questions fréquentes", sub: "Réponses classées par décision" },
        { href: "/glossaire-renovation", label: "Glossaire technique", sub: "Le vocabulaire du bâtiment" },
        { href: "/contact", label: "Contact", sub: "Étude de projet gratuite" },
      ]} />
    </main>
  );
}
