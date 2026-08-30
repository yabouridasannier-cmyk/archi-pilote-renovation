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
        lead="Photographies de chantiers réellement pilotés, en cours de fabrication, de pose ou après réception."
        wide
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <MqFig
            src="/photos/chantiers/chBibliotheque.jpeg"
            alt="Bibliothèque toute hauteur en menuiserie sur mesure contre un mur en pierre, chantier réel"
            caption="Bibliothèque toute hauteur livrée : rangements dessinés au centimètre pour épouser le mur en pierre existant. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chLitCabane.jpeg"
            alt="Lit cabane et rangements sur mesure en fabrication dans une chambre d'enfant, chantier réel"
            caption="Lit cabane et rangements d'une chambre d'enfant, en cours de fabrication sur mesure. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chMenuiserieClaustra.jpeg"
            alt="Mur de tasseaux en menuiserie sur mesure avec porte intégrée, en cours de pose, chantier réel"
            caption="Mur de tasseaux et porte intégrée, en cours de pose. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chDressingLaqueBlancCouloirPlans.jpeg"
            alt="Dressing laqué blanc toute hauteur livré dans un couloir, chantier réel"
            caption="Dressing laqué blanc toute hauteur, façades sans poignée apparente sur les grands vantaux. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chNicheBibliothequeCouloir.jpeg"
            alt="Niche bibliothèque sur mesure intégrée dans un couloir, chantier réel"
            caption="Niche bibliothèque intégrée en couloir : surface de circulation valorisée sans réduire le passage. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chBibliothequeCouloirTrappe.jpeg"
            alt="Grande bibliothèque sur mesure sous trappe de visite technique, chantier réel"
            caption="Bibliothèque sur mesure du sol au plafond, avec réservation d'une trappe de visite technique. Chantier réel des équipes partenaires."
          />
          <MqFig
            src="/photos/chantiers/chHabillageMdfSousPente.jpeg"
            alt="Habillage en MDF sous pente de toit près d'un escalier, chantier réel"
            caption="Habillage sur mesure d'une pente de toit près d'un escalier : panneaux MDF à peindre, calepinage aligné sur la rampe."
          />
          <MqFig
            src="/photos/chantiers/chDressingSousPenteBlancTiroirs.jpeg"
            alt="Dressing sur mesure blanc avec tiroirs adapté à une chambre sous comble, chantier réel"
            caption="Dressing sur mesure adapté à une chambre sous comble : façades blanches, tiroirs et penderie dimensionnés sur le volume réel."
          />
          <MqFig
            src="/photos/chantiers/chDressingMdfBrutNiche.jpeg"
            alt="Dressing en MDF brut avec niche technique, avant mise en peinture, chantier réel"
            caption="Dressing en MDF brut avant mise en peinture : niche technique réservée dans le calepinage des façades."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerCarcasseTringle.jpeg"
            alt="Carcasse de dressing en placage noyer avec tringle et étagères, en cours de montage, chantier réel"
            caption="Dressing en placage noyer, carcasse en cours de montage : tringle de penderie et étagères réglables avant pose des façades."
          />
          <MqFig
            src="/photos/chantiers/chDressingBufetNoyerPorteBleue.jpeg"
            alt="Dressing et enfilade en placage noyer livrés dans un appartement ancien, chantier réel"
            caption="Dressing et enfilade en placage noyer livrés dans un appartement ancien, moulures d'origine conservées en fond."
          />
          <MqFig
            src="/photos/chantiers/chDetailTiroirCoulisses.jpeg"
            alt="Détail d'un tiroir sur coulisses à l'intérieur d'un caisson de dressing, chantier réel"
            caption="Détail de réglage : tiroir sur coulisses vérifié à l'intérieur du caisson avant réception du dressing."
          />
          <MqFig
            src="/photos/chantiers/chDressingBrutKraftSpots.jpeg"
            alt="Dressing en finition brute kraft en cours de pose, chantier réel"
            caption="Dressing en cours de pose, finition brute avant mise en peinture ou placage définitif."
          />
          <MqFig
            src="/photos/chantiers/chRangementSousPenteCombles.jpeg"
            alt="Rangement sur mesure avec tiroirs adapté à une pente de comble, chantier réel"
            caption="Rangement sur mesure sous pente de comble : tiroirs et niches dimensionnés au centimètre pour exploiter un volume difficile."
          />
          <MqFig
            src="/photos/chantiers/chEtagereBureauNicheRadiateur.jpeg"
            alt="Étagère murale sur mesure avec niche de bureau et habillage de radiateur, en cours de pose, chantier réel"
            caption="Étagère murale et niche de bureau sur mesure, avec habillage du radiateur intégré à l'ensemble, en cours de finition."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerCarcassesVides.jpeg"
            alt="Carcasses de dressing en placage noyer, vides, avant pose des façades, chantier réel"
            caption="Carcasses de dressing en placage noyer avant pose des façades, dans un appartement ancien aux moulures conservées."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerMoulures2.jpeg"
            alt="Dressing et enfilade en placage noyer livrés sous corniche moulurée, chantier réel"
            caption="Dressing et enfilade en placage noyer livrés sous corniche moulurée d'origine, cartons de livraison encore présents."
          />
          <MqFig
            src="/photos/chantiers/chDressingBufetNoyerMoulures3.jpeg"
            alt="Dressing et enfilade en placage noyer livrés dans un appartement ancien, autre angle, chantier réel"
            caption="Dressing et enfilade en placage noyer livrés, vus sous un autre angle : moulures et corniches d'origine conservées."
          />
          <MqFig
            src="/photos/chantiers/chDressingBrutTiroirsRoulettes.jpeg"
            alt="Dressing en MDF brut avec façades à tiroirs horizontaux, sur roulettes de manutention, chantier réel"
            caption="Dressing en MDF brut, façades à tiroirs horizontaux, encore sur ses roulettes de manutention avant fixation définitive."
          />
          <MqFig
            src="/photos/chantiers/chDressingCarcasseChantEnBois.jpeg"
            alt="Carcasse de dressing avec chants en bois massif, étagères réglables vides, chantier réel"
            caption="Carcasse de dressing avec chants en bois massif et étagères réglables, avant pose des façades et de la penderie."
          />
          <MqFig
            src="/photos/chantiers/chPlacardKraftCouloirEtroit.jpeg"
            alt="Placard sur mesure en finition brute kraft dans un couloir étroit, chantier réel"
            caption="Placard sur mesure ajusté dans un couloir étroit, finition brute avant peinture ou placage définitif."
          />
          <MqFig
            src="/photos/chantiers/chBibliothequePanneauxMoulures.jpeg"
            alt="Bibliothèque sur mesure avec portes à panneaux moulurés et parties vitrées, en cours de finition, chantier réel"
            caption="Bibliothèque sur mesure à portes moulurées et parties vitrées, style traditionnel, en cours de finition."
          />
          <MqFig
            src="/photos/chantiers/chEncadrementBoisPorteMiroirAtelier.jpeg"
            alt="Encadrement bois sur mesure autour d'un passage entre deux pièces, chantier réel"
            caption="Encadrement bois sur mesure aux angles chanfreinés, dessiné pour marquer le passage entre deux pièces d'un appartement ancien."
          />
          <MqFig
            src="/photos/chantiers/chVerriereInterieurePentagonale.jpeg"
            alt="Verrière intérieure en bois sur mesure de forme pentagonale entre deux pièces, chantier réel"
            caption="Verrière intérieure en bois sur mesure, dessinée en pentagone pour épouser la forme du mur, entre deux pièces d'un appartement ancien."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerMouluresAngle1.jpeg"
            alt="Dressing et enfilade en placage noyer livrés sous corniche moulurée, autre angle, chantier réel"
            caption="Dressing et enfilade en placage noyer, autre angle du même appartement ancien aux moulures conservées."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerMouluresFenetre.jpeg"
            alt="Dressing en placage noyer livré près d'une fenêtre à moulures, chantier réel"
            caption="Dressing en placage noyer livré, lumière naturelle et moulures d'origine conservées en fond de pièce."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerBufetMoulures4.jpeg"
            alt="Enfilade en placage noyer livrée sous corniche moulurée, chantier réel"
            caption="Enfilade en placage noyer livrée, quatrième angle du même ensemble de menuiserie sur mesure."
          />
          <MqFig
            src="/photos/chantiers/chPlacagesNoyerEnAttente2.jpeg"
            alt="Panneaux de placage noyer en attente de pose, appuyés contre un mur ancien, chantier réel"
            caption="Panneaux de placage noyer en attente de pose, appuyés contre le mur d'un appartement ancien avant montage."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerOuvertOutils.jpeg"
            alt="Dressing en placage noyer ouvert, outils de pose au sol, chantier réel"
            caption="Dressing en placage noyer, portes ouvertes, outils de pose encore au sol avant réception."
          />
          <MqFig
            src="/photos/chantiers/chOptiqueComptoirCarcasseBrute2.jpeg"
            alt="Carcasse du comptoir d'un local commercial d'optique, autre angle, chantier réel"
            caption="Carcasse du comptoir d'accueil d'un local commercial d'optique, vue depuis un autre angle avant habillage."
          />
          <MqFig
            src="/photos/chantiers/chOptiqueComptoirAccueilFini2.jpeg"
            alt="Comptoir d'accueil livré dans un local commercial d'optique, autre angle, chantier réel"
            caption="Comptoir d'accueil livré, même local commercial, panneau d'acuité visuelle et climatisation en fond de pièce."
          />
          <MqFig
            src="/photos/chantiers/chMenuiserieInstallationPanneauMural.jpeg"
            alt="Installation d'un panneau mural sur mesure en cours, outils au sol, chantier réel"
            caption="Installation d'un panneau mural en menuiserie sur mesure, outils encore au sol avant réception."
          />
          <MqFig
            src="/photos/chantiers/chEtagereBoisAssemblageAtelier.jpeg"
            alt="Étagère en bois assemblée en atelier avant livraison, chantier réel"
            caption="Étagère sur mesure assemblée en atelier avant livraison sur le chantier."
          />
          <MqFig
            src="/photos/chantiers/chCouloirPorteAccordeonBois.jpeg"
            alt="Couloir avec porte accordéon en bois ouverte, chantier réel"
            caption="Porte accordéon en bois sur mesure, couloir d'un appartement rénové."
          />
          <MqFig
            src="/photos/chantiers/chDressingOuvertTiroirsEntrouverts.jpeg"
            alt="Dressing sur mesure avec tiroirs entrouverts, chantier réel"
            caption="Dressing sur mesure livré, tiroirs entrouverts montrant les coulisses réglées."
          />
          <MqFig
            src="/photos/chantiers/chEtagereCoinFenetreBrute.jpeg"
            alt="Étagère d'angle sur mesure près d'une fenêtre, finition brute, chantier réel"
            caption="Étagère d'angle sur mesure en finition brute, avant peinture, près d'une fenêtre."
          />
          <MqFig
            src="/photos/chantiers/chArcheEncadrementBoisChantier.jpeg"
            alt="Encadrement bois en arche en cours de pose, chantier réel"
            caption="Encadrement bois en arche en cours de pose entre deux pièces."
          />
          <MqFig
            src="/photos/chantiers/chVasqueBoisMuraleChantier.jpeg"
            alt="Vasque murale sur meuble bois sur mesure, chantier réel"
            caption="Vasque murale posée sur un meuble bois sur mesure, sol encore protégé."
          />
          <MqFig
            src="/photos/chantiers/chCaissonTiroirsBoisAngle.jpeg"
            alt="Caisson à tiroirs en bois sur mesure, vue d'angle, chantier réel"
            caption="Caisson à tiroirs en bois sur mesure, vue d'angle avant pose des façades."
          />
          <MqFig
            src="/photos/chantiers/chEtagereCoinCableApparent.jpeg"
            alt="Étagère d'angle sur mesure, câble électrique encore apparent, chantier réel"
            caption="Étagère d'angle sur mesure en cours de finition, réservation électrique encore apparente."
          />
          <MqFig
            src="/photos/chantiers/chDressingEscalierArriereplan.jpeg"
            alt="Dressing sur mesure livré, escalier en arrière-plan, chantier réel"
            caption="Dressing sur mesure livré, escalier visible en arrière-plan du même chantier."
          />
          <MqFig
            src="/photos/chantiers/chEtagereChantierEchelle.jpeg"
            alt="Étagère sur mesure en cours de montage, échelle sur le chantier, chantier réel"
            caption="Étagère sur mesure en cours de montage, échelle et outils encore sur place."
          />
          <MqFig
            src="/photos/chantiers/chDressingEscalierArriereplan2.jpeg"
            alt="Dressing sur mesure livré, autre vue avec escalier, chantier réel"
            caption="Dressing sur mesure livré, autre vue du même chantier avec escalier en arrière-plan."
          />
          <MqFig
            src="/photos/chantiers/chNicheArrondieBoisEclairage.jpeg"
            alt="Niche murale arrondie en bois avec éclairage intégré, chantier réel"
            caption="Niche murale arrondie en bois sur mesure, éclairage indirect intégré."
          />
          <MqFig
            src="/photos/chantiers/chCouloirPorteBoisModerne.jpeg"
            alt="Couloir rénové avec porte bois moderne, chantier réel"
            caption="Couloir rénové, porte bois contemporaine sur mesure."
          />
          <MqFig
            src="/photos/chantiers/chCouloirPortesBoisJumelles.jpeg"
            alt="Couloir avec deux portes bois jumelles sur mesure, chantier réel"
            caption="Couloir avec deux portes bois jumelles sur mesure, finitions livrées."
          />
          <MqFig
            src="/photos/chantiers/chNicheArrondieCouloirBacklight.jpeg"
            alt="Niche arrondie rétroéclairée dans un couloir, chantier réel"
            caption="Niche arrondie sur mesure rétroéclairée, couloir d'un appartement rénové."
          />
          <MqFig
            src="/photos/chantiers/chDressingArrondiCouloirParquet1.jpeg"
            alt="Dressing arrondi sur mesure dans un couloir avec parquet, chantier réel"
            caption="Dressing d'angle arrondi sur mesure, couloir avec parquet à chevrons."
          />
          <MqFig
            src="/photos/chantiers/chDressingArrondiCouloirParquet2.jpeg"
            alt="Dressing arrondi sur mesure, autre angle du même couloir, chantier réel"
            caption="Dressing d'angle arrondi sur mesure, autre angle du même couloir."
          />
          <MqFig
            src="/photos/chantiers/chDressingProcheToilettes.jpeg"
            alt="Dressing sur mesure près d'une porte de toilettes, chantier réel"
            caption="Dressing sur mesure livré, proche d'une porte de toilettes."
          />
          <MqFig
            src="/photos/chantiers/chDetailPoigneePorteMain2.jpeg"
            alt="Détail d'une poignée de porte vérifiée à la main, autre porte, chantier réel"
            caption="Détail d'une poignée de porte sur mesure, vérification avant réception."
          />
          <MqFig
            src="/photos/chantiers/chDressingBlancOuvertChantier1.jpeg"
            alt="Dressing blanc sur mesure ouvert, en cours de chantier, chantier réel"
            caption="Dressing blanc sur mesure, portes ouvertes, en cours de finition."
          />
          <MqFig
            src="/photos/chantiers/chDressingBlancOuvertChantier2.jpeg"
            alt="Dressing blanc sur mesure ouvert, autre vue du chantier, chantier réel"
            caption="Dressing blanc sur mesure, autre vue du même chantier en cours de finition."
          />
          <MqFig
            src="/photos/chantiers/chNicheBoisPortesArquees.jpeg"
            alt="Niche en bois avec portes arquées sur mesure, chantier réel"
            caption="Niche en bois sur mesure avec portes cintrées, style architectural soigné."
          />
          <MqFig
            src="/photos/chantiers/chDressingSousPenteBlancPortes.jpeg"
            alt="Dressing blanc sur mesure sous pente de toit, chantier réel"
            caption="Dressing blanc sur mesure adapté à une pente de toit, façades livrées."
          />
          <MqFig
            src="/photos/chantiers/chDressingBlancTiroirsOuverts.jpeg"
            alt="Dressing blanc sur mesure, tiroirs ouverts, chantier réel"
            caption="Dressing blanc sur mesure, tiroirs ouverts montrant l'agencement intérieur."
          />
          <MqFig
            src="/photos/chantiers/chDressingBlancInterphone.jpeg"
            alt="Dressing blanc sur mesure près d'un interphone, chantier réel"
            caption="Dressing blanc sur mesure livré, interphone intégré au mur attenant."
          />
          <MqFig
            src="/photos/chantiers/chDressingBlancPoigneesBoisVerticales.jpeg"
            alt="Dressing blanc sur mesure avec poignées bois verticales, chantier réel"
            caption="Dressing blanc sur mesure, poignées en bois verticales intégrées aux façades."
          />
          <MqFig
            src="/photos/chantiers/chDressingEntreeNoyerChantier.jpeg"
            alt="Dressing en placage noyer dans une entrée, en cours de chantier, chantier réel"
            caption="Dressing en placage noyer livré dans une entrée d'appartement ancien."
          />
          <MqFig
            src="/photos/chantiers/chEntreeDressingNoyerPorte.jpeg"
            alt="Entrée avec dressing en placage noyer et porte sur mesure, chantier réel"
            caption="Entrée avec dressing en placage noyer et porte assortie sur mesure."
          />
          <MqFig
            src="/photos/chantiers/chGrilleAerationMdfAtelier2.jpeg"
            alt="Grille d'aération sur mesure façonnée en atelier, chantier réel"
            caption="Grille d'aération sur mesure en MDF, façonnée en atelier avant pose."
          />
          <MqFig
            src="/photos/chantiers/chDressingNoyerAngleDeuxPortes.jpeg"
            alt="Dressing en placage noyer, angle à deux portes, chantier réel"
            caption="Dressing en placage noyer, angle à deux portes livré dans un appartement ancien."
          />
          <MqFig
            src="/photos/chantiers/chBibliothequeBlancheVitreeChantier.jpeg"
            alt="Bibliothèque blanche avec portes vitrées, en cours de chantier, chantier réel"
            caption="Bibliothèque blanche sur mesure avec portes vitrées, en cours de finition."
          />
          <MqFig
            src="/photos/chantiers/chNicheBoisAlcoveFinie.jpeg"
            alt="Alcôve en bois sur mesure livrée, chantier réel"
            caption="Alcôve en bois sur mesure livrée et finie."
          />
          <MqFig
            src="/photos/chantiers/chCouloirPorteBleueNoyer.jpeg"
            alt="Couloir avec porte bleue et menuiserie en noyer, chantier réel"
            caption="Couloir avec porte bleue et menuiserie en placage noyer assortie."
          />
          <MqFig
            src="/photos/chantiers/chDressingMiroirCouloir.jpeg"
            alt="Dressing avec miroir intégré dans un couloir, chantier réel"
            caption="Dressing sur mesure avec porte miroir intégrée, couloir d'un appartement rénové."
          />
          <MqFig
            src="/photos/chantiers/chEtagereMuraleFenetreChantier.jpeg"
            alt="Étagère murale sur mesure près d'une fenêtre, chantier réel"
            caption="Étagère murale sur mesure en cours de montage, proche d'une fenêtre."
          />
          <MqFig
            src="/photos/chantiers/chDressingBlancCarcasseCrochets.jpeg"
            alt="Carcasse de dressing blanc avec crochets, chantier réel"
            caption="Carcasse de dressing blanc sur mesure, crochets de penderie posés avant façades."
          />
          <MqFig
            src="/photos/chantiers/chArmoireVitreeVerreDepoli.jpeg"
            alt="Armoire vitrée en verre dépoli sur mesure, chantier réel"
            caption="Armoire sur mesure à portes vitrées en verre dépoli, finition livrée."
          />
          <MqFig
            src="/photos/chantiers/chDressingSousPenteTiroirs2.jpeg"
            alt="Dressing sous pente avec tiroirs, autre vue, chantier réel"
            caption="Dressing sur mesure sous pente de toit, tiroirs livrés, autre angle."
          />
          <MqFig
            src="/photos/chantiers/chNicheArrondieRubanBleu.jpeg"
            alt="Niche arrondie sur mesure, ruban de signalisation bleu au sol, chantier réel"
            caption="Niche arrondie sur mesure en cours de finition, ruban de signalisation au sol."
          />
          <MqFig
            src="/photos/chantiers/chFenetreBoisDecorativeChantier.jpeg"
            alt="Fenêtre intérieure décorative en bois sur mesure, chantier réel"
            caption="Fenêtre intérieure décorative en bois sur mesure, entre deux pièces."
          />
          <MqFig
            src="/photos/chantiers/chPanneauKraftEchelleChantier.jpeg"
            alt="Panneau en finition kraft brute, échelle sur le chantier, chantier réel"
            caption="Panneau de menuiserie en finition brute kraft, échelle encore en place."
          />
          <MqFig
            src="/photos/chantiers/chCouloirDressingToilettes.jpeg"
            alt="Couloir avec dressing sur mesure près des toilettes, chantier réel"
            caption="Couloir avec dressing sur mesure livré, proche de la porte des toilettes."
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
