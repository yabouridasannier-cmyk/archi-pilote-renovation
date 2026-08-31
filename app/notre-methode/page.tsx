import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/notre-methode" },
  title: "Notre méthode de pilotage de rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Un chantier dérive rarement à cause d'une seule erreur spectaculaire. Il dérive par accumulation : un devis incomplet, une option validée trop vite, un lot oublié.",
};

const STEPS = [
  {
    title: "Comprendre le besoin réel",
    text: "Usage du bien, durée de détention, contraintes familiales, objectif patrimonial et enveloppe budgétaire disponible. Une résidence principale et un investissement locatif n'appellent pas les mêmes arbitrages, même sur un bien identique.",
  },
  {
    title: "Lire le bâti avant les finitions",
    text: "Structure porteuse, réseaux existants, ventilation, traces d'humidité, état des menuiseries et accès chantier sont examinés avant toute discussion de matériaux ou de couleurs. Un projet esthétiquement séduisant peut être techniquement intenable.",
  },
  {
    title: "Séparer indispensable, souhaitable et optionnel",
    text: "Chaque poste de dépense est classé selon sa nécessité réelle. Cette hiérarchie sert de filet de sécurité : si le budget évolue en cours de projet, l'arbitrage porte sur l'optionnel, jamais sur un poste technique indispensable.",
  },
  {
    title: "Construire un chiffrage lisible",
    text: "Un total ne suffit jamais. Le chiffrage détaille les lots, les quantités, les hypothèses retenues et les exclusions explicites. Deux devis ne se comparent que si leurs périmètres sont rigoureusement identiques.",
  },
  {
    title: "Identifier les compétences nécessaires",
    text: "Certaines opérations exigent un professionnel spécifique : reprise de structure, dépôt de permis, calcul de descente de charges, étude de sols. Nous identifions à ce stade si un architecte DPLG, un ingénieur structure ou le bureau d'études géotechniques Geo2Mo doit intervenir.",
  },
  {
    title: "Verrouiller les interfaces entre les lots",
    text: "Les erreurs coûteuses se logent rarement à l'intérieur d'un lot, mais entre deux lots : une ouverture qui déplace un réseau, une isolation qui modifie la ventilation, une cuisine dessinée avant les réservations électriques.",
  },
  {
    title: "Suivre les décisions et les changements",
    text: "Un chantier vivant évolue. Chaque modification est tracée avec sa conséquence identifiée : coût, délai, technique ou esthétique. Un changement non tracé est la première cause de litige en fin de chantier.",
  },
  {
    title: "Documenter la fin du projet",
    text: "Une rénovation bien pilotée se termine avec un dossier complet : attestations d'assurance des entreprises exécutantes, garanties, notices techniques, réserves et leur levée effective.",
  },
];

const STEP_DETAILS = [
  {
    title: "Comprendre le besoin réel",
    livrable: "Note de cadrage, liste des objectifs hiérarchisés, budget cible.",
    documents: "Titre de propriété ou bail, règlement de copropriété, diagnostic de performance énergétique existant.",
    duree: "3 à 5 jours ouvrés",
  },
  {
    title: "Lire le bâti avant les finitions",
    livrable: "Rapport de visite technique illustré, liste des points de vigilance.",
    documents: "Plans existants si disponibles, historique de travaux, autorisations antérieures.",
    duree: "1 visite + 3 jours de restitution",
  },
  {
    title: "Séparer indispensable, souhaitable et optionnel",
    livrable: "Grille de hiérarchisation des postes, scénarios budgétaires.",
    documents: "Premiers devis ou estimations, souhaits écrits du client.",
    duree: "2 à 4 jours ouvrés",
  },
  {
    title: "Construire un chiffrage lisible",
    livrable: "Chiffrage ligne à ligne par lot, tableau comparatif des offres.",
    documents: "Devis des entreprises consultées, métrés, plans côtés.",
    duree: "1 à 2 semaines selon la taille du projet",
  },
  {
    title: "Identifier les compétences nécessaires",
    livrable: "Liste des intervenants nécessaires et de leur périmètre de responsabilité.",
    documents: "Cahier des charges technique, éventuel dossier de structure ou étude géotechnique préexistant.",
    duree: "3 à 7 jours ouvrés",
  },
  {
    title: "Verrouiller les interfaces entre les lots",
    livrable: "Tableau des interfaces techniques, plan d'implantation piloté.",
    documents: "Plans d'exécution, fiches techniques des équipements retenus.",
    duree: "1 semaine, avant le démarrage des travaux",
  },
  {
    title: "Suivre les décisions et les changements",
    livrable: "Comptes rendus réguliers, journal des modifications, photos datées transmises quotidiennement sur WhatsApp.",
    documents: "Avenants signés, bons de commande de matériaux.",
    duree: "Pendant toute la durée du chantier",
  },
  {
    title: "Documenter la fin du projet",
    livrable: "Dossier unique de fin de chantier, procès-verbal de réception, liste des réserves levées.",
    documents: "Attestations décennale et responsabilité civile, factures, notices d'entretien.",
    duree: "1 à 2 semaines après réception",
  },
];

