# Emplacements photo à pourvoir

Mise à jour : 05/09/2026.

Ce document liste les emplacements d'images **volontairement laissés vides** dans le code,
et le sujet précis attendu à chaque endroit. Il sert de bon de commande photo.

## Pourquoi des emplacements vides

Le client a signalé le 04/09 que « les mêmes photos reviennent partout ». La mesure confirme
le reproche, et l'explique.

Deux outils ont été écrits pour l'établir :

- `scripts/memes-scenes.py` regroupe les fichiers qui montrent **la même scène**, même
  recadrés différemment. C'est le point qu'un contrôle d'empreinte classique ratait : deux
  exports du même cliché, l'un un peu plus large que l'autre, obtenaient des empreintes
  très éloignées (mesuré : 97 et 144 sur 256) alors que l'œil reconnaît immédiatement la
  même pièce. L'outil détruit donc volontairement le détail — image ramenée en 32×32,
  floutée, contraste normalisé — pour ne comparer que la composition d'ensemble.
- `scripts/surexposition.py` compte, pour chaque scène, sur **combien de pages** le visiteur
  la rencontre. Il résout les clés de `lib-photos.ts` (une image est le plus souvent
  désignée par une clé, pas par un chemin) et découpe `data.ts` article par article — sans
  quoi trente articles de blog ne pesaient qu'une seule page dans le comptage.

Résultat au 05/09, avant correction : **399 fichiers, mais seulement 317 scènes distinctes**,
et 48 scènes affichées sur trois pages ou plus, dont une sur huit.

Le diagnostic de fond tient en une phrase : **le site comporte plus d'emplacements d'images
que la photothèque ne contient de scènes**. Tant que ce déséquilibre dure, toute
« correction » consiste à déplacer la répétition d'une page à l'autre.

D'où la règle appliquée : quand aucune photo honnête n'est disponible pour un emplacement,
**l'emplacement est retiré et inscrit ici**, plutôt que rempli par une image hors sujet ou
par un énième doublon.

## Ce qui a été corrigé le 05/09

| Scène | Avant | Après | Comment |
|---|---|---|---|
| Isolation sous rampants (`chIsolationCombles`) | 8 pages | 2 pages | 4 emplacements retirés, 1 remplacé, 2 conservés |
| Mur éventré, gravats et perforateur (`chDemolitionCloisonBoisPlatre` + 2 autres noms) | 5 pages | 2 pages | 1 emplacement retiré, 2 remplacés par d'autres scènes |
| Cloison dégarnie, embrasure dégagée (`chDemolitionLattisPlatreChantier1` + 1) | 3 pages | 3 pages | déplacée de la galerie vers `/gros-oeuvre-structure` |

Un cas mérite d'être signalé à part : `chIsolationCombles` ne montrait pas une rénovation
mais une **construction neuve** — briques monomur rouges encore nues, charpente neuve,
aucun ouvrage existant. Elle illustrait pourtant un témoignage de « rénovation énergétique »
et la page `/renovation-energetique`. Elle n'est conservée que là où le neuf est cohérent :
l'article sur la sortie de passoire énergétique et `/extension-maison`, une extension étant
par nature une construction neuve.

## Emplacements à pourvoir

### 1. `/demarches-administratives-renovation` — section « Voisinage et nuisances »

**Attendu :** l'impact du chantier sur l'immeuble et la rue, pas la démolition elle-même.
Protection des parties communes, escalier bâché, affichage d'information dans le hall,
benne ou zone de stockage sur la voirie.

**Pourquoi c'est le bon sujet :** la section est une liste d'engagements envers le
voisinage. La photo qui s'y trouvait montrait un mur cassé — illustration du bruit, pas des
mesures prises. Aucune photo de protection de parties communes n'existe dans la photothèque.

### 2. `/guides` — rangée « Repères visuels »

**Attendu :** un **quatrième schéma pédagogique**, pas une photographie.

**Pourquoi :** la rangée aligne trois schémas (répartition de budget, ouverture de mur
porteur, parcours en copropriété). Une photo de chantier y était l'intruse. Sujet suggéré,
cohérent avec le reste : les postes de déperdition thermique d'un logement, ou les jalons
d'un calendrier de chantier.

### 3. `/renovation-energetique` — grille « isolation »

**Attendu :** une isolation de combles ou de rampants sur **bâti existant**.

**Pourquoi :** c'est le geste le plus emblématique de la rénovation énergétique, et la seule
photo qui le montrait était une construction neuve. La page ne conserve donc qu'une
isolation par l'intérieur en pièce d'eau, ce qui est plus étroit que son sujet.

## Ce qui reste à traiter

45 scènes sont encore affichées sur trois pages ou plus. Le détail se régénère à tout
moment :

```
python3 scripts/surexposition.py
```

Parmi elles, quatre sont des **schémas** (VMC, mur porteur, carottage, démarches en
copropriété). Leur réemploi sur des pages parentes est légitime : un schéma est une
référence, pas une preuve de chantier. Ils ne sont pas à remplacer.

Deux sujets sont par ailleurs à arbitrer avec le client :

- La galerie des réalisations contient des vues de **terrasse et de piscine en pleine
  campagne**, sur un site consacré à la rénovation d'appartements à Paris et en
  Île-de-France.
- La photothèque contient une livraison de **coque de piscine à la grue**
  (`chLivraisonPanneauPrefabGrue`), portant le marquage d'une autre société. Elle n'est
  affichée nulle part et ne doit pas l'être.
