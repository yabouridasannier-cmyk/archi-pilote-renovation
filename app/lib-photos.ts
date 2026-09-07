/* Photos — Unsplash vérifiées 200 (curl, 20/08/2026). Nouvelle marque :
   aucune photo réelle de chantier disponible, tout est illustratif. */

/* ⚠️ ALIAS — À CONNAÎTRE AVANT D'AJOUTER UNE IMAGE À UNE PAGE.
   Six fichiers sont accessibles sous DEUX clés, une clé « métier » héritée de la maquette
   et une clé portant le nom du fichier :

       chantierRenovation  = chCloisonsPlaco
       salleBainBeton      = chSdbCarreauxCiment
       chantierIsolation   = chIsolationCombles
       detailParquet       = chParquetChevronsCouloirDeuxTeintes
       cuisineSurMesure    = chCuisineCremeIlot
       grosOeuvre          = chSurelevationBrique

   Conséquence : deux pages peuvent afficher la MÊME photo sans qu'aucune recherche
   textuelle ne le montre, puisqu'elles ne citent pas la même clé. C'est l'une des raisons
   pour lesquelles la répétition signalée par le client était passée inaperçue.
   scripts/surexposition.py résout désormais les clés vers les fichiers et n'est plus dupé,
   mais un humain qui lit le code, lui, peut encore l'être. */
