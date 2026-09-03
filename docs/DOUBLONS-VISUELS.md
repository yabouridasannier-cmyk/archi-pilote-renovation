# Doublons visuels de la photothèque

**Généré le 03/09/2026** par `scripts/doublons-visuels.py` (empreinte perceptuelle dHash 16×16, seuil 12/256).
Pour régénérer : `python3 scripts/doublons-visuels.py`

## Pourquoi ce document

Le client a signalé à plusieurs reprises « les mêmes photos partout ». La cause est
identifiée : **un contrôle MD5 ne détecte pas deux exports de la même prise de vue
recadrés différemment**. Exemple avéré : `chDemolitionCloisonBoisPlatre.jpeg` et
`chDemolitionLattisPlatreOuverture.jpeg` sont le même cliché (même perforateur au même
endroit sur le tas de gravats, même câble enroulé à l'identique), l'un faisant 1200 px
de large et l'autre 1186 px — donc deux empreintes MD5 différentes, et un doublon
invisible à tous les contrôles automatiques faits jusqu'ici.

**39 % de la photothèque est concernée : 152 images sur 387, réparties en 75 groupes.**

## Règles d'usage

1. Avant d'ajouter une photo à une page, chercher son nom ci-dessous. Si elle appartient
   à un groupe, **aucune autre image du même groupe ne doit apparaître sur la même page**,
   et surtout pas dans la même grille.
2. Les groupes sont des **candidats à vérifier à l'œil**, pas un verdict automatique.
   Certains rapprochent deux ouvrages réellement distincts photographiés dans le même
   décor. Ouvrir les deux images avant de trancher.
3. Certains groupes sont des doublons stricts (même fichier sous deux noms) et un des
   deux fichiers devrait être supprimé de la photothèque :
   `chDemolitionBoiseriesHaussmannien` ≡ `chIsolationPhoniqueGranulesPlancher`,
   `chPlacagesNoyerEnAttente` ≡ `chPlacagesNoyerEnAttente2`,
   `chOptiqueComptoirCarcasseBrute` ≡ `chOptiqueComptoirCarcasseBrute2`,
   `chOssatureBoisComptoirCommercial2` ≡ `chOssatureBoisComptoirLocalCommercial`,
   `chPoutreAcierSoudure` ≡ `chPoutreAcierSoudureAngle2`,
   `chSousCouchePanneauxOSB` ≡ `chSousCouchePanneauxOSB2`.
4. Le vrai remède reste **de nouvelles photos de chantier** : les 244 fichiers de
   `public/photos/chantiers/` sont tous déjà employés au moins une fois.

## Groupes détectés

[3] chDressingBlancOuvertChantier2.jpeg  ≈  chEnsembleRangementRadiateurClaustra.jpeg  ≈  chRangementRadiateurEtageresOuvertes.jpeg
[3] chPortiqueAcierAngleGaine.jpeg  ≈  chPortiqueAcierAngleMurDegarni2.jpeg  ≈  chPoutreAcierAngleSoudeVue1.jpeg
[2] chArmoireVitreeVerreDepoli.jpeg  ≈  chBibliothequePanneauxMoulures.jpeg
[2] chBibliothequeBlancheVitreeChantier.jpeg  ≈  chBibliothequesMdfBrutOuvertes.jpeg
[2] chBibliothequeChenePieceComplete.jpeg  ≈  chEtagereChantierEchelle.jpeg
[2] chBibliothequeCouloirTrappe.jpeg  ≈  chCouloirBibliothequeChaleureux.jpeg
[2] chBibliothequeRadiateurIntegre.jpeg  ≈  chDressingBlancOuvertChantier1.jpeg
[2] chBoiserieCourbeNicheEtageres.jpeg  ≈  chEtagereCoinCableApparent.jpeg
[2] chComptoirBarColonneFonteCarreauxAnciens.jpeg  ≈  chComptoirBarColonneFonteVueLarge.jpeg
[2] chComptoirBarEtageresOutils.jpeg  ≈  chComptoirBarMouluresFinition.jpeg
[2] chCouloirBoisEscalierVue.jpeg  ≈  chHabillageMdfSousPente.jpeg
[2] chCouloirBoisGaleriesBanc.jpeg  ≈  chOptiquePresentoirsMuraux.jpeg
[2] chCouloirDressingToilettes.jpeg  ≈  chDressingProcheToilettes.jpeg
[2] chCouloirParquetChevronsPorteBois.jpeg  ≈  chCouloirParquetChevronsPortesOuvertes.jpeg
[2] chCouloirPorteAccordeonBois.jpeg  ≈  chMenuiserieClaustra.jpeg
[2] chCouloirPorteBleueNoyer.jpeg  ≈  chDressingBufetNoyerPorteBleue.jpeg
[2] chCuisineAnthraciteCarreauxCiment.jpeg  ≈  chCuisineAnthraciteGalerie.jpeg
[2] chCuisineAnthraciteCarreauxVue2.jpeg  ≈  chCuisineNoireBrillantePoigneesCuivrees.jpeg
[2] chCuisineBlancheBrillanteMarbre.jpeg  ≈  chCuisineBlanchePendantsFinie.jpeg
[2] chCuisineBlancheElectromenagerLG.jpeg  ≈  chCuisineBlancheFinieIlot.jpeg
[2] chCuisineBleuCanardBrillante.jpeg  ≈  chCuisineBleuCanardVueDeux.jpeg
[2] chCuisineNoireSejourFinie.jpeg  ≈  chCuisineSejourParquetChevrons.jpeg
[2] chCuisineNoireSkylightFinie.jpeg  ≈  chCuisinePlanNoirFacadesCremeVelux.jpeg
[2] chCuisineSauge.jpeg  ≈  cuisine-renovee-vert-sauge.jpg
[2] chDemolitionBoiseriesHaussmannien.jpeg  ≈  chIsolationPhoniqueGranulesPlancher.jpeg
[2] chDemolitionCloisonBoisPlatre.jpeg  ≈  chDemolitionGravatsChantier.jpeg
[2] chDemolitionLattisPlatreChantier1.jpeg  ≈  chDemolitionOuvertureCouloir.jpeg
[2] chDemolitionLattisPlatreChantier2.jpeg  ≈  chDemolitionMursDecapes.jpeg
[2] chDetailTiroirCoulisses.jpeg  ≈  chDetailTiroirMainOuverture.jpeg
[2] chDressingArrondiCouloirParquet1.jpeg  ≈  rangement-integre-couloir.jpg
[2] chDressingArrondiCouloirParquet2.jpeg  ≈  chDressingBeigeAngleLumineux.jpeg
[2] chDressingBlancCarcasseCrochets.jpeg  ≈  chDressingCarcasseChantEnBois.jpeg
[2] chDressingBlancInterphone.jpeg  ≈  chDressingLaqueBlancCouloirPlans.jpeg
[2] chDressingBlancPoigneesBoisVerticales.jpeg  ≈  chDressingLaqueBlancPoigneesBois.jpeg
[2] chDressingBlancTiroirsOuverts.jpeg  ≈  chDressingSousPenteBlancTiroirs.jpeg
[2] chDressingBrutKraftSpots.jpeg  ≈  chDressingNoyerAngleDeuxPortes.jpeg
[2] chDressingBrutTiroirsRoulettes.jpeg  ≈  chPanneauKraftEchelleChantier.jpeg
[2] chDressingBufetNoyerMoulures1.jpeg  ≈  chDressingNoyerBufetMoulures4.jpeg
[2] chDressingBufetNoyerMoulures3.jpeg  ≈  chDressingNoyerMouluresFenetre.jpeg
[2] chDressingEntreeNoyerChantier.jpeg  ≈  chDressingNoyerCarcassesVides.jpeg
[2] chDressingMdfBrutNiche.jpeg  ≈  chNicheBoisAlcoveFinie.jpeg
[2] chDressingMiroirCouloir.jpeg  ≈  chPlacardKraftCouloirEtroit.jpeg
[2] chDressingNoyerCarcasseTringle.jpeg  ≈  chDressingNoyerOuvertOutils.jpeg
[2] chDressingNoyerMoulures2.jpeg  ≈  chDressingNoyerMouluresAngle1.jpeg
[2] chDressingSousPenteBlancPortes.jpeg  ≈  chDressingSousPenteVeluxPoigneesNoires.jpeg
[2] chDressingSousPenteTiroirs2.jpeg  ≈  chRangementSousPenteCombles.jpeg
[2] chEntreeDressingNoyerPorte.jpeg  ≈  chPlacardTableauElectriqueIntegre.jpeg
[2] chEscalierBoisConstructionMarches.jpeg  ≈  chEscalierBoisFlottantVueBas.jpeg
[2] chEscalierBoisFlottantPalier.jpeg  ≈  chEscalierOuvertConstruction.jpeg
[2] chEtagereBoisAssemblageAtelier.jpeg  ≈  chEtagereCactusSurMesure.jpeg
[2] chEtagereBureauNicheRadiateur.jpeg  ≈  chEtagereMuraleMainOuvriere.jpeg
[2] chFacadeRavalementEchafaudage2.jpeg  ≈  chRavalementArdoise.jpeg
[2] chFenetreBoisDecorativeChantier.jpeg  ≈  chVerriereInterieurePentagonale.jpeg
[2] chGrilleAerationMdfAtelier2.jpeg  ≈  chGrilleAerationMdfSurMesure.jpeg
[2] chIsolationPhoniqueGranulesPlancher2.jpeg  ≈  chPlancherSolivesBeton2.jpeg
[2] chNicheArrondieCouloirBacklight.jpeg  ≈  menuiserie-sur-mesure-entree.jpg
[2] chNicheArrondieRubanBleu.jpeg  ≈  chPlacardCompteurElectriqueArrondi.jpeg
[2] chNicheBibliothequeCouloir.jpeg  ≈  chRangementChantierEncombre.jpeg
[2] chNicheBoisPortesArquees.jpeg  ≈  chOuvertureImposteVitreeDoubleParte.jpeg
[2] chOptiqueAccueilFinition.jpeg  ≈  chOptiquePresentoirsVitrine.jpeg
[2] chOptiqueComptoirAccueilFini.jpeg  ≈  chOptiqueComptoirAccueilFini2.jpeg
[2] chOptiqueComptoirCarcasseBrute.jpeg  ≈  chOptiqueComptoirCarcasseBrute2.jpeg
[2] chOssatureBoisComptoirCommercial2.jpeg  ≈  chOssatureBoisComptoirLocalCommercial.jpeg
[2] chPlacagesNoyerEnAttente.jpeg  ≈  chPlacagesNoyerEnAttente2.jpeg
[2] chPlancherSolivesBeton1.jpeg  ≈  chPlancherSolivesBoisRangees.jpeg
[2] chPorteCoulissanteClaustraChene2.jpeg  ≈  chPorteCoulissanteClaustraChene3.jpeg
[2] chPortiqueAcierAngleFenetre.jpeg  ≈  chPoutreAcierPlafondMurDegarni.jpeg
[2] chPoteauAcierPlatinePied.jpeg  ≈  chPoteauAcierScelleGravats.jpeg
[2] chPoutreAcierMurDegarni.jpeg  ≈  chPoutreAcierMurPierreApparente.jpeg
[2] chPoutreAcierSoudure.jpeg  ≈  chPoutreAcierSoudureAngle2.jpeg
[2] chSdbVasquesPoseMeubleBeige.jpeg  ≈  chVasqueMarbreVanite.jpeg
[2] chSousCouchePanneauxOSB.jpeg  ≈  chSousCouchePanneauxOSB2.jpeg
[2] chVasqueBoisMuraleChantier.jpeg  ≈  chVasqueDoubleBoisCannele.jpeg
[2] pedagogie-beton-cire-macro.jpg  ≈  44-beton-cire-macro.jpeg
[2] pedagogie-travertin-macro.jpg  ≈  43-travertin-macro.jpeg
