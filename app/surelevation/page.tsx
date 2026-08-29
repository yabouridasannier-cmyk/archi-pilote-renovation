import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqStats, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/surelevation" },
  title: "Surélévation : étude et pilotage du projet | ARCHI PILOTE",
  description:
    "Surélévation : structure, faisabilité, partenaires et phasage. Un projet complexe nécessite des décisions documentées.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="SURÉLÉVATION"
        title="Surélévation : un projet de structure et de poids"
        lead="Une surélévation ajoute une charge nouvelle sur des fondations et des murs porteurs qui n'ont pas été conçus pour cela à l'origine. La question centrale n'est donc pas esthétique mais structurelle : la maison ou l'immeuble peut-il supporter ce poids supplémentaire ? ARCHI PILOTE RÉNOVATION cadre la faisabilité, mobilise les ingénieurs structure et architectes DPLG partenaires indépendants nécessaires, et pilote le projet de A à Z jusqu'à la livraison."
      />

      <MqSection
        title="La question structurelle avant toute question esthétique"
        lead="Avant d'imaginer la nouvelle pièce, il faut vérifier que les fondations, les murs porteurs et la charpente existante peuvent recevoir la charge supplémentaire."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Étude de structure : une étape non négociable</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Aucun budget fiable ne peut être établi tant que l'étude de structure n'a pas déterminé la charge
              admissible réelle du bâtiment.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  La surélévation modifie profondément l'équilibre des charges d'un bâtiment. Un ingénieur ou un
                  bureau d'études structure partenaire indépendant doit analyser les fondations, la nature des
                  murs porteurs et l'état de la charpente pour déterminer si le poids supplémentaire envisagé est
                  compatible, et sous quelles conditions techniques.
                </p>
                <p>
                  Cette étude conditionne le choix du matériau de structure retenu pour la surélévation, et donc
                  une grande partie du budget final. Elle doit précéder tout chiffrage définitif.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Structure légère ou structure lourde</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Le choix entre ossature bois, structure métallique ou maçonnerie traditionnelle dépend directement
              de la capacité portante réelle du bâtiment existant.
            </p>
            <div className="mt-4">
              <MqChecklist
                cols={1}
                items={[
                  "Ossature bois : solution la plus légère, souvent compatible avec des fondations limitées",
                  "Structure métallique : bon compromis poids/portée pour certaines configurations",
                  "Maçonnerie traditionnelle : nécessite le plus souvent un renforcement préalable des fondations",
                  "Renforcement ponctuel des murs porteurs existants selon les résultats de l'étude",
                  "Reprise éventuelle des fondations si la charge admissible est dépassée",
                ]}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <MqFig
            src="/photos/maquette/schema-extension-surelevation.jpg"
            alt="Coupe technique d'une maison avec extension de plain-pied et surélévation, reprise de charges et chaînage"
            caption="Extension et surélévation : reprise des charges jusqu'aux fondations, chaînage et raccords d'étanchéité entre l'existant et le neuf."
          />
          <MqFig
            src="/photos/maquette/surelevation-ossature-bois.jpg"
            alt="Surélévation en ossature bois d'une maison de ville, charpente apparente, couverture zinc et échafaudage"
            caption="Chantier de surélévation en ossature bois : étage créé après étude de structure et dépose de la couverture existante."
          />
        </div>
        <div className="mt-5">
          <MqFig
            src="/photos/maquette/schema-mur-porteur.jpg"
            alt="Coupe technique d'une ouverture de mur porteur illustrant la reprise de charge nécessaire avant une surélévation"
            caption="La reprise de charge d'un mur porteur illustre le type de vérification structurelle indispensable avant toute surélévation."
          />
        </div>
      </MqSection>

      <MqSection
        title="Autorisations et démarches administratives"
        lead="Une surélévation modifie la hauteur et l'aspect du bâtiment : elle nécessite presque toujours un permis de construire, et parfois l'accord de la copropriété."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Permis de construire et architecte</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Dans la quasi-totalité des cas, une surélévation impose le dépôt d'un permis de construire, car
                  elle modifie la hauteur et souvent l'aspect extérieur du bâtiment. Le recours à un architecte
                  DPLG partenaire indépendant devient obligatoire dès que la surface de plancher totale du
                  bâtiment après travaux dépasse le seuil légal en vigueur.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Démarches auprès du syndic en copropriété</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Pour un immeuble en copropriété, la surélévation touche les parties communes que sont les
                  fondations, la toiture et la structure. Elle nécessite généralement un vote en assemblée
                  générale, avec des règles de majorité spécifiques. Le dossier technique complet doit être
                  présenté au syndic avant même le dépôt de la demande d'autorisation d'urbanisme.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Phasage : dépose de toiture, structure, mise hors d'eau"
        lead="La surélévation expose temporairement le bâtiment aux intempéries pendant la dépose de la toiture existante et la pose de la nouvelle structure : ce phasage se prépare minutieusement."
      >
        <MqFig
          src="/photos/maquette/schema-planning-lots.jpg"
          alt="Planning en lots d'un chantier de rénovation présenté sous forme de diagramme de phases hebdomadaires"
          caption="Enchaînement des lots d'un chantier de rénovation : chaque phase conditionne la suivante, d'où l'importance du séquencement."
        />
        <div className="mt-10">
          <MqNumbered
            items={[
              {
                title: "Étude de structure",
                text: "Analyse des fondations, murs porteurs et charpente par un ingénieur partenaire indépendant.",
              },
              {
                title: "Dossier d'autorisation",
                text: "Permis de construire avec architecte DPLG, et vote en assemblée générale si copropriété.",
              },
              {
                title: "Protection et dépose de toiture",
                text: "Bâchage renforcé et dépose de la couverture existante, phase la plus exposée aux aléas météo.",
              },
              {
                title: "Structure nouvelle",
                text: "Montage de l'ossature retenue (bois, métal ou maçonnerie) par l'entreprise partenaire contractante.",
              },
              {
                title: "Mise hors d'eau, hors d'air",
                text: "Fermeture rapide de l'enveloppe pour limiter au maximum l'exposition du logement existant.",
              },
              {
                title: "Réseaux, isolation, finitions",
                text: "Extension des réseaux vers le nouveau niveau, isolation renforcée et finitions intérieures.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Interfaces techniques entre l'existant et le niveau surélevé"
        lead="L'escalier d'accès, les réseaux verticaux et l'isolation entre les niveaux forment un ensemble d'interfaces à traiter avec la même rigueur que la structure elle-même."
      >
        <MqProse>
          <p>
            La création ou le renforcement de la cage d'escalier menant au niveau surélevé impose souvent une
            trémie dans le plancher existant, avec les mêmes précautions de reprise de charge qu'une ouverture de
            mur porteur. Les réseaux électriques, de plomberie et de chauffage doivent être prolongés
            verticalement, ce qui suppose parfois de repenser une partie de la distribution des étages inférieurs.
          </p>
          <p>
            L'isolation entre l'ancien plancher haut, désormais intérieur, et le nouveau niveau doit également
            être traitée avec soin, tant sur le plan thermique qu'acoustique.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Budget et délais : repères indicatifs"
        lead="Le coût d'une surélévation dépend fortement du type de structure retenu et de l'ampleur des renforcements nécessaires, mais quelques repères permettent de cadrer les attentes."
      >
        <MqStats
          items={[
            {
              dt: "6-10 mois",
              dd: "Durée moyenne — De l'étude de structure à la livraison, autorisations administratives comprises.",
            },
            {
              dt: "Coût au m²",
              dd: "Généralement plus élevé qu'une extension au sol, en raison de la dépose de toiture et du levage des matériaux.",
            },
            {
              dt: "20 %",
              dd: "Économies possibles — Sur certains matériaux achetés en direct par le client, selon les lots concernés.",
            },
          ]}
        />
      </MqSection>

      <MqSection
        kicker="PÉDAGOGIE VISUELLE"
        title="Gagner un étage sans démolir : la surélévation en images"
        lead="La surélévation dépend de la portance des murs existants et du règlement d'urbanisme. Ce comparatif montre une maison francilienne avant et après création d'un étage à ossature bois."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/maison-avant-surelevation.jpg"
            alt="Maison de ville francilienne de plain-pied en brique et enduit avant travaux de surélévation"
            caption="Avant surélévation : combles bas inexploitables. La faisabilité dépend du PLU, de la portance des murs et du diagnostic de l'ingénieur structure."
          />
          <MqFig
            src="/photos/maquette/maison-surelevee-apres.jpg"
            alt="Même maison après surélévation à ossature bois avec bardage clair, grandes fenêtres anthracite et toiture zinc"
            caption="Surélévation livrée : étage à ossature bois, charges reprises sur les murs confortés, bardage clair et toiture zinc à faible pente."
          />
          <MqFig
            src="/photos/maquette/surelevation-ossature-bois.jpg"
            alt="Surélévation en ossature bois d'une maison de ville, charpente apparente, couverture zinc et échafaudage"
            caption="Chantier de surélévation en ossature bois : étage créé après étude de structure et dépose de la couverture existante."
          />
          <MqFig
            src="/photos/maquette/schema-tremie-plancher.jpg"
            alt="Schéma d'une trémie d'escalier dans un plancher bois : solives sectionnées, chevêtre, linçoirs, sabots métalliques et étaiement provisoire"
            caption="Trémie dans un plancher bois : le chevêtre et les linçoirs reprennent les charges des solives coupées, sur sabots métalliques dimensionnés."
          />
        </div>
        <div className="mt-12">
          <h3 className="display text-[1.3rem] text-ivoire">Surélévation : un étage gagné sans démolir</h3>
          <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
            Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée et
            mise hors d'eau rapide pour limiter l'exposition du bâti.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <MqFig
              src="/photos/maquette/maison-avant-surelevation.jpg"
              alt="Maison de ville francilienne de plain-pied en brique et enduit avant travaux de surélévation"
              caption="Avant : Avant surélévation : combles bas inexploitables. La faisabilité dépend du PLU, de la portance des murs et du diagnostic de l'ingénieur structure."
            />
            <MqFig
              src="/photos/maquette/maison-surelevee-apres.jpg"
              alt="Même maison après surélévation à ossature bois avec bardage clair, grandes fenêtres anthracite et toiture zinc"
              caption="Après : Surélévation livrée : étage à ossature bois, charges reprises sur les murs confortés, bardage clair et toiture zinc à faible pente."
            />
          </div>
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Comment sait-on si une maison peut supporter une surélévation ?",
              a: "Seule une étude de structure réalisée par un ingénieur ou un bureau d'études partenaire indépendant permet de trancher. Elle analyse les fondations, les murs porteurs et la charpente existante pour déterminer la charge supplémentaire admissible. Cette étude doit précéder tout chiffrage définitif, faute de quoi le budget annoncé n'a pas de valeur fiable.",
            },
            {
              q: "Quelle est la différence entre une surélévation légère et lourde ?",
              a: "Une surélévation légère utilise une structure bois ou métallique peu chargée, compatible avec des fondations existantes limitées. Une surélévation lourde en maçonnerie traditionnelle impose souvent un renforcement des fondations et des murs porteurs. Le choix dépend de la capacité portante réelle du bâtiment, pas seulement du budget disponible.",
            },
            {
              q: "Faut-il quitter la maison pendant les travaux de surélévation ?",
              a: "Ce n'est généralement pas nécessaire pour la structure elle-même, mais certaines phases, notamment la dépose de toiture et la pose de la nouvelle structure, exposent temporairement le logement aux intempéries. Un phasage rigoureux avec bâchage et protections permet le plus souvent de rester sur place, sauf configuration particulière.",
            },
            {
              q: "Une surélévation nécessite-t-elle un permis de construire ?",
              a: "Dans la quasi-totalité des cas, oui, car une surélévation modifie la hauteur et souvent l'aspect extérieur du bâtiment. Le recours à un architecte DPLG partenaire indépendant est également requis dès que la surface de plancher totale après travaux dépasse le seuil légal en vigueur.",
            },
            {
              q: "Quel est le coût d'une surélévation par rapport à une extension au sol ?",
              a: "Le coût au mètre carré d'une surélévation est généralement plus élevé qu'une extension au sol, en raison de la complexité de la dépose de toiture, du renforcement structurel éventuel et des contraintes de levage des matériaux. Elle reste toutefois souvent pertinente quand le terrain ne permet pas d'extension latérale.",
            },
            {
              q: "Comment les démarches auprès de la copropriété sont-elles gérées pour un immeuble ?",
              a: "Pour une surélévation en copropriété, l'accord de l'assemblée générale est généralement requis, avec des règles de majorité spécifiques. Le dossier technique doit être présenté au syndic avant toute décision, en amont même du dépôt de la demande d'autorisation d'urbanisme.",
            },
            {
              q: "Qui garantit la solidité de la structure après surélévation ?",
              a: "La garantie décennale relève de l'entreprise partenaire contractante qui exécute la structure, ainsi que de l'ingénieur ou de l'architecte partenaire indépendant ayant réalisé l'étude. ARCHI PILOTE RÉNOVATION pilote la cohérence du projet sans se substituer à ces responsabilités techniques et assurantielles.",
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
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/extension-maison", label: "Extension de maison", sub: "L'alternative au sol quand le terrain le permet" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse ligne à ligne de vos devis" },
          { href: "/contact", label: "Contact", sub: "Décrire votre projet de surélévation" },
        ]}
      />
    </main>
  );
}
