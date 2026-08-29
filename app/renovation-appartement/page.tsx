import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Rénovation d'appartement à Paris et en Île-de-France | ARCHI PILOTE",
  description:
    "Rénover un appartement en Île-de-France demande de traiter trois sujets avant l'esthétique : ce que la structure autorise, ce que les évacuations permettent…",
  alternates: { canonical: "/renovation-appartement" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Paris · Hauts-de-Seine · Île-de-France"
        title="Rénovation d'appartement : la copropriété fixe une partie des règles"
        lead={
          <>
            <p>Évacuations, structure, ventilation, accès et horaires : dans un immeuble, les contraintes se vérifient avant de dessiner le plan.</p>
            <p className="mt-3">
              Rénover un appartement en Île-de-France demande de traiter trois sujets avant l'esthétique : ce que la structure autorise, ce que les évacuations permettent et ce que la copropriété accepte. ARCHI PILOTE RÉNOVATION relève le logement, vérifie ces contraintes, arrête le plan, rend les devis comparables et pilote l'exécution jusqu'à la levée des réserves. Les entreprises partenaires contractantes exécutent et facturent les travaux.
            </p>
          </>
        }
      />

      <div className="container-site max-w-4xl pb-4">
        <MqFig
          src="/photos/maquette/hero-renovation.jpg"
          alt="Séjour d'un appartement parisien après rénovation complète : parquet en point de Hongrie restauré, moulures conservées et menuiseries remises en état"
          caption="Appartement ancien rénové : les finitions visibles dépendent d'arbitrages techniques décidés plusieurs semaines plus tôt."
          ratio="aspect-[16/9]"
        />
      </div>

      <MqSection
        kicker="Contraintes"
        title="Ce qui décide réellement du plan"
        lead="Dans un appartement, trois familles de contraintes commandent l'aménagement. Les ignorer conduit à un plan séduisant mais irréalisable."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            {
              title: "La structure",
              dek: "Un mur épais n'est pas automatiquement porteur, un mur fin n'est pas automatiquement sans rôle structurel.",
              text: "L'ouverture entre une cuisine et un séjour peut relever d'une simple cloison ou d'une reprise de charges avec poutre et poteaux d'appui. Dans le second cas, une étude structure et une autorisation de copropriété sont nécessaires.",
            },
            {
              title: "Les évacuations",
              dek: "La pente disponible entre l'appareil et la chute détermine la faisabilité d'un déplacement.",
              text: "Déplacer une salle d'eau ou une cuisine dépend des diamètres, des pentes, des distances et de l'accessibilité des chutes. Un rehaussement de sol ou un système de relevage modifie les niveaux, donc les portes et les seuils.",
            },
            {
              title: "La ventilation",
              dek: "Une rénovation plus étanche sans renouvellement d'air maîtrisé produit de la condensation.",
              text: "Remplacer les menuiseries et isoler modifie le comportement du logement. Les entrées d'air, le transit sous les portes et l'extraction en pièces techniques se traitent dans le même mouvement que l'isolation.",
            },
          ].map((c) => (
            <div key={c.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display text-[1.2rem] text-ivoire">{c.title}</h3>
              <p className="text-ivoire/90 font-medium text-[0.92rem] leading-relaxed">{c.dek}</p>
              <p className="text-muted text-[0.92rem] leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        kicker="Ventilation"
        title="Immeuble sans installation : nous montons le dossier"
        lead="De nombreux immeubles anciens ne disposent d'aucune ventilation mécanique contrôlée. Nous constituons alors un dossier technique complet : constat de l'existant, solution proposée, incidence sur les parties communes, chiffrage et calendrier."
      >
        <MqProse>
          <p>
            Ce dossier est adressé au syndic avec une demande d'inscription à l'ordre du jour de l'assemblée générale. Lorsqu'une traversée de façade ou de plancher est nécessaire, le carottage est réalisé par une entreprise spécialisée, après validation.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            items={[
              "Constat écrit et photographique de l'installation existante.",
              "Solution individuelle ou collective, avec variantes chiffrées.",
              "Note d'incidence sur les parties communes.",
              "Demande d'inscription à l'ordre du jour de l'assemblée générale.",
              "Carottage réalisé après autorisation, par une entreprise spécialisée.",
              "Réglage et vérification des débits après mise en service.",
            ]}
          />
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-vmc.jpg"
            alt="Schéma de principe d'une ventilation mécanique contrôlée hygroréglable en appartement : entrées d'air en menuiseries, transit sous les portes, extraction en cuisine et salle de bains, gaines vers le caisson et carottage de traversée de mur"
            caption="Principe de ventilation hygroréglable : entrées d'air, transit et extraction forment un ensemble indissociable de l'isolation."
          />
        </div>
      </MqSection>

      <MqSection kicker="Déroulé" title="Les sept étapes d'une rénovation d'appartement">
        <MqNumbered
          cols={2}
          items={[
            {
              title: "Relevé du logement et lecture de l'immeuble",
              text: "Relevé des dimensions réelles, repérage des murs porteurs et des gaines techniques, lecture du règlement de copropriété et des contraintes d'accès à l'étage.",
            },
            {
              title: "Vérification des évacuations et des réseaux",
              text: "Position des chutes, pentes disponibles, diamètres, tableau électrique, arrivée de gaz et ventilation existante. Ces données conditionnent le plan avant toute décision d'aménagement.",
            },
            {
              title: "Plan d'aménagement contraint par la technique",
              text: "Le plan est arrêté après les vérifications techniques : déplacement de cuisine ou de salle d'eau, création d'une chambre, ouverture entre pièces.",
            },
            {
              title: "Autorisations de copropriété",
              text: "Demande écrite au syndic pour les travaux touchant aux parties communes, à la structure, aux menuiseries sur rue ou à la ventilation, avec inscription à l'ordre du jour de l'assemblée générale.",
            },
            {
              title: "Chiffrage comparable et achats en direct",
              text: "Descriptif détaillé transmis à plusieurs entreprises partenaires, analyse ligne à ligne, puis achat des matériaux en direct par le client au prix fournisseur.",
            },
            {
              title: "Exécution pilotée et suivi quotidien",
              text: "Protection des parties communes, gestion des horaires autorisés, points de contrôle avant fermeture des cloisons et photos datées transmises chaque jour au client.",
            },
            {
              title: "Réception et levée des réserves",
              text: "Liste des réserves écrite, reprise par les entreprises concernées, remise des notices, garanties et justificatifs d'assurance des entreprises exécutantes.",
            },
          ]}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/maquette/schema-demarches-copropriete.jpg"
            alt="Parcours administratif d'un chantier en copropriété : syndic, assemblée générale, autorisation, déclaration en mairie"
            caption="Parcours administratif en copropriété : demande au syndic, passage en assemblée générale, puis déclaration préalable en mairie si nécessaire."
          />
          <MqFig
            src="/photos/maquette/chantier-carottage-facade.jpg"
            alt="Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation"
            caption="Carottage de façade pour ventilation : bâti fixé, carottage à l'eau, carotte extraite — après accord écrit du syndic sur la partie commune."
          />
          <MqFig
            src="/photos/maquette/cuisine-verriere-atelier.jpg"
            alt="Cuisine ouverte sur séjour séparée par une verrière atelier en acier noir, façades sans poignée et plan de travail en pierre"
            caption="Référence de style : ouverture de la cuisine sur le séjour par une verrière atelier, après reprise du mur porteur."
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Budget"
        title="Où se gagnent les économies"
        lead="Le prix se construit avant le chantier. Une fois les entreprises engagées, la marge de manœuvre devient marginale."
      >
        <MqNumbered
          cols={3}
          items={[
            {
              title: "Achats de matériaux en direct",
              text: "Carrelage, parquet, sanitaires, robinetterie, menuiseries et appareillage électrique achetés par le client au prix fournisseur, sans marge intermédiaire.",
            },
            {
              title: "Devis rendus comparables",
              text: "Même descriptif transmis à toutes les entreprises, mêmes quantités, mêmes hypothèses. La comparaison porte alors sur le prix réel, pas sur le périmètre.",
            },
            {
              title: "Arbitrages décidés en amont",
              text: "Chaque modification en cours de chantier coûte plus cher que la même décision prise avant le démarrage. Le calendrier de décisions est écrit dès le départ.",
            },
          ]}
        />
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Rénovation d'appartement : réponses directes">
        <MqFaq
          items={[
            {
              q: "Combien de temps dure la rénovation complète d'un appartement ?",
              a: "À titre indicatif, un appartement de 50 à 80 m² rénové intégralement demande généralement de dix à seize semaines de travaux, hors délais d'études, d'autorisations de copropriété et d'approvisionnement. Les immeubles anciens avec ascenseur limité ou horaires restreints allongent le calendrier.",
            },
            {
              q: "Peut-on déplacer une cuisine ou une salle de bains dans un appartement ?",
              a: "C'est possible lorsque les évacuations le permettent. Le point déterminant est la pente disponible entre le nouvel appareil et la chute existante. Sans pente suffisante, il faut prévoir un rehaussement de sol, un système de relevage ou renoncer au déplacement.",
            },
            {
              q: "Quelles autorisations demander au syndic de copropriété ?",
              a: "Toute intervention sur un élément porteur, sur une partie commune, sur les menuiseries visibles depuis l'extérieur ou sur la ventilation nécessite une autorisation de l'assemblée générale. Nous constituons le dossier technique, la demande d'inscription à l'ordre du jour et les pièces justificatives.",
            },
            {
              q: "Que faire si l'immeuble n'a aucune ventilation mécanique contrôlée ?",
              a: "Nous documentons l'absence d'installation, proposons une solution individuelle ou collective, chiffrons les travaux et engageons les démarches auprès du syndic. Lorsqu'une traversée est nécessaire, le carottage est réalisé après validation par la copropriété.",
            },
            {
              q: "Peut-on habiter le logement pendant les travaux ?",
              a: "C'est déconseillé pour une rénovation complète : la dépose des réseaux coupe l'eau et l'électricité, la poussière est permanente et le phasage devient plus long et plus coûteux. Un phasage pièce par pièce reste possible pour une rénovation partielle.",
            },
            {
              q: "Comment obtenez-vous jusqu'à 20 % d'économies sur ce type de projet ?",
              a: "Par l'achat des matériaux en direct par le client au prix fournisseur, l'analyse du chiffrage ligne à ligne par un ancien expert en chiffrage, la suppression des doublons entre lots et des arbitrages décidés avant le démarrage plutôt qu'en cours de chantier.",
            },
          ]}
        />
        <p className="mt-8 max-w-2xl border border-line bg-surface rounded-[2px] px-5 py-4 text-[0.85rem] leading-relaxed text-muted">
          <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises concernées.
        </p>
      </MqSection>

      <MqCta />

      <MqReadNext
        items={[
          { href: "/second-oeuvre", label: "Second œuvre technique", sub: "Électricité, plomberie, cloisons, salles d'eau" },
          { href: "/demarches-administratives-renovation", label: "Démarches auprès du syndic", sub: "Copropriété et assemblée générale" },
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes constatées en Île-de-France" },
        ]}
      />
    </>
  );
}
