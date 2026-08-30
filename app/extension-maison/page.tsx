import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqStats, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/extension-maison" },
  title: "Extension de maison : cadrage et pilotage | ARCHI PILOTE",
  description:
    "Structure, autorisations, interfaces et budget : sécurisez les décisions d'une extension avant le démarrage des travaux.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="EXTENSION DE MAISON"
        title="Extension de maison : ajouter sans désorganiser"
        lead="Une extension réussie n'est pas seulement une surface supplémentaire : elle doit fonctionner avec la maison existante sur le plan de la circulation, de la structure, de la lumière, des réseaux, de l'isolation et de l'esthétique. ARCHI PILOTE RÉNOVATION cadre la faisabilité, structure le budget et pilote le projet de A à Z, tandis que les entreprises partenaires contractantes exécutent les travaux et les architectes ou ingénieurs indépendants interviennent sur les dossiers qui l'exigent."
      />

      <MqSection
        title="La faisabilité avant tout budget définitif"
        lead="Un chiffrage précis ne vaut rien tant que les contraintes d'urbanisme, d'emprise, d'accès et de structure existante n'ont pas été vérifiées."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Règles d'urbanisme et emprise au sol</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Le plan local d'urbanisme fixe des règles de distance, de hauteur et d'emprise qui déterminent la
              forme même de l'extension possible.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Avant d'imaginer la disposition intérieure de l'extension, il faut vérifier ce que le document
                  d'urbanisme de la commune autorise réellement : distance par rapport aux limites de propriété,
                  hauteur maximale, emprise au sol restante, coefficient éventuel. Ces règles varient fortement
                  d'une commune à l'autre et parfois d'une rue à l'autre.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Accès chantier et structure existante</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              L'accès pour les engins et matériaux, ainsi que la nature de la structure existante, conditionnent
              la méthode constructive retenue.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Un terrain difficile d'accès impose souvent des matériaux plus légers ou un phasage de livraison
                  différent, avec un impact direct sur le budget. La structure existante de la maison doit
                  également être vérifiée avant de définir le mode de liaison entre l'ancien et le neuf.
                </p>
                <p>
                  Un budget précis annoncé avant ces vérifications peut donc être trompeur. C'est pourquoi l'étude
                  de faisabilité précède systématiquement tout chiffrage engageant.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <MqFig
            src="/photos/maquette/schema-deperditions.jpg"
            alt="Schéma des déperditions thermiques d'une maison avec extension, points de vigilance à l'interface entre l'existant et le neuf"
            caption="Les déperditions thermiques se concentrent souvent aux interfaces entre bâti existant et extension neuve."
          />
        </div>
      </MqSection>

      <MqSection
        title="L'interface existant / extension, la zone la plus sensible"
        lead="Toiture, étanchéité, isolation, niveaux de sol et reprises de façade doivent être traités comme un ensemble et non comme deux chantiers indépendants."
      >
        <MqProse>
          <p>
            C'est à la jonction entre l'ancien et le neuf que se concentrent la majorité des désordres constatés
            plusieurs années après la livraison d'une extension : infiltration au raccord de toiture, pont
            thermique à la jonction des murs, différence de niveau de sol créant une marche non prévue,
            fissuration au droit de la reprise de façade.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqChecklist
            cols={1}
            items={[
              "Raccord de toiture étanché et vérifié avant la pose de la couverture définitive",
              "Continuité de l'isolation entre l'existant et l'extension, sans rupture de pont thermique",
              "Niveaux de sol harmonisés ou traités par une transition maîtrisée",
              "Reprise de façade réalisée avec des matériaux compatibles avec l'existant",
              "Étanchéité à l'air vérifiée avant la fermeture des cloisons",
            ]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <MqFig
            src="/photos/maquette/schema-extension-surelevation.jpg"
            alt="Coupe technique d'une maison avec extension de plain-pied et surélévation, reprise de charges et chaînage"
            caption="Extension et surélévation : reprise des charges jusqu'aux fondations, chaînage et raccords d'étanchéité entre l'existant et le neuf."
          />
          <MqFig
            src="/photos/maquette/extension-verre-meuliere.jpg"
            alt="Extension contemporaine vitrée à ossature acier greffée sur une maison ancienne en meulière d'Île-de-France"
            caption="Référence de style : extension vitrée raccordée à une maison en meulière, avec reprise des fondations et étanchéité de jonction."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <MqFig
            src="/photos/chantiers/chCharpenteToitureOSBChantier.jpeg"
            alt="Charpente d'extension en cours, panneaux OSB de toiture posés, échafaudage, chantier réel"
            caption="Charpente d'extension en cours : panneaux OSB de toiture posés avant couverture définitive. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chCharpenteParpaingConstruction.jpeg"
            alt="Extension en parpaings avec charpente bois posée, dalle coulée, chantier réel"
            caption="Extension en cours : murs en parpaings, charpente bois posée et dalle coulée avant fermeture. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chCharpenteMaisonEchafaudage.jpeg"
            alt="Charpente de maison en cours de montage avec échafaudage, chantier réel"
            caption="Charpente en cours de montage, échafaudage en place pour la pose de la couverture. Chantier réel des équipes partenaires."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          <MqFig
            src="/photos/chantiers/chTerrassePiscineBoisVue1.jpeg"
            alt="Terrasse bois livrée autour d'une piscine, chantier réel"
            caption="Terrasse bois livrée en extension extérieure autour d'une piscine. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chTerrasseBoisPiscineCourbe.jpeg"
            alt="Terrasse bois aux formes courbes livrée autour d'une piscine, chantier réel"
            caption="Terrasse bois aux formes courbes, livrée en extension extérieure d'une maison. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chLivraisonPanneauPrefabGrue.jpeg"
            alt="Panneau préfabriqué livré par grue sur un chantier d'extension, chantier réel"
            caption="Panneau préfabriqué livré par grue : logistique d'approvisionnement d'un chantier d'extension. Chantier réel des équipes partenaires."
          />
        </div>
      </MqSection>

      <MqSection
        title="Réseaux techniques : ce que l'extension impose souvent"
        lead="Ajouter des mètres carrés habitables sollicite presque toujours les réseaux existants, qui doivent être vérifiés avant d'être prolongés."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Tableau électrique et chauffage</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  L'extension peut imposer une adaptation du tableau électrique existant, devenu insuffisant pour
                  alimenter de nouveaux circuits, ainsi qu'un dimensionnement complémentaire du système de
                  chauffage pour couvrir la surface supplémentaire sans dégrader le confort du reste de la maison.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.25rem] text-ivoire">Ventilation, eau et évacuations</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une extension plus étanche que le bâti ancien modifie l'équilibre de ventilation de l'ensemble
                  de la maison. L'installation ou l'extension d'une ventilation mécanique contrôlée hygroréglable
                  est fréquemment nécessaire. L'alimentation en eau et les évacuations doivent également être
                  vérifiées, en particulier si l'extension accueille une cuisine ou une salle d'eau.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Phasage : protéger la vie quotidienne pendant les travaux"
        lead="Si la maison reste occupée pendant le chantier, le phasage devient une contrainte à part entière et doit être anticipé dès le planning initial."
      >
        <MqProse>
          <p>
            Protections des circulations, accès dédié au chantier, coupures ponctuelles de réseaux et périodes
            d'indisponibilité de certaines pièces doivent être identifiées et communiquées aux occupants avant le
            démarrage. Une extension bien phasée limite les nuisances au strict nécessaire.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-planning-lots.jpg"
            alt="Planning en lots d'un chantier de rénovation présenté sous forme de diagramme de phases hebdomadaires"
            caption="Enchaînement des lots d'un chantier de rénovation : chaque phase conditionne la suivante, d'où l'importance du séquencement."
          />
        </div>
        <div className="mt-10">
          <MqNumbered
            items={[
              {
                title: "Étude de faisabilité",
                text: "Vérification des règles d'urbanisme, de l'emprise disponible, de l'accès chantier et de la structure existante.",
              },
              {
                title: "Dossier d'autorisation",
                text: "Constitution du dossier de déclaration préalable ou de permis de construire, avec architecte si le seuil légal l'impose.",
              },
              {
                title: "Fondations et structure",
                text: "Réalisation des fondations et de la structure porteuse de l'extension par l'entreprise partenaire contractante.",
              },
              {
                title: "Hors d'eau, hors d'air",
                text: "Couverture, étanchéité et fermeture de l'enveloppe, avec traitement prioritaire de l'interface avec l'existant.",
              },
              {
                title: "Réseaux et isolation",
                text: "Extension des réseaux électriques, plomberie, chauffage et ventilation, puis pose de l'isolation.",
              },
              {
                title: "Finitions et raccords",
                text: "Finitions intérieures et extérieures, avec vérification finale de la continuité entre ancien et neuf.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        title="Partenaires mobilisés selon la nature du projet"
        lead="Selon l'ampleur de l'extension, un architecte ou un bureau d'études structure peut être nécessaire, tandis que les entreprises exécutantes restent seules contractantes de leurs travaux."
      >
        <MqProse>
          <p>
            ARCHI PILOTE RÉNOVATION structure et pilote le projet d'extension : lecture du terrain,
            hiérarchisation des travaux, mise en relation avec les architectes DPLG ou ingénieurs structure
            partenaires indépendants lorsque le dossier l'exige, et suivi quotidien par photos datées jusqu'à la
            livraison.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqStats
            items={[
              {
                dt: "4-8 mois",
                dd: "Durée moyenne — De l'étude de faisabilité à la livraison, autorisations administratives comprises.",
              },
              {
                dt: "20 %",
                dd: "Économies possibles — Sur les matériaux achetés en direct par le client lorsque le lot s'y prête.",
              },
              {
                dt: "Documents attendus",
                dd: "Titre de propriété, plan cadastral, règlement du plan local d'urbanisme, éventuel accord de copropriété.",
              },
            ]}
          />
        </div>
      </MqSection>

      <MqSection
        kicker="PÉDAGOGIE VISUELLE"
        title="D'un jardin encombré à une extension livrée"
        lead="Une extension réussie se joue avant le terrassement : étude de sol, autorisation d'urbanisme et fondations adaptées. Voici la transformation complète et le schéma de reprise des appuis."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/jardin-avant-extension.jpg"
            alt="Jardin d'une maison de meulière francilienne avant extension, terrasse béton fissurée et abri de jardin"
            caption="Avant extension : terrasse béton fissurée et abri vétuste. Le relevé, l'étude de sol Geo2Mo et la déclaration préalable précèdent tout terrassement."
          />
          <MqFig
            src="/photos/maquette/extension-livree-apres.jpg"
            alt="Extension contemporaine en bardage bois et grandes baies vitrées acier noir accolée à une maison de meulière"
            caption="Extension livrée : ossature bois, grandes baies à menuiseries acier, toiture zinc et raccord soigné à la meulière conservée."
          />
          <MqFig
            src="/photos/maquette/extension-verre-meuliere.jpg"
            alt="Extension contemporaine vitrée à ossature acier greffée sur une maison ancienne en meulière d'Île-de-France"
            caption="Référence de style : extension vitrée raccordée à une maison en meulière, avec reprise des fondations et étanchéité de jonction."
          />
          <MqFig
            src="/photos/maquette/schema-reprise-sous-oeuvre.jpg"
            alt="Schéma en coupe d'une reprise en sous-œuvre : plots bétonnés par passes alternées, bon sol porteur, sondage géotechnique et étaiement"
            caption="Reprise en sous-œuvre : excavation et bétonnage par passes alternées jusqu'au bon sol identifié par le sondage géotechnique."
          />
        </div>
        <div className="mt-12">
          <h3 className="display text-[1.3rem] text-ivoire">Extension : du jardin encombré au volume contemporain</h3>
          <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
            Étude de sol, déclaration préalable, fondations adaptées puis ossature bois et grandes baies : le
            raccord à la meulière existante est traité au détail.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <MqFig
              src="/photos/maquette/jardin-avant-extension.jpg"
              alt="Jardin d'une maison de meulière francilienne avant extension, terrasse béton fissurée et abri de jardin"
              caption="Avant : Avant extension : terrasse béton fissurée et abri vétuste. Le relevé, l'étude de sol Geo2Mo et la déclaration préalable précèdent tout terrassement."
            />
            <MqFig
              src="/photos/maquette/extension-livree-apres.jpg"
              alt="Extension contemporaine en bardage bois et grandes baies vitrées acier noir accolée à une maison de meulière"
              caption="Après : Extension livrée : ossature bois, grandes baies à menuiseries acier, toiture zinc et raccord soigné à la meulière conservée."
            />
          </div>
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Quelle surface d'extension nécessite un architecte ?",
              a: "Dès que la surface de plancher totale du bien après travaux dépasse le seuil légal en vigueur, le recours à un architecte devient obligatoire. Même en dessous de ce seuil, un architecte DPLG ou un ingénieur structure partenaire indépendant reste recommandé dès que l'extension touche à la structure porteuse de la maison existante.",
            },
            {
              q: "Faut-il un permis de construire ou une déclaration préalable ?",
              a: "Cela dépend de la surface créée et de la zone d'urbanisme. Une extension de faible emprise peut relever d'une simple déclaration préalable, tandis qu'une extension plus importante impose un permis de construire. Ce point est vérifié dès l'étude de faisabilité, avant tout engagement budgétaire.",
            },
            {
              q: "Peut-on vivre dans la maison pendant la construction de l'extension ?",
              a: "Dans la majorité des cas oui, à condition que le phasage sépare clairement les zones de chantier des zones habitées. Les périodes les plus perturbantes sont l'ouverture de la façade existante pour créer la liaison et les coupures ponctuelles de réseaux, qui sont anticipées et annoncées à l'avance.",
            },
            {
              q: "Combien coûte réellement une extension de maison ?",
              a: "Le coût dépend fortement du type de structure retenu, du niveau de finition et de la complexité des raccordements aux réseaux existants. Une fourchette précise ne peut être donnée qu'après visite technique, mais l'achat de certains matériaux en direct par le client permet fréquemment de dégager des économies substantielles sur le budget global.",
            },
            {
              q: "Comment se passe le raccord entre l'existant et l'extension ?",
              a: "C'est le point le plus sensible du projet. Toiture, étanchéité, isolation, niveaux de sol et reprises de façade doivent être traités comme un ensemble cohérent, et non comme deux chantiers juxtaposés. Un défaut à cette interface est la première cause de désordre constatée plusieurs années après la livraison.",
            },
            {
              q: "Qui est responsable de la structure de l'extension ?",
              a: "La responsabilité technique et les garanties légales relèvent de l'entreprise partenaire contractante qui exécute la structure, ainsi que de l'ingénieur ou de l'architecte partenaire indépendant lorsqu'une étude a été réalisée. ARCHI PILOTE RÉNOVATION pilote la cohérence globale du projet sans se substituer à ces responsabilités.",
            },
            {
              q: "Comment le chantier est-il suivi si je ne peux pas être présent ?",
              a: "Chaque étape clé, en particulier la structure et les raccords qui seront ensuite recouverts, fait l'objet de photos datées transmises sur WhatsApp. Ce suivi quotidien permet de conserver une preuve visuelle des ouvrages avant qu'ils ne disparaissent derrière l'isolation ou les finitions.",
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
          { href: "/surelevation", label: "Surélévation", sub: "L'alternative à l'extension au sol" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage" },
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Isolation, ventilation, passoire énergétique" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse ligne à ligne de vos devis" },
          { href: "/contact", label: "Contact", sub: "Décrire votre projet d'extension" },
        ]}
      />
    </main>
  );
}
