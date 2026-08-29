import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Gros œuvre & structure en rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Avant de parler cloisons, cuisine ou peinture, tout projet de rénovation doit répondre à une question simple : quels murs portent le bâtiment…",
  alternates: { canonical: "/gros-oeuvre-structure" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Gros œuvre & structure"
        title="Gros œuvre en rénovation : la structure d'abord"
        lead="Avant de parler cloisons, cuisine ou peinture, tout projet de rénovation doit répondre à une question simple : quels murs portent le bâtiment, et que devient la descente de charges si on les modifie ? Le gros œuvre traite l'ouverture de murs porteurs, la création de trémies, les reprises de plancher et les désordres du bâti existant. ARCHI PILOTE RÉNOVATION structure ce diagnostic en amont et pilote l'intervention des entreprises partenaires contractantes et, pour les dossiers lourds, d'un ingénieur structure ou d'un architecte DPLG partenaire indépendant."
      />

      <MqSection
        title="Identifier un mur porteur avant tout devis"
        lead="Une erreur d'appréciation sur la nature d'un mur peut compromettre la stabilité du bâtiment ou faire annuler un devis déjà engagé."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Les indices à recouper, jamais un seul critère isolé</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Épaisseur, alignement vertical entre étages, sens des solives et matériau donnent une présomption, jamais une certitude absolue.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un mur épais n'est pas automatiquement porteur, et un mur fin en briques ou en carreaux de plâtre n'est pas automatiquement sans rôle structurel. La présomption se construit en recoupant plusieurs indices : l'épaisseur du mur, son alignement avec un mur de l'étage du dessous ou du dessus, le sens de pose des solives ou des poutrelles du plancher, et la position du mur par rapport aux façades et aux refends principaux du bâtiment.
                </p>
                <p>
                  Ces indices orientent le diagnostic mais ne remplacent jamais une vérification directe lorsque l'enjeu est réel. La rigueur d'ancien expert en chiffrage appliquée à ce diagnostic consiste précisément à ne jamais valider un devis d'ouverture avant d'avoir confirmé la nature exacte du mur concerné.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Sondages et plans manquants : comment lever le doute</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              En l'absence de plans d'origine fiables, un sondage ponctuel dans une cloison ou un doublage permet d'observer la structure réelle.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  En habitat ancien, les plans d'origine sont souvent introuvables, incomplets ou ne correspondent plus à l'état réel du bien après des décennies de travaux successifs. Un sondage ponctuel, réalisé à un endroit choisi avec soin, permet d'observer directement la maçonnerie, son épaisseur et son appareillage, sans engager une ouverture complète.
                </p>
                <p>
                  Lorsque le doute persiste malgré le sondage, notamment pour les ouvrages engageant la stabilité de plusieurs niveaux, l'avis d'un ingénieur structure partenaire indépendant est sollicité avant toute validation de devis. Cette étape, souvent perçue comme une dépense évitable, protège en réalité le budget global du chantier.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection title="Ouverture de mur porteur, trémie et reprise de charges">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/chantier-etat-initial.jpg"
            alt="Pièce d'appartement ancien vide avant travaux, murs jaunis et fissurés, parquet usé et cheminée d'origine encrassée"
            caption="État initial relevé avant intervention : fissures de surface, parquet désaffleuré, cheminée et corniches d'origine à conserver."
          />
          <MqFig
            src="/photos/maquette/chantier-ouverture-mur-etaiement.jpg"
            alt="Ouverture percée dans un mur porteur en briques avec trois étais métalliques soutenant le plancher supérieur"
            caption="Ouverture de mur porteur : étaiement du plancher haut avant percement, conformément à la note de calcul de l'ingénieur structure."
          />
          <MqFig
            src="/photos/maquette/chantier-ipn-habillage.jpg"
            alt="Poutre acier IPN posée au-dessus d'une ouverture entre deux pièces, en cours d'habillage en plaques de plâtre"
            caption="IPN scellée sur appuis maçonnés puis habillée par le plaquiste : coffrage coupe-feu et raccord d'enduit avant peinture."
          />
          <MqFig
            src="/photos/maquette/schema-mur-porteur.jpg"
            alt="Coupe technique d'une ouverture de mur porteur montrant la poutre de reprise, les poteaux d'appui aux extrémités, l'étaiement provisoire pendant les travaux et le principe de descente de charges vers les fondations."
            caption="Principe d'ouverture d'un mur porteur : poutre de reprise, poteaux d'appui, étaiement provisoire et descente de charges."
          />
        </div>
        <div className="mt-12 flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Poutre métallique ou poutre bois : un choix technique, pas esthétique</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Le choix du matériau de la poutre dépend de la portée à franchir, de la charge à reprendre et de la hauteur disponible sous plafond.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une poutre métallique en profilé acier offre une résistance élevée pour un encombrement réduit, ce qui la rend adaptée aux portées importantes ou aux charges lourdes, notamment sur les niveaux inférieurs d'un immeuble. Une poutre bois, lamellé-collé ou massive, convient à des portées plus modestes et s'intègre parfois plus facilement dans un habillage apparent.
                </p>
                <p>
                  Dans les deux cas, le dimensionnement résulte d'un calcul de descente de charges, jamais d'une estimation visuelle. Ce calcul détermine aussi la nature des appuis nécessaires à chaque extrémité de la poutre.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Poteaux, appuis et semelles : où va la charge reprise</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Une poutre ne vaut que par ses appuis : la charge reprise doit être transmise jusqu'aux fondations sans point faible intermédiaire.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une fois la poutre posée, la charge qu'elle reprend doit être conduite jusqu'au sol par des poteaux ou des murs d'appui suffisamment dimensionnés, eux-mêmes reposant sur une semelle capable de répartir cette charge sur le sol ou sur un plancher inférieur. Un appui mal positionné, par exemple au milieu d'une portée de plancher non renforcée, peut créer un désordre à l'étage inférieur.
                </p>
                <p>
                  C'est pourquoi la descente de charges est vérifiée sur l'ensemble du cheminement, du point d'ouverture jusqu'aux fondations, et non uniquement au droit de l'ouverture elle-même.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Reprise en sous-œuvre : intervenir sous un ouvrage existant</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              La reprise en sous-œuvre consiste à renforcer une fondation ou un appui existant sans interrompre la stabilité du bâtiment pendant les travaux.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Cette technique s'impose lorsqu'une fondation existante doit être approfondie, élargie ou renforcée, par exemple pour créer un niveau supplémentaire ou reprendre un appui fragilisé. Elle se réalise par plots successifs, jamais sur toute la longueur en une seule fois, afin de ne jamais priver le bâtiment de son appui au sol au même instant.
                </p>
                <p>
                  Ce type d'intervention relève systématiquement d'une étude technique préalable et d'un phasage écrit précis, en raison du risque direct pour la stabilité du bâtiment en cas d'erreur de séquence.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Étaiement provisoire : protéger la structure pendant le chantier"
        lead="L'étaiement reprend temporairement les charges pendant que l'ancien appui est déposé et que le nouvel ouvrage n'est pas encore solidarisé."
      >
        <MqProse>
          <p>
            Entre le moment où un ancien linteau ou un ancien mur porteur est déposé et celui où la poutre définitive est posée, calée puis solidarisée aux appuis, le bâtiment traverse une phase de fragilité maîtrisée. Un système d'étaiement provisoire, dimensionné selon la charge réelle à reprendre, assure la continuité de la stabilité pendant toute cette période.
          </p>
          <p>
            Cet étaiement n'est jamais retiré tant que l'ouvrage définitif n'a pas atteint sa résistance et n'a pas été vérifié. Sa durée, généralement de quelques jours à quelques semaines selon l'ampleur de l'ouvrage, fait partie intégrante du planning transmis avant le démarrage du chantier.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Planchers bois, poutrelles-hourdis et mise à niveau"
        lead="Un plancher ancien en bois et un plancher en poutrelles-hourdis se traitent différemment selon la déformation constatée et l'usage futur de la pièce."
      >
        <MqProse>
          <p>
            Un plancher bois ancien, souvent constitué de solives et d'un platelage, peut présenter un fléchissement naturel dû à l'âge, à une surcharge historique ou à une section de bois initialement sous-dimensionnée. Selon l'ampleur du fléchissement, un renfort ponctuel, un doublement de solives ou une reprise plus complète est envisagé.
          </p>
          <p>
            Un plancher en poutrelles-hourdis, plus fréquent dans les constructions de la seconde moitié du vingtième siècle, présente une meilleure régularité mais peut nécessiter une trémie pour le passage d'un escalier ou d'une gaine technique, ce qui implique alors une reprise de continuité structurelle autour de l'ouverture créée.
          </p>
          <p>
            La mise à niveau d'un plancher, lorsqu'un ressaut existe entre deux pièces, se traite par ragréage ou par une chape rapportée, mais seulement après avoir vérifié que la surépaisseur ajoutée reste compatible avec la charge admissible du plancher existant.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Étude géotechnique et diagnostic des fondations"
        lead="Avant de reprendre une fondation ou d'ajouter une charge, la nature du sol et l'état des fondations existantes doivent être vérifiés."
      >
        <MqFig
          src="/photos/maquette/geo2mo-etude-geotechnique.jpg"
          alt="Schéma d'une étude géotechnique avec forage de reconnaissance des sols, prélèvement d'échantillon et fondations d'un bâti ancien"
          caption="Étude géotechnique : forage de reconnaissance, couches de sol identifiées et fondations existantes analysées avant toute reprise structurelle."
        />
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Quand une étude de sol est indispensable</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Extension, surélévation, reprise en sous-œuvre ou bâti ancien sur sols incertains : le dimensionnement repose sur des données réelles.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  La reprise en sous-œuvre, l'extension d'une maison ou la surélévation d'un étage modifient la charge transmise aux fondations. Sans une étude géotechnique, on dimensionne à l'aveugle et on expose le chantier à des tassements différentiels ou à des désordres futurs. ARCHI PILOTE RÉNOVATION fait appel au bureau d'études Geo2Mo pour reconnaître les sols, analyser les fondations existantes et fournir les paramètres de calcul utilisés par l'ingénieur structure.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Un partenaire réactif et rigoureux</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Geo2Mo se distingue par la qualité de ses dossiers, sa réactivité et sa capacité à mobiliser rapidement les bons intervenants.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Les études de sols sont préparées avec le même soin que les dossiers de structure : forages, sondages, interprétation des couches et recommandations de fondation. Les échanges réguliers entre Geo2Mo, l'ingénieur structure et notre équipe permettent de valider chaque hypothèse avant de l'intégrer au chiffrage et au phasage.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Fissures, désordres et humidité : distinguer le superficiel du structurel"
        lead="Toutes les fissures ne se valent pas : leur forme, leur localisation et leur évolution dans le temps orientent le diagnostic."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Lecture d'une fissure avant tout ravalement esthétique</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Une fissure fine et stable diffère radicalement d'une fissure ouverte, évolutive ou traversante en termes de gravité.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une fissure capillaire, fine et superficielle, relève généralement d'un simple traitement de finition. Une fissure plus large, en escalier sur un mur en maçonnerie, ou traversant l'épaisseur du mur, peut en revanche signaler un mouvement du bâtiment, un tassement différentiel ou un désordre en cours d'évolution.
                </p>
                <p>
                  Dans ce second cas, l'avis d'un professionnel spécialisé est sollicité avant toute reprise esthétique, car masquer une fissure active sans en traiter la cause ne fait que reporter et aggraver le désordre.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Remontées capillaires et humidité en pied de mur</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Une humidité en pied de mur oriente vers une origine capillaire, une infiltration ou une condensation, chacune appelant un traitement différent.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une remontée capillaire se manifeste typiquement par une auréole en pied de mur, un enduit qui se décolle et parfois un salpêtre visible en surface. Elle se distingue d'une infiltration ponctuelle, liée à une étanchéité défaillante en toiture ou en façade, et d'une condensation, liée à un défaut de ventilation.
                </p>
                <p>
                  Ce diagnostic conditionne directement le traitement engagé : une reprise structurelle inutile ne résoudra jamais un problème de ventilation, et inversement, une simple peinture anti-humidité ne traite jamais une remontée capillaire active.
                </p>
              </MqProse>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/schema-humidite-origines.jpg"
              alt="Coupe d'un logement ancien illustrant remontées capillaires, infiltrations, condensation et ponts thermiques"
              caption="Origines de l'humidité dans un logement ancien et traitements associés : le diagnostic précède toujours le choix de la solution."
            />
            <MqFig
              src="/photos/maquette/escalier-duplex-tremie.jpg"
              alt="Escalier intérieur en chêne et acier noir desservant un duplex, trémie ouverte et garde-corps métallique"
              caption="Référence de style : escalier chêne et acier posé après création de trémie et reprise du plancher par chevêtre."
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Démolition, carottage et sciage : les gestes techniques du gros œuvre"
        lead="Le carottage et le sciage de béton permettent des découpes précises et contrôlées, indispensables dès qu'un ouvrage béton armé est concerné."
      >
        <MqFig
          src="/photos/maquette/schema-carottage-ventilation.jpg"
          alt="Schéma de carottage d'un mur de façade pour la pose d'une gaine et d'une bouche d'extraction en copropriété"
          caption="Carottage de façade pour ventilation : diamètre, gaine et bouche d'extraction, avec accord préalable du syndic lorsque la façade est concernée."
        />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {[
            { title: "Démolition et évacuation", text: "Dépose sélective des éléments non porteurs, tri des matériaux et évacuation organisée, en particulier en immeuble occupé." },
            { title: "Carottage de précision", text: "Perçage circulaire propre pour le passage de réseaux ou de gaines à travers un plancher ou un mur béton, sans fissuration périphérique." },
            { title: "Sciage de béton armé", text: "Découpe nette d'une ouverture dans un mur ou un plancher béton, préalable indispensable avant la pose d'un linteau ou d'une poutre." },
            { title: "Protection du bâti conservé", text: "Bâchage, calage et protection des ouvrages voisins non concernés par l'intervention en cours." },
          ].map((g) => (
            <div key={g.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display text-[1.1rem] text-ivoire">{g.title}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{g.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Copropriété, immeuble occupé et autorisations"
        lead="Un chantier de gros œuvre en immeuble collectif ou occupé impose des contraintes d'horaires, de nuisances et d'autorisation qui s'ajoutent aux contraintes techniques."
      >
        <MqProse>
          <p>
            En copropriété, le règlement encadre les interventions touchant des éléments communs, l'aspect extérieur du bâtiment ou la structure porteuse commune. Selon la nature exacte des travaux, une simple information au syndic peut suffire, ou au contraire une autorisation formelle votée en assemblée générale peut être nécessaire avant tout démarrage.
          </p>
          <p>
            En immeuble occupé, qu'il s'agisse des voisins d'un même bâtiment ou des occupants du logement en cours de travaux, les horaires de nuisances sonores respectent généralement un cadre fixé par arrêté municipal, et l'accès aux parties communes est organisé pour limiter la gêne pendant les phases les plus bruyantes, comme le carottage ou la démolition.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            items={[
              "Vérification du règlement de copropriété avant tout devis engageant une partie commune",
              "Constitution du dossier technique nécessaire à une présentation en assemblée générale si requis",
              "Information écrite préalable des occupants voisins pour les phases bruyantes",
              "Protection systématique des circulations communes pendant l'évacuation des gravats",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Ingénieur structure, architecte DPLG et assurances des exécutants"
        lead="Le pilotage mobilise un ingénieur structure ou un architecte DPLG partenaire indépendant dès que le dossier l'exige, sans jamais se substituer à leur responsabilité propre."
      >
        <MqProse>
          <p>
            Pour les ouvertures importantes, les trémies sur plusieurs niveaux ou les reprises en sous-œuvre, une note de calcul et parfois un avis technique formalisé sont nécessaires. Ces documents sont produits par un ingénieur structure ou un architecte DPLG partenaire indépendant, professionnel distinct de l'entreprise qui exécute physiquement les travaux.
          </p>
          <p>
            Avant tout démarrage de chantier, les attestations d'assurance en cours de validité de l'entreprise partenaire contractante retenue sont vérifiées. Cette vérification fait partie du pilotage, mais la garantie elle-même reste propre à chaque entreprise exécutante, seule responsable de son ouvrage.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Ordre des opérations et délais indicatifs du gros œuvre"
        lead="Le gros œuvre suit une séquence stricte : diagnostic, étaiement, dépose, pose de l'ouvrage définitif, puis seulement reprise des finitions périphériques."
      >
        <MqNumbered
          cols={2}
          items={[
            { title: "Diagnostic et sondages", text: "Lecture des plans disponibles, sondages ciblés et, si nécessaire, avis d'un ingénieur structure partenaire indépendant." },
            { title: "Étude de descente de charges", text: "Dimensionnement de la poutre, des appuis et vérification de la compatibilité avec les fondations existantes." },
            { title: "Démarches d'autorisation", text: "Constitution du dossier pour le syndic ou l'urbanisme lorsque l'ouvrage l'exige, avant tout engagement de chantier." },
            { title: "Mise en place de l'étaiement", text: "Reprise provisoire des charges avant toute dépose de l'ancien élément porteur." },
            { title: "Dépose, carottage ou sciage", text: "Ouverture contrôlée de l'élément existant, gravats évacués au fur et à mesure." },
            { title: "Pose et solidarisation de l'ouvrage définitif", text: "Poutre, poteaux et appuis mis en place, calés puis solidarisés selon la note de calcul." },
            { title: "Retrait de l'étaiement et reprise des finitions", text: "L'étaiement n'est retiré qu'après validation de l'ouvrage ; les finitions périphériques sont reprises en dernier." },
          ]}
        />
        <div className="mt-8">
          <MqProse>
            <p>
              À titre indicatif, une ouverture simple avec pose de poutre métallique se déroule généralement sur une à deux semaines. Une reprise en sous-œuvre ou une trémie sur plusieurs niveaux s'étale sur plusieurs semaines, notamment en immeuble occupé où les phases bruyantes sont réparties dans le temps.
            </p>
          </MqProse>
        </div>
      </MqSection>

      <MqSection
        kicker="Pédagogie technique"
        title="Comprendre une intervention structurelle, étape par étape"
        lead="Chaque ouvrage structurel suit la même logique : diagnostic, note de calcul de l'ingénieur structure, étaiement, exécution, contrôle. Les schémas ci-dessous détaillent la trémie de plancher et la reprise en sous-œuvre."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <MqFig
            src="/photos/maquette/schema-tremie-plancher.jpg"
            alt="Schéma d'une trémie d'escalier dans un plancher bois : solives sectionnées, chevêtre, linçoirs, sabots métalliques et étaiement provisoire"
            caption="Trémie dans un plancher bois : le chevêtre et les linçoirs reprennent les charges des solives coupées, sur sabots métalliques dimensionnés."
          />
          <MqFig
            src="/photos/maquette/schema-reprise-sous-oeuvre.jpg"
            alt="Schéma en coupe d'une reprise en sous-œuvre : plots bétonnés par passes alternées, bon sol porteur, sondage géotechnique et étaiement"
            caption="Reprise en sous-œuvre : excavation et bétonnage par passes alternées jusqu'au bon sol identifié par le sondage géotechnique."
          />
          <MqFig
            src="/photos/maquette/chantier-ipn-habillage.jpg"
            alt="Poutre acier IPN posée au-dessus d'une ouverture entre deux pièces, en cours d'habillage en plaques de plâtre"
            caption="IPN scellée sur appuis maçonnés puis habillée par le plaquiste : coffrage coupe-feu et raccord d'enduit avant peinture."
          />
        </div>
        <div className="mt-12">
          <h3 className="display text-[1.3rem] text-ivoire">Trémie d'escalier : du chevêtre brut à l'escalier livré</h3>
          <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
            Étaiement, découpe des solives, chevêtre et linçoirs sur sabots métalliques : l'escalier n'est posé qu'après validation de la note de calcul.
          </p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/tremie-chevetre-chantier.jpg"
              alt="Création d'une trémie d'escalier : plancher bois découpé, chevêtre neuf boulonné sur sabots métalliques et étais en place"
              caption="Avant : Création de trémie : étaiement, découpe des solives, chevêtre et linçoirs sur sabots métalliques, conformément à la note de calcul de l'ingénieur structure."
            />
            <MqFig
              src="/photos/maquette/escalier-duplex-tremie.jpg"
              alt="Escalier intérieur en chêne et acier noir desservant un duplex, trémie ouverte et garde-corps métallique"
              caption="Après : Référence de style : escalier chêne et acier posé après création de trémie et reprise du plancher par chevêtre."
            />
          </div>
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Comment sait-on si un mur est porteur avant de le percer ?",
              a: "Aucun indice unique ne suffit : l'épaisseur, l'alignement avec les murs des étages inférieurs et supérieurs, le sens de pose du plancher et les plans d'origine du bâtiment sont recoupés. Quand un doute subsiste, un sondage ponctuel ou l'avis d'un ingénieur structure partenaire indépendant permet de trancher avant tout engagement financier sur le lot maçonnerie.",
            },
            {
              q: "Que se passe-t-il si les plans d'origine de l'immeuble sont introuvables ?",
              a: "C'est une situation fréquente en habitat ancien. À défaut de plans, la lecture se fait par sondages directs dans la cloison ou le doublage, par observation depuis les étages voisins lorsque c'est possible, et par la logique constructive du bâtiment. Cette prudence supplémentaire allonge parfois le délai d'étude, mais elle évite une erreur d'appréciation coûteuse.",
            },
            {
              q: "Un architecte est-il obligatoire pour ouvrir un mur porteur ?",
              a: "Pas systématiquement, mais le recours à un architecte DPLG ou à un ingénieur structure partenaire indépendant devient pertinent dès que l'ouverture dépasse une portée modeste, qu'une trémie est créée dans un plancher, ou que le dossier doit être présenté à une copropriété ou à un service d'urbanisme. Le pilotage identifie ce besoin dès l'étude de faisabilité.",
            },
            {
              q: "Faut-il étayer avant de commencer les travaux ?",
              a: "Dès qu'un élément porteur est concerné, un étaiement provisoire reprend les charges le temps que la poutre ou le linteau définitif soit posé et solidarisé. Cette étape n'est jamais optionnelle : elle protège la structure existante pendant la phase la plus vulnérable du chantier, entre la dépose de l'ancien appui et la mise en charge du nouveau.",
            },
            {
              q: "Comment se passe un chantier de gros œuvre en copropriété ?",
              a: "Le règlement de copropriété et l'accord du syndic encadrent les interventions touchant des éléments communs ou l'aspect extérieur, et les horaires de nuisances sonores sont généralement limités par arrêté municipal. Le pilotage prépare le dossier technique nécessaire à l'assemblée générale lorsque l'ouvrage l'exige, et organise les protections des parties communes pendant les travaux.",
            },
            {
              q: "Quelles preuves demander avant de valider une entreprise de gros œuvre ?",
              a: "Les attestations d'assurance en cours de validité de l'entreprise partenaire contractante concernée, une note de calcul ou un avis technique pour les ouvrages structurels, et un phasage écrit précisant l'ordre des opérations et la durée de l'étaiement. Ces justificatifs sont vérifiés avant tout démarrage de chantier.",
            },
            {
              q: "Combien de temps dure une intervention sur mur porteur ?",
              a: "Pour une ouverture simple avec pose de poutre métallique, comptez indicativement une à deux semaines incluant étaiement, dépose, pose et reprise des finitions périphériques. Une reprise en sous-œuvre ou la création d'une trémie sur plusieurs niveaux allonge sensiblement ce délai, notamment en immeuble occupé où les nuisances sont limitées dans le temps.",
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
          { href: "/renovation-complete", label: "Rénovation complète", sub: "Du diagnostic à la livraison" },
          { href: "/second-oeuvre", label: "Second œuvre technique", sub: "Électricité, plomberie, cloisons" },
          { href: "/chantiers-complexes", label: "Chantiers complexes", sub: "Structure, copropriété, aléas" },
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Passoire énergétique, VMC, isolation" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse ligne à ligne de vos devis" },
          { href: "/contact", label: "Contact", sub: "Décrire votre projet en détail" },
        ]}
      />
    </>
  );
}
