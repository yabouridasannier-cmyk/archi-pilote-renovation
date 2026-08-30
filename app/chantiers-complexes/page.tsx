import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/chantiers-complexes" },
  title: "Chantiers complexes en rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Un chantier devient complexe lorsqu'il combine une reprise de structure, une copropriété avec parties communes concernées, un immeuble occupé pendant les travaux.",
};

const PHASES = [
  {
    title: "Diagnostic technique approfondi",
    text: "Lecture de la structure existante, des réseaux, de l'humidité et des désordres visibles, avec mobilisation d'un ingénieur structure partenaire si nécessaire.",
  },
  {
    title: "Étude de faisabilité et scénarios",
    text: "Plusieurs scénarios techniques et budgétaires sont chiffrés avant tout choix définitif, notamment sur les reprises de structure.",
  },
  {
    title: "Dossier réglementaire et copropriété",
    text: "Constitution du dossier technique destiné au syndic ou à l'urbanisme, préparation des pièces pour l'assemblée générale ou le permis.",
  },
  {
    title: "Phasage des travaux et de l'occupation",
    text: "Organisation du chantier en séquences compatibles avec un immeuble occupé : zones, horaires, nuisances et accès.",
  },
  {
    title: "Exécution pilotée et suivi des aléas",
    text: "Chaque aléa de structure ou de réseau caché est documenté, chiffré et validé avant exécution.",
  },
  {
    title: "Réception et clôture du dossier",
    text: "Contrôle contradictoire, levée des réserves et dossier complet remis au client et, si besoin, au syndic.",
  },
];

const FAQ = [
  {
    q: "Qu'est-ce qu'un chantier complexe selon votre méthode ?",
    a: "Un projet impliquant une reprise de structure, une copropriété avec parties communes concernées, un immeuble occupé pendant les travaux, ou un aléa technique important comme une découverte de désordre caché.",
  },
  {
    q: "Qui intervient sur les questions de structure ?",
    a: "Un ingénieur structure partenaire indépendant, mobilisé sous sa propre responsabilité professionnelle, réalise les calculs nécessaires. Un architecte DPLG partenaire peut être associé lorsque le dossier l'exige, notamment pour un dépôt de permis.",
  },
  {
    q: "Comment gérez-vous un chantier dans un immeuble occupé ?",
    a: "Par un phasage écrit qui organise les zones de travail, les horaires compatibles avec la vie de l'immeuble, la gestion des nuisances et l'information préalable des occupants concernés.",
  },
  {
    q: "Que se passe-t-il si un aléa de structure est découvert en cours de chantier ?",
    a: "Les travaux sur la zone concernée sont suspendus, l'aléa est documenté par photo et par note technique, chiffré, puis soumis à validation du client avant toute reprise d'exécution.",
  },
  {
    q: "Faut-il l'accord du syndic pour un chantier lourd en copropriété ?",
    a: "Souvent oui, notamment si des parties communes ou l'aspect extérieur de l'immeuble sont concernés. Nous préparons le dossier technique et accompagnons les démarches auprès du syndic pour l'inscription à l'ordre du jour de l'assemblée générale.",
  },
  {
    q: "Un chantier complexe suit-il la même méthode que les autres projets ?",
    a: "Oui, les huit étapes de notre méthode s'appliquent, mais avec un formalisme renforcé : davantage de documents techniques, un phasage plus détaillé et une implication accrue des partenaires spécialisés.",
  },
];

