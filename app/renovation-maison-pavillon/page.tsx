import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Rénovation de maison et pavillon | ARCHI PILOTE",
  description:
    "Une maison réunit dans un même volume l'enveloppe, la structure et les usages : un désordre visible dans une pièce peut avoir son origine ailleurs…",
  alternates: { canonical: "/renovation-maison-pavillon" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Maison & pavillon"
        title="Rénovation de maison et de pavillon : lire le bâtiment du sol au toit"
        lead="Une maison réunit dans un même volume l'enveloppe, la structure et les usages : un désordre visible dans une pièce peut avoir son origine ailleurs, en toiture ou en fondation. ARCHI PILOTE RÉNOVATION lit le bâtiment dans son ensemble avant de hiérarchiser les travaux, avec une attention particulière aux passoires énergétiques, à la ventilation et à l'isolation, pendant que les entreprises partenaires contractantes exécutent chaque lot."
      />

      <MqSection
        title="Lire la maison du sol à la toiture avant de chiffrer"
        lead="Les désordres d'une maison traversent souvent plusieurs niveaux : une humidité en cave peut expliquer une dégradation observée sous toiture, et inversement."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Une lecture globale plutôt qu'une liste de travaux</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Traiter chaque pièce indépendamment conduit fréquemment à corriger un symptôme sans supprimer sa cause.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un pavillon des années 1960 à 1990, comme une maison plus ancienne, forme un système où l'humidité, la structure, l'isolation, la ventilation et les réseaux interagissent. Une tache d'humidité au plafond du premier étage peut provenir d'une toiture défaillante, d'une remontée capillaire ou d'une fuite de réseau : seule une lecture complète permet de trancher.
                </p>
                <p>
                  Cette lecture précède systématiquement toute demande de devis, afin d'éviter de faire chiffrer des travaux qui traiteraient un symptôme sans corriger sa cause réelle.
                </p>
              </MqProse>
            </div>
            <div className="mt-6">
              <MqFig
                src="/photos/chantiers/chPoutreAcierMurDegarni.jpeg"
                alt="Mur dégarni jusqu'au support pour lecture du bâti, poutre de reprise apparente, chantier réel"
                caption="Lecture du bâti : mur dégarni jusqu'au support pour vérifier son état réel avant de chiffrer la suite des travaux. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Points singuliers de toiture et de façade</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Un point singulier localisé, jonction de toiture ou fissure de façade, peut expliquer un problème apparemment global de confort ou d'humidité.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  L'expérience de terrain montre qu'un désordre présenté comme diffus a très souvent une origine précise et localisée : une jonction de toiture mal reprise, un raccord de façade fissuré, une évacuation d'eaux pluviales mal positionnée. Identifier ce point singulier évite des travaux généraux inutilement coûteux.
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
              src="/photos/maquette/schema-vmc.jpg"
              alt="Schéma de principe d'une ventilation mécanique contrôlée hygroréglable associée à un carottage de mur pour maison ou pavillon"
              caption="Isolation et ventilation mécanique contrôlée doivent être pensées ensemble pour éviter tout report d'humidité."
            />
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Traiter la passoire énergétique : ordre technique recommandé"
        lead="Isoler sans ventiler, ou ventiler sans isoler, produit rarement le résultat attendu : ces deux volets se traitent en même temps."
      >
        <MqProse>
          <p>
            Une maison classée passoire énergétique cumule généralement plusieurs faiblesses : toiture mal isolée, menuiseries anciennes laissant filer la chaleur, murs sans isolation ou avec une isolation dégradée, et absence de ventilation mécanique contrôlée adaptée. Traiter un seul de ces points sans les autres donne des résultats décevants.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            items={[
              "Diagnostic complet des déperditions avant tout choix de matériau isolant",
              "Traitement prioritaire de la toiture, poste de déperdition souvent le plus important",
              "Isolation des murs par l'intérieur ou l'extérieur selon la configuration de façade",
              "Installation d'une ventilation mécanique contrôlée hygroréglable adaptée à l'étanchéité obtenue",
              "Remplacement des menuiseries les plus dégradées en priorité sur les autres",
              "Vérification de l'absence de pont thermique aux jonctions structurelles",
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Le carottage, un outil de diagnostic sous-estimé"
        lead="Le carottage permet de vérifier concrètement la composition d'un mur ou d'un plancher avant de décider d'une solution technique."
      >
        <div>
          <h3 className="display text-[1.3rem] text-ivoire">À quoi sert le carottage en rénovation</h3>
          <div className="mt-4">
            <MqProse>
              <p>
                Avant de trancher sur une solution d'isolation ou de ventilation, un carottage permet de vérifier physiquement la composition d'un mur, l'épaisseur d'une dalle ou la présence d'une lame d'air. Cette vérification concrète évite de se fier uniquement à des plans anciens, parfois incomplets ou obsolètes.
              </p>
            </MqProse>
          </div>
        </div>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-carottage-ventilation.jpg"
            alt="Schéma de carottage d'un mur de façade pour la pose d'une gaine et d'une bouche d'extraction en copropriété"
            caption="Carottage de façade pour ventilation : diamètre, gaine et bouche d'extraction, avec accord préalable du syndic lorsque la façade est concernée."
          />
        </div>
      </MqSection>

      <MqSection
        title="Construire le budget par familles de postes"
        lead="Le budget d'une rénovation de maison se décompose en familles homogènes, avec une réserve pour aléas systématiquement prévue."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            { title: "Diagnostics", text: "Lecture du bâtiment, éventuel carottage, diagnostic de performance énergétique." },
            { title: "Toiture et façade", text: "Reprise d'étanchéité, points singuliers, traitement des remontées d'humidité." },
            { title: "Structure", text: "Vérification et reprise éventuelle des éléments porteurs identifiés fragiles." },
            { title: "Réseaux techniques", text: "Électricité, plomberie, chauffage, ventilation mécanique contrôlée." },
            { title: "Isolation", text: "Traitement de la passoire énergétique par les murs, la toiture et les menuiseries." },
            { title: "Finitions", text: "Peintures, sols, équipements et derniers ajustements avant livraison." },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display text-[1.1rem] text-ivoire">{f.title}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection
        title="Documents et démarches à anticiper"
        lead="Certains documents doivent être réunis avant de lancer les travaux, en particulier pour les maisons anciennes."
      >
        <MqNumbered
          cols={2}
          items={[
            { title: "Diagnostic de performance énergétique", text: "Point de départ pour cadrer les priorités d'isolation et de ventilation." },
            { title: "Plans existants ou relevés", text: "Utiles pour situer les réseaux, la structure et les points singuliers identifiés." },
            { title: "Autorisation d'urbanisme si façade concernée", text: "Certaines modifications de toiture ou de façade nécessitent une déclaration préalable en mairie." },
            { title: "Devis détaillés par lot", text: "Comparaison ligne à ligne des entreprises partenaires contractantes avant validation." },
          ]}
        />
      </MqSection>

      <MqSection
        kicker="Pédagogie visuelle"
        title="Rénover un pavillon francilien : ce que l'on voit et ce que l'on ne voit pas"
        lead="Une rénovation de pavillon se juge sur l'enveloppe : isolation, menuiseries, couverture et ventilation. Voici la même maison avant et après pilotage, puis les schémas techniques qui expliquent les ouvrages cachés."
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Pavillon francilien : de la façade fatiguée à l'enveloppe performante</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Isolation thermique par l'extérieur, remplacement des menuiseries, reprise de couverture et traitement des abords : l'enveloppe est traitée comme un ensemble cohérent.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <MqFig
                src="/photos/maquette/pavillon-facade-avant.jpg"
                alt="Façade d'un pavillon francilien des années 1970 avant rénovation, enduit fissuré, volets bois usés et menuiseries anciennes"
                caption="Avant : État initial d'un pavillon francilien : enduit fissuré, menuiseries simple vitrage, absence d'isolation extérieure et étanchéité de toiture en fin de vie."
              />
              <MqFig
                src="/photos/maquette/pavillon-facade-apres.jpg"
                alt="Même pavillon francilien après rénovation avec isolation extérieure, enduit clair, menuiseries anthracite et terrasse en pierre"
                caption="Après : Le même pavillon après pilotage complet : isolation thermique par l'extérieur, menuiseries à rupture de pont thermique, couverture reprise et abords paysagers."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Combles : de l'isolant tassé à la double couche croisée</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Dépose de l'ancien isolant, traitement des périphéries, deux couches croisées et pare-vapeur continu : le premier poste de déperdition d'une passoire énergétique.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <MqFig
                src="/photos/maquette/combles-non-isoles-avant.jpg"
                alt="Combles perdus avant intervention, isolant tassé et discontinu"
                caption="Avant : Combles perdus avant intervention : isolant tassé et discontinu, ponts thermiques en périphérie, premier poste de déperdition d'une passoire énergétique."
              />
              <MqFig
                src="/photos/maquette/combles-isoles-apres.jpg"
                alt="Combles isolés avec deux couches croisées de laine minérale, pare-vapeur continu et chemin de circulation"
                caption="Après : Combles traités : deux couches croisées de laine minérale, pare-vapeur continu jointoyé et chemin de circulation pour l'entretien des réseaux."
              />
            </div>
          </div>
          <MqFig
            src="/photos/maquette/schema-isolation-combles.jpg"
            alt="Schéma en coupe de l'isolation des combles : charpente, deux couches croisées de laine minérale, pare-vapeur continu et ventilation de sous-toiture"
            caption="Principe d'isolation des combles : deux couches croisées, pare-vapeur continu côté chaud et lame d'air ventilée sous couverture."
          />
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Par où commencer la rénovation d'une maison ancienne ?",
              a: "Par une lecture complète du bâtiment du sol à la toiture : humidité, structure, isolation, ventilation et réseaux. C'est cette lecture globale, et non le choix des finitions, qui détermine l'ordre réel des travaux et évite de traiter un symptôme visible sans corriger sa cause souvent invisible.",
            },
            {
              q: "Comment savoir si ma maison est une passoire énergétique ?",
              a: "Le diagnostic de performance énergétique donne une première indication, mais une lecture terrain complète les données chiffrées en identifiant les points singuliers responsables des déperditions : toiture mal isolée, menuiseries anciennes, ponts thermiques en façade ou absence de ventilation adaptée.",
            },
            {
              q: "Faut-il refaire la toiture avant l'isolation intérieure ?",
              a: "C'est très souvent le bon ordre. Une toiture en mauvais état laisse entrer l'humidité, qui dégrade ensuite toute isolation posée en dessous. Traiter la toiture et l'étanchéité avant l'isolation évite de devoir reprendre un ouvrage neuf quelques années plus tard.",
            },
            {
              q: "Quel est le rôle de la ventilation dans une rénovation de maison ?",
              a: "Une maison rendue plus étanche par l'isolation respire différemment. Sans ventilation mécanique contrôlée adaptée, l'humidité peut s'accumuler et dégrader les matériaux neufs. Isolation et ventilation doivent donc toujours être pensées ensemble, jamais l'une sans l'autre.",
            },
            {
              q: "Comment le budget d'une rénovation de pavillon est-il structuré ?",
              a: "Le budget est construit par familles de postes : diagnostics, structure, toiture et façade, réseaux techniques, isolation et ventilation, menuiseries, puis finitions. Une réserve pour aléas est systématiquement prévue, car le bâti ancien réserve fréquemment des découvertes en cours de chantier.",
            },
            {
              q: "Combien de temps dure une rénovation complète de maison ?",
              a: "Pour une maison avec traitement de l'enveloppe, des réseaux et de la structure, comptez généralement de 4 à 7 mois de travaux. Ce délai dépend de l'état réel découvert derrière les murs, du volume de la maison et de la disponibilité des entreprises partenaires contractantes.",
            },
            {
              q: "Qui décide des travaux à réaliser en priorité ?",
              a: "Le pilotage hiérarchise les travaux selon le niveau de risque et l'urgence technique : structure, humidité, isolation et ventilation en premier, puis menuiseries et finitions. Cette hiérarchisation est présentée au client, qui reste seul décisionnaire du budget final engagé.",
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
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Passoire énergétique, VMC, isolation" },
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage" },
          { href: "/extension-maison", label: "Extension de maison", sub: "Ajouter de la surface sans désorganiser" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse ligne à ligne de vos devis" },
          { href: "/contact", label: "Contact", sub: "Décrire votre projet de maison" },
        ]}
      />
    </>
  );
}
