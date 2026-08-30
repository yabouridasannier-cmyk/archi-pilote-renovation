import type { Metadata } from "next";
import Link from "next/link";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/parcours-expertise" },
  title: "Parcours & expertise rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Avant de structurer des projets pour particuliers et professionnels, cette méthode s'est construite au contact de foncières, de marchands de biens et d'agences immobilières.",
};

const FAQ = [
  {
    q: "ARCHI PILOTE RÉNOVATION est-il un cabinet d'architecture ?",
    a: "Non. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Lorsque le dossier l'exige, un architecte DPLG ou un ingénieur structure partenaire indépendant intervient sous sa propre responsabilité professionnelle. Les travaux sont exécutés et facturés par les entreprises partenaires contractantes.",
  },
  {
    q: "D'où vient la méthode de lecture des devis ?",
    a: "Elle s'est construite au contact du secteur des foncières, des marchands de biens et des agences immobilières, dans des dossiers où un mauvais chiffrage pouvait bloquer une décision d'acquisition ou de cession.",
  },
  {
    q: "Comment vérifier la compétence d'un interlocuteur en rénovation ?",
    a: "Trois critères concrets : un auteur identifié et joignable, une expérience démontrée sur des dossiers comparables au vôtre, et des sources vérifiables — devis analysés, réalisations documentées, partenaires nommés et leurs qualifications.",
  },
  {
    q: "Travaillez-vous avec des architectes DPLG sur tous les projets ?",
    a: "Non, uniquement lorsque le dossier l'exige : dépôt de permis, reprise de structure, extension, surélévation ou exigence du règlement de copropriété. Sur les projets plus simples, notre équipe pilote directement avec les entreprises partenaires contractantes.",
  },
  {
    q: "Cette expertise s'applique-t-elle aux professionnels et pas seulement aux particuliers ?",
    a: "Oui. La méthode d'origine s'adresse aussi bien aux investisseurs et bailleurs qu'aux propriétaires occupants, avec la même exigence de lecture des coûts et la même transparence sur le rôle de chaque intervenant.",
  },
  {
    q: "Comment savoir si le chiffrage remis pour mon projet est fiable ?",
    a: "En le confrontant ligne à ligne à ce qu'il est censé couvrir : quantités, hypothèses, exclusions et cohérence entre lots. C'est précisément l'objet de notre clinique du devis, accessible avant tout engagement.",
  },
];