export default function ChantiersComplexesPage() {
  return (
    <main>
      <MqHero
        kicker="Dossiers lourds"
        title="Piloter les chantiers complexes sans improviser"
        lead="Un chantier devient complexe lorsqu'il combine une reprise de structure, une copropriété avec parties communes concernées, un immeuble occupé pendant les travaux ou un risque d'aléa technique important. Ces dossiers exigent un diagnostic approfondi, la mobilisation d'un ingénieur structure ou d'un architecte DPLG partenaire indépendant, un phasage précis et une gestion documentée de chaque imprévu, du premier relevé jusqu'à la levée des réserves."
      />

      <div className="container-site max-w-4xl pb-12 md:pb-16">
        <MqFig
          src="/photos/maquette/schema-mur-porteur.jpg"
          alt="Schéma en coupe d'une reprise de structure lourde avec poutre métallique, poteaux d'appui et étaiement dans un immeuble occupé"
          caption="Une reprise de structure en immeuble occupé combine trois contraintes : la stabilité de l'ouvrage, le phasage des travaux et la vie quotidienne des occupants."
          ratio="aspect-[16/9]"
        />
      </div>

      <MqSection
        kicker="Ce qui définit un dossier lourd"
        title="Structure, copropriété, occupation et aléas"
        lead="Quatre familles de contraintes distinguent un chantier complexe d'une rénovation courante : la stabilité du bâti, les règles de copropriété, la présence d'occupants pendant les travaux et la probabilité de découvertes imprévues."
      >
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Contraintes de structure</h3>
              <p className="text-ivoire/85 text-[0.95rem] leading-relaxed font-medium">
                Ouverture de mur porteur, reprise en sous-œuvre, poutre, poteaux, descente de charges.
              </p>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Chaque décision engage la stabilité de l'ouvrage. Un ingénieur structure partenaire indépendant réalise la note de calcul
                nécessaire avant toute exécution, sous sa propre responsabilité professionnelle.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Contraintes de copropriété</h3>
              <p className="text-ivoire/85 text-[0.95rem] leading-relaxed font-medium">
                Parties communes, façade, distribution des colonnes techniques, règlement de copropriété.
              </p>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Le dossier technique doit être présenté au syndic et, souvent, voté en assemblée générale avant tout démarrage sur une partie
                commune ou un élément visible depuis l'extérieur de l'immeuble.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Immeuble occupé pendant les travaux</h3>
              <p className="text-ivoire/85 text-[0.95rem] leading-relaxed font-medium">
                Voisins, locataires ou occupants du bien lui-même présents durant tout ou partie du chantier.
              </p>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Le phasage doit limiter les nuisances, organiser les accès et prévoir une information préalable claire des personnes
                concernées par les zones de travail successives.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Aléas techniques probables</h3>
              <p className="text-ivoire/85 text-[0.95rem] leading-relaxed font-medium">
                Réseau caché, désordre non visible au diagnostic initial, matériau amianté à traiter.
              </p>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Sur un bâti ancien, une part d'incertitude subsiste malgré un diagnostic approfondi. La méthode consiste à documenter chaque
                découverte pour la transformer en décision, pas en improvisation.
              </p>
            </div>
          </div>
          <MqFig
            src="/photos/maquette/schema-carottage-ventilation.jpg"
            alt="Schéma de carottage d'un mur de façade pour la pose d'une gaine et d'une bouche d'extraction en copropriété"
            caption="Carottage de façade pour ventilation : diamètre, gaine et bouche d'extraction, avec accord préalable du syndic lorsque la façade est concernée."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection kicker="Expertise mobilisée" title="Architecte DPLG et ingénieur structure, chacun dans son périmètre">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/chantiers/chPortiqueAcierAngleMurDegarni2.jpeg"
              alt="Portique acier de reprise de charge, mur dégarni jusqu'au support, chantier réel"
              caption="Portique acier de reprise de charge validé par l'ingénieur structure partenaire, avant habillage. Chantier réel des équipes partenaires."
            />
            <MqFig
              src="/photos/chantiers/chPoutreAcierPlafondMurDegarni.jpeg"
              alt="Poutre acier scellée en plafond, mur dégarni jusqu'au support, chantier réel"
              caption="Poutre acier scellée sur ses appuis, dossier suivi conjointement avec l'ingénieur structure. Chantier réel des équipes partenaires."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Ingénieur structure partenaire</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Note de calcul, descente de charges, dimensionnement des reprises, sous sa propre responsabilité professionnelle.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Architecte DPLG partenaire</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Dépôt de permis, conception d'ensemble et interface avec les règles d'urbanisme lorsque le dossier l'exige.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Géotechnicien partenaire — Geo2Mo</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Études de sols et diagnostics de fondation pour les reprises structurelles, extensions et surélévations. Sérieux, réactivité
                et échanges réguliers pour valider les décisions techniques complexes.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="display text-[1.15rem] text-ivoire">Entreprises partenaires spécialisées</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">
                Gros œuvre, désamiantage ou reprise en sous-œuvre confiés à des entreprises qualifiées et assurées pour ce type
                d'intervention.
              </p>
            </div>
          </div>
        </div>
      </MqSection>

      <MqDark kicker="Phasage" title="Comment un dossier lourd est séquencé, étape par étape">
        <MqDarkSteps steps={PHASES} />
      </MqDark>

      <MqSection kicker="Gestion des aléas" title="Ce que documenter un aléa change concrètement">
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/chantiers/chPoutreAcierMurDegarni.jpeg"
            alt="Poutre acier de reprise de charge vue depuis un mur dégarni après ouverture, chantier réel"
            caption="Aléa géré en cours de chantier : mur dégarni jusqu'au support après ouverture, poutre de reprise scellée avant reprise d'enduit. Chantier réel des équipes partenaires."
            ratio="aspect-[16/9]"
          />
          <MqChecklist
            items={[
              "Suspension de la zone concernée dès la découverte d'un désordre imprévu.",
              "Photo datée et note technique transmises immédiatement au client.",
              "Chiffrage de la reprise nécessaire avant toute exécution.",
              "Validation écrite du client avant reprise du chantier.",
              "Mise à jour du planning et information des occupants si nécessaire.",
              "Archivage de l'incident dans le dossier de fin de chantier.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur les dossiers lourds">
        <MqFaq items={FAQ} />
      </MqSection>

      <section className="py-8 border-t border-line">
        <div className="container-site max-w-4xl">
          <p className="border border-line bg-surface rounded-[2px] px-5 py-4 text-[0.85rem] leading-relaxed text-muted">
            <strong className="font-semibold text-ivoire/80">Rôle et responsabilités.</strong> ARCHI PILOTE RÉNOVATION structure et pilote
            les projets de rénovation. Selon les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque
            nécessaire, des architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les entreprises
            concernées.
          </p>
        </div>
      </section>

      <MqCta
        title="Faites analyser la complexité réelle de votre projet"
        lead="Structure, copropriété ou immeuble occupé : nous évaluons le niveau de complexité avant tout chiffrage."
      />

      <MqReadNext
        items={[
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/charte-qualite", label: "Charte qualité", sub: "Contrôles renforcés sur les dossiers lourds" },
          { href: "/parcours-expertise", label: "Parcours & expertise", sub: "Architectes DPLG et ingénieurs structure" },
        ]}
      />

      <section className="py-8 border-t border-line">
        <div className="container-site max-w-4xl text-[0.9rem] text-muted">
          <Link href="/notre-methode" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Voir les huit étapes appliquées aux dossiers lourds
          </Link>
          {" · "}
          <Link href="/contact" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Décrire mon projet
          </Link>
        </div>
      </section>
    </main>
  );
}
