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
        <div className="mt-10">
          <p className="text-muted text-[0.85rem] leading-relaxed max-w-2xl mb-5">
            Cinq photos d'un même chantier de dressing sur mesure, de la matière première à la livraison.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <MqFig
              src="/photos/chantiers/chPlacagesNoyerEnAttente.jpeg"
              alt="Panneaux de placage noyer livrés et appuyés contre le mur d'une pièce sous corniche moulurée, sol protégé, avant montage"
              caption="Matière : panneaux de placage noyer livrés sur le chantier, avant montage. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
            <MqFig
              src="/photos/chantiers/chDressingNoyerCarcassesVides.jpeg"
              alt="Carcasses de dressing en placage noyer montées sur vérins, étagères en place, avant pose des façades"
              caption="Fabrication : carcasses en placage noyer montées sur vérins de réglage, avant pose des façades. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
            <MqFig
              src="/photos/chantiers/chDressingNoyerCarcasseTringle.jpeg"
              alt="Carcasse de dressing en placage noyer équipée de tringles de penderie, d'étagères et de blocs-tiroirs, en cours de montage"
              caption="Assemblage : tringles de penderie, étagères et blocs-tiroirs posés avant les façades. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
            <MqFig
              src="/photos/chantiers/chDetailTiroirCoulisses.jpeg"
              alt="Main d'un compagnon sortant un tiroir en MDF brut sur ses coulisses, à l'intérieur d'un caisson non encore habillé"
              caption="Détail : tiroir en MDF brut essayé sur ses coulisses pendant le montage du caisson. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
            <MqFig
              src="/photos/chantiers/chDressingNoyerMoulures2.jpeg"
              alt="Deux volumes de dressing en placage noyer montés jusqu'à la corniche moulurée d'une pièce ancienne, sol encore sous protection"
              caption="Pose terminée : les volumes en placage noyer montent jusqu'à la corniche moulurée conservée, sol encore sous protection. Chantier réel des équipes partenaires."
              ratio="aspect-[3/4]"
            />
          </div>
        </div>
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
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chEnsembleRangementRadiateurClaustra.jpeg"
                alt="Dressing toute hauteur à six vantaux avec poignées bâton en bois, prolongé par des rangements ouverts et un cache-radiateur à claire-voie, avant peinture de finition"
                caption="Dressing toute hauteur à six vantaux, poignées bâton en bois, prolongé par des rangements ouverts et un cache-radiateur à claire-voie ; ensemble monté, avant peinture de finition. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Cuisines et façades sur mesure</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Caissons standards optimisés, façades en chêne massif, en placage ou en laqué, plinthes ajustées,
              joues d'habillage et plans en pierre naturelle ou en stratifié compact.
            </p>
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chHdgCuisineOnyxParquetVersailles.jpeg"
                alt="Cuisine à façades en placage bois clair sans poignée apparente, colonnes toute hauteur montées sous la corniche et plan de travail en pierre naturelle rubanée"
                caption="Cuisine sur mesure : colonnes toute hauteur en placage bois clair ouvrant par gorge en creux, sans poignée apparente, retour de meuble arrondi et plan de travail taillé dans la même pierre rubanée que la crédence. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Bibliothèques et rangements de couloir</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Rangements intégrés du sol au plafond dans les circulations et les retours de cheminée : de la
              surface récupérée sans réduire visuellement le volume.
            </p>
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chBibliothequeChenePieceComplete.jpeg"
                alt="Pièce entièrement doublée de bibliothèques en chêne montant du sol au plafond, retournées dans l'angle et prolongées par un placard toute hauteur, en cours de finition"
                caption="Bibliothèque montée du sol au plafond sur deux murs, retournée dans l'angle et prolongée par un placard toute hauteur ; chantier photographié avant finition. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="display text-[1.15rem] text-ivoire">Menuiseries patrimoniales</h3>
            <p className="text-muted text-[0.92rem] leading-relaxed">
              Portes à panneaux, chambranles profilés, plinthes hautes, fenêtres reproduites à l'identique avec
              crémones en laiton et moulures en plâtre traditionnel de la maison Guimier.
            </p>
            <div className="mt-2">
              <MqFig
                src="/photos/chantiers/chHdgChambrePlacardMoulure.jpeg"
                alt="Placard toute hauteur à façades blanches moulurées dans le dessin des menuiseries anciennes, avec imposte au-dessus des vantaux et corniche redescendue en retour sur le caisson"
                caption="Menuiserie accordée à l'existant : placard toute hauteur à façades moulurées dans le dessin des menuiseries anciennes, imposte au-dessus des vantaux, corniche redescendue en retour sur le caisson et radiateur en fonte ancien conservé. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
        </div>
      </MqSection>

      <MqSection
        kicker="GALERIE"
        title="Réalisations d'agencement livrées"
        lead="Dix-neuf vues d'ouvrages d'agencement, regroupées par cuisine, dressing, bibliothèque, espace commercial, agencements d'appartement ancien et habillages bois."
        wide
      >
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="display text-[1.15rem] text-ivoire mb-5">Cuisines sur mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chCuisineBlancheFinieIlot.jpeg"
                alt="Cuisine blanche sur mesure avec îlot central livrée, chantier réel"
                caption="Cuisine blanche avec îlot central, façades sur mesure sur caissons optimisés. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chCuisineAnthraciteCarreauxCiment.jpeg"
                alt="Cuisine anthracite sur mesure en L, plan de travail et retour de crédence noirs, sol en carreaux à motif géométrique raccordé à un parquet chêne"
                caption="Cuisine anthracite livrée en L, plan de travail et retour de crédence noirs assortis, sol en carreaux à motif géométrique raccordé au parquet chêne. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chCuisineBleuCanardBrillante.jpeg"
                alt="Cuisine bleu canard laquée brillante sur mesure, chantier réel"
                caption="Cuisine bleu canard laquée brillante, façades sur mesure sur caissons standards. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire mb-5">Dressings sur mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chDressingLaqueBlancCouloirPlans.jpeg"
                alt="Dressing laqué blanc à quatre vantaux avec deux longues poignées bâton en bronze, plans d'exécution punaisés au mur, sol encore sous protection"
                caption="Dressing laqué blanc à quatre vantaux, longues poignées bâton en bronze ; plans d'exécution encore affichés au mur et sol sous protection. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chDressingSousPenteBlancTiroirs.jpeg"
                alt="Dressing sur mesure blanc avec tiroirs adapté à une chambre sous comble, chantier réel"
                caption="Dressing sous pente de toit, façades blanches et tiroirs dimensionnés sur le volume réel. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chDressingBufetNoyerPorteBleue.jpeg"
                alt="Dressing et enfilade en placage noyer livrés dans un appartement ancien, chantier réel"
                caption="Dressing et enfilade en placage noyer, moulures d'origine conservées en fond. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chDressingBeigeAngleLumineux.jpeg"
                alt="Angle de dressing sur mesure laqué taupe avec éclairage intégré en corniche, chantier réel"
                caption="Dressing d'angle laqué taupe, éclairage intégré en corniche et poignée creusée sans ferrure apparente. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire mb-5">Bibliothèques sur mesure</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chBibliotheque.jpeg"
                alt="Bibliothèque toute hauteur en menuiserie sur mesure contre un mur en pierre, chantier réel"
                caption="Bibliothèque toute hauteur, rangements dessinés pour épouser le mur en pierre existant. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chBibliothequeCouloirTrappe.jpeg"
                alt="Grande bibliothèque sur mesure sous trappe de visite technique, chantier réel"
                caption="Bibliothèque du sol au plafond, avec réservation d'une trappe de visite technique. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chBibliothequePanneauxMoulures.jpeg"
                alt="Bibliothèque sur mesure avec portes à panneaux moulurés et parties vitrées, chantier réel"
                caption="Bibliothèque à portes moulurées et parties vitrées, style traditionnel. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chEtagereCactusSurMesure.jpeg"
                alt="Étagère murale sur mesure taillée en forme de cactus, bois brut avant finition, chantier réel"
                caption="Découpe sur mesure : étagère murale en forme de cactus, illustrant la liberté de forme permise par la fabrication en atelier. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire mb-5">Espaces commerciaux</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chOptiqueComptoirCarcasseBrute.jpeg"
                alt="Carcasse du comptoir d'un local commercial d'optique, chantier réel"
                caption="Comptoir d'accueil d'un local commercial d'optique, carcasse en cours de fabrication. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chOptiqueComptoirAccueilFini.jpeg"
                alt="Comptoir d'accueil livré dans un local commercial d'optique, chantier réel"
                caption="Comptoir d'accueil livré, local commercial d'optique. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chOptiqueAccueilFinition.jpeg"
                alt="Finition de l'accueil d'un local commercial d'optique, chantier réel"
                caption="Finition de l'espace d'accueil, local commercial d'optique. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire mb-5">Agencements d'un appartement ancien parisien</h3>
            <p className="text-muted text-[0.85rem] leading-relaxed max-w-2xl mb-5">
              Trois ouvrages d'un appartement ancien parisien livré : rangements toute hauteur, niche menuisée et
              détails d'exécution, tous dessinés sur le relevé de volumes anciens jamais d'équerre.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <MqFig
                src="/photos/chantiers/chHdgSejourCuisineOnyxBanquette.jpeg"
                alt="Pièce de vie avec colonnes de rangement toute hauteur en placage bois clair et retour de comptoir arrondi sur piètement cannelé"
                caption="Pièce de vie : colonnes de rangement toute hauteur en placage bois clair alignées sous la corniche, retour de comptoir arrondi porté par un piètement à cannelures, plan taillé dans la même pierre que la crédence. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chHdgDetailNicheOnyxCheminee.jpeg"
                alt="Diptyque : niche de crédence encadrée de menuiserie cannelée au-dessus de tiroirs à façades cannelées, et tablette de cheminée en marbre sculpté"
                caption="Niche menuisée : à gauche, une niche de crédence encadrée de menuiserie cannelée, fond et tablette taillés dans la même pierre, posée sur des tiroirs à façades cannelées ; à droite, la cheminée en marbre sculpté conservée. Chantier réel des équipes partenaires."
              />
              <MqFig
                src="/photos/chantiers/chHdgDetailCeramiqueRobinetterie.jpeg"
                alt="Diptyque : étagères en bois massif clair encastrées sur un fond de menuiserie strié, et commandes de douche encastrées en bronze patiné"
                caption="Détail d'exécution : à gauche, étagères en bois massif clair encastrées sur un fond de menuiserie strié ; à droite, les commandes de douche en bronze patiné encastrées dans un parement à cannelures. Chantier réel des équipes partenaires."
              />
            </div>
          </div>
          <div>
            <h3 className="display text-[1.15rem] text-ivoire mb-5">Habillages bois et cache-radiateurs</h3>
            <p className="text-muted text-[0.85rem] leading-relaxed max-w-2xl mb-5">
              Deux vues d'un autre chantier : là où le radiateur et l'écran ne peuvent pas être déplacés, c'est
              l'habillage qui est fabriqué sur mesure autour d'eux.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
              <MqFig
                src="/photos/chantiers/chHdgChambreLattesCacheRadiateur.jpeg"
                alt="Cache-radiateur sur mesure en coffrage laqué fermé par une tôle perforée, surmonté d'une niche habillée de tasseaux de bois recevant un écran"
                caption="Cache-radiateur sur mesure : coffrage laqué fermé par une tôle perforée, surmonté d'une niche en tasseaux de bois qui reçoit l'écran ; la cloison voisine est habillée de textile tendu dans un encadrement cintré. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
              />
              <MqFig
                src="/photos/chantiers/chHdgChambreLattesBoisTv.jpeg"
                alt="Mur habillé de tasseaux de bois sur fond sombre du sol au plafond, sous un faux plafond incurvé à éclairage indirect et reprise de ventilation"
                caption="Même chantier : mur habillé de tasseaux de bois sur fond sombre du sol au plafond, faux plafond incurvé intégrant spots orientables, éclairage indirect et reprise de ventilation. Chantier réel des équipes partenaires."
                ratio="aspect-[3/4]"
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
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
