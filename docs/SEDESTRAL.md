# Synchronisation Sedestral → blog

Publication automatique des articles rédigés dans Sedestral, toutes les heures,
sans intervention manuelle.

## Pourquoi GitHub Actions et pas un cron Vercel

Le blog est statique : les articles sont figés dans le dépôt au moment du build.
Une route serverless appelée par Vercel Cron ne pourrait ni écrire les images
dans `public/`, ni ajouter un article — le système de fichiers est en lecture
seule en production, et tout ce qui y serait écrit disparaîtrait au déploiement
suivant.

La synchronisation tourne donc **hors du site**, dans un runner GitHub Actions
qui écrit dans le dépôt et pousse. Vercel déploie sur ce push, comme pour
n'importe quel commit.

## Cycle d'un article

1. `GET /alya/blog-articles?states=DRAFT`
2. Téléchargement de la couverture et des images du corps dans
   `public/uploads/sedestral/<slug>/`, réécriture des URLs vers ces copies
   internes, retrait des liens sortants vers sedestral.com, assainissement du HTML
3. Écriture dans `content/blog/generated.json`, commit, push → build Vercel
4. Attente de la mise en ligne réelle : le script interroge
   `https://<site>/blog/<slug>` jusqu'à obtenir un HTTP 200 (15 min max)
5. **Seulement à ce moment** :
   `PATCH /alya/blog-articles/{id}` avec `{ "state": "PUBLISHED", "url": … }`

Si le déploiement dépasse le délai ou si le PATCH échoue, l'article reste en
attente de confirmation dans l'état local et la confirmation est retentée
au run suivant. Il n'est jamais réimporté.

## Idempotence

`content/blog/_sedestral-state.json` conserve l'id Sedestral de chaque article
importé, son slug, son URL et la date de confirmation :

```json
{ "version": 1, "articles": { "art_42": { "slug": "…", "url": "…", "importedAt": "…", "confirmedAt": "…" } } }
```

Un id présent dans ce fichier n'est jamais réimporté, même si l'API le renvoie
encore à l'état DRAFT. Ne pas éditer ce fichier à la main.

## Gestion des erreurs

Chaque article est traité isolément. Ce qui est journalisé sans interrompre
le reste :

| Situation | Conséquence |
|---|---|
| Titre, corps ou couverture manquant | Article ignoré, repris au run suivant |
| Couverture non téléchargeable | Article ignoré (la maquette exige une image) |
| Image du corps non téléchargeable | Article publié, URL d'origine conservée pour cette image |
| Page non en ligne dans le délai | Pas de PATCH, confirmation retentée au run suivant |
| PATCH en échec | Article en ligne, confirmation retentée au run suivant |

Les incidents apparaissent en annotations sur le run GitHub. Un run qui a
rencontré au moins une erreur bloquante se termine en échec, ce qui déclenche
la notification GitHub.

## Configuration

**Secret** — `Settings → Secrets and variables → Actions → Secrets` :
`SEDESTRAL_API_KEY`.

**Variable** — même écran, onglet `Variables` : `SITE_ORIGIN`, l'origine
publique du site sans slash final.

La clé n'est jamais préfixée `NEXT_PUBLIC_`, n'existe que dans le runner et
n'entre jamais dans le bundle envoyé au navigateur.

## Commandes

```bash
npm run sedestral:dry    # lit l'API, affiche les champs, n'écrit rien
npm run sedestral:sync   # cycle complet (commit + push)
node scripts/sedestral-sync.mjs --no-push   # import local sans push ni PATCH
```

Depuis GitHub : onglet `Actions → Synchronisation Sedestral → Run workflow`,
avec une case « essai à blanc ».

## Articles éditoriaux et articles importés

`app/lib-articles.ts` fusionne les deux sources et les trie par date :

- `ARTICLES` dans `app/data.ts` — articles écrits à la main, corps en
  paragraphes, `photo` = clé du catalogue `PHOTOS`
- `content/blog/generated.json` — articles Sedestral, corps HTML,
  `photo` = chemin interne

Les slugs sont dédoublonnés contre les deux sources : un article Sedestral qui
reprendrait un slug existant reçoit un suffixe `-2`. Les articles écrits à la
main ne sont jamais modifiés par le script.
