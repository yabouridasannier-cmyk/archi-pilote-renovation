import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqStats, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

/* Avant/après hero : mêmes conventions que le reste du kit — deux photos réelles,
   chacune issue d'un chantier réel des équipes partenaires (pas nécessairement le
   même bien, aucun appariement image par image n'est certifié — cf. rapport). */

export const metadata: Metadata = {
  title: "Rénovation complète : structurer votre projet | ARCHI PILOTE",
  description:
    "Une rénovation complète touche en même temps la structure, la distribution des pièces, l'électricité, la plomberie, l'isolation, la ventilation, les menuiseries…",
  alternates: { canonical: "/renovation-complete" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Rénovation complète"
        title="Rénovation complète : organiser avant d'exécuter"
        lead="Une rénovation complète touche en même temps la structure, la distribution des pièces, l'électricité, la plomberie, l'isolation, la ventilation, les menuiseries et les finitions. La difficulté n'est pas de trouver des entreprises, mais d'ordonner correctement les décisions. ARCHI PILOTE RÉNOVATION structure le projet, hiérarchise les postes par niveau de risque et pilote le budget de A à Z, pendant que les entreprises partenaires contractantes exécutent et facturent chaque lot."
      />

      <section className="pb-4">
        <div className="container-site max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/chantiers/chDemolitionBoiseriesHaussmannien.jpeg"
              alt="Appartement ancien mis à nu avant rénovation complète : boiseries déposées, sols protégés, murs décapés"
              caption="Avant : appartement mis à nu avant rénovation complète, boiseries d'origine déposées et sols protégés. Chantier réel des équipes partenaires."
              ratio="aspect-[4/3]"
            />
            <MqFig
              src="/photos/chantiers/chCuisineSejourParquetChevrons.jpeg"
              alt="Cuisine ouverte sur séjour livrée après une rénovation complète d'appartement, parquet posé à chevrons"
              caption="Après : cuisine ouverte sur séjour livrée après rénovation complète, parquet posé à chevrons. Chantier réel des équipes partenaires."
              ratio="aspect-[4/3]"
            />
          </div>
        </div>
      </section>

      <MqSection
        title="Pourquoi l'ordre des décisions détermine tout le reste"
        lead="Une rénovation complète échoue rarement par manque de compétence technique : elle échoue par un mauvais séquencement des choix. Chaque décision prise trop tard renchérit les suivantes."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Commencer par le plan d'usage, pas par les devis</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Le nombre de chambres, la circulation, les rangements et les équipements déterminent les réseaux avant même de parler prix.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Beaucoup de propriétaires demandent des devis avant d'avoir arrêté leur plan d'usage. Cette précipitation est l'une des premières causes de surcoût. Le nombre de pièces, la circulation entre elles, la lumière naturelle, les rangements et les équipements envisagés déterminent directement l'emplacement des cloisons, des prises, des points d'eau et des arrivées électriques.
                </p>
                <p>
                  Le pilotage débute donc systématiquement par une lecture du bien existant et un cadrage des usages futurs, avant toute consultation d'entreprise. Cette étape évite de faire chiffrer un projet qui sera modifié quelques semaines plus tard.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Traiter les sujets lourds avant les sujets visibles</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Structure, réseaux principaux, humidité, isolation et ventilation doivent être examinés avant toute réflexion sur les finitions.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un client qui choisit son carrelage avant de savoir si un mur est porteur inverse l'ordre naturel du risque. Les interventions structurelles, les réseaux principaux, les problèmes d'humidité, l'isolation d'une passoire énergétique et la ventilation mécanique contrôlée conditionnent la faisabilité même du projet de finition envisagé.
                </p>
                <p>
                  Ces sujets lourds sont donc systématiquement examinés en premier, avec le recours à un architecte DPLG ou à un ingénieur structure partenaire indépendant lorsque le dossier l'exige.
                </p>
              </MqProse>
            </div>
          </div>
          <MqFig
            src="/photos/maquette/schema-mur-porteur.jpg"
            alt="Schéma en coupe d'une ouverture de mur porteur avec poutre de reprise et poteaux de descente de charge"
            caption="Ouverture de mur porteur : la charge est reprise par une poutre dimensionnée par un ingénieur structure, puis descendue jusqu'aux appuis."
          />
        </div>

        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-planning-lots.jpg"
            alt="Ordre logique des lots d'une rénovation complète, de la dépose à la réception"
            caption="Ordre logique des lots d'une rénovation complète : dépose, gros œuvre, réseaux, cloisons, chapes, carrelage, peinture, cuisine, puis réception des travaux."
          />
        </div>
      </MqSection>

      <MqSection
        title="Construire le budget par familles de postes"
        lead="Un budget de rénovation complète se construit poste par poste, avec une réserve pour aléas, afin d'éviter les arbitrages dans l'urgence."
      >
        <MqProse>
          <p>
            La rigueur d'ancien expert en chiffrage appliquée à chaque projet consiste à décomposer le budget en familles homogènes, plutôt que de raisonner en enveloppe globale. Cette décomposition permet d'identifier immédiatement où se situent les marges de négociation et où se situent les postes incompressibles.
          </p>
        </MqProse>
        {/*
          À GÉNÉRER (diagramme, aucun chiffre figé dans l'image — les familles et leur
          poids relatif restent au format HTML ci-dessous, éditables sans regénérer le visuel) :
          "Infographie éditoriale sobre, fond crème, style dessin technique, palette ocre et
          anthracite, représentant sous forme de blocs proportionnels QUALITATIFS (sans le
          moindre pourcentage ni chiffre écrit) la répartition d'un budget de rénovation
          complète par grandes familles : études et diagnostics, dépose et préparation,
          structure et maçonnerie, réseaux techniques, isolation et cloisons, menuiseries et
          équipements, finitions, réserve pour aléas. Uniquement les intitulés des familles et
          des blocs de taille relative libre, aucune valeur chiffrée visible."
          (L'ancien visuel /photos/maquette/schema-repartition-budget.jpg affichait des
          pourcentages figés et non vérifiés — retiré pour cette raison, cf. rapport.)
        */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { title: "Études et diagnostics", text: "Diagnostics techniques, éventuelles études de structure, relevés précis avant chiffrage." },
            { title: "Dépose et préparation", text: "Curage, évacuation des gravats, protections des parties communes en copropriété." },
            { title: "Structure et maçonnerie", text: "Ouvertures, reprises de charge, planchers, chapes, éléments porteurs." },
            { title: "Réseaux techniques", text: "Électricité, plomberie, chauffage, ventilation mécanique contrôlée." },
            { title: "Isolation et cloisons", text: "Traitement de la passoire énergétique, doublages, cloisons de distribution." },
            { title: "Menuiseries et équipements", text: "Fenêtres, portes, cuisine, sanitaires, rangements sur mesure." },
            { title: "Finitions", text: "Peintures, revêtements de sol, faïences, éclairages, dernières retouches." },
            { title: "Réserve pour ajustements", text: "Marge dédiée aux aléas découverts en cours de chantier, jamais consommée par confort." },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display text-[1.1rem] text-ivoire">{f.title}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Limiter les changements tardifs, un levier économique concret"
        lead="Une modification décidée sur plan ne coûte presque rien ; la même modification décidée après pose peut multiplier son coût par cinq ou dix."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">La valeur économique du bon moment</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une prise déplacée après peinture coûte nettement plus cher qu'une prise déplacée sur plan. Une douche modifiée après étanchéité peut remettre en cause plusieurs ouvrages déjà réalisés, avec des reprises en cascade sur la plomberie, le carrelage et parfois le plafond de l'étage inférieur.
                </p>
                <p>
                  C'est pourquoi le pilotage impose une validation formelle des plans techniques avant tout démarrage de lot, avec un délai de réflexion suffisant pour que le client visualise concrètement les implantations avant qu'elles ne deviennent irréversibles.
                </p>
              </MqProse>
            </div>
          </div>
          <MqFig
            src="/photos/maquette/schema-planning-lots.jpg"
            alt="Planning en lots d'un chantier de rénovation présenté sous forme de diagramme de phases hebdomadaires"
            caption="Enchaînement des lots d'un chantier de rénovation : chaque phase conditionne la suivante, d'où l'importance du séquencement."
          />
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Documents attendus à chaque étape</h3>
            <div className="mt-5">
              <MqChecklist
                items={[
                  "Plan d'usage validé avant consultation des entreprises",
                  "Diagnostics techniques disponibles (amiante, plomb, électricité selon l'ancienneté)",
                  "Plans de réseaux (électricité, plomberie) validés avant ouverture des murs",
                  "Devis détaillés ligne à ligne des entreprises partenaires contractantes",
                  "Attestations d'assurance des entreprises exécutantes pour chaque lot",
                  "Autorisation de copropriété écrite si des parties communes sont concernées",
                ]}
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Qui exécute, qui pilote : une répartition claire des rôles"
        lead="Les entreprises partenaires contractantes exécutent et facturent les travaux ; le pilotage maintient la cohérence d'ensemble entre décisions, budget et phasage."
      >
        <MqProse>
          <p>
            Les travaux de rénovation complète sont réalisés par les entreprises partenaires contractantes retenues pour chaque lot. Selon la nature du projet, des professionnels indépendants spécialisés, architectes ou ingénieurs structure, peuvent intervenir pour les dossiers lourds nécessitant une étude technique ou une autorisation d'urbanisme.
          </p>
          <p>
            Le pilotage d'ensemble vise à maintenir un fil commun entre les décisions prises, le budget engagé, le phasage des interventions et les différents intervenants du chantier. Il ne remplace en aucun cas la responsabilité technique propre à chaque professionnel exécutant, qui reste seul garant de son ouvrage.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Points de vigilance spécifiques à la rénovation complète"
        lead="Certains points reviennent systématiquement sur les chantiers de rénovation complète et méritent une attention particulière dès le cadrage."
      >
        <MqNumbered
          cols={2}
          items={[
            {
              title: "Vérifier la nature des murs avant tout devis",
              text: "Un mur épais n'est pas automatiquement porteur, un mur fin n'est pas automatiquement sans rôle structurel. Une vérification s'impose avant tout chiffrage engageant.",
            },
            {
              title: "Anticiper les démarches auprès du syndic",
              text: "En copropriété, certains travaux, même à l'intérieur du lot, peuvent nécessiter une information ou une autorisation du syndic, notamment pour les réseaux communs.",
            },
            {
              title: "Séparer le socle indispensable des options",
              text: "Un budget clair distingue ce qui est nécessaire à l'habitabilité de ce qui relève de l'amélioration ou du confort, pour permettre des arbitrages éclairés.",
            },
            {
              title: "Documenter le chantier au fil de l'eau",
              text: "Le suivi quotidien par photos datées permet de conserver une trace des ouvrages qui seront ensuite recouverts par les finitions.",
            },
          ]}
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/chantiers/chDemolitionMursDecapes.jpeg"
            alt="Arrivées de plomberie en attente, tubes multicouches repérés, avant fermeture des cloisons"
            caption="Plomberie : arrivées repérées et contrôlées avant fermeture des cloisons. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chPlacardCompteurElectriqueArrondi.jpeg"
            alt="Tableau électrique neuf et compteur intégrés dans un placard sur mesure, contrôle avant fermeture"
            caption="Électricité : tableau et compteur vérifiés avant intégration dans le placard sur mesure. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/maquette/chantier-nappe-etancheite-douche.jpg"
            alt="Natte d'étanchéité continue posée au sol et sur les murs d'une douche, avant carrelage"
            caption="Étanchéité : natte continue et bandes d'angle contrôlées avant pose du carrelage."
          />
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-demarches-copropriete.jpg"
            alt="Parcours administratif d'un chantier en copropriété : syndic, assemblée générale, autorisation, déclaration en mairie"
            caption="Parcours administratif en copropriété : demande au syndic, passage en assemblée générale, puis déclaration préalable en mairie si nécessaire."
          />
        </div>
      </MqSection>

      <MqSection
        title="Budget et délais : ordres de grandeur à connaître"
        lead="Les fourchettes varient fortement selon l'état du bien, mais quelques repères permettent d'éviter les devis manifestement déconnectés de la réalité du chantier."
      >
        <MqProse>
          <p>Ces ordres de grandeur restent indicatifs et doivent toujours être confrontés à l'état réel du bien découvert lors de la visite technique, avant tout engagement.</p>
        </MqProse>
        <div className="mt-8">
          <MqStats
            items={[
              { dt: "8-16 sem.", dd: "Appartement standard — Rénovation complète d'un appartement sans reprise structurelle majeure, une fois le chantier démarré." },
              { dt: "4-7 mois", dd: "Maison avec structure — Rénovation complète d'une maison intégrant des reprises structurelles ou une extension." },
              { dt: "20 %", dd: "Économies possibles — Grâce aux achats de matériaux en direct par le client sur les postes qui s'y prêtent." },
            ]}
          />
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Combien de temps dure une rénovation complète ?",
              a: "Pour un appartement de taille moyenne, comptez généralement de 8 à 16 semaines de travaux une fois le chantier lancé, hors délais d'obtention des autorisations de copropriété ou d'urbanisme. Une maison avec reprises structurelles s'étale souvent sur 4 à 7 mois. Ces durées dépendent fortement de l'état réel découvert derrière les murs et de la disponibilité des entreprises partenaires contractantes.",
            },
            {
              q: "Faut-il un architecte pour une rénovation complète ?",
              a: "Ce n'est pas systématique. Un architecte DPLG ou un ingénieur structure partenaire indépendant devient pertinent dès qu'un mur porteur est ouvert, qu'une trémie est créée ou que la surface dépasse les seuils imposant le recours à un architecte. Le pilotage identifie ce besoin dès l'étude de faisabilité, avant tout engagement financier.",
            },
            {
              q: "Peut-on habiter le logement pendant les travaux ?",
              a: "Cela dépend de l'ampleur du chantier. Une rénovation touchant simultanément l'électricité, la plomberie et la structure rend le logement difficilement habitable pendant plusieurs semaines, notamment sans eau ni électricité stabilisées. Pour une maison, un phasage par zones peut permettre de rester sur place, au prix d'une organisation plus complexe.",
            },
            {
              q: "Comment le budget est-il réellement maîtrisé ?",
              a: "Le budget est construit par familles de postes, avec une réserve pour aléas, puis confronté ligne à ligne aux devis des entreprises partenaires contractantes lors de la clinique du devis. L'achat direct de certains matériaux par le client, quand c'est pertinent, permet en outre de dégager jusqu'à 20 % d'économies sur ces lignes.",
            },
            {
              q: "Qui est responsable si un désordre apparaît après travaux ?",
              a: "La responsabilité technique et les garanties légales relèvent de l'entreprise partenaire contractante qui a exécuté et facturé le lot concerné. ARCHI PILOTE RÉNOVATION structure et pilote le projet, vérifie la cohérence des interventions et le respect du phasage, sans se substituer aux garanties propres à chaque exécutant.",
            },
            {
              q: "Comment le suivi de chantier est-il organisé à distance ?",
              a: "Chaque avancée notable fait l'objet de photos datées transmises sur WhatsApp, ce qui permet de suivre le chantier au jour le jour même sans présence physique constante. Ce suivi documente aussi les ouvrages destinés à être recouverts, comme les réseaux ou l'étanchéité, avant qu'ils ne disparaissent derrière les finitions.",
            },
            {
              q: "Dans quel ordre les travaux sont-ils réellement exécutés ?",
              a: "L'ordre suit une logique de risque décroissant : diagnostics, dépose, structure et maçonnerie, réseaux techniques, isolation et cloisons, menuiseries et équipements, puis finitions. Intervertir cet ordre, par exemple poser un revêtement avant d'avoir validé un réseau, entraîne presque toujours des reprises coûteuses.",
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
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage de A à Z" },
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/second-oeuvre", label: "Second œuvre technique", sub: "Électricité, plomberie, cloisons" },
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Passoire énergétique, VMC, isolation" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse ligne à ligne de vos devis" },
          { href: "/contact", label: "Contact", sub: "Décrire votre projet en détail" },
        ]}
      />
    </>
  );
}
