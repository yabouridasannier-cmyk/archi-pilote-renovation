import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqNumbered, MqChecklist, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  title: "Second œuvre technique en rénovation | ARCHI PILOTE RÉNOVATION",
  description:
    "Une fois la structure traitée, le second œuvre rassemble l'électricité, la plomberie, le chauffage, les cloisons, les menuiseries intérieures et les finitions.",
  alternates: { canonical: "/second-oeuvre" },
};

export default function Page() {
  return (
    <>
      <MqHero
        kicker="Second œuvre technique"
        title="Second œuvre : rendre les lots compatibles"
        lead="Une fois la structure traitée, le second œuvre rassemble l'électricité, la plomberie, le chauffage, les cloisons, les menuiseries intérieures et les finitions. Chaque lot est simple pris isolément ; la difficulté vient de leurs interfaces, en particulier avant fermeture des cloisons. ARCHI PILOTE RÉNOVATION structure l'enchaînement des lots et les points de contrôle, pendant que les entreprises partenaires contractantes exécutent et facturent chaque intervention."
      />

      <MqSection
        title="Électricité : sécuriser avant d'équiper"
        lead="Le lot électrique commence par un tableau conforme et un plan d'implantation clair, avant toute réflexion sur le nombre de prises."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Tableau électrique et circuits</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Un tableau ancien sans protection différentielle adaptée est presque toujours remplacé pour permettre une mise en sécurité réelle de l'installation.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Le tableau électrique centralise la protection de chaque circuit de l'installation. En rénovation, un tableau vétuste, saturé ou dépourvu de dispositifs différentiels adaptés aux usages actuels est généralement remplacé dans son ensemble, plutôt que complété partiellement, pour garantir une cohérence de protection sur l'ensemble du logement.
                </p>
                <p>
                  Les circuits sont ensuite répartis par usage : éclairage, prises de courant, cuisine, chauffage électrique le cas échéant, afin qu'un défaut sur un circuit ne prive pas l'ensemble du logement d'électricité.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Plan d'implantation et mise en sécurité</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Chaque point d'électricité est positionné sur un plan validé avant l'ouverture des cloisons, jamais improvisé en cours de chantier.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Le plan d'implantation précise l'emplacement de chaque prise, interrupteur et point lumineux, en fonction du plan d'usage arrêté pour le logement. Cette validation en amont évite les modifications après pose des gaines, nettement plus coûteuses.
                </p>
                <p>
                  La mise en sécurité complète inclut aussi la mise à la terre effective de l'installation et le remplacement des liaisons vétustes identifiées lors du diagnostic électrique préalable.
                </p>
              </MqProse>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <MqFig
              src="/photos/maquette/schema-electricite-nfc15100.jpg"
              alt="Schéma d'un tableau électrique de logement rénové avec circuits, différentiel 30 mA et liaison équipotentielle"
              caption="Organisation des circuits d'un logement rénové : protection différentielle 30 mA, sections adaptées et liaison équipotentielle en salle d'eau."
            />
            <MqFig
              src="/photos/maquette/suite-parentale-dressing.jpg"
              alt="Suite parentale contemporaine avec tête de lit en lin, boiseries chêne clair et dressing intégré"
              caption="Référence de style : suite parentale avec dressing intégré, menuiseries sur mesure et éclairage indirect en corniche."
            />
          </div>
        </div>
      </MqSection>

      <MqSection title="Plomberie : pentes, diamètres et alimentation">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/chantier-plomberie-encastree.jpg"
            alt="Réseaux de plomberie encastrés en tubes multicouche rouges et bleus avec collecteur dans une salle de bain en travaux"
            caption="Réseaux encastrés : alimentation en multicouche depuis un collecteur, repérage chaud/froid et essai de mise en pression avant fermeture."
          />
          <MqFig
            src="/photos/maquette/chantier-tableau-electrique-neuf.jpg"
            alt="Tableau électrique neuf ouvert avec rangées de disjoncteurs, interrupteurs différentiels 30 mA et circuits étiquetés"
            caption="Tableau refait selon la norme NF C 15-100 : différentiels 30 mA, circuits dédiés et étiquetage complet remis au client."
          />
        </div>
        <div className="mt-12 flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Évacuations : la pente avant tout</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Une évacuation sans pente suffisante s'engorge tôt ou tard, quelle que soit la qualité du reste de l'installation.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Les canalisations d'évacuation doivent respecter une pente régulière vers le collecteur principal, pour permettre un écoulement gravitaire correct des eaux usées. Cette pente se vérifie au moment de la pose, avant que la canalisation ne soit encastrée dans une chape ou un doublage.
                </p>
                <p>
                  Un mauvais respect de cette pente, souvent invisible une fois l'ouvrage recouvert, se traduit plus tard par des engorgements récurrents dont l'origine devient difficile à localiser sans ouverture.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Diamètres, alimentation et encastrements</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Le diamètre d'une canalisation dépend de l'usage desservi et du nombre d'appareils raccordés sur le même réseau.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  L'alimentation en eau et les diamètres retenus pour chaque tronçon dépendent des appareils desservis et de leur nombre sur une même colonne. Un sous-dimensionnement se traduit par une perte de pression ou de débit ressentie au quotidien, en particulier lorsque plusieurs points d'eau fonctionnent simultanément.
                </p>
                <p>
                  Les encastrements de plomberie dans les cloisons ou dans le sol sont systématiquement vérifiés et testés avant fermeture, ce moment étant le dernier où une correction reste simple à réaliser.
                </p>
              </MqProse>
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        title="Chauffage, cloisons et doublages"
        lead="Le chauffage et la structure secondaire du logement, cloisons et doublages, se pensent ensemble dès la conception des plans techniques."
      >
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Chauffage : cohérence avec l'isolation et les émetteurs</h3>
            <div className="mt-4">
              <MqProse>
                <p>
                  Le choix et le dimensionnement des émetteurs de chauffage dépendent directement du niveau d'isolation du logement une fois les travaux terminés, et non de l'état initial du bien. Un radiateur dimensionné avant l'isolation risque d'être surdimensionné, ou inversement insuffisant si l'isolation prévue n'est finalement pas réalisée.
                </p>
              </MqProse>
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Cloisons et doublages : charges, acoustique et locaux humides</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Une cloison n'est pas neutre : elle doit supporter les charges suspendues prévues, limiter les transmissions sonores et résister à l'humidité si nécessaire.
            </p>
            <div className="mt-4">
              <MqProse>
                <p>
                  Une cloison destinée à recevoir un meuble suspendu ou un équipement lourd nécessite une ossature renforcée à cet endroit précis, décidée avant la pose des plaques, pas après. La performance acoustique d'une cloison entre deux pièces dépend de son épaisseur, de la nature de l'isolant intégré et de la qualité de sa mise en œuvre en périphérie.
                </p>
                <p>
                  Dans les locaux humides, un doublage hydrofuge est retenu à la place d'une plaque standard, pour limiter le risque de dégradation en cas d'exposition prolongée à l'humidité ambiante.
                </p>
              </MqProse>
            </div>
          </div>
          <MqFig
            src="/photos/maquette/schema-doublage-isolant.jpg"
            alt="Coupe verticale d'un doublage isolant sur mur ancien : rails, montants, laine minérale, pare-vapeur et plaque de plâtre"
            caption="Doublage isolant sur mur ancien : ossature métallique à entraxe 600 mm, laine minérale, pare-vapeur continu et plaque de plâtre."
          />
        </div>
      </MqSection>

      <MqSection
        title="Salles d'eau : l'étanchéité sous carrelage, un point sans marge d'erreur"
        lead="Une étanchéité défaillante sous carrelage ne se manifeste souvent qu'après plusieurs mois, une fois le désordre déjà installé dans le bâti."
      >
        <MqProse>
          <p>
            Sous le futur carrelage d'une douche ou d'une salle de bain, une étanchéité liquide ou une membrane spécifique est appliquée sur l'ensemble de la surface exposée à l'eau, avec un relevé en plinthe sur une hauteur suffisante. Les traversées de plomberie, les angles du receveur et les jonctions avec les parois sont les points les plus exposés à un défaut d'exécution.
          </p>
          <p>
            Les pentes du sol vers l'évacuation, le positionnement précis du receveur ou du siphon de sol, et le traitement soigné de chaque traversée conditionnent l'étanchéité réelle de l'ensemble. Un contrôle avant pose du carrelage, éventuellement complété par une mise en eau de vérification, permet de détecter un défaut avant qu'il ne soit définitivement recouvert.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-etancheite-salle-eau.jpg"
            alt="Coupe d'une salle d'eau montrant la natte d'étanchéité sous carrelage, la bande d'angle, la pente et le siphon"
            caption="Étanchéité sous carrelage : continuité de la natte entre murs et sol, bandes de renfort en angle et pente d'évacuation de 1 à 2 %."
          />
        </div>
      </MqSection>

      <MqSection
        title="Cuisine, revêtements de sol et menuiseries intérieures"
        lead="Ces lots interviennent en fin de séquence, mais leurs cotes et implantations doivent être arrêtées bien plus tôt dans le projet."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
          {[
            {
              title: "Cuisine : une implantation validée avant l'électricité",
              text: "L'implantation définitive de la cuisine, y compris la position des appareils électroménagers et du point d'eau, doit être arrêtée avant le passage des réseaux électriques et de plomberie correspondants, faute de quoi une modification ultérieure impose une reprise de ces réseaux déjà encastrés.",
            },
            {
              title: "Menuiseries intérieures : cotes prises après cloisons finies",
              text: "Les portes intérieures et leurs huisseries sont commandées à partir de cotes relevées une fois les cloisons et doublages terminés, jamais sur des cotes théoriques de plan, pour éviter tout écart de dimension à la pose.",
            },
            {
              title: "Revêtements de sol : après réseaux et chape, avant peinture finale",
              text: "Les revêtements de sol sont posés une fois les réseaux encastrés validés et la chape suffisamment sèche, en particulier en présence d'un chauffage au sol nécessitant une mise en chauffe progressive avant la pose du revêtement définitif.",
            },
          ].map((f) => (
            <div key={f.title} className="flex flex-col gap-2 border-t border-line pt-4">
              <h3 className="display text-[1.1rem] text-ivoire">{f.title}</h3>
              <p className="text-muted text-[0.92rem] leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </MqSection>

      <MqSection title="Peinture et finitions : la dernière étape, pas la première décision">
        <MqProse>
          <p>
            La peinture et les finitions interviennent en toute fin de chantier, mais les choix de teintes, de finitions et de matériaux associés sont arbitrés bien plus tôt, en cohérence avec l'implantation des équipements et des menuiseries déjà posées. Une peinture réalisée trop tôt, avant la fin des lots poussiéreux comme le ponçage de cloisons, doit souvent être reprise.
          </p>
        </MqProse>
      </MqSection>

      <MqSection
        title="Ordre d'intervention des lots et interfaces critiques"
        lead="L'ordre des lots suit une logique simple : ce qui sera recouvert intervient avant ce qui recouvre, et chaque interface fait l'objet d'un point de contrôle dédié."
      >
        <MqNumbered
          cols={2}
          items={[
            { title: "Passage des réseaux en attente", text: "Électricité et plomberie posées dans les cloisons ouvertes, avant toute fermeture." },
            { title: "Chauffage et raccordements", text: "Émetteurs et réseaux de chauffage mis en place en cohérence avec l'isolation prévue." },
            { title: "Contrôle avant fermeture des cloisons", text: "Vérification visuelle et, si besoin, mise sous pression des réseaux avant que les plaques ne soient posées." },
            { title: "Fermeture des cloisons et doublages", text: "Pose des plaques et enduits une fois les réseaux validés et non modifiables sans réouverture." },
            { title: "Menuiseries intérieures", text: "Portes posées sur cotes relevées après finition des cloisons." },
            { title: "Étanchéité et faïence des salles d'eau", text: "Étanchéité sous carrelage appliquée et contrôlée avant pose du carrelage définitif." },
            { title: "Revêtements de sol", text: "Pose une fois les réseaux, la chape et les cloisons stabilisés." },
            { title: "Peinture et finitions", text: "Dernière étape, après tous les travaux poussiéreux ou salissants des autres lots." },
          ]}
        />
      </MqSection>

      <MqSection
        title="Tableau récapitulatif des interfaces à risque"
        lead="Ces interfaces concentrent la majorité des désordres constatés lorsque les lots ne sont pas pensés ensemble dès la phase de plan."
      >
        <div className="overflow-x-auto border border-line rounded-[2px]">
          <table className="w-full min-w-[560px] border-collapse bg-surface text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="px-5 py-3 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-muted">Interface entre lots</th>
                <th className="px-5 py-3 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-muted">Risque principal</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Électricité / Cloisons", "Prise ou point lumineux positionné après fermeture, obligeant à rouvrir la cloison."],
                ["Plomberie / Étanchéité salle d'eau", "Traversée non traitée sous carrelage, source d'infiltration différée invisible au départ."],
                ["Plomberie / Chauffage", "Diamètre ou pente insuffisante découverts après encastrement dans une chape."],
                ["Cloisons / Menuiseries intérieures", "Cote de doublage modifiée après commande des portes, écart de dimension à la pose."],
                ["Électricité / Cuisine", "Implantation des prises incompatible avec le plan d'implantation définitif des meubles et électroménagers."],
                ["Revêtements de sol / Chauffage au sol", "Revêtement posé avant la mise en chauffe progressive requise par une chape avec plancher chauffant."],
              ].map(([lots, risque]) => (
                <tr key={lots} className="border-b border-line last:border-b-0 align-top">
                  <td className="px-5 py-3 text-[0.92rem] font-medium text-ivoire">{lots}</td>
                  <td className="px-5 py-3 text-[0.92rem] leading-relaxed text-muted">{risque}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MqSection>

      <MqSection
        title="Points de contrôle avant fermeture des cloisons"
        lead="Une fois la cloison fermée, corriger un réseau devient nettement plus coûteux : ces vérifications se font toujours avant, jamais après."
      >
        <MqChecklist
          items={[
            "Position des prises, interrupteurs et points lumineux conforme au plan validé",
            "Pente des évacuations vérifiée sur toute la longueur du tronçon encastré",
            "Mise sous pression ou test d'étanchéité des réseaux de plomberie avant fermeture",
            "Diamètres et raccordements de chauffage conformes au dimensionnement prévu",
            "Renforts d'ossature en place pour tout équipement suspendu prévu au plan",
            "Photo datée de chaque réseau encastré avant pose des plaques de cloison",
          ]}
        />
      </MqSection>

      <MqSection
        kicker="Pédagogie visuelle"
        title="Second œuvre : traiter la cause avant la finition"
        lead="Un tableau vétuste ou une ventilation absente ne se règlent pas avec de la peinture. Ces comparatifs montrent la remise aux normes électrique et l'assainissement d'une pièce d'eau, du diagnostic à la livraison."
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Électricité : du tableau vétuste à l'installation conforme</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              Différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité remise au client à la réception.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <MqFig
                src="/photos/maquette/tableau-electrique-vetuste-avant.jpg"
                alt="Ancien tableau électrique vétuste à porte-fusibles porcelaine et câblage tissu dégradé"
                caption="Avant : Tableau électrique vétuste : porte-fusibles anciens, absence de différentiel 30 mA et circuits non repérés, non conforme à la norme NF C 15-100."
              />
              <MqFig
                src="/photos/maquette/tableau-electrique-neuf-apres.jpg"
                alt="Tableau électrique neuf aux normes avec rangées de disjoncteurs, interrupteurs différentiels et câblage en peignes"
                caption="Après : Tableau remis aux normes : différentiels 30 mA, circuits séparés et repérés, câblage en peignes et attestation de conformité fournie à la réception."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Salle d'eau : de la condensation chronique à la ventilation maîtrisée</h3>
            <p className="mt-2 text-muted text-[0.95rem] leading-relaxed max-w-2xl">
              La cause est traitée avant la finition : extraction VMC dimensionnée, étanchéité sous carrelage, puis pose du travertin et de la robinetterie.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              <MqFig
                src="/photos/maquette/salle-eau-condensation-avant.jpg"
                alt="Salle d'eau dégradée par la condensation, moisissures en plafond et bouche de ventilation obstruée"
                caption="Avant : Pathologie classique : ventilation absente ou obstruée, condensation permanente et moisissures. Le traitement commence par le renouvellement d'air, pas par la peinture."
              />
              <MqFig
                src="/photos/maquette/salle-eau-vmc-apres.jpg"
                alt="Salle d'eau rénovée en travertin clair avec douche à l'italienne, robinetterie laiton et bouche d'extraction VMC discrète"
                caption="Après : Salle d'eau assainie et livrée : extraction VMC dimensionnée, étanchéité sous carrelage, travertin clair et robinetterie laiton brossé."
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection>
        <MqFaq
          items={[
            {
              q: "Dans quel ordre les lots du second œuvre doivent-ils intervenir ?",
              a: "L'ordre suit généralement : électricité et plomberie en attente dans les cloisons ouvertes, puis chauffage, puis fermeture des cloisons et doublages, puis menuiseries intérieures, puis étanchéité des salles d'eau, puis revêtements de sol, et enfin peinture et finitions. Intervertir cet ordre, par exemple peindre avant la pose définitive de la plomberie, entraîne presque toujours des reprises.",
            },
            {
              q: "Pourquoi vérifier les réseaux avant de fermer les cloisons ?",
              a: "Une fois une cloison fermée ou un doublage posé, les réseaux électriques et de plomberie qu'elle contient deviennent invisibles. Une erreur de position, une pente insuffisante ou une fuite non détectée à ce stade devient beaucoup plus coûteuse à corriger après la pose du carrelage ou de la peinture, d'où l'importance d'un point de contrôle avant fermeture.",
            },
            {
              q: "Quelles sont les interfaces les plus à risque entre lots ?",
              a: "La jonction entre plomberie et étanchéité de la salle d'eau, le pilotage entre électricité et implantation de la cuisine, et l'interface entre cloisons et menuiseries intérieures reviennent le plus souvent. Ces zones concentrent la majorité des désordres constatés lorsque les lots ne sont pas pensés ensemble dès la phase de plan.",
            },
            {
              q: "Comment l'étanchéité sous carrelage d'une salle d'eau est-elle vérifiée ?",
              a: "Une étanchéité liquide ou une membrane est appliquée sous le futur carrelage, avec un relevé en plinthe et un traitement soigné des traversées de plomberie et des angles de receveur. Un contrôle visuel avant carrelage, complété si nécessaire par une mise en eau, permet de vérifier l'absence de défaut avant que l'ouvrage ne soit recouvert.",
            },
            {
              q: "Le tableau électrique doit-il toujours être remplacé en rénovation ?",
              a: "Pas systématiquement, mais un tableau ancien, sans protection différentielle adaptée ou avec des circuits non identifiés, est presque toujours remplacé pour permettre une mise en sécurité complète de l'installation. Un plan d'implantation clair des circuits est établi avant tout chiffrage du lot électrique.",
            },
            {
              q: "Qui exécute les lots du second œuvre ?",
              a: "Chaque lot est exécuté et facturé par l'entreprise partenaire contractante spécialisée correspondante : électricien, plombier, chauffagiste, plaquiste, menuisier, carreleur, peintre. Le pilotage organise leur enchaînement, vérifie les interfaces critiques et maintient la cohérence d'ensemble entre les lots.",
            },
            {
              q: "Comment le suivi des lots du second œuvre est-il documenté ?",
              a: "Chaque étape sensible, en particulier celles destinées à être recouvertes comme les réseaux dans les cloisons ou l'étanchéité sous carrelage, fait l'objet de photos datées transmises sur WhatsApp avant fermeture. Ce suivi quotidien permet de conserver une preuve de l'ouvrage réalisé, même une fois les finitions posées.",
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
          { href: "/gros-oeuvre-structure", label: "Gros œuvre & structure", sub: "Mur porteur, plancher, trémie" },
          { href: "/renovation-energetique", label: "Rénovation énergétique", sub: "Passoire énergétique, VMC, isolation" },
          { href: "/clinique-du-devis", label: "Clinique du devis", sub: "Analyse ligne à ligne de vos devis" },
          { href: "/notre-methode", label: "Notre méthode", sub: "Les 8 étapes du pilotage" },
          { href: "/contact", label: "Contact", sub: "Décrire votre projet en détail" },
        ]}
      />
    </>
  );
}