export default function ParcoursExpertisePage() {
  return (
    <main>
      <MqHero
        kicker="Expertise et parcours"
        title="Une expertise construite dans l'analyse des coûts"
        lead="Avant de structurer des projets pour particuliers et professionnels, cette méthode s'est construite au contact de foncières, de marchands de biens et d'agences immobilières, sur des dossiers où un mauvais chiffrage pouvait bloquer une décision d'acquisition. Le point commun : lire les devis, identifier les écarts, comprendre les postes réellement nécessaires et remettre les coûts dans un ordre cohérent avant toute négociation."
      />

      <div className="container-site max-w-4xl pb-12 md:pb-16">
        <MqFig
          src="/photos/maquette/hero-renovation.jpg"
          alt="Ancien expert en chiffrage examinant un devis de rénovation ligne à ligne à côté de plans d'appartement"
          caption="La lecture d'un devis précède toujours sa négociation : comprendre ce qui est inclus, ce qui manque et ce qui se répète."
          ratio="aspect-[16/9]"
        />
      </div>

      <MqSection
        kicker="Un parcours d'ancien expert en chiffrage"
        title="Décortiquer avant de négocier"
        lead="Réduire un prix sans comprendre le devis est une mauvaise méthode. Il faut d'abord identifier ce qui est inclus, ce qui manque, ce qui se répète et ce qui dépend d'une hypothèse. Cette lecture permet ensuite de discuter sur des faits, pas sur des impressions."
      >
        <div className="flex flex-col gap-8">
          <MqProse>
            <h3 className="display text-[1.3rem] text-ivoire">Le secteur des foncières comme école de rigueur</h3>
            <p>Un chiffrage d'acquisition ou de cession ne tolère pas l'approximation : chaque poste engage une décision d'investissement.</p>
            <p>
              Dans une foncière, un chiffrage erroné se répercute directement sur la rentabilité d'un actif. Cette contrainte impose une
              lecture méthodique : vérifier les quantités annoncées, comparer les prix unitaires aux référentiels du marché, repérer les
              prestations absentes et signaler les hypothèses non écrites qui peuvent faire dériver un budget.
            </p>
            <p>
              Cette discipline s'applique désormais aux projets de rénovation des particuliers et des professionnels accompagnés par ARCHI
              PILOTE RÉNOVATION, avec les mêmes réflexes de vérification.
            </p>
          </MqProse>
          {/*
            À GÉNÉRER — schéma manquant pour cette section.
            L'image précédente ici (schema-mur-porteur.jpg) montrait une ouverture de
            mur porteur : hors-sujet à cet endroit, où le texte parle de lecture de
            devis, pas de structure. Retirée pour ne pas induire en erreur. Ce visuel
            reste correctement utilisé ailleurs sur le site (reseau-partenaires,
            gros-oeuvre-structure, surelevation, etc.), donc rien n'est perdu.
            Prompt FR proposé : « Schéma éditorial plat, style infographie technique
            sobre (fond ivoire, traits encre carbone, un seul accent orange laiton
            en surlignage) : une ligne de devis de rénovation qui se décompose en six
            blocs étiquetés — Quantité, Unité, Fourniture, Pose, Hypothèse, Exclusion —
            reliés par de fines flèches partant de la ligne de devis d'origine vers
            chaque bloc. Aucun texte de marque, aucune photo, rendu vectoriel épuré,
            format 16:9. »
          */}
          <MqProse>
            <h3 className="display text-[1.3rem] text-ivoire">Transformer cette méthode pour les particuliers</h3>
            <p>Un particulier n'a pas besoin d'un discours de professionnel : il a besoin d'un projet lisible.</p>
            <p>
              Notre rôle consiste à traduire les enjeux techniques en décisions concrètes : conserver, remplacer, déplacer, renforcer,
              isoler, différer ou supprimer un poste. Cette traduction évite au client de subir un vocabulaire technique sans en comprendre
              les conséquences budgétaires.
            </p>
          </MqProse>
          <MqFig
            src="/photos/pedagogie/02-transformer-methode.jpeg"
            alt="Schéma pédagogique : un enjeu technique de devis se traduit en sept décisions concrètes — conserver, remplacer, déplacer, renforcer, isoler, différer, supprimer"
            caption="Schéma pédagogique : chaque enjeu technique du devis se traduit en une décision concrète et arbitrable."
            ratio="aspect-[16/9]"
          />
        </div>
      </MqSection>

      <MqSection kicker="Culture du coût total" title="Le poste le moins cher n'est pas toujours la solution la moins chère">
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/schema-deperditions.jpg"
            alt="Schéma des déperditions thermiques d'un logement avec répartition par poste : toiture, murs, fenêtres, plancher bas et ponts thermiques"
            caption="Un poste isolé mal séquencé peut faire refaire un autre ouvrage : l'ordre des travaux compte autant que leur prix unitaire."
            ratio="aspect-[16/9]"
          />
          <MqProse>
            <p>
              Une mauvaise séquence peut faire refaire un ouvrage déjà terminé. Une économie sur l'étanchéité peut coûter plusieurs fois son
              montant en désordres ultérieurs. Une menuiserie mal anticipée peut bloquer les finitions et immobiliser une équipe.
            </p>
            <p>
              Notre lecture des devis intègre systématiquement ces effets de bord : un poste n'est jamais évalué isolément, mais en fonction
              de sa place dans l'ensemble du chantier et de ses interactions avec les lots voisins.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Le réseau de compétences"
        title="Un réseau, pas une entreprise unique"
        lead="ARCHI PILOTE RÉNOVATION s'appuie, selon les besoins, sur des entreprises partenaires contractantes et des professionnels indépendants. Le choix dépend de la nature du projet, des assurances requises, des compétences nécessaires et des disponibilités réelles."
      >
        {/*
          À GÉNÉRER — carte des rôles pour cette section (rôles/responsabilités).
          La grille ci-dessous liste déjà les 4 profils en texte, mais le client demande
          un schéma conceptuel visuel incluant aussi le Client et ARCHI PILOTE
          RÉNOVATION. Aucune photo réelle ne peut illustrer ceci.
          Prompt FR proposé : « Diagramme éditorial minimaliste (fond ivoire, traits
          fins encre carbone, un accent orange laiton), cinq bulles étiquetées en
          réseau — Client au centre, reliée par des traits à ARCHI PILOTE RÉNOVATION
          (pilotage), qui se relie à son tour à Entreprise partenaire (exécution),
          Architecte DPLG (conception) et Ingénieur structure (calcul) — chaque trait
          annoté du mot qui définit la responsabilité échangée. Style infographie
          sobre, sans texture ni photo, format 16:9. »
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Architectes DPLG partenaires</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Mobilisés pour les dossiers lourds : dépôt de permis, extension, surélévation ou exigences architecturales spécifiques, sous
              leur propre responsabilité professionnelle.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Ingénieurs structure partenaires</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Calcul de descente de charges, note de calcul pour ouverture de mur porteur ou reprise en sous-œuvre, indépendants et engagés
              sur leur mission.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Géotechnicien partenaire — Geo2Mo</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Études de sols et diagnostics de fondation indispensables aux reprises structurelles, extensions et surélévations. Sérieux,
              réactivité et échanges réguliers pour valider les hypothèses techniques.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Entreprises partenaires contractantes</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Sélectionnées selon leurs assurances, leurs références et leur adéquation au projet ; elles exécutent et facturent les travaux
              qui leur sont confiés.
            </p>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="Critères de compétence"
        title="Comment vérifier qui vous accompagne"
        lead="La confiance ne doit pas reposer sur des slogans mais sur des critères vérifiables. Voici ceux que nous appliquons à notre propre organisation et que nous recommandons d'exiger de tout interlocuteur de chantier."
      >
        <div className="flex flex-col gap-8">
          <MqFig
            src="/photos/maquette/chantier-isolation-laine.jpg"
            alt="Chantier d'isolation intérieure : laine minérale entre rails métalliques sur murs et plafond avant pose du placo"
            caption="Isolation thermique par l'intérieur en cours : laine minérale posée entre ossature métallique, murs et plafond, avant fermeture en plaques de plâtre."
            ratio="aspect-[16/9]"
          />
          <MqChecklist
            items={[
              "Un auteur identifié et joignable, pas une adresse générique anonyme.",
              "Une expérience démontrée sur des projets comparables au vôtre en taille et en complexité.",
              "Des sources vérifiables : devis analysés, réalisations datées, documents transmis.",
              "Des partenaires nommés avec leurs qualifications et leurs assurances.",
              "Une séparation claire entre pilotage, accompagnement et exécution des travaux.",
              "Une trace écrite de chaque décision, disponible à tout moment du projet.",
            ]}
          />
        </div>
      </MqSection>

      <MqSection kicker="Pourquoi cette page existe" title="La confiance repose sur une méthode, pas sur un slogan">
        <MqProse>
          <p>
            Elle doit reposer sur une méthode expliquée, des réalisations documentées et une compréhension claire du rôle de chacun. C'est
            pourquoi cette page détaille l'origine du parcours, les critères de compétence attendus et le fonctionnement réel du réseau de
            partenaires mobilisé selon les projets.
          </p>
        </MqProse>
      </MqSection>

      <MqSection kicker="Questions fréquentes" title="Réponses directes sur l'expertise et le parcours">
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
        title="Faites lire votre devis par un ancien expert en chiffrage"
        lead="Transmettez votre devis ou votre projet : nous identifions les écarts avant tout engagement."
      />

      <MqReadNext
        items={[
          { href: "/notre-methode", label: "Notre méthode", sub: "Les huit étapes du pilotage" },
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Qui facture quoi, poste par poste" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Structure, copropriété, immeuble occupé" },
        ]}
      />

      <section className="py-8 border-t border-line">
        <div className="container-site max-w-4xl text-[0.9rem] text-muted">
          <Link href="/clinique-du-devis" className="underline underline-offset-4 hover:text-orange-deep transition-colors">
            Faire analyser un devis existant
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