const FAQ = [
  {
    q: "Combien de temps dure le pilotage complet d'un projet ?",
    a: "Le cadrage et le chiffrage prennent en général deux à quatre semaines selon la taille du bien. Le pilotage du chantier lui-même suit ensuite la durée réelle des travaux, du démarrage jusqu'à la levée des réserves.",
  },
  {
    q: "Qui rédige le chiffrage détaillé ?",
    a: "Le chiffrage est analysé et mis en forme par notre équipe, avec une rigueur issue de l'expérience en chiffrage acquise dans le secteur des foncières. Les devis finaux restent émis par les entreprises partenaires contractantes retenues.",
  },
  {
    q: "La méthode change-t-elle selon la taille du projet ?",
    a: "Les huit étapes s'appliquent toujours, mais leur durée et leur formalisme s'adaptent. Une rénovation de salle de bains suit une version allégée ; une restructuration complète avec reprise de structure mobilise davantage de documents et de partenaires.",
  },
  {
    q: "Comment suis-je informé de l'avancement du chantier ?",
    a: "Par des photos datées transmises quotidiennement sur WhatsApp et des comptes rendus réguliers qui font le point sur les décisions prises, les écarts éventuels et les prochaines étapes.",
  },
  {
    q: "Que se passe-t-il si une contrainte technique apparaît en cours de chantier ?",
    a: "Chaque aléa est documenté, chiffré et arbitré avant exécution. La méthode vise précisément à éviter qu'un imprévu ne devienne une décision improvisée prise sans validation ni traçabilité.",
  },
  {
    q: "Le pilotage inclut-il les démarches auprès du syndic de copropriété ?",
    a: "Oui lorsque le projet le nécessite : constitution du dossier technique, demande d'inscription à l'ordre du jour de l'assemblée générale et suivi des pièces justificatives, notamment pour la ventilation mécanique contrôlée ou le carottage de traversée.",
  },
];

