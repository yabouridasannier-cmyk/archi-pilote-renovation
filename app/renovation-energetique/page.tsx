import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqStats, MqNumbered, MqChecklist, MqDark, MqDarkSteps, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/renovation-energetique" },
  title: "Rénovation énergétique : passoire, VMC, isolation | ARCHI PILOTE",
  description:
    "Sortir d'une passoire énergétique classée F ou G sans dégrader le bâti : isolation, ponts thermiques, ventilation mécanique contrôlée et chauffage structurés de A à Z.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="RÉNOVATION ÉNERGÉTIQUE"
        title="Rénovation énergétique : sortir de la passoire énergétique sans dégrader le bâti"
        lead="Un logement classé F ou G au diagnostic de performance énergétique ne se corrige pas en isolant au hasard. Isolation, étanchéité à l'air, ventilation mécanique contrôlée et chauffage forment un système : traiter un poste sans les autres crée souvent un nouveau désordre, en particulier un risque de condensation. ARCHI PILOTE RÉNOVATION structure l'ordre des interventions et pilote les entreprises partenaires contractantes, avec l'appui d'un ingénieur ou d'un architecte DPLG partenaire indépendant pour les dossiers les plus techniques."
      />

      <MqSection
        title="Lire le diagnostic de performance énergétique avant d'agir"
        lead="La lettre globale d'un diagnostic masque des écarts importants entre postes : le détail chiffré oriente les priorités réelles de travaux."
      >
        <MqFig
          src="/photos/maquette/schema-deperditions.jpg"
          alt="Schéma illustrant les déperditions thermiques typiques d'une passoire énergétique : pertes de chaleur par la toiture, les murs, les menuiseries, le plancher bas et le renouvellement d'air non maîtrisé."
          caption="Répartition indicative des déperditions thermiques dans un logement mal isolé, avant travaux de rénovation énergétique."
          ratio="aspect-[10/7]"
        />
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Classes F et G : ce que signifie réellement une passoire énergétique</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Une classe F ou G traduit une consommation énergétique estimée élevée, généralement due à un cumul
              de défauts d'isolation plutôt qu'à une seule cause isolée.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un logement classé F ou G additionne le plus souvent plusieurs faiblesses : une toiture ou des
                  combles peu ou pas isolés, des murs anciens sans isolation rapportée, des menuiseries simple
                  vitrage ou vieillissantes, et une ventilation absente ou insuffisante. Le diagnostic de
                  performance énergétique détaille la contribution estimée de chaque poste, ce qui permet d'éviter
                  de traiter en priorité un poste secondaire pendant qu'un poste majeur reste intact.
                </p>
                <p>
                  Cette lecture détaillée, plutôt que la seule lettre affichée en façade du diagnostic, constitue
                  le point de départ de toute hiérarchisation sérieuse des travaux envisagés.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Hiérarchie des postes de déperdition</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Toiture, murs, menuiseries, planchers bas et renouvellement d'air ne représentent jamais un poids
              identique dans les déperditions d'un logement.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Dans de nombreuses configurations, la toiture et les combles non isolés constituent l'un des
                  postes de déperdition les plus significatifs, suivis par les murs et les menuiseries. Le
                  renouvellement d'air non maîtrisé, qu'il soit excessif par des fuites incontrôlées ou au
                  contraire insuffisant par absence de ventilation, pèse également dans le bilan global, sans
                  toujours être perçu comme prioritaire par les occupants.
                </p>
                <p>
                  Cette hiérarchie reste indicative et propre à chaque bien : elle est confirmée par le diagnostic
                  et par l'observation directe du bâti avant toute décision de travaux engageante.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-dpe-passoire.jpg"
            alt="Étiquettes du diagnostic de performance énergétique de A à G et postes de travaux associés sur une maison en coupe"
            caption="Étiquettes du diagnostic de performance énergétique et postes de travaux qui les influencent : isolation, menuiseries, ventilation, chauffage."
            ratio="aspect-[10/7]"
          />
        </div>
      </MqSection>

      <MqSection title="Isolation par l'intérieur, par l'extérieur, et traitement des ponts thermiques">
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Isolation par l'intérieur</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Plus simple à mettre en œuvre logement par logement, elle réduit légèrement la surface habitable et
              exige un traitement soigné des jonctions.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  L'isolation par l'intérieur consiste à doubler les murs existants depuis l'intérieur du
                  logement. Elle est souvent retenue en copropriété, car elle ne modifie pas l'aspect extérieur du
                  bâtiment et ne nécessite généralement pas d'autorisation d'urbanisme. Son point de vigilance
                  principal réside dans le traitement des jonctions avec les murs de refend, les planchers et les
                  menuiseries, là où se concentrent les ponts thermiques résiduels.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Isolation par l'extérieur</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Elle traite mieux les ponts thermiques en enveloppant le bâtiment, mais modifie l'aspect de façade
              et implique souvent une autorisation d'urbanisme.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  L'isolation par l'extérieur enveloppe le bâtiment d'une couche isolante continue, ce qui limite
                  fortement les ponts thermiques au niveau des jonctions entre planchers et façades. Elle préserve
                  la surface habitable intérieure, mais modifie l'aspect extérieur du bâtiment, ce qui implique
                  généralement une autorisation d'urbanisme et, en copropriété, un accord préalable en assemblée
                  générale.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Ponts thermiques : les zones froides qui concentrent le risque</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Un pont thermique est une zone de la paroi moins bien isolée que le reste, souvent au droit d'un
              plancher, d'un balcon ou d'une jonction de murs.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un pont thermique se traduit par une paroi localement plus froide en hiver, ce qui augmente la
                  déperdition à cet endroit précis mais surtout favorise la condensation superficielle si l'air
                  intérieur y est humide. Le traitement de ces zones, souvent situées au droit des planchers
                  intermédiaires, des balcons filants ou des jonctions entre murs, conditionne une partie
                  importante de l'efficacité réelle de l'isolation posée.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
        {/*
          29/08 : emplacement visé pour un DIAGRAMME GÉNÉRÉ comparatif ITI / ITE / pont thermique
          de liaison, même code couleur (alt conseillé : "Comparaison entre isolation intérieure,
          extérieure et ponts thermiques"). Vérifié : cet emplacement ne contenait jusqu'ici aucune
          image de ce type (ni bonne ni erronée) — /photos/pedagogie/03-menuiserie-condensation.jpeg
          est utilisée plus bas sur cette page, dans la section "Menuiseries, étanchéité à l'air et
          risque de condensation" (ligne ~167), où son sujet réel (menuiserie ancienne/étanche et
          risque de condensation) correspond à la légende de cette section-là ; elle n'occupe pas
          cet emplacement Isolation et n'a donc pas été déplacée.
          Prompt FR : "Diagramme pédagogique comparatif 4:3, fond ivoire, traits fins noir mat,
          accent laiton : trois coupes de mur côte à côte avec le même code couleur — isolation
          thermique intérieure (ITI, doublage sur le mur existant côté intérieur), isolation
          thermique extérieure (ITE, manteau isolant sur la façade), et un détail de pont
          thermique de liaison (jonction plancher/mur non traitée avec fuite de chaleur
          symbolisée). Aucun texte dans l'image, légendes ajoutées en HTML ensuite."
        */}
        {/*
          03/09 : deux corrections dans cette section.
          (1) fenetre-identique-cremone-laiton.jpg est retirée. Cette image (stock) montre une
          fenêtre haussmannienne finie, crémone en laiton, vue sur les toits — une belle
          menuiserie livrée, placée sous un intitulé qui traite de l'isolation intérieure,
          extérieure et des ponts thermiques. Elle ne démontre rien de tout cela, et sa légende
          affirmait en outre des choses invisibles sur la photo (« section des petits bois
          relevée sur l'existant », « crémone restaurée et remontée sur le nouveau châssis » :
          rien n'indique que ce châssis soit neuf). Le sujet « fenêtre reproduite à l'identique »
          relève des pages de savoir-faire, pas d'une section sur les déperditions.
          (2) La légende de chIsolationCombles.jpeg annonçait une isolation posée « murs et
          plafond ». Le fichier montre l'inverse : la laine minérale est posée entre les chevrons
          de la toiture uniquement, les murs sont en briques monomur encore nues. Légende
          corrigée pour ne décrire que l'ouvrage visible.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <MqFig
            src="/photos/chantiers/chIsolationCombles.jpeg"
            alt="Laine minérale posée entre les chevrons d'une toiture, ossature métallique en attente et ouvrier vissant une plaque de plâtre depuis un échafaudage roulant"
            caption="Isolation de toiture en cours : laine minérale posée entre chevrons, ossature métallique en place et pose des plaques de plâtre en cours depuis l'échafaudage. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
          <MqFig
            src="/photos/chantiers/chIsolationLaineUrsaVarioSdb.jpeg"
            alt="Isolation par l'intérieur en laine minérale posée entre montants, joints et pourtour d'une fenêtre neuve repris à la bande adhésive, chantier réel"
            caption="Isolation par l'intérieur en laine minérale posée entre montants : les joints et le pourtour de la fenêtre neuve sont repris à la bande adhésive, là où se concentrent les ponts thermiques résiduels. Chantier réel des équipes partenaires."
            ratio="aspect-[3/4]"
          />
        </div>
      </MqSection>

      <MqSection
        title="Menuiseries, étanchéité à l'air et risque de condensation"
        lead="Remplacer des menuiseries sans revoir la ventilation est l'une des erreurs les plus fréquentes en rénovation énergétique."
      >
        <MqFig
          src="/photos/pedagogie/03-menuiserie-condensation.jpeg"
          alt="Schéma pédagogique avant/après : menuiserie ancienne avec fuites d'air diffuses, menuiserie neuve étanche avec risque de condensation sans ventilation adaptée"
          caption="Schéma pédagogique : une menuiserie plus étanche supprime des fuites d'air qui participaient au renouvellement d'air — d'où le risque de condensation sans ventilation adaptée."
          ratio="aspect-[3/2]"
        />
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Menuiseries et vitrage : un choix qui affecte tout le système</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Une menuiserie neuve, plus étanche à l'air qu'une menuiserie ancienne, supprime une partie du
              renouvellement d'air naturel du logement.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Le remplacement des menuiseries améliore l'isolation thermique et acoustique du logement, mais
                  réduit fortement les infiltrations d'air incontrôlées qui, sur une menuiserie ancienne,
                  participaient en partie au renouvellement d'air du logement, souvent sans que les occupants en
                  aient conscience.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Étanchéité à l'air : un objectif qui doit être piloté, pas subi</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Une bonne étanchéité à l'air améliore la performance énergétique, mais impose en contrepartie une
              ventilation dimensionnée en conséquence.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Traiter l'étanchéité à l'air d'un logement, par exemple lors de la pose d'une isolation ou du
                  remplacement de menuiseries, augmente la performance globale mais supprime les fuites d'air qui
                  évacuaient auparavant une partie de l'humidité intérieure. Sans ventilation dimensionnée en
                  conséquence, cette étanchéité accrue favorise la condensation sur les parois froides et les
                  menuiseries.
                </p>
                <p>
                  C'est la raison pour laquelle isolation, menuiseries et ventilation sont systématiquement
                  pensées comme un système cohérent, jamais comme des postes de travaux indépendants les uns des
                  autres.
                </p>
              </MqProse>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <MqFig
                src="/photos/chantiers/chParVapeurSopremaFenetreSdb.jpeg"
                alt="Membrane pare-vapeur SOPREMA posée sur l'isolation et adhésivée autour d'une fenêtre neuve, arrivées d'eau et gaine électrique traversant la membrane"
                caption="Pare-vapeur posé sur l'isolation et adhésivé autour de la fenêtre neuve : arrivées d'eau et gaine électrique traversent la membrane, points sensibles de l'étanchéité à l'air. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chPlacoHydroSopremaFenetreSdb.jpeg"
                alt="Plaques de plâtre hydrofuges posées sur le pare-vapeur autour d'une fenêtre neuve, partie basse encore ouverte sur la membrane et les arrivées d'eau"
                caption="Habillage en plaques hydrofuges refermé sur le pare-vapeur ; la partie basse reste ouverte sur la membrane et les arrivées d'eau. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Ventilation mécanique contrôlée : dimensionner le renouvellement d'air"
        lead="La ventilation mécanique contrôlée évacue en continu l'air vicié et humide des pièces techniques, tout en apportant de l'air neuf par les pièces de vie."
      >
        <MqFig
          src="/photos/maquette/schema-vmc.jpg"
          alt="Schéma de principe d'une ventilation mécanique contrôlée hygroréglable montrant les entrées d'air en menuiseries des pièces de vie, le transit de l'air sous les portes intérieures, l'extraction en cuisine et salle de bain, et un carottage de traversée pour le rejet d'air."
          caption="Principe d'une ventilation mécanique contrôlée hygroréglable : entrées d'air, transit sous les portes, extraction en pièces techniques."
          ratio="aspect-[10/7]"
        />
        <div className="mt-10 flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Simple flux autoréglable, hygroréglable, ou double flux</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Le choix du système dépend du niveau d'isolation visé, de la configuration du logement et du budget
              disponible.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  La ventilation simple flux autoréglable extrait l'air à un débit constant, quelle que soit
                  l'humidité réelle constatée dans le logement. La version hygroréglable ajuste ce débit selon
                  l'humidité mesurée, ce qui limite les déperditions liées à une extraction excessive lorsque le
                  logement n'en a pas besoin.
                </p>
                <p>
                  La ventilation double flux ajoute une extraction et une insufflation d'air neuf préchauffé par
                  récupération de calories sur l'air extrait. Plus performante sur le plan énergétique, elle est
                  aussi plus complexe à installer en rénovation, en raison du réseau de gaines nécessaire dans
                  les deux sens.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Entrées d'air, transit et extraction : le circuit complet de l'air</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              L'air neuf entre par les pièces de vie, transite sous les portes intérieures, puis est extrait en
              cuisine et salle de bain.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Les entrées d'air sont intégrées aux menuiseries des pièces de vie, séjour et chambres, pour
                  apporter l'air neuf du logement. Cet air transite ensuite vers les pièces techniques en passant
                  sous les portes intérieures, grâce à un détalonnage suffisant, avant d'être extrait en cuisine,
                  salle de bain et toilettes, là où l'humidité et les odeurs sont les plus présentes.
                </p>
                <p>
                  Le dimensionnement des débits d'extraction et d'entrée d'air dépend du volume et de l'usage de
                  chaque pièce, et se vérifie à la mise en service pour s'assurer que le circuit d'air fonctionne
                  réellement comme prévu, sans zone morte ni surventilation locale.
                </p>
              </MqProse>
            </div>
            <div className="mt-6">
              <MqFig
                src="/photos/pedagogie/04-circuit-air.jpeg"
                alt="Schéma pédagogique du circuit complet de l'air dans un logement : entrées d'air en séjour et chambres, transit sous les portes du couloir, extraction en cuisine et salle de bain"
                caption="Schéma pédagogique : circuit complet de l'air — entrée par les pièces de vie, transit sous les portes, extraction en cuisine et salle de bain."
                ratio="aspect-[3/2]"
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Carottage de traversée pour l'amenée ou le rejet d'air</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Le passage des gaines de ventilation à travers un mur ou une toiture nécessite un carottage précis,
              réalisé avec soin pour préserver l'étanchéité de la paroi traversée.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Lorsque le groupe de ventilation doit être raccordé à l'extérieur, un carottage de traversée est
                  réalisé à travers le mur de façade ou la toiture, avec un diamètre adapté au diamètre de la
                  gaine et un traitement soigné de l'étanchéité autour du passage créé, pour éviter toute
                  infiltration d'eau ou d'air parasite à cet endroit.
                </p>
              </MqProse>
            </div>
            {/*
              02/09 : cette photo de carottage occupait auparavant la grille de la section « Isolation »
              (hors sujet à cet endroit) ; elle est déplacée ici, au droit du texte qui décrit
              précisément le carottage de traversée. Sa place dans la grille Isolation est prise par
              une vraie photo de chantier (chIsolationLaineUrsaVarioSdb.jpeg).
            */}
            <div className="mt-6">
              <MqFig
                src="/photos/maquette/chantier-carottage-facade.jpg"
                alt="Carotteuse diamant sur bâti fixée à un mur de façade en pierre pour percer une sortie de ventilation"
                caption="Carottage de façade pour ventilation : bâti fixé, carottage à l'eau, carotte extraite — après accord écrit du syndic sur la partie commune. Illustration de référence, hors chantier documenté sur cette page."
                ratio="aspect-[10/7]"
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Immeuble sans ventilation : constituer le dossier pour le syndic"
        lead="En copropriété, l'installation d'une ventilation touchant les parties communes suit une démarche formelle jusqu'à l'assemblée générale."
      >
        <MqProse>
          <p>
            De nombreux immeubles anciens n'ont jamais été équipés de ventilation mécanique contrôlée. Lorsque le
            projet nécessite une traversée de façade, de toiture ou l'usage d'une gaine commune existante, une
            démarche formelle auprès du syndic est nécessaire avant tout démarrage de travaux.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqNumbered
            items={[
              {
                title: "Constituer un dossier technique lisible",
                text: "Description du besoin, principe de ventilation envisagé et incidence éventuelle sur les parties communes, présentés simplement.",
              },
              {
                title: "Solliciter un chiffrage auprès d'une entreprise partenaire contractante",
                text: "Un devis détaillé donne au syndic un élément concret pour instruire la demande, plutôt qu'une intention générale.",
              },
              {
                title: "Transmettre la demande au syndic dans les délais",
                text: "La demande d'inscription à l'ordre du jour respecte les délais fixés par le règlement de copropriété pour la prochaine assemblée générale.",
              },
              {
                title: "Présenter le dossier en assemblée générale",
                text: "Le vote porte sur le principe de l'intervention et, le cas échéant, sur l'usage de gaines ou de traversées en parties communes.",
              },
              {
                title: "Organiser l'intervention une fois l'accord obtenu",
                text: "L'entreprise partenaire contractante retenue programme les travaux dans le respect des conditions votées.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Chauffage, émetteurs et ordre des travaux"
        lead="Le chauffage se redimensionne après avoir traité l'enveloppe, jamais avant, sous peine de surdimensionner un système devenu inutilement puissant."
      >
        <MqProse>
          <p>
            Une fois l'isolation, les menuiseries et la ventilation traitées, les besoins réels de chauffage du
            logement diminuent, parfois de manière significative. Redimensionner ou choisir de nouveaux émetteurs
            de chauffage avant cette étape conduit fréquemment à un système surdimensionné par rapport aux
            besoins futurs, ce qui dégrade son fonctionnement et son coût d'exploitation.
          </p>
          <p>
            L'ordre retenu place donc généralement l'enveloppe du bâtiment, toiture, murs, menuiseries et
            étanchéité à l'air, avant le chauffage, la ventilation étant traitée en parallèle de l'étanchéité à
            l'air pour ne jamais laisser un logement rendu étanche sans renouvellement d'air maîtrisé.
          </p>
        </MqProse>
      </MqSection>

      <MqDark
        title="Sortir d'une passoire énergétique en sept étapes"
        lead="Cette séquence évite l'erreur la plus fréquente : isoler et changer les menuiseries sans avoir dimensionné la ventilation en conséquence."
      >
        <MqDarkSteps
          steps={[
            {
              title: "Lire le diagnostic de performance énergétique en détail",
              text: "Au-delà de la lettre affichée, le détail poste par poste du diagnostic indique où se situent les principales déperditions du logement.",
            },
            {
              title: "Hiérarchiser les postes de déperdition",
              text: "Toiture, murs, menuiseries, planchers bas et ventilation ne pèsent jamais autant les uns que les autres : le traitement suit cet ordre de priorité.",
            },
            {
              title: "Traiter l'isolation en cohérence avec les ponts thermiques",
              text: "Isoler une paroi sans traiter les liaisons avec les parois voisines laisse subsister des zones froides qui concentrent le risque de condensation.",
            },
            {
              title: "Reprendre l'étanchéité à l'air du logement",
              text: "Les fuites d'air non maîtrisées annulent une partie du bénéfice de l'isolation posée, même de bonne qualité.",
            },
            {
              title: "Dimensionner la ventilation mécanique contrôlée",
              text: "Un logement rendu plus étanche à l'air a impérativement besoin d'une ventilation adaptée pour évacuer l'humidité intérieure.",
            },
            {
              title: "Adapter les menuiseries et le vitrage",
              text: "Le remplacement des menuiseries se pense avec les entrées d'air de la ventilation, jamais indépendamment.",
            },
            {
              title: "Redimensionner le chauffage et ses émetteurs",
              text: "Une fois l'enveloppe traitée, les émetteurs de chauffage sont réévalués pour éviter un surdimensionnement devenu inutile.",
            },
          ]}
        />
      </MqDark>

      <MqSection
        title="Erreurs fréquentes et ordres de grandeur budgétaires indicatifs"
        lead="Les erreurs les plus coûteuses en rénovation énergétique viennent presque toujours d'un mauvais séquencement des postes, pas d'un mauvais matériau."
      >
        <MqChecklist
          cols={1}
          items={[
            "Isoler un logement sans revoir la ventilation, au risque de condensation et de moisissures",
            "Remplacer les menuiseries sans prévoir d'entrées d'air compensatoires suffisantes",
            "Traiter une paroi en laissant un pont thermique non traité à sa jonction avec les parois voisines",
            "Dimensionner le chauffage avant d'avoir traité l'enveloppe du logement",
            "Négliger la démarche auprès du syndic pour une ventilation touchant des parties communes",
          ]}
        />
        <p className="text-muted text-[0.92rem] leading-relaxed mt-8 max-w-2xl">
          Ces ordres de grandeur restent indicatifs et dépendent fortement de la surface, de l'état initial du
          bien et du niveau de performance visé ; ils sont toujours confrontés à l'état réel constaté lors de la
          visite technique avant tout engagement.
        </p>
        <div className="mt-8">
          <MqStats
            items={[
              {
                dt: "Toiture",
                dd: "Isolation des combles — Poste souvent prioritaire compte tenu de son impact fréquemment élevé sur les déperditions globales.",
              },
              {
                dt: "20 %",
                dd: "Économies possibles — Grâce aux achats de matériaux isolants et menuiseries en direct par le client, sur les postes qui s'y prêtent.",
              },
              {
                dt: "Ventilation",
                dd: "Poste à ne jamais omettre — Systématiquement associée à l'isolation et à l'étanchéité à l'air dans le pilotage du projet.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="PÉDAGOGIE ÉNERGÉTIQUE"
        title="Sortir du statut de passoire énergétique : les ouvrages en images"
        lead="Les combles représentent le premier poste de déperdition, la ventilation le premier facteur d'insalubrité. Ces visuels et schémas expliquent l'isolation en deux couches croisées et le principe d'une pompe à chaleur air-eau."
        wide
      >
        {/*
          29/08 : les deux photos combles-non-isoles-avant.jpg / combles-isoles-apres.jpg étaient
          affichées deux fois de suite sur cette page (ici, puis à nouveau juste en dessous dans
          la sous-section "Combles :" avec préfixes Avant/Après) — doublon supprimé ici, l'unique
          occurrence restante est la sous-section détaillée ci-dessous.
          Limite constatée à documenter honnêtement : ces deux photos sont des images de stock
          (dossier public/photos/maquette/, jamais présentées comme "chantier réel" dans leur
          légende — donc pas de fausse allégation), pas de vraies photos de chantier. Recherché
          dans public/photos/chantiers/ (grep isolation/combles/laine) : une seule photo réelle
          correspond, chIsolationCombles.jpeg — mais elle est déjà utilisée plus haut sur cette
          même page (section Isolation, ligne ~143) ; la réutiliser ici aurait créé un doublon
          interne à la page. Faute d'un second angle réel disponible pour ces combles, le
          stock reste en place ; à remplacer par de vraies photos avant/après du même chantier
          dès qu'elles seront disponibles.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/schema-isolation-combles.jpg"
            alt="Schéma en coupe de l'isolation des combles : charpente, deux couches croisées de laine minérale, pare-vapeur continu et ventilation de sous-toiture"
            caption="Principe d'isolation des combles : deux couches croisées, pare-vapeur continu côté chaud et lame d'air ventilée sous couverture."
            ratio="aspect-[10/7]"
          />
          <MqFig
            src="/photos/maquette/schema-pompe-a-chaleur.jpg"
            alt="Schéma d'installation d'une pompe à chaleur air-eau : unité extérieure, module hydraulique, ballon d'eau chaude, radiateurs basse température et plancher chauffant"
            caption="Pompe à chaleur air-eau : unité extérieure, module hydraulique, ballon sanitaire et émetteurs basse température adaptés au bâti rénové."
            ratio="aspect-[10/7]"
          />
        </div>
        <div className="flex flex-col gap-12 mt-12">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Combles : de l'isolant tassé à la double couche croisée</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur
              continu : le premier poste de déperdition d'une passoire énergétique.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <MqFig
                src="/photos/maquette/combles-non-isoles-avant.jpg"
                alt="Combles perdus non isolés, ancienne laine tassée entre les solives et charpente apparente"
                caption="Avant : Combles perdus avant intervention : isolant tassé et discontinu, ponts thermiques en périphérie, premier poste de déperdition d'une passoire énergétique."
                ratio="aspect-[10/7]"
              />
              <MqFig
                src="/photos/maquette/combles-isoles-apres.jpg"
                alt="Combles isolés en laine minérale recouverte d'une membrane continue aux lés jointoyés, chemin de circulation en panneaux posé au centre"
                caption="Après : combles traités — laine minérale posée entre solives sous une membrane continue aux lés jointoyés, et chemin de circulation en panneaux pour l'entretien des réseaux."
                ratio="aspect-[10/7]"
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Salle d'eau : de la condensation chronique à la ventilation maîtrisée</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              La cause est traitée avant la finition : extraction VMC dimensionnée, étanchéité sous carrelage,
              puis pose du travertin et de la robinetterie.
            </p>
            {/*
              03/09 : même correction que sur /second-oeuvre, où ce diptyque était dupliqué.
              salle-eau-vmc-apres.jpg est une salle de bain décorée et mise en scène (vase,
              branche d'olivier, tabouret) dont la légende affirmait « extraction VMC
              dimensionnée » et « étanchéité sous carrelage » : deux ouvrages qu'aucun pixel de
              l'image ne montre. Remplacée par le visuel de caisson de VMC et gaines, qui montre
              l'équipement dont parle le texte, signalé comme illustration de référence.
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <MqFig
                src="/photos/maquette/salle-eau-condensation-avant.jpg"
                alt="Salle d'eau dégradée par la condensation, moisissures en plafond et en angles, grille de ventilation encrassée"
                caption="La cause : ventilation absente ou obstruée — grille encrassée, moisissures au plafond et dans les angles. Le traitement commence par le renouvellement d'air, pas par la peinture."
                ratio="aspect-[10/7]"
              />
              <MqFig
                src="/photos/maquette/chantier-vmc-caisson-gaines.jpg"
                alt="Caisson de ventilation mécanique contrôlée suspendu en faux plafond, gaines d'extraction raccordées sur ses piquages"
                caption="Le traitement : caisson d'extraction mécanique suspendu en faux plafond, gaines raccordées vers les pièces humides avant fermeture. Illustration de référence, hors chantier documenté sur cette page."
                ratio="aspect-[10/7]"
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Comment lire un diagnostic de performance énergétique classé F ou G ?",
              a: "Au-delà de la lettre globale, le détail du diagnostic précise la contribution de chaque poste, toiture, murs, planchers, menuiseries et ventilation, à la consommation estimée du logement. Cette décomposition permet de hiérarchiser les travaux par ordre d'impact réel, plutôt que de traiter les postes au hasard ou par simple préférence esthétique.",
            },
            {
              q: "Peut-on isoler un logement sans s'occuper de la ventilation ?",
              a: "Ce n'est pas recommandé. Un logement rendu plus étanche à l'air sans ventilation adaptée retient l'humidité produite par les occupants, ce qui favorise la condensation, les moisissures et parfois une dégradation du bâti neuf isolé. La ventilation mécanique contrôlée doit être pensée en même temps que l'isolation, pas après coup.",
            },
            {
              q: "Faut-il choisir une ventilation simple flux ou double flux ?",
              a: "Une ventilation simple flux hygroréglable ajuste ses débits selon l'humidité constatée et convient à de nombreuses rénovations. Une ventilation double flux, plus complexe à installer en rénovation en raison des gaines nécessaires, permet de récupérer une partie des calories de l'air extrait, ce qui présente un intérêt renforcé sur une isolation déjà performante.",
            },
            {
              q: "Comment installer une ventilation dans un immeuble qui n'en a pas ?",
              a: "Un dossier technique est constitué, précisant le principe retenu et l'éventuelle incidence sur les parties communes, comme une traversée de façade ou de toiture. Ce dossier est présenté au syndic pour inscription à l'ordre du jour de la prochaine assemblée générale, qui statue sur l'autorisation nécessaire avant travaux.",
            },
            {
              q: "Isolation par l'intérieur ou par l'extérieur, quelle différence ?",
              a: "L'isolation par l'extérieur traite mieux les ponts thermiques en enveloppant le bâtiment sans réduire la surface habitable, mais elle modifie l'aspect de la façade et nécessite souvent une autorisation d'urbanisme. L'isolation par l'intérieur est plus simple à mettre en œuvre en copropriété, mais réduit légèrement la surface et exige un traitement soigné des jonctions avec les parois adjacentes.",
            },
            {
              q: "Quel est l'ordre correct des travaux de rénovation énergétique ?",
              a: "L'enveloppe du bâtiment, toiture, murs et menuiseries, est généralement traitée avant le redimensionnement du chauffage, car les besoins réels ne peuvent être évalués correctement qu'une fois les déperditions réduites. Traiter le chauffage en premier conduit fréquemment à un système surdimensionné par rapport aux besoins futurs du logement isolé.",
            },
            {
              q: "Quelles sont les erreurs les plus fréquentes en rénovation énergétique ?",
              a: "Isoler sans ventiler, remplacer les menuiseries sans prévoir d'entrées d'air compensatoires, traiter une paroi en laissant un pont thermique non traité en périphérie, et dimensionner le chauffage avant d'avoir traité l'enveloppe figurent parmi les erreurs les plus fréquemment constatées sur des chantiers mal séquencés.",
            },
          ]}
        />
        <p className="text-muted text-[0.85rem] leading-relaxed mt-8 max-w-2xl">
          Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon
          les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des
          architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les
          entreprises concernées.
        </p>
      </MqSection>

      <MqCta lead="Étude de projet gratuite sous 48 heures : lecture du bien, hiérarchisation des travaux, points de vigilance et budget réaliste." />

      <MqReadNext
        items={[
          { href: "/renovation-complete", label: "Rénovation complète", sub: "Du diagnostic à la livraison" },
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/second-oeuvre", label: "Second œuvre technique", sub: "Électricité, plomberie, cloisons" },
          { href: "/demarches-administratives-renovation", label: "Démarches administratives", sub: "Syndic, urbanisme, copropriété" },
          { href: "/observatoire-prix-renovation", label: "Observatoire des prix réels", sub: "Fourchettes constatées" },
          { href: "/contact", label: "Contact", sub: "Décrire votre projet en détail" },
        ]}
      />
    </main>
  );
}