export const PHOTOS = {
  heroHaussmannien: "https://images.unsplash.com/photo-1634586648651-f1fb9ec10d90?q=80&w=1600&auto=format&fit=crop",
  sejourApres: "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?q=80&w=1600&auto=format&fit=crop",
  sejourAvant: "https://images.unsplash.com/photo-1649083048770-82e8ffd80431?q=80&w=1600&auto=format&fit=crop",
  salonMinimal2: "https://images.unsplash.com/photo-1724582586458-a51791349977?q=80&w=1600&auto=format&fit=crop",

  // 02/09 : pointait vers chParquetVitrifie.jpeg, un parquet à lames droites, alors que la
  // page d'accueil l'affiche avec le libellé « Parquet point de Hongrie » — affirmation fausse.
  // Remplacé par une vraie photo de pose à chevrons fournie par le client.
  detailParquet: "/photos/chantiers/chParquetChevronsCouloirDeuxTeintes.jpeg",
  parquetGros: "https://images.unsplash.com/photo-1761053133165-0f3acdaf1770?q=80&w=1600&auto=format&fit=crop",

  cuisineSurMesure: "/photos/chantiers/chCuisineCremeIlot.jpeg",
  cuisineDetail: "https://images.unsplash.com/photo-1714860534425-7ce04e013dec?q=80&w=1600&auto=format&fit=crop",

  salleBainBeton: "/photos/chantiers/chSdbCarreauxCiment.jpeg",
  betonCireDetail: "https://images.unsplash.com/photo-1560780552-ba54683cb263?q=80&w=1600&auto=format&fit=crop",

  chantierRenovation: "/photos/chantiers/chCloisonsPlaco.jpeg",
  chantierIsolation: "/photos/chantiers/chIsolationCombles.jpeg",

  planArchitecte: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
  devisDetail: "https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=1600&auto=format&fit=crop",
  grosOeuvre: "/photos/chantiers/chSurelevationBrique.jpeg",

  outilsArtisan: "https://images.unsplash.com/photo-1676311396794-f14881e9daaa?q=80&w=1600&auto=format&fit=crop",
  visiteTechnique: "https://images.unsplash.com/photo-1606676539940-12768ce0e762?q=80&w=1600&auto=format&fit=crop",

  detailMoulure: "https://images.unsplash.com/photo-1722942429838-8a51e60ca7b8?q=80&w=1600&auto=format&fit=crop",

  cuisineIlot: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=1600&auto=format&fit=crop",
  salleBainBaignoire: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1600&auto=format&fit=crop",
  salleBainMiroir: "https://images.unsplash.com/photo-1661107259637-4e1c55462428?q=80&w=1600&auto=format&fit=crop",
  salonCanape: "https://images.unsplash.com/photo-1724582586495-d050726cf354?q=80&w=1600&auto=format&fit=crop",
  parquetDetail2: "https://images.unsplash.com/photo-1783791995743-cf144ee771f1?q=80&w=1600&auto=format&fit=crop",
  chantierCuisineProtection: "https://images.unsplash.com/photo-1618832515490-e181c4794a45?q=80&w=1600&auto=format&fit=crop",
  chantierEchelle: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=1600&auto=format&fit=crop",
  cheminee2: "https://images.unsplash.com/photo-1722152257494-e26f08d5bb0d?q=80&w=1600&auto=format&fit=crop",

  /* Photos de référence — appartement réel (fourni par le client, 25/08/2026).
     Illustration de niveau de finition, pas des chantiers ARCHI PILOTE RÉNOVATION. */
  refChambreBalcon: "/photos/ref/refChambreBalcon.png",
  refChambreTeteLitVelours: "/photos/ref/refChambreTeteLitVelours.jpeg",
  refSalleBainMarbreNoir: "/photos/ref/refSalleBainMarbreNoir.jpeg",
  refChambreArmoireBlanche: "/photos/ref/refChambreArmoireBlanche.jpeg",
  refCuisineSejour: "/photos/ref/refCuisineSejour.jpeg",
  refSalleBainMarbreClair: "/photos/ref/refSalleBainMarbreClair.jpeg",
  refChambreDoreeJaune: "/photos/ref/refChambreDoreeJaune.jpeg",
  refSalonBalconRue: "/photos/ref/refSalonBalconRue.jpeg",

  /* Photos de CHANTIERS RÉELS — fournies par le client (Ilann, 27/08/2026),
     réalisations des équipes partenaires du groupe. Sélection et légendes
     rédigées d'après les pixels, image par image. Registre : docs/REGISTRE-MEDIAS.md */
  chParquetVitrifie: "/photos/chantiers/chParquetVitrifie.jpeg",
  chMenuiserieClaustra: "/photos/chantiers/chMenuiserieClaustra.jpeg",
  chCharpenteInterieur: "/photos/chantiers/chCharpenteInterieur.jpeg",
  chCharpenteLevee: "/photos/chantiers/chCharpenteLevee.jpeg",
  chLitCabane: "/photos/chantiers/chLitCabane.jpeg",
  chRavalementArdoise: "/photos/chantiers/chRavalementArdoise.jpeg",
  chSdbCarreauxCiment: "/photos/chantiers/chSdbCarreauxCiment.jpeg",
  chSdbBaignoireTeck: "/photos/chantiers/chSdbBaignoireTeck.jpeg",
  chCloisonsPlaco: "/photos/chantiers/chCloisonsPlaco.jpeg",
  chSurelevationBrique: "/photos/chantiers/chSurelevationBrique.jpeg",
  chBibliotheque: "/photos/chantiers/chBibliotheque.jpeg",
  chIsolationCombles: "/photos/chantiers/chIsolationCombles.jpeg",
  chCuisineCremeIlot: "/photos/chantiers/chCuisineCremeIlot.jpeg",
  chCuisineTerracotta: "/photos/chantiers/chCuisineTerracotta.jpeg",
  chCuisineSauge: "/photos/chantiers/chCuisineSauge.jpeg",
  chCuisineBlancheU: "/photos/chantiers/chCuisineBlancheU.jpeg",

  /* Second lot de photos de CHANTIERS RÉELS — fournies par le client (Ilann, 30/08/2026),
     réalisations des équipes partenaires du groupe, plusieurs chantiers distincts
     (dont un local commercial). Registre : docs/REGISTRE-MEDIAS.md */
  chDemolitionCloisonBoisPlatre: "/photos/chantiers/chDemolitionCloisonBoisPlatre.jpeg",
  chDemolitionMursDecapes: "/photos/chantiers/chDemolitionMursDecapes.jpeg",
  chDemolitionOuvertureCouloir: "/photos/chantiers/chDemolitionOuvertureCouloir.jpeg",
  chPortiqueAcierAngleGaine: "/photos/chantiers/chPortiqueAcierAngleGaine.jpeg",
  chPoutreAcierSoudure: "/photos/chantiers/chPoutreAcierSoudure.jpeg",
  chPoutreAcierMurDegarni: "/photos/chantiers/chPoutreAcierMurDegarni.jpeg",
  chPortiqueAcierAngleFenetre: "/photos/chantiers/chPortiqueAcierAngleFenetre.jpeg",
  chPoteauAcierPlatinePied: "/photos/chantiers/chPoteauAcierPlatinePied.jpeg",
  chBibliothequeRadiateurIntegre: "/photos/chantiers/chBibliothequeRadiateurIntegre.jpeg",
  chDressingLaqueBlancPoigneesBois: "/photos/chantiers/chDressingLaqueBlancPoigneesBois.jpeg",
  chDressingLaqueBlancCouloirPlans: "/photos/chantiers/chDressingLaqueBlancCouloirPlans.jpeg",
  chNicheBibliothequeCouloir: "/photos/chantiers/chNicheBibliothequeCouloir.jpeg",
  chPorteCoulissanteClaustraChene2: "/photos/chantiers/chPorteCoulissanteClaustraChene2.jpeg",
  chBibliothequeCouloirTrappe: "/photos/chantiers/chBibliothequeCouloirTrappe.jpeg",
  chEnsembleRangementRadiateurClaustra: "/photos/chantiers/chEnsembleRangementRadiateurClaustra.jpeg",
  chCuisineBleuCanardBrillante: "/photos/chantiers/chCuisineBleuCanardBrillante.jpeg",
  chOuvertureImposteVitreeDoubleParte: "/photos/chantiers/chOuvertureImposteVitreeDoubleParte.jpeg",
  chEscalierBoisFlottantVueBas: "/photos/chantiers/chEscalierBoisFlottantVueBas.jpeg",
  chOptiquePresentoirsMuraux: "/photos/chantiers/chOptiquePresentoirsMuraux.jpeg",
  chOptiqueAccueilFinition: "/photos/chantiers/chOptiqueAccueilFinition.jpeg",
  chEscalierBoisFlottantPalier: "/photos/chantiers/chEscalierBoisFlottantPalier.jpeg",
  chOptiqueComptoirAccueilFini: "/photos/chantiers/chOptiqueComptoirAccueilFini.jpeg",
  chOptiqueComptoirCarcasseBrute: "/photos/chantiers/chOptiqueComptoirCarcasseBrute.jpeg",
  chHabillageMdfSousPente: "/photos/chantiers/chHabillageMdfSousPente.jpeg",
  chDressingSousPenteBlancTiroirs: "/photos/chantiers/chDressingSousPenteBlancTiroirs.jpeg",
  chDressingSousPenteVeluxPoigneesNoires: "/photos/chantiers/chDressingSousPenteVeluxPoigneesNoires.jpeg",
  chCuisineBlancheElectromenagerLG: "/photos/chantiers/chCuisineBlancheElectromenagerLG.jpeg",
  chDressingMdfBrutNiche: "/photos/chantiers/chDressingMdfBrutNiche.jpeg",
  chSdbVasquesPoseMeubleBeige: "/photos/chantiers/chSdbVasquesPoseMeubleBeige.jpeg",
  chBibliothequesMdfBrutOuvertes: "/photos/chantiers/chBibliothequesMdfBrutOuvertes.jpeg",
  chComptoirBarColonneFonteCarreauxAnciens: "/photos/chantiers/chComptoirBarColonneFonteCarreauxAnciens.jpeg",
  chComptoirBarMouluresFinition: "/photos/chantiers/chComptoirBarMouluresFinition.jpeg",
  chCuisinePlanNoirFacadesCremeVelux: "/photos/chantiers/chCuisinePlanNoirFacadesCremeVelux.jpeg",
  chPlacagesNoyerEnAttente: "/photos/chantiers/chPlacagesNoyerEnAttente.jpeg",
  chDressingNoyerCarcasseTringle: "/photos/chantiers/chDressingNoyerCarcasseTringle.jpeg",
  chOssatureBoisComptoirLocalCommercial: "/photos/chantiers/chOssatureBoisComptoirLocalCommercial.jpeg",
  chDressingBufetNoyerMoulures1: "/photos/chantiers/chDressingBufetNoyerMoulures1.jpeg",
  chDressingNoyerCarcassesVides: "/photos/chantiers/chDressingNoyerCarcassesVides.jpeg",
  chDressingNoyerMoulures2: "/photos/chantiers/chDressingNoyerMoulures2.jpeg",
  chDressingBufetNoyerPorteBleue: "/photos/chantiers/chDressingBufetNoyerPorteBleue.jpeg",
  chGrilleAerationMdfSurMesure: "/photos/chantiers/chGrilleAerationMdfSurMesure.jpeg",
  chDetailTiroirCoulisses: "/photos/chantiers/chDetailTiroirCoulisses.jpeg",
  chCuisineSejourParquetChevrons: "/photos/chantiers/chCuisineSejourParquetChevrons.jpeg",
  chDressingBufetNoyerMoulures3: "/photos/chantiers/chDressingBufetNoyerMoulures3.jpeg",
  chDressingBrutKraftSpots: "/photos/chantiers/chDressingBrutKraftSpots.jpeg",
  chCouloirParquetChevronsPortesOuvertes: "/photos/chantiers/chCouloirParquetChevronsPortesOuvertes.jpeg",
  chPlacardTableauElectriqueIntegre: "/photos/chantiers/chPlacardTableauElectriqueIntegre.jpeg",
  chPlancherSolivesBeton1: "/photos/chantiers/chPlancherSolivesBeton1.jpeg",
  chPlancherSolivesBeton2: "/photos/chantiers/chPlancherSolivesBeton2.jpeg",
  chSousCouchePanneauxOSB: "/photos/chantiers/chSousCouchePanneauxOSB.jpeg",
  chIsolationPhoniqueGranulesPlancher: "/photos/chantiers/chIsolationPhoniqueGranulesPlancher.jpeg",
  chPlacardKraftCouloirEtroit: "/photos/chantiers/chPlacardKraftCouloirEtroit.jpeg",
  chCuisineBlancheBrillanteMarbre: "/photos/chantiers/chCuisineBlancheBrillanteMarbre.jpeg",
  chCuisineAnthraciteCarreauxCiment: "/photos/chantiers/chCuisineAnthraciteCarreauxCiment.jpeg",
  chEncadrementBoisPorteMiroirAtelier: "/photos/chantiers/chEncadrementBoisPorteMiroirAtelier.jpeg",
  chBibliothequePanneauxMoulures: "/photos/chantiers/chBibliothequePanneauxMoulures.jpeg",
  chVerriereInterieurePentagonale: "/photos/chantiers/chVerriereInterieurePentagonale.jpeg",
  chRangementSousPenteCombles: "/photos/chantiers/chRangementSousPenteCombles.jpeg",
  chEtagereBureauNicheRadiateur: "/photos/chantiers/chEtagereBureauNicheRadiateur.jpeg",
  chEtagereMuraleContreplaque: "/photos/chantiers/chEtagereMuraleContreplaque.jpeg",
  chCuisineNoireBrillantePoigneesCuivrees: "/photos/chantiers/chCuisineNoireBrillantePoigneesCuivrees.jpeg",
  chDressingBrutTiroirsRoulettes: "/photos/chantiers/chDressingBrutTiroirsRoulettes.jpeg",
  chPlacardCompteurElectriqueArrondi: "/photos/chantiers/chPlacardCompteurElectriqueArrondi.jpeg",
  chDressingCarcasseChantEnBois: "/photos/chantiers/chDressingCarcasseChantEnBois.jpeg",

  /* Troisième lot — photos réelles fournies par le client (Ilann, 30/08/2026),
     continuations vérifiées de projets déjà confirmés réels (opticien, dressings
     noyer haussmannien, comptoir bar colonne fonte, structure acier Tridenso,
     plancher/isolation). Le reste du lot (photographie immobilière mise en scène,
     un chantier d'hôtel sans rapport, images Pinterest) a été écarté. */
  chPortiqueAcierAngleMurDegarni2: "/photos/chantiers/chPortiqueAcierAngleMurDegarni2.jpeg",
  chPoutreAcierPlafondMurDegarni: "/photos/chantiers/chPoutreAcierPlafondMurDegarni.jpeg",
  chPoutreAcierSoudureAngle2: "/photos/chantiers/chPoutreAcierSoudureAngle2.jpeg",
  chPoutreAcierMurPierreApparente: "/photos/chantiers/chPoutreAcierMurPierreApparente.jpeg",
  chPoteauAcierScelleGravats: "/photos/chantiers/chPoteauAcierScelleGravats.jpeg",
  chOptiqueComptoirCarcasseBrute2: "/photos/chantiers/chOptiqueComptoirCarcasseBrute2.jpeg",
  chOptiquePresentoirsVitrine: "/photos/chantiers/chOptiquePresentoirsVitrine.jpeg",
  chOptiqueComptoirAccueilFini2: "/photos/chantiers/chOptiqueComptoirAccueilFini2.jpeg",
  chDressingNoyerMouluresAngle1: "/photos/chantiers/chDressingNoyerMouluresAngle1.jpeg",
  chDressingNoyerMouluresFenetre: "/photos/chantiers/chDressingNoyerMouluresFenetre.jpeg",
  chDressingNoyerBufetMoulures4: "/photos/chantiers/chDressingNoyerBufetMoulures4.jpeg",
  chPlacagesNoyerEnAttente2: "/photos/chantiers/chPlacagesNoyerEnAttente2.jpeg",
  chDressingNoyerOuvertOutils: "/photos/chantiers/chDressingNoyerOuvertOutils.jpeg",
  chComptoirBarColonneFonteVueLarge: "/photos/chantiers/chComptoirBarColonneFonteVueLarge.jpeg",
  chComptoirBarEtageresOutils: "/photos/chantiers/chComptoirBarEtageresOutils.jpeg",
  chOssatureBoisComptoirCommercial2: "/photos/chantiers/chOssatureBoisComptoirCommercial2.jpeg",
  chSousCouchePanneauxOSB2: "/photos/chantiers/chSousCouchePanneauxOSB2.jpeg",
  chPlancherSolivesBoisRangees: "/photos/chantiers/chPlancherSolivesBoisRangees.jpeg",
  chDemolitionBoiseriesHaussmannien: "/photos/chantiers/chDemolitionBoiseriesHaussmannien.jpeg",
  chIsolationPhoniqueGranulesPlancher2: "/photos/chantiers/chIsolationPhoniqueGranulesPlancher2.jpeg",

  /* Reste du même lot (30/08/2026) — photos homogènes avec le style chantier
     réel déjà établi (démolition, structure, menuiserie, cuisines, terrasses,
     façades). Exclus du même lot : photographie immobilière mise en scène,
     un chantier d'hôtel sans rapport, images de charpente façon Pinterest,
     et les plans techniques nominatifs. */
  chMenuiserieInstallationPanneauMural: "/photos/chantiers/chMenuiserieInstallationPanneauMural.jpeg",
  chEtagereBoisAssemblageAtelier: "/photos/chantiers/chEtagereBoisAssemblageAtelier.jpeg",
  chCouloirPorteAccordeonBois: "/photos/chantiers/chCouloirPorteAccordeonBois.jpeg",
  chDressingOuvertTiroirsEntrouverts: "/photos/chantiers/chDressingOuvertTiroirsEntrouverts.jpeg",
  chEtagereCoinFenetreBrute: "/photos/chantiers/chEtagereCoinFenetreBrute.jpeg",
  chArcheEncadrementBoisChantier: "/photos/chantiers/chArcheEncadrementBoisChantier.jpeg",
  chVasqueBoisMuraleChantier: "/photos/chantiers/chVasqueBoisMuraleChantier.jpeg",
  chCaissonTiroirsBoisAngle: "/photos/chantiers/chCaissonTiroirsBoisAngle.jpeg",
  chEtagereCoinCableApparent: "/photos/chantiers/chEtagereCoinCableApparent.jpeg",
  chFacadeRavalementEchafaudage1: "/photos/chantiers/chFacadeRavalementEchafaudage1.jpeg",
  chDressingEscalierArriereplan: "/photos/chantiers/chDressingEscalierArriereplan.jpeg",
  chEtagereChantierEchelle: "/photos/chantiers/chEtagereChantierEchelle.jpeg",
  chDressingEscalierArriereplan2: "/photos/chantiers/chDressingEscalierArriereplan2.jpeg",
  chCharpenteParpaingConstruction: "/photos/chantiers/chCharpenteParpaingConstruction.jpeg",
  chTerrassePiscineBoisVue1: "/photos/chantiers/chTerrassePiscineBoisVue1.jpeg",
  chTerrassePiscineMaisonVue: "/photos/chantiers/chTerrassePiscineMaisonVue.jpeg",
  chCharpenteToitureOSBChantier: "/photos/chantiers/chCharpenteToitureOSBChantier.jpeg",
  chCharpenteMaisonEchafaudage: "/photos/chantiers/chCharpenteMaisonEchafaudage.jpeg",
  chTerrasseBoisTransatsVue: "/photos/chantiers/chTerrasseBoisTransatsVue.jpeg",
  chTerrasseBoisEscaliersMobilier: "/photos/chantiers/chTerrasseBoisEscaliersMobilier.jpeg",
  chTerrasseBoisPiscineCourbe: "/photos/chantiers/chTerrasseBoisPiscineCourbe.jpeg",
  chTerrasseBoisPiscineChamps: "/photos/chantiers/chTerrasseBoisPiscineChamps.jpeg",
  chLivraisonPanneauPrefabGrue: "/photos/chantiers/chLivraisonPanneauPrefabGrue.jpeg",
  chNicheArrondieBoisEclairage: "/photos/chantiers/chNicheArrondieBoisEclairage.jpeg",
  chFacadeRavalementVillage: "/photos/chantiers/chFacadeRavalementVillage.jpeg",
  chCouloirPorteBoisModerne: "/photos/chantiers/chCouloirPorteBoisModerne.jpeg",
  chCouloirPortesBoisJumelles: "/photos/chantiers/chCouloirPortesBoisJumelles.jpeg",
  chFacadeRavalementEchafaudage2: "/photos/chantiers/chFacadeRavalementEchafaudage2.jpeg",
  chNicheArrondieCouloirBacklight: "/photos/chantiers/chNicheArrondieCouloirBacklight.jpeg",
  chDressingArrondiCouloirParquet1: "/photos/chantiers/chDressingArrondiCouloirParquet1.jpeg",
  chDressingArrondiCouloirParquet2: "/photos/chantiers/chDressingArrondiCouloirParquet2.jpeg",
  chParquetChevronsPosePiece: "/photos/chantiers/chParquetChevronsPosePiece.jpeg",
  chDressingProcheToilettes: "/photos/chantiers/chDressingProcheToilettes.jpeg",
  chDetailPoigneePorteMain1: "/photos/chantiers/chDetailPoigneePorteMain1.jpeg",
  chDetailPoigneePorteMain2: "/photos/chantiers/chDetailPoigneePorteMain2.jpeg",
  chDemolitionLattisPlatreChantier1: "/photos/chantiers/chDemolitionLattisPlatreChantier1.jpeg",
  chDemolitionLattisPlatreChantier2: "/photos/chantiers/chDemolitionLattisPlatreChantier2.jpeg",
  chDemolitionGravatsChantier: "/photos/chantiers/chDemolitionGravatsChantier.jpeg",
  chDressingBlancOuvertChantier1: "/photos/chantiers/chDressingBlancOuvertChantier1.jpeg",
  chDressingBlancOuvertChantier2: "/photos/chantiers/chDressingBlancOuvertChantier2.jpeg",
  chNicheBoisPortesArquees: "/photos/chantiers/chNicheBoisPortesArquees.jpeg",
  chCouloirBoisGaleriesBanc: "/photos/chantiers/chCouloirBoisGaleriesBanc.jpeg",
  chCuisineBlancheFinieIlot: "/photos/chantiers/chCuisineBlancheFinieIlot.jpeg",
  chDressingSousPenteBlancPortes: "/photos/chantiers/chDressingSousPenteBlancPortes.jpeg",
  chCouloirBoisEscalierVue: "/photos/chantiers/chCouloirBoisEscalierVue.jpeg",
  chDressingBlancTiroirsOuverts: "/photos/chantiers/chDressingBlancTiroirsOuverts.jpeg",
  chDressingBlancInterphone: "/photos/chantiers/chDressingBlancInterphone.jpeg",
  chCouloirBibliothequeChaleureux: "/photos/chantiers/chCouloirBibliothequeChaleureux.jpeg",
  chDressingBlancPoigneesBoisVerticales: "/photos/chantiers/chDressingBlancPoigneesBoisVerticales.jpeg",
  chEscalierBoisConstructionMarches: "/photos/chantiers/chEscalierBoisConstructionMarches.jpeg",
  chRangementChantierEncombre: "/photos/chantiers/chRangementChantierEncombre.jpeg",
  chCuisineBleuCanardVueDeux: "/photos/chantiers/chCuisineBleuCanardVueDeux.jpeg",
  chPorteCoulissanteClaustraChene3: "/photos/chantiers/chPorteCoulissanteClaustraChene3.jpeg",
  chEscalierOuvertConstruction: "/photos/chantiers/chEscalierOuvertConstruction.jpeg",
  chCuisineNoireSkylightFinie: "/photos/chantiers/chCuisineNoireSkylightFinie.jpeg",
  chVasqueMarbreVanite: "/photos/chantiers/chVasqueMarbreVanite.jpeg",
  chDressingEntreeNoyerChantier: "/photos/chantiers/chDressingEntreeNoyerChantier.jpeg",
  chEntreeDressingNoyerPorte: "/photos/chantiers/chEntreeDressingNoyerPorte.jpeg",
  chGrilleAerationMdfAtelier2: "/photos/chantiers/chGrilleAerationMdfAtelier2.jpeg",
  chDressingNoyerAngleDeuxPortes: "/photos/chantiers/chDressingNoyerAngleDeuxPortes.jpeg",
  chCuisineNoireSejourFinie: "/photos/chantiers/chCuisineNoireSejourFinie.jpeg",
  chCouloirParquetChevronsPorteBois: "/photos/chantiers/chCouloirParquetChevronsPorteBois.jpeg",
  chDetailTiroirMainOuverture: "/photos/chantiers/chDetailTiroirMainOuverture.jpeg",
  chBibliothequeBlancheVitreeChantier: "/photos/chantiers/chBibliothequeBlancheVitreeChantier.jpeg",
  chNicheBoisAlcoveFinie: "/photos/chantiers/chNicheBoisAlcoveFinie.jpeg",
  chCouloirPorteBleueNoyer: "/photos/chantiers/chCouloirPorteBleueNoyer.jpeg",
  chCuisineBlanchePendantsFinie: "/photos/chantiers/chCuisineBlanchePendantsFinie.jpeg",
  chDressingMiroirCouloir: "/photos/chantiers/chDressingMiroirCouloir.jpeg",
  chEtagereMuraleFenetreChantier: "/photos/chantiers/chEtagereMuraleFenetreChantier.jpeg",
  chEtagereMuraleMainOuvriere: "/photos/chantiers/chEtagereMuraleMainOuvriere.jpeg",
  chDressingBlancCarcasseCrochets: "/photos/chantiers/chDressingBlancCarcasseCrochets.jpeg",
  chCuisineAnthraciteCarreauxVue2: "/photos/chantiers/chCuisineAnthraciteCarreauxVue2.jpeg",
  chCuisineAnthraciteGalerie: "/photos/chantiers/chCuisineAnthraciteGalerie.jpeg",
  chArmoireVitreeVerreDepoli: "/photos/chantiers/chArmoireVitreeVerreDepoli.jpeg",
  chDressingSousPenteTiroirs2: "/photos/chantiers/chDressingSousPenteTiroirs2.jpeg",
  chNicheArrondieRubanBleu: "/photos/chantiers/chNicheArrondieRubanBleu.jpeg",
  chFenetreBoisDecorativeChantier: "/photos/chantiers/chFenetreBoisDecorativeChantier.jpeg",
  chPanneauKraftEchelleChantier: "/photos/chantiers/chPanneauKraftEchelleChantier.jpeg",
  chCouloirDressingToilettes: "/photos/chantiers/chCouloirDressingToilettes.jpeg",

  /* Photos envoyées directement par le client (30/08/2026) pour le dossier
     d'ouverture de mur porteur — même chantier que le dossier bureau d'études
     anonymisé (voir public/photos/etudes/). */
  chDemolitionDegagementVersSejour: "/photos/chantiers/chDemolitionDegagementVersSejour.jpeg",
  chDemolitionLattisPlatreOuverture: "/photos/chantiers/chDemolitionLattisPlatreOuverture.jpeg",
  chPoutreAcierAngleSoudeVue1: "/photos/chantiers/chPoutreAcierAngleSoudeVue1.jpeg",
  chPoutreAcierProfilVueLongue: "/photos/chantiers/chPoutreAcierProfilVueLongue.jpeg",
  pedaJointEpoxyMacro: "/photos/pedagogie/33-blog-joint-epoxy-macro.jpeg",
  pedaJointCimentMacro: "/photos/pedagogie/34-blog-joint-ciment-macro.jpeg",

  /* Réalisations haut de gamme envoyées par le client le 01/09/2026 (mail
     « Photo haut-de-gamme ») : appartement haussmannien parisien livré.
     Deux d'entre elles montrent un chantier ENCORE EN COURS et ne doivent pas
     être légendées comme livrées — chHdgSdbMarbreProfilesLaitonPose et
     chHdgDoucheMarbreLaitonProtection (film de protection au sol). */
  chHdgChambreBalconApplique: "/photos/chantiers/chHdgChambreBalconApplique.jpeg",
  chHdgChambrePlacardMoulure: "/photos/chantiers/chHdgChambrePlacardMoulure.jpeg",
  chHdgSuiteMarbreNoirBaignoire: "/photos/chantiers/chHdgSuiteMarbreNoirBaignoire.jpeg",
  chHdgChambreTeteVeloursMarbre: "/photos/chantiers/chHdgChambreTeteVeloursMarbre.jpeg",
  chHdgSdbMarbreNoirDoubleVasque: "/photos/chantiers/chHdgSdbMarbreNoirDoubleVasque.jpeg",
  chHdgSdbMarbreClairBaignoire: "/photos/chantiers/chHdgSdbMarbreClairBaignoire.jpeg",
  chHdgChambreVeloursTaupeBalcon: "/photos/chantiers/chHdgChambreVeloursTaupeBalcon.jpeg",
  chHdgChambreLustreSdbOuverte: "/photos/chantiers/chHdgChambreLustreSdbOuverte.jpeg",
  chHdgDetailCeramiqueRobinetterie: "/photos/chantiers/chHdgDetailCeramiqueRobinetterie.jpeg",
  chHdgCuisineOnyxParquetVersailles: "/photos/chantiers/chHdgCuisineOnyxParquetVersailles.jpeg",
  chHdgSejourCuisineOnyxBanquette: "/photos/chantiers/chHdgSejourCuisineOnyxBanquette.jpeg",
  chHdgEntreeCouloirCuisineOnyx: "/photos/chantiers/chHdgEntreeCouloirCuisineOnyx.jpeg",
  chHdgDiptyqueChambreSdbBaignoire: "/photos/chantiers/chHdgDiptyqueChambreSdbBaignoire.jpeg",
  chHdgDetailNicheOnyxCheminee: "/photos/chantiers/chHdgDetailNicheOnyxCheminee.jpeg",
  chHdgSalleEauPierreDouche: "/photos/chantiers/chHdgSalleEauPierreDouche.jpeg",
  chHdgDetailMarbreGrisVasque: "/photos/chantiers/chHdgDetailMarbreGrisVasque.jpeg",
  chHdgDiptyqueSalonMiroirBalcon: "/photos/chantiers/chHdgDiptyqueSalonMiroirBalcon.jpeg",
  chHdgChambreVeloursNicheBureau: "/photos/chantiers/chHdgChambreVeloursNicheBureau.jpeg",
  chHdgSalonSalleMangerMoulures: "/photos/chantiers/chHdgSalonSalleMangerMoulures.jpeg",
  chHdgSdbMarbreGrisPassageChambre: "/photos/chantiers/chHdgSdbMarbreGrisPassageChambre.jpeg",
  chHdgSalleMangerTableDressee: "/photos/chantiers/chHdgSalleMangerTableDressee.jpeg",
  chHdgSalonBoucleAppliquesBronze: "/photos/chantiers/chHdgSalonBoucleAppliquesBronze.jpeg",
  chHdgSdbMarbreProfilesLaitonPose: "/photos/chantiers/chHdgSdbMarbreProfilesLaitonPose.jpeg",
  chHdgChambreLattesBoisTv: "/photos/chantiers/chHdgChambreLattesBoisTv.jpeg",
  chHdgChambreLattesCacheRadiateur: "/photos/chantiers/chHdgChambreLattesCacheRadiateur.jpeg",
  chHdgSalleMangerSuspensionAlbatre: "/photos/chantiers/chHdgSalleMangerSuspensionAlbatre.jpeg",
  chHdgChambreChemineeMiroirMoulure: "/photos/chantiers/chHdgChambreChemineeMiroirMoulure.jpeg",
  chHdgDoucheMarbreLaitonProtection: "/photos/chantiers/chHdgDoucheMarbreLaitonProtection.jpeg",
  chHdgChambreCapitonneeSuspension: "/photos/chantiers/chHdgChambreCapitonneeSuspension.jpeg",
  chHdgChambreDressingChevrons: "/photos/chantiers/chHdgChambreDressingChevrons.jpeg",

  /* 03/09 : ces photos existaient sur le disque mais n'étaient déclarées nulle part,
     donc inutilisables par les articles de blog (qui référencent des clés, pas des
     chemins). Elles rendent des images honnêtes aux articles isolation / DPE / aides,
     où des photos d'isolation PHONIQUE illustraient à tort des sujets THERMIQUES. */
  chIsolationLaineUrsaVarioSdb: "/photos/chantiers/chIsolationLaineUrsaVarioSdb.jpeg",
  chIsolationFenetreSdbLaineVario: "/photos/chantiers/chIsolationFenetreSdbLaineVario.jpeg",
  chParVapeurSopremaMuralSdb: "/photos/chantiers/chParVapeurSopremaMuralSdb.jpeg",
  chParVapeurSopremaFenetreSdb: "/photos/chantiers/chParVapeurSopremaFenetreSdb.jpeg",
  chPlacoHydroSopremaFenetreSdb: "/photos/chantiers/chPlacoHydroSopremaFenetreSdb.jpeg",
  chChaudiereMuraleSaunierDuval: "/photos/chantiers/chChaudiereMuraleSaunierDuval.jpeg",
  pedaEtancheiteAngleDouche: "/photos/pedagogie/50-etancheite-angle-douche-macro.jpeg",
  pedaEtancheitePassageCanalisation: "/photos/pedagogie/51-etancheite-passage-canalisation-macro.jpeg",
  pedaMaPrimeRenovCee: "/photos/pedagogie/53-blog-maprimerenov-cee.jpeg",

  /* 03/09 : second lot de photos réelles présentes sur le disque mais jamais déclarées,
     donc invisibles pour app/data.ts (les articles référencent des clés, pas des chemins).
     Ce sont les seules vraies photos d'étanchéité, de plomberie et d'électricité du fonds :
     sans elles, les articles techniques retombaient sur des visuels approximatifs. */
  chEtancheiteReceveurDoucheLaser: "/photos/chantiers/chEtancheiteReceveurDoucheLaser.jpeg",
  chEtancheiteSolDoucheTrameArmee: "/photos/chantiers/chEtancheiteSolDoucheTrameArmee.jpeg",
  chPlomberieColonneCuivreVannes: "/photos/chantiers/chPlomberieColonneCuivreVannes.jpeg",
  chPlomberieMulticoucheDistributionMurale: "/photos/chantiers/chPlomberieMulticoucheDistributionMurale.jpeg",
  chPlomberieDistributionVannesBeton: "/photos/chantiers/chPlomberieDistributionVannesBeton.jpeg",
  chPlomberieVannesRougesBetonDetail: "/photos/chantiers/chPlomberieVannesRougesBetonDetail.jpeg",
  chPlomberieAlimentationEvacuationPlacoHydro: "/photos/chantiers/chPlomberieAlimentationEvacuationPlacoHydro.jpeg",
  chNourriceMulticoucheRadiateurs: "/photos/chantiers/chNourriceMulticoucheRadiateurs.jpeg",
  chNourriceManometreEvacuationPvc: "/photos/chantiers/chNourriceManometreEvacuationPvc.jpeg",
  chNourriceLaitonDoubleDeparts: "/photos/chantiers/chNourriceLaitonDoubleDeparts.jpeg",
  chNourriceLaiton12Departs: "/photos/chantiers/chNourriceLaiton12Departs.jpeg",
  chNourriceLaitonVanneGenerale: "/photos/chantiers/chNourriceLaitonVanneGenerale.jpeg",
  chNourriceDoubleAnglePlafond: "/photos/chantiers/chNourriceDoubleAnglePlafond.jpeg",
  chElectriciteFauxPlafondFaisceaux: "/photos/chantiers/chElectriciteFauxPlafondFaisceaux.jpeg",
  chElectriciteFauxPlafondRailsCablage: "/photos/chantiers/chElectriciteFauxPlafondRailsCablage.jpeg",
  chTableauElectriqueDisjoncteurs: "/photos/chantiers/chTableauElectriqueDisjoncteurs.jpeg",
  chParquetChevronsCacheRadiateur: "/photos/chantiers/chParquetChevronsCacheRadiateur.jpeg",
  chParquetChevronsCouloirDeuxTeintes: "/photos/chantiers/chParquetChevronsCouloirDeuxTeintes.jpeg",

  /* 04/09 : six schémas pédagogiques dessinés pour les six derniers articles du plan
     éditorial (budget d'extension, ordre des travaux énergétiques, écart entre deux
     devis, achat direct des matériaux, projets refusés, dossier de fin de chantier).
     Ces sujets sont administratifs ou méthodologiques : aucune photo du fonds ne les
     montre honnêtement, et les 244 clichés de chantier sont déjà tous employés. Chaque
     fichier est un schéma pédagogique — jamais une réalisation — au format 2:1 pour
     traverser sans recadrage le héros d'article (aspect 16/8) et la grille du blog
     (aspect 16/10), les bandes latérales reprenant le fond ivoire du dessin. */
  pedaExtensionCoutsOublies: "/photos/pedagogie/54-blog-extension-couts-oublies.jpeg",
  pedaOrdreRenovationEnergetique: "/photos/pedagogie/55-blog-ordre-renovation-energetique.jpeg",
  pedaDeuxDevisEcart: "/photos/pedagogie/56-blog-deux-devis-ecart.jpeg",
  pedaAchatDirectMateriaux: "/photos/pedagogie/57-blog-achat-direct-materiaux.jpeg",
  pedaProjetsRefuses: "/photos/pedagogie/58-blog-projets-refuses.jpeg",
  pedaDossierFinChantier: "/photos/pedagogie/59-blog-dossier-fin-de-chantier.jpeg",

  /* 05/09 — SCHÉMAS FOURNIS PAR LE CLIENT (Ilann Atlan, 04/09 au soir).
     Ils remplacent deux héros d'article que le client a signalés comme incohérents :
     une surélévation illustrée par un couloir en démolition, et un article sur la
     lecture d'un devis illustré par un macro de menuiserie flou (le plus flou du site,
     piqué mesuré à 21).
     ATTENTION AU FORMAT — ces deux fichiers sont en 3:2, alors que les schémas
     précédents avaient été volontairement complétés en 2:1 pour traverser sans
     recadrage le héros d'article (16/8). Ici, le procédé ne s'applique PAS : le dessin
     occupe toute la largeur jusqu'aux bords (bandeau sombre, pied de page signé), donc
     étirer les colonnes de bord produirait des traînées. C'est le RENDU qui s'adapte :
     les articles portant `schema: true` affichent leur image en `object-contain` sur le
     fond de la page — rien n'est rogné, rien n'est déformé, et le titre du schéma reste
     lisible. Cf. app/blog/[slug]/page.tsx et app/blog/page.tsx. */
  schemaSurelevationFondations: "/photos/pedagogie/schema-surelevation-fondations.jpg",
  schemaDevis7Lignes: "/photos/pedagogie/schema-devis-7-lignes.jpg",

  /* 05/09 : schéma DPE déclaré pour l'article « DPE F ou G ». Le fichier existait sur le
     disque mais n'était accessible depuis aucune page, faute de clé. Ouvert et vérifié :
     coupe de bâtiment avec les cinq postes de travaux repérés, échelle complète des
     étiquettes A à G avec leurs seuils en kWh/m²/an, et sources citées (ADEME, arrêté du
     31 mars 2021). Il porte lui-même la mention « Schéma à vocation pédagogique ».
     Employé avec `schema: true`, donc affiché entier et annoncé comme un schéma. */
  schemaDpePassoire: "/photos/maquette/schema-dpe-passoire.jpg",

  /* ═══════════════════════════════════════════════════════════════════════════
     06/09/2026 — 52 IMAGES RÉCUPÉRÉES ET DÉCLARÉES.

     Origine : l'export de la conversation WhatsApp du client (442 Mo) n'avait jamais été
     décompressé. On y a trouvé 460 images, plus 170 restées en vrac dans Downloads et 48
     dans le dossier publicitaire. Après dédoublonnage contre le site — MD5 pour le fichier
     identique, empreinte perceptuelle pour la même prise réexportée par WhatsApp, qui
     change le MD5 sans changer l'image — il restait 283 inédites, dont 52 exploitables.
     Le reste est massivement des captures d'écran, des conversations et des documents.

     Chaque image a été OUVERTE et décrite avant d'être nommée : les noms d'origine sont
     des numéros WhatsApp qui ne disent rien, et se fier à un nom de fichier est
     exactement la faute qui a produit les légendes fausses corrigées la veille.

     Les six schema* sont des INFOGRAPHIES DE LA MARQUE (logo ARCHI PILOTE RÉNOVATION et
     signature « L'Exigence du Détail, la Sérénité du Délai » incrustés). Ce sont des
     illustrations générées, pas des photographies : les afficher TOUJOURS avec
     schema:true — donc annoncées « Schéma pédagogique » et montrées ENTIÈRES, car elles
     portent leur titre en haut et leur signature en bas ; un recadrage les décapite.
     ═══════════════════════════════════════════════════════════════════════════ */
  /* État avant travaux d'une grande pièce : murs entièrement revêtus de faïence émaillée calibré */
  chAzulejosAvantTravaux: "/photos/chantiers/chAzulejosAvantTravaux.jpeg",
  /* Baignoire îlot ovale en acrylique blanc posée le long du mur, alimentée par une colonne de r */
  chBaignoireIlotColonneChromee: "/photos/chantiers/chBaignoireIlotColonneChromee.jpeg",
  /* Bibliothèque-niche sur mesure en contreplaqué (tablettes à angles arrondis, caissons décalés */
  chBibliothequeNicheContreplaque: "/photos/chantiers/chBibliothequeNicheContreplaque.jpeg",
  /* Bibliothèque sur mesure encastrée dans une niche : caisson toute hauteur en panneaux peints  */
  chBibliothequeNicheGrisTaupe: "/photos/chantiers/chBibliothequeNicheGrisTaupe.jpeg",
  /* Menuiserie sur mesure en cours de pose : bureau/console en panneaux plaqués chêne clair avec */
  chBureauConsoleChenePlateauGalbe: "/photos/chantiers/chBureauConsoleChenePlateauGalbe.jpeg",
  /* Pose en cours d'un carrelage grès cérame effet bois en point de Hongrie (lames à abouts coup */
  chCarrelageBoisBatonsRompusCroisillons: "/photos/chantiers/chCarrelageBoisBatonsRompusCroisillons.jpeg",
  /* Chambre d'enfant avec agencement sur mesure en panneaux plaqués chêne très clair : structure */
  chChambreLitCabaneCheneClair: "/photos/chantiers/chChambreLitCabaneCheneClair.jpeg",
  /* Chambre d'enfant en fin d'agencement : lit mezzanine sur mesure avec garde-corps à barreauda */
  chChambreLitMezzanineSurMesure: "/photos/chantiers/chChambreLitMezzanineSurMesure.jpeg",
  /* Charpente traditionnelle neuve (pannes, chevrons, contreventement) montée sur des murs en bl */
  chCharpenteExtensionBlocsBeton: "/photos/chantiers/chCharpenteExtensionBlocsBeton.jpeg",
  /* Vue depuis une ouverture percée dans un mur ancien : charpente neuve à pannes et chevrons po */
  chCharpenteExtensionDepuisOuverture: "/photos/chantiers/chCharpenteExtensionDepuisOuverture.jpeg",
  /* Vue plongeante sur le faîtage et les arêtiers d'une charpente neuve en sapin, appuyée sur un */
  chCharpenteFaitageArretiers: "/photos/chantiers/chCharpenteFaitageArretiers.jpeg",
  /* Charpente neuve en sapin (arbalétriers, pannes sur sabots métalliques, entrait) reconstruite */
  chCharpenteNeuvePignonMitoyen: "/photos/chantiers/chCharpenteNeuvePignonMitoyen.jpeg",
  /* Deux châssis vitrés menuisés sur mesure en contreplaqué de bouleau (dormants et traverses as */
  chChassisVitresBouleauAvantPose: "/photos/chantiers/chChassisVitresBouleauAvantPose.jpeg",
  /* Grand panneau MDF en cours d'usinage à la défonceuse Festool sur tréteaux : claustra ajouré  */
  chClaustraMdfUsinageDefonceuse: "/photos/chantiers/chClaustraMdfUsinageDefonceuse.jpeg",
  /* Couloir en cours de cloisonnement : ossature métallique complète (rails au sol et en plafond */
  chCouloirOssatureMetalliquePlaque: "/photos/chantiers/chCouloirOssatureMetalliquePlaque.jpeg",
  /* Couloir livré : placards toute hauteur en panneaux plaqués chêne clair, poignée-gorge noire  */
  chCouloirPlacardsCheneDoublageBlanc: "/photos/chantiers/chCouloirPlacardsCheneDoublageBlanc.jpeg",
  /* Enfilade de couloir livrée dans un appartement haut de gamme : placards toute hauteur en pan */
  chCouloirPlacardsChenePoigneeGorge: "/photos/chantiers/chCouloirPlacardsChenePoigneeGorge.jpeg",
  /* Couverture neuve en zinc à tasseaux, avec chatières et bavettes, posée sur un appentis en fo */
  chCouvertureZincTasseauxAppentis: "/photos/chantiers/chCouvertureZincTasseauxAppentis.jpeg",
  /* Cuisine ouverte avec îlot, en fin de chantier : linéaire de façades bleu ciel laquées brilla */
  chCuisineBleuCielIlotLaque: "/photos/chantiers/chCuisineBleuCielIlotLaque.jpeg",
  /* Cuisine linéaire dans un logement ancien : façades bleu vif laquées avec poignées coquille n */
  chCuisineBleuVifPoigneesCoquille: "/photos/chantiers/chCuisineBleuVifPoigneesCoquille.jpeg",
  /* Cuisine en couloir livrée dans un appartement en étage : façades noir mat sans poignée en pa */
  chCuisineCouloirNoirMatHotte: "/photos/chantiers/chCuisineCouloirNoirMatHotte.jpeg",
  /* Cuisine en L livrée : façades blanc laqué brillant sans poignée, colonnes toute hauteur inté */
  chCuisineLBlancLaqueDoubleFour: "/photos/chantiers/chCuisineLBlancLaqueDoubleFour.jpeg",
  /* Cuisine en L à façades blanc mat sans poignée, plan de travail et crédence en stratifié gris */
  chCuisineLBlancMatLaveLinge: "/photos/chantiers/chCuisineLBlancMatLaveLinge.jpeg",
  /* Cuisine en L à façades bleu vif brillantes (panneaux visiblement laqués/repeints, chants bla */
  chCuisineLBleuVifColonnes: "/photos/chantiers/chCuisineLBleuVifColonnes.jpeg",
  /* Petite cuisine en L livrée et habitée : façades sans poignée en décor chêne gris foncé, colo */
  chCuisineLCheneGrisFonce: "/photos/chantiers/chCuisineLCheneGrisFonce.jpeg",
  /* Cuisine linéaire en fin de pose : caissons bas et meubles hauts blanc mat sans poignée, colo */
  chCuisineLineaireBlancPanneauBleu: "/photos/chantiers/chCuisineLineaireBlancPanneauBleu.jpeg",
  /* Cuisine ouverte sur séjour en fin de second œuvre : caissons bas et îlot en façades noir mat */
  chCuisineNoirMatIlotStratifie: "/photos/chantiers/chCuisineNoirMatIlotStratifie.jpeg",
  /* Dégagement/dressing livré : deux enfilades de placards toute hauteur, portes coulissantes à  */
  chDressingPortesCoulissantesMiroir: "/photos/chantiers/chDressingPortesCoulissantesMiroir.jpeg",
  /* État avant ravalement de la même maison : ancien enduit ciment gris tyrolien tacheté de rebo */
  chFacadeAvantRavalementTyrolien: "/photos/chantiers/chFacadeAvantRavalementTyrolien.jpeg",
  /* Façade de maison de village en cours de ravalement : enduit de finition gratté beige avec en */
  chFacadeRavalementEnduitGratte: "/photos/chantiers/chFacadeRavalementEnduitGratte.jpeg",
  /* Fenêtre de toit posée dans un rampant de comble : chevêtre et embrasure en bois brut, ossatu */
  chFenetreToitChevetreRampant: "/photos/chantiers/chFenetreToitChevetreRampant.jpeg",
  /* Même pièce après travaux : murs et sol habillés de grès cérame grand format effet marbre vei */
  chGresCerameMarbreApresTravaux: "/photos/chantiers/chGresCerameMarbreApresTravaux.jpeg",
  /* Rampant de comble en cours d'isolation : écran de sous-toiture noir entre chevrons, isolatio */
  chIsolationRampantOuateFibres: "/photos/chantiers/chIsolationRampantOuateFibres.jpeg",
  /* Agencement sur mesure en cours : structure de lit-mezzanine avec garde-corps à barreaux, esc */
  chLitMezzanineStructureEscalier: "/photos/chantiers/chLitMezzanineStructureEscalier.jpeg",
  /* Ossature métallique de cloisons montée sur un plateau : rails haut et bas, montants et huiss */
  chOssatureCloisonsHuisserieMetal: "/photos/chantiers/chOssatureCloisonsHuisserieMetal.jpeg",
  /* Ancienne pièce d'eau/cuisine en cours de reprise : ossature métallique montée devant un mur  */
  chOssatureDevantFaienceOrigine: "/photos/chantiers/chOssatureDevantFaienceOrigine.jpeg",
  /* Panneau de porte ou vantail laqué blanc à claustra ajouré (motif organique de cellules irrég */
  chPanneauClaustraLaqueBlanc: "/photos/chantiers/chPanneauClaustraLaqueBlanc.jpeg",
  /* Vue depuis l'embrasure d'une porte sur un parquet ancien en pin massif à larges lames, cloué */
  chParquetPinLargesLamesVitrifie: "/photos/chantiers/chParquetPinLargesLamesVitrifie.jpeg",
  /* Petite pièce entièrement habillée de panneaux plaqués bois clair, du sol au plafond, avec ni */
  chPieceHabillagePanneauxBoisClair: "/photos/chantiers/chPieceHabillagePanneauxBoisClair.jpeg",
  /* Pose d'un plancher chauffant hydraulique : tubes PER orange déroulés en escargot et agrafés  */
  chPlancherChauffantPerEscargot: "/photos/chantiers/chPlancherChauffantPerEscargot.jpeg",
  /* Salle d'eau terminée : cabine de douche d'angle à porte coulissante et profilés noirs, colon */
  chSdbCabineDoucheAngleNoire: "/photos/chantiers/chSdbCabineDoucheAngleNoire.jpeg",
  /* Salle de bain aménagée sous combles : meuble double vasque en teck massif à portes persienné */
  chSdbComblesVasquesPierre: "/photos/chantiers/chSdbComblesVasquesPierre.jpeg",
  /* Même salle de bain vue vers la douche : douche à receveur extra-plat avec parois de verre su */
  chSdbDoucheReceveurExtraPlat: "/photos/chantiers/chSdbDoucheReceveurExtraPlat.jpeg",
  /* Salle de bain en fin de chantier : meuble double vasque en teck massif à portes persiennées, */
  chSdbMeubleTeckDoubleVasque: "/photos/chantiers/chSdbMeubleTeckDoubleVasque.jpeg",
  /* Salle de bain en fin de pose : grande vasque double céramique posée sur une tablette en chên */
  chSdbVasqueDoubleTabletteChene: "/photos/chantiers/chSdbVasqueDoubleTabletteChene.jpeg",
  /* Toiture-terrasse déposée en cœur d'îlot parisien : solivage bois ancien mis à nu, laine miné */
  chToitureTerrasseDeposeeSolivage: "/photos/chantiers/chToitureTerrasseDeposeeSolivage.jpeg",

  /* Illustration de marque sur fond bleu nuit : vue axonometrique eclatee d'un appartement ancie */
  schemaAppartementCouches: "/photos/pedagogie/schema-appartement-couches.jpg",
  /* Infographie de marque (illustration 3D éclatée, pas une photo de chantier) : appartement déc */
  schemaAppartementPlateauxPilotage: "/photos/pedagogie/schema-appartement-plateaux-pilotage.jpg",
  /* Infographie de marque : modele de devis de travaux vierge annote par six points de contrôle (identite et */
  schemaDevisSixLoupes: "/photos/pedagogie/schema-devis-six-loupes.jpg",
  /* Infographie de marque : coupe 3D d'un logement coupee en deux — a gauche le gros oeuvre/seco */
  schemaGrosOeuvreSecondOeuvre: "/photos/pedagogie/schema-gros-oeuvre-second-oeuvre.jpg",
  /* Infographie de marque : coupe 3D d'un immeuble ancien parisien opposant un mur de maconnerie */
  schemaNatureDesMurs: "/photos/pedagogie/schema-nature-des-murs.jpg",
  /* Infographie de marque ARCHI PILOTE RENOVATION : coupe 3D d'un pavillon expliquant le circuit */
  schemaVmcCircuitAir: "/photos/pedagogie/schema-vmc-circuit-air.jpg",
} as const;

/* Décline une URL Unsplash (w=1600) en srcset 480/768/1200/1600 —
   transposition du cahier images V3 §3.2. Les fichiers locaux (une seule
   variante servie) ne produisent pas de srcset. */
export const srcSetOf = (url: string) =>
  url.includes("w=1600")
    ? [480, 768, 1200, 1600].map((w) => `${url.replace(/w=1600/, `w=${w}`)} ${w}w`).join(", ")
    : undefined;