export default function NotreMethodePage() {
  return (
    <main>
      <MqHero
        kicker="Méthode de pilotage"
        title="Une méthode de rénovation fondée sur les décisions"
        lead="Un chantier dérive rarement à cause d'une seule erreur spectaculaire. Il dérive par accumulation : un devis incomplet, une option validée trop vite, un lot oublié, un changement tardif ou une responsabilité mal comprise. Notre méthode transforme chaque projet en une suite de huit décisions vérifiables, chacune assortie d'un livrable écrit, de documents précis et d'une durée indicative, du premier rendez-vous jusqu'au dossier de fin de chantier."
      />

      <div className="container-site max-w-4xl pb-12 md:pb-16">
        <MqFig
          src="/photos/pedagogie/06-huit-etapes.jpeg"
          alt="Schéma pédagogique des huit étapes du pilotage : comprendre le besoin, lire le bâti, prioriser, chiffrer, sélectionner, vérifier les interfaces, suivre le chantier, dossier final"
          caption="Schéma pédagogique : les huit étapes de la méthode, chacune produisant un livrable écrit avant de passer à la suivante."
          ratio="aspect-[16/9]"
        />
      </div>

      <MqSection
        kicker="Pourquoi cette méthode"
        title="Le risque se loge dans l'accumulation, pas dans un seul lot"
        lead="Les litiges de chantier naissent rarement d'une malfaçon isolée. Ils naissent d'une somme de petites approximations : un devis mal lu, une interface oubliée entre deux corps de métier, une décision prise oralement et jamais tracée."
      >
        <MqProse>
          <h3 className="display text-[1.3rem] text-ivoire">Une suite de décisions, pas une promesse de perfection</h3>
          <p>Notre objectif n'est pas d'annoncer un chantier sans imprévu, mais d'éviter que l'imprévu devienne une improvisation.</p>
          <p>
            Chaque étape du pilotage produit un document daté : note de cadrage, rapport de visite, grille de hiérarchisation, chiffrage
            comparatif, tableau des interfaces, compte rendu ou dossier de fin de chantier. Cette documentation permet de revenir sur une
            décision et d'en comprendre l'origine.
          </p>
          <p>
            Elle sert aussi de base au dialogue avec les entreprises partenaires contractantes, qui exécutent et facturent les travaux, et
            avec les architectes DPLG ou ingénieurs structure partenaires indépendants mobilisés sur les dossiers lourds.
          </p>
        </MqProse>
        <div className="mt-10">
          <MqFig
            src="/photos/pedagogie/08-notre-methode-dependances.jpeg"
            alt="Diagramme des dépendances entre structure, réseaux, isolation, ventilation, cuisine et finitions"
            caption="Dépendances et risques entre les différents lots de rénovation. Schéma pédagogique."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqDark kicker="Détail des huit étapes" title="Livrables, documents et durée indicative">
        <MqDarkSteps steps={STEPS} />
        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-planning-lots.jpg"
            alt="Planning en lots d'un chantier de rénovation présenté sous forme de diagramme de phases hebdomadaires"
            caption="Enchaînement des lots d'un chantier de rénovation : chaque phase conditionne la suivante, d'où l'importance du séquencement."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqDark>

      <MqSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STEP_DETAILS.map((d) => (
            <div key={d.title} className="border border-line bg-surface rounded-[2px] p-5 flex flex-col gap-2">
              <h3 className="display text-[1.05rem] text-ivoire">{d.title}</h3>
              <p className="text-muted text-[0.88rem] leading-relaxed">
                <strong className="font-semibold text-ivoire/80">Livrable :</strong> {d.livrable}
              </p>
              <p className="text-muted text-[0.88rem] leading-relaxed">
                <strong className="font-semibold text-ivoire/80">Documents mobilisés :</strong> {d.documents}
              </p>
              <p className="text-muted text-[0.88rem] leading-relaxed">
                <strong className="font-semibold text-ivoire/80">Durée indicative :</strong> {d.duree}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 max-w-md">
          <MqFig
            src="/photos/chantiers/chPortiqueAcierAngleGaine.jpeg"
            alt="Exemple de suivi documenté et de contrôle avant fermeture des ouvrages."
            caption="Détail vérifié avant fermeture : gaine électrique et angle de structure contrôlés avant la pose des plaques de plâtre, sur le même principe que les comptes rendus et photos datées transmis à chaque étape. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        kicker="Interfaces entre lots"
        title="L'étape la plus souvent négligée : verrouiller ce qui se trouve entre deux corps de métier"
        lead="Une ouverture structurelle peut déplacer un réseau électrique ; une isolation renforcée peut rendre une ventilation existante insuffisante ; une cuisine dessinée trop tôt peut bloquer une réservation de plomberie."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-vmc.jpg"
            alt="Schéma d'une ventilation mécanique contrôlée hygroréglable dans un appartement, avec entrées d'air, gaines vers le caisson en combles et bouches d'extraction en pièces techniques"
            caption="Interface type entre lots : la pose d'une ventilation mécanique contrôlée dépend de l'étanchéité à l'air obtenue par l'isolation."
            ratio="aspect-[16/9]"
          />
          {/*
            31/08 : alt corrigé — le schéma réutilisé ici (déjà utilisé sur la page
            rénovation-énergétique) montre un plan d'appartement avec caisson VMC en combles et
            gaines vers les pièces techniques, pas un "immeuble ancien" avec une "trémie existante"
            comme l'affirmait l'ancien alt : ce détail ne figure pas dans l'image. La légende
            visible (générique, "interface entre lots") restait exacte et n'a pas été modifiée.
          */}
          <MqChecklist
            items={[
              "Réservations électriques posées avant l'implantation des meubles.",
              "Arrivées et évacuations d'eau vérifiées avant la pose des cloisons.",
              "Épaisseurs d'isolation confrontées aux niveaux finis de sol.",
              "Dimensions de menuiseries validées avant la commande.",
              "Ventilation dimensionnée après l'amélioration de l'étanchéité à l'air.",
              "Contraintes de pose transmises à chaque entreprise partenaire concernée.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Résultat" title="Ce que cette méthode démontre, et ce qu'elle ne démontre pas">
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/chantiers/chIsolationCombles.jpeg"
            alt="Isolation thermique par l'intérieur en cours, laine minérale entre ossature métallique, chantier réel"
            caption="Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre. Chantier réel des équipes partenaires."
            ratio="aspect-[16/9]"
          />
          <MqNumbered
            items={[
              {
                title: "Ce qu'elle démontre",
                text: "Une décision documentée peut être expliquée, discutée et, si nécessaire, révisée sans perdre le fil du projet.",
              },
              {
                title: "Ce qu'elle ne garantit pas",
                text: "Aucune méthode ne supprime tout aléa de chantier : un réseau caché, une donnée d'humidité imprévue ou un délai fournisseur peuvent survenir.",
              },
              {
                title: "Ce que cela change concrètement",
                text: "L'aléa devient un sujet d'arbitrage documenté plutôt qu'une décision improvisée prise sous pression le jour même.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur la méthode de pilotage">
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
        title="Faites cadrer votre projet en huit étapes"
        lead="Décrivez votre bien et vos objectifs : nous appliquons la méthode dès le premier rendez-vous."
      />

      <MqReadNext
        items={[
          { href: "/parcours-expertise", label: "Parcours & expertise", sub: "L'origine de la méthode de chiffrage" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Quand la méthode se durcit" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Faire analyser un chiffrage existant" },
        ]}
      />

      <section className="py-8 border-t border-line">
        <div className="container-site max-w-4xl text-[0.9rem] text-muted">
          <Link href="/gros-oeuvre-structure" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Voir l'application de cette méthode au gros œuvre et à la structure
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
