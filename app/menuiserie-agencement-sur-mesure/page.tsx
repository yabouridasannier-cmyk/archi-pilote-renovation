import type { Metadata } from "next";
import { MqHero, MqSection, MqProse, MqFig, MqChecklist, MqNumbered, MqFaq, MqCta, MqReadNext } from "../components/mq";

export const metadata: Metadata = {
  alternates: { canonical: "/menuiserie-agencement-sur-mesure" },
  title: "Dressing, cuisine et façades sur mesure : menuiserie d'agencement | ARCHI PILOTE RÉNOVATION",
  description:
    "Dressings en chêne, cuisines sur mesure, façades sur mesure sur caissons standards, bibliothèques et rangements intégrés : méthode, schémas techniques, prix constatés et réalisations en Île-de-France.",
};

export default function Page() {
  return (
    <main className="relative z-10 bg-carbone">
      <MqHero
        kicker="MENUISERIE ET AGENCEMENT"
        title="Dressings, cuisines et façades sur mesure : le rendu d'ébéniste, au juste prix"
        lead="Dans un logement ancien, aucun volume n'est droit : le mobilier standard laisse des jours, des rives disgracieuses et de la surface perdue. ARCHI PILOTE RÉNOVATION dessine l'agencement sur le relevé réel, arbitre entre sur-mesure intégral et façades sur mesure posées sur caissons standards, puis fait fabriquer et poser par des entreprises partenaires contractantes, sous notre pilotage et notre accompagnement de A à Z."
      />

      <MqSection
        kicker="NOTRE ARBITRAGE"
        title="Ce qui se voit est sur mesure, ce qui ne se voit pas reste standard"
        lead="Le caisson est invisible une fois posé : c'est la façade, la plinthe et le retour d'habillage qui font le rendu."
      >
        <MqProse>
          <p>
            Un ensemble intégralement sur mesure coûte cher parce que chaque caisson est fabriqué à l'unité. Or
            le caisson disparaît derrière la façade et n'intervient ni dans l'esthétique, ni dans la perception
            de la qualité.
          </p>
          <p>
            Nous conservons donc des caissons standards de bonne facture, aux dimensions normalisées, et faisons
            fabriquer sur mesure ce qui est vu et touché : façades en chêne massif ou en laqué, plinthes, joues
            d'habillage, corniches, retours contre murs biais et plans de travail.
          </p>
          <p>
            L'écart de budget constaté sur un projet équivalent va de 30 à 50 % sur le poste mobilier, sans écart
            visible sur le résultat livré.
          </p>
        </MqProse>
        <div className="mt-8">
          <MqFig
            src="/photos/maquette/schema-facade-sur-mesure-caisson.jpg"
            alt="Vue éclatée d'un caisson standard équipé d'une façade sur mesure en chêne, charnière réglable, plinthe ajustée et jeu de 3 mm"
            caption="Caisson standard, façade sur mesure : le caisson industriel reste, la façade en chêne, la plinthe et les jeux de 3 mm sont fabriqués et réglés sur mesure."
          />
        </div>
      </MqSection>

      <MqSection
        kicker="MÉTHODE"
        title="Les six étapes d'un agencement sur mesure"
        lead="Chaque étape est documentée et photographiée dans le suivi quotidien transmis au client."
      >
        <MqNumbered
          items={[
            {
              title: "Relevé du volume existant",
              text: "Mesures au télémètre, relevé des faux aplombs, des retours de cheminée, des coffres et des passages de gaines. En logement ancien, aucun mur n'est droit : le sur-mesure part du réel, pas du plan théorique.",
            },
            {
              title: "Dessin de l'agencement",
              text: "Plans et élévations cotés, hauteurs de tablettes, sens d'ouverture, réservations pour l'électroménager et l'éclairage intégré, validés avec le client avant toute commande.",
            },
            {
              title: "Arbitrage caisson standard ou tout sur mesure",
              text: "Nous comparons systématiquement les deux solutions chiffrées. Dans la majorité des cas, un caisson standard de bonne facture équipé d'une façade sur mesure donne un rendu identique pour un budget nettement inférieur.",
            },
            {
              title: "Fabrication en atelier",
              text: "Façades, plinthes, joues d'habillage, corniches et retours réalisés en atelier par l'entreprise partenaire, en chêne massif, en placage ou en laqué, avec finition huilée ou vernie.",
            },
            {
              title: "Pose, calage et réglage",
              text: "Fixation sur ossature ou sur mur, calage des faux aplombs, réglage des charnières, jeux réguliers de 3 mm entre façades et habillage des rives contre les murs biais.",
            },
            {
              title: "Réception et nettoyage complet",
              text: "Contrôle des ouvertures, des alignements et des finitions, puis nettoyage professionnel de fin de chantier avant remise des clés.",
            },
          ]}
        />
      </MqSection>

      <MqSection
        kicker="NOS DOMAINES"
        title="Quatre familles d'agencement régulièrement réalisées"
        lead="Toutes s'appuient sur le même principe : relevé du réel, dessin coté, fabrication en atelier, pose et réglage."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Dressings et suites parentales</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Dressings toute hauteur en chêne huilé, îlots à tiroirs, façades cannelées, éclairage intégré et
              penderies dimensionnées sur les usages réels du foyer.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Cuisines et façades sur mesure</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Caissons standards optimisés, façades en chêne massif, en placage ou en laqué, plinthes ajustées,
              joues d'habillage et plans en pierre naturelle ou en stratifié compact.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Bibliothèques et rangements de couloir</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Rangements intégrés du sol au plafond dans les circulations et les retours de cheminée : de la
              surface récupérée sans réduire visuellement le volume.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Menuiseries patrimoniales</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Portes à panneaux, chambranles profilés, plinthes hautes, fenêtres reproduites à l'identique avec
              crémones en laiton et moulures en plâtre traditionnel de la maison Guimier.
            </p>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="GALERIE"
        title="Réalisations d'agencement livrées"
        lead="Photographies de chantiers réellement pilotés, prises après réception et nettoyage complet."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/maquette/dressing-sur-mesure-chene.jpg"
            alt="Dressing sur mesure en chêne huilé avec façades cannelées, îlot de rangement, poignées laiton et éclairage intégré"
            caption="Dressing sur mesure en chêne huilé : façades cannelées, îlot à tiroirs, éclairage intégré et rangements dessinés au centimètre sur le volume existant."
          />
          <MqFig
            src="/photos/maquette/cuisine-caissons-facades-sur-mesure.jpg"
            alt="Cuisine parisienne associant caissons standards et façades sur mesure en chêne, plan de travail en pierre naturelle sous moulures d'origine"
            caption="Caissons standards optimisés et façades sur mesure en chêne : la qualité visuelle du sur-mesure pour un budget contenu, sous moulures d'origine conservées."
          />
          <MqFig
            src="/photos/maquette/tendance-cuisine-facades-sur-mesure-chene.jpg"
            alt="Cuisine sur mesure avec façades cannelées en chêne massif, plan de travail en pierre naturelle veinée, crédence zellige vert d'eau et robinetterie laiton"
            caption="Façades cannelées en chêne massif, plan en pierre naturelle et crédence zellige : ensemble sur mesure acheté en direct par le client, posé par l'entreprise partenaire."
          />
          <MqFig
            src="/photos/maquette/suite-parentale-dressing.jpg"
            alt="Suite parentale contemporaine avec tête de lit en lin, boiseries chêne clair et dressing intégré"
            caption="Référence de style : suite parentale avec dressing intégré, menuiseries sur mesure et éclairage indirect en corniche."
          />
          <MqFig
            src="/photos/maquette/detail-menuiserie-moulure.jpg"
            alt="Détail de menuiserie en chêne : porte à panneaux moulurés, chambranle profilé et poignée en laiton patiné"
            caption="Détail de menuiserie : profils de moulure relevés sur l'existant, chambranle reconstitué et quincaillerie laiton patiné posée à l'ancienne."
          />
        </div>
      </MqSection>

      <MqSection kicker="AVANT / APRÈS" title="Faites glisser le curseur : du caisson brut à l'ensemble livré" wide>
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Surélévation : un étage gagné sans démolir</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Diagnostic de portance par l'ingénieur structure, dépose de la toiture, ossature bois préfabriquée
              et mise hors d'eau rapide pour limiter l'exposition du bâti.
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
          <div>
            <h3 className="display text-[1.3rem] text-ivoire">Trémie d'escalier : du chevêtre brut à l'escalier livré</h3>
            <p className="text-muted text-[0.95rem] leading-relaxed mt-2 max-w-2xl">
              Étaiement, découpe des solives, chevêtre et linçoirs sur sabots métalliques : l'escalier n'est posé
              qu'après validation de la note de calcul.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
              <MqFig
                src="/photos/maquette/tremie-chevetre-chantier.jpg"
                alt="Création de trémie : étaiement, découpe des solives, chevêtre et linçoirs sur sabots métalliques"
                caption="Avant : Création de trémie : étaiement, découpe des solives, chevêtre et linçoirs sur sabots métalliques, conformément à la note de calcul de l'ingénieur structure."
              />
              <MqFig
                src="/photos/maquette/escalier-duplex-tremie.jpg"
                alt="Escalier intérieur en chêne et acier noir desservant un duplex, trémie ouverte et garde-corps métallique"
                caption="Après : Référence de style : escalier chêne et acier posé après création de trémie et reprise du plancher par chevêtre."
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="MODÈLE ÉCONOMIQUE"
        title="Achat en direct, logistique intégrée et livraison nettoyée"
        lead="Le mobilier, la quincaillerie et l'électroménager ne relèvent pas de la garantie décennale de pose : le client les achète au prix fournisseur."
      >
        <MqChecklist
          items={[
            "Références validées techniquement par notre équipe avant toute commande du client.",
            "Retrait des commandes par notre flotte de camions et livraison sur le chantier au moment utile.",
            "Aucune marge prise sur la fourniture : le client conserve l'intégralité de l'écart de prix.",
            "Objectif d'économie pouvant atteindre 20 % sur les postes concernés, sans garantie universelle.",
            "Nettoyage professionnel de fin de chantier systématique, hérité de nos standards de conciergerie.",
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
          <MqFig
            src="/photos/maquette/nettoyage-fin-de-chantier.jpg"
            alt="Équipe de nettoyage professionnelle en fin de chantier dans un appartement haussmannien rénové au parquet point de Hongrie"
            caption="Nettoyage de fin de chantier systématique, hérité de nos standards de conciergerie : le logement est remis prêt à vivre, pas seulement prêt à réceptionner."
          />
          <MqFig
            src="/photos/maquette/flotte-camions-retrait-materiaux.jpg"
            alt="Camions et fourgons utilitaires chargeant des palettes de carrelage et des colis de cuisine dans un dépôt de matériaux"
            caption="Logistique intégrée : notre flotte de camions retire les commandes achetées en direct par le client et les livre sur le chantier au bon moment."
          />
          <MqFig
            src="/photos/maquette/approvisionnement-materiaux-plateforme.jpg"
            alt="Entrepôt de matériaux de construction avec palettes de plaques de plâtre, laine minérale et sacs d'enduit"
            caption="Approvisionnement en direct : plaques, isolants et enduits du groupe Saint-Gobain retirés à La Plateforme du Bâtiment, facturés au client sans marge."
          />
        </div>
        <p className="text-muted text-[0.85rem] leading-relaxed mt-8 max-w-2xl">
          Rôle et responsabilités. ARCHI PILOTE RÉNOVATION structure et pilote les projets de rénovation. Selon
          les besoins, le projet mobilise des entreprises partenaires contractantes et, lorsque nécessaire, des
          architectes ou ingénieurs partenaires indépendants. Les travaux sont exécutés et facturés par les
          entreprises concernées.
        </p>
      </MqSection>

      <MqSection kicker="QUESTIONS FRÉQUENTES" title="Dressing, cuisine et façades : les questions posées">
        <MqFaq
          items={[
            {
              q: "Faut-il une cuisine entièrement sur mesure pour un beau rendu ?",
              a: "Non. Le rendu visible tient aux façades, aux plinthes, aux joues d'habillage et au plan de travail, pas au caisson qui reste invisible. Associer des caissons standards de bonne qualité à des façades sur mesure permet d'obtenir un résultat d'ébéniste tout en réduisant fortement le coût, souvent de 30 à 50 % par rapport à un ensemble intégralement sur mesure.",
            },
            {
              q: "Peut-on habiller des meubles de grande distribution avec des façades sur mesure ?",
              a: "Oui, et c'est une solution que nous utilisons régulièrement. Les caissons de grande distribution ont des dimensions standardisées et des quincailleries fiables ; nous faisons fabriquer les façades, les plinthes et les habillages latéraux sur mesure, en chêne ou en laqué, puis nous les faisons poser et régler par l'entreprise partenaire.",
            },
            {
              q: "Combien coûte un dressing sur mesure en Île-de-France ?",
              a: "Fourchettes constatées : 900 à 1 800 euros le mètre linéaire pour un dressing sur mesure en chêne, façades et aménagement intérieur compris ; 500 à 1 100 euros le mètre linéaire en solution mixte caissons standards et façades sur mesure. Ces montants dépendent de la hauteur, du taux de tiroirs et de la finition retenue.",
            },
            {
              q: "Qui achète les meubles et les façades ?",
              a: "Le client achète en direct la fourniture qui ne relève pas de la garantie décennale de pose : caissons, façades, quincaillerie, plans de travail, électroménager. Nous validons techniquement les références, notre flotte de camions retire les commandes et les livre sur le chantier au moment utile.",
            },
            {
              q: "Le chantier est-il nettoyé à la fin ?",
              a: "Oui, systématiquement. Nous faisons intervenir une équipe de nettoyage professionnelle en fin de chantier, un standard hérité de notre expérience avec des conciergeries de location courte durée. Le logement est remis prêt à vivre, pas seulement prêt à réceptionner.",
            },
          ]}
        />
      </MqSection>

      <MqReadNext
        items={[
          { href: "/expertise-carrelage-zellige-travertin", label: "Expertise carrelage et pierre", sub: "Zellige, travertin, joint époxy" },
          { href: "/savoir-faire-ancien", label: "Charme de l'ancien", sub: "Fenêtres, moulures, crémones" },
          { href: "/modele-economique-transparence", label: "Modèle économique", sub: "Transparence et optimisation des coûts" },
          { href: "/estimateur-travaux", label: "Estimateur de travaux", sub: "Fourchette de budget immédiate" },
        ]}
      />

      <MqCta
        title="Un dressing, une cuisine ou une bibliothèque à dessiner ?"
        lead="Étude de projet gratuite sous 48 heures : relevé du volume, arbitrage sur-mesure ou façades sur caissons, et budget comparé."
      />
    </main>
  );
}
