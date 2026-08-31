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

      {/*
        À GÉNÉRER — visuel hero manquant.
        Vérifié le 31/08/2026 : MqHero (app/components/mq.tsx) n'a pas de slot image et aucun MqFig
        n'est présent sous le hero de cette page. Le hero est donc 100% texte à ce jour — l'affirmation
        d'un rapport précédent ("le hero est déjà un schéma technique, accepté par le client") est fausse.
        Aucun des 7 schémas de /public/photos/pedagogie/ ne couvre ce sujet (vérifié par ls).

        Sujet requis : coupe technique de l'interface entre une maison ancienne et son extension —
        fondations, rupture de capillarité, isolation continue, raccord de toiture, passage des réseaux.
        Alt prévu : "Interface technique entre une maison existante et son extension."

        Prompt FR (à générer, style aligné sur schema-extension-surelevation.jpg déjà en place :
        fond ivoire/crème uni, coupe technique en traits fins charbon, légende numérotée en cercles
        ocre/doré, encadré légende en bas, échelle graphique) :
        "Coupe technique 2D en ligne, style schéma d'architecte pédagogique, vue en coupe verticale d'une
        maison ancienne en pierre raccordée à une extension contemporaine de plain-pied. Montrer de bas en
        haut, avec légende numérotée en cercles ocre : (1) fondations existantes et fondations neuves de
        l'extension côte à côte avec leur différence de profondeur, (2) rupture de capillarité / arase
        étanche au pied du mur neuf, (3) continuité de l'isolation thermique entre mur existant et mur neuf
        sans pont thermique au droit de la jonction, (4) raccord de toiture entre couverture ancienne et
        toiture neuve à faible pente avec solin d'étanchéité, (5) passage des réseaux (électricité,
        plomberie, VMC) traversant la jonction existant/neuf. Fond ivoire/crème uni (#F5F0E8 environ),
        traits fins charbon, accents ocre/doré, encadré légende en bas à droite (Existant / Neuf / Isolant /
        Rupture de capillarité), échelle graphique en bas, typographie sans-serif nette, aucune photo,
        aucun rendu 3D réaliste — schéma pédagogique 2D uniquement, cohérent avec les schémas déjà produits
        du site."
      */}

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
        {/*
          À FOURNIR — photo RÉELLE manquante (ce n'est pas un visuel "à générer par IA").
          Sujet demandé : terrain et façade avant travaux, avec implantation de l'extension ajoutée
          en surimpression sobre. Alt prévu : "Étude d'implantation d'une extension de maison."
          Vérifié le 31/08/2026 : aucun candidat honnête dans /public/photos/chantiers/ (pas de photo
          de terrain/jardin avant travaux avec superposition d'implantation) et aucun schéma dans
          /public/photos/pedagogie/. Ce visuel suppose une vraie photo de terrain d'un chantier
          ARCHI PILOTE réel + un calque d'implantation sobre ajouté dessus — impossible à fabriquer
          honnêtement ici sans une photo de terrain authentique fournie par le client/les équipes
          partenaires. Ne pas combler avec une photo stock présentée comme réelle.
        */}
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
        {/*
          Rangée supprimée le 31/08/2026 (vérification image par image) : les 3 photos qui figuraient
          ici (chTerrassePiscineBoisVue1.jpeg, chTerrasseBoisPiscineCourbe.jpeg,
          chLivraisonPanneauPrefabGrue.jpeg) montrent des terrasses/piscine — hors-sujet dans une
          section consacrée à l'interface maison existante/extension. La 3e photo était en plus
          légendée à tort "Panneau préfabriqué livré par grue sur un chantier d'extension" alors
          qu'elle montre une coque de piscine préfabriquée livrée par camion-grue. C'est exactement
          le mélange de projets signalé par le client : la rangée est retirée plutôt que corrigée
          par une légende approximative.
        */}
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
        title="Ce qui se joue avant et pendant une extension"
        lead="Une extension réussie se joue avant le terrassement : étude de sol, autorisation d'urbanisme et fondations adaptées. Les photos ci-dessous sont des exemples d'illustration à chaque étape type — elles ne documentent pas un unique chantier de bout en bout (voir note ci-dessous)."
        wide
      >
        {/*
          Corrigé le 31/08/2026 après vérification visuelle des fichiers sources : cette section
          présentait jardin-avant-extension.jpg et extension-livree-apres.jpg comme le "avant" et
          "après" d'UN MÊME projet (légendes "Avant :" / "Après :" répétées deux fois sur la page).
          Ouverture des deux fichiers : ce sont deux maisons différentes (pierre/toiture/jardin/
          extension tous différents) — exactement le problème signalé par le client ("les visuels
          actuels mélangent plusieurs projets"). La fausse paire "avant/après" dupliquée est retirée
          et les légendes ci-dessous ne prétendent plus qu'il s'agit du même bien.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/jardin-avant-extension.jpg"
            alt="Jardin d'une maison de meulière francilienne avant extension, terrasse béton fissurée et abri de jardin"
            caption="Exemple d'illustration — terrain avant travaux : le relevé, l'étude de sol et la déclaration préalable précèdent tout terrassement."
          />
          <MqFig
            src="/photos/chantiers/chIsolationCombles.jpeg"
            alt="Pose de l'isolation et du doublage sous toiture dans une extension en cours de second œuvre, chantier réel"
            caption="Isolation et doublage posés en sous-face de toiture avant fermeture des cloisons. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/maquette/extension-verre-meuliere.jpg"
            alt="Extension contemporaine vitrée à ossature acier greffée sur une maison ancienne en meulière d'Île-de-France"
            caption="Référence de style A (photo d'illustration, projet distinct) : extension vitrée à ossature acier sur maison en meulière."
          />
          <MqFig
            src="/photos/maquette/extension-livree-apres.jpg"
            alt="Extension contemporaine en bardage bois et grandes baies vitrées acier noir accolée à une maison de meulière"
            caption="Référence de style B (photo d'illustration, projet distinct) : extension en bardage bois et grandes baies vitrées."
          />
        </div>
        <div className="mt-5">
          <MqFig
            src="/photos/maquette/schema-reprise-sous-oeuvre.jpg"
            alt="Schéma en coupe d'une reprise en sous-œuvre : plots bétonnés par passes alternées, bon sol porteur, sondage géotechnique et étaiement"
            caption="Reprise en sous-œuvre : excavation et bétonnage par passes alternées jusqu'au bon sol identifié par le sondage géotechnique."
          />
        </div>
        {/*
          À FOURNIR — la vraie séquence demandée par le client n'existe pas encore comme actif.
          Sujet demandé : suite RÉELLE et cohérente d'UNE SEULE extension, du début à la fin —
          terrassement, structure, hors d'eau, second œuvre, livraison. Alt prévu : "Étapes réelles
          de construction d'une extension de maison."
          Vérifié le 31/08/2026 : /public/photos/chantiers/ (~200 fichiers) contient de vraies photos
          de chantier mais aucune suite documentée d'un seul et même projet d'extension du terrassement
          à la livraison — ce sont des chantiers différents (cuisines, dressings, charpentes de
          maisons distinctes, etc.). Fabriquer une continuité à partir de ces photos séparées
          reproduirait le problème signalé par le client. Ce visuel a donc besoin d'un vrai reportage
          photo (5 étapes) sur UN chantier ARCHI PILOTE réel et identifié, pas d'une génération IA
          ni d'un montage de photos d'origines diverses.
        */}
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
