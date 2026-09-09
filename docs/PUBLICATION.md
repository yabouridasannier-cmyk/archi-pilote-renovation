# Publication du site — comment ça marche réellement

Ce document décrit le chemin exact d'une modification jusqu'au visiteur. Il
existe parce que ce chemin n'est **pas** celui qu'on suppose par défaut sur un
projet Next.js hébergé chez Vercel, et que cette supposition a coûté une semaine
de confusion : des commits poussés sur GitHub sans effet visible, un dépôt qui ne
ressemblait plus au site en ligne, un outil de synchronisation qui tourne dans le
vide. Tout est expliqué ci-dessous. Rien n'est cassé — c'est le branchement qui
n'est pas celui attendu.

Rédigé le 09/09/2026. À tenir à jour si l'un des trois branchements change.

---

## 1. Les trois briques

| Brique | Quoi | Où |
|---|---|---|
| **Code** | dépôt Git, branche `main` = la vérité | `github.com/yabouridasannier-cmyk/archi-pilote-renovation` (public) |
| **Hébergement** | Vercel, projet `global-renovation-maquette`, plan **Hobby** | équipe `yabouridasannier-1537s-projects` |
| **Domaine** | `archipiloterenovation.com`, enregistré chez **Hostinger**, DNS chez Hostinger | pointe vers Vercel (`76.76.21.21`) |

## 2. Le point qui change tout : Vercel n'est PAS branché sur GitHub

Sur la plupart des projets Vercel, un push sur `main` déclenche un déploiement.
**Ici, non.** Le projet Vercel n'a aucun lien Git (`link: null`). Il est
déployé **depuis une machine locale, en ligne de commande** :

```bash
npm run build           # construit les 101 pages
vercel deploy --prod    # envoie le résultat sur Vercel → production
```

Conséquences directes, à garder en tête :

- **Pousser sur GitHub ne publie rien.** Le dépôt est un lieu de partage et de
  sauvegarde du code, pas un déclencheur.
- **Ce qui est en ligne = le dernier `vercel deploy --prod` lancé**, depuis la
  copie locale de celui qui l'a lancé — quel que soit l'état de GitHub à ce
  moment-là.
- Si GitHub et le site divergent, ce n'est pas que « le dépôt est faux » : c'est
  que quelqu'un a déployé sans pousser, ou poussé sans déployer. Les deux sont
  arrivés en septembre 2026 (26 commits déployés non poussés d'un côté, 10
  commits poussés non déployés de l'autre). Depuis le 09/09, `main` sur GitHub
  et la production coïncident.

### Règle de cohabitation, tant que ce branchement reste tel quel

1. **`main` sur GitHub est la référence.** Avant tout travail : `git pull`.
2. **On ne déploie que depuis un `main` à jour** (pull fait, rien d'ignoré).
3. **Après un déploiement, on pousse** dans la foulée, pour que GitHub reste
   égal à ce qui est en ligne.
4. Personne ne force-push sur `main`.

## 3. Qui a accès à quoi

| | GitHub | Vercel | Hostinger (domaine) |
|---|---|---|---|
| Yanis (`yabouridasannier-cmyk`) | admin | propriétaire (seul membre) | oui |
| Thibaut / Sedestral (`agencyinside`) | **écriture** (push) | **impossible sur le plan Hobby** — pas de membres | non |

Le plan Hobby de Vercel n'accepte **aucun membre supplémentaire**. Donner un
« accès Vercel » à un tiers suppose soit de passer en Pro, soit de rendre cet
accès inutile en branchant Vercel sur GitHub (voir §6).

## 4. Le domaine — et pourquoi le site peut « disparaître » sans qu'on ait rien fait

Le domaine a été enregistré le 28/08/2026. L'ICANN impose de **vérifier l'e-mail
du titulaire sous 15 jours**, sinon le registrar suspend le domaine. C'est arrivé
le **09/09/2026** : les serveurs DNS ont été remplacés par
`ns1/ns2.verification-hold.dns-suspended.com`, et toute adresse du site renvoie
une page « Your domain is suspended ».

- Le site, lui, est intact sur Vercel. On peut le vérifier en forçant l'IP :
  `curl --resolve www.archipiloterenovation.com:443:76.76.21.21 https://www.archipiloterenovation.com/`
- **Déblocage** : Hostinger → Domaines → `archipiloterenovation.com` → « Vérifier
  l'e-mail » (ou le lien du mail Hostinger « Verify your contact information »).
  Retour en quelques minutes à quelques heures.
- Tant que le domaine est suspendu, **aucune vérification Search Console ne peut
  aboutir**, et les visiteurs ne voient rien. Ce point passe avant tout le reste.

Le `.fr` (`archipiloterenovation.fr`) est enregistré mais **ne résout pas** et
n'est pas configuré : ne pas l'employer dans un lien, une image ou un document.
Plusieurs infographies fournies par le client l'impriment en pied de page — c'est
une erreur à corriger à la source, pas dans le code.

## 5. Search Console

Deux moyens de vérification sont déployés (commits d'`agencyinside` du 08/09,
fusionnés et mis en ligne le 09/09) :

- le fichier `public/googleaf2a7616663faa24.html` → servi en HTTP 200 ;
- la balise `<meta name="google-site-verification">` via `verification.google`
  dans `app/layout.tsx` (deux jetons).

La vérification aboutira dès que le DNS sera rétabli (§4). `robots.txt` autorise
tout et déclare le sitemap ; `sitemap.ts` liste toutes les pages, articles
Sedestral compris.

## 6. La synchronisation Sedestral — ce qui marche, ce qui ne peut pas marcher

Le mécanisme est décrit en détail dans [`SEDESTRAL.md`](./SEDESTRAL.md) : un
workflow GitHub Actions horaire importe les articles en brouillon, les écrit dans
`content/blog/generated.json`, **pousse sur `main`**, puis attend que la page
soit en ligne (15 min max) avant de confirmer `PUBLISHED` à Sedestral.

Tout y est correct **sauf l'hypothèse « Vercel déploie sur ce push »**, qui est
fausse ici (§2). Conséquence, invisible tant qu'il n'y a aucun brouillon — ce qui
est le cas au 09/09 (`generated.json` vide, runs horaires « réussis » en 15 s) :

> Le jour où un article est en DRAFT, le run le pousse, attend 15 minutes une
> page qui ne sera jamais déployée, échoue, et recommence à chaque heure.
> L'article reste indéfiniment « en attente de confirmation ».

Deux façons de rendre l'automate opérant. **À décider avec le client**, parce
que l'une des deux change qui publie quoi, et à quel rythme.

**Option A — brancher Vercel sur GitHub** (gratuit, compatible Hobby)
Vercel → projet → Settings → Git → connecter le dépôt, branche de production
`main`. Dès lors chaque push déploie, l'attente du script trouve la page, le
PATCH part. Thibaut n'a plus besoin d'accès Vercel.
Contreparties à accepter en connaissance de cause :
- le bot publie **toutes les heures, sans relecture humaine**, des articles et
  des images venus de Sedestral — sur un site dont le client a fait retirer une
  soixantaine de légendes inexactes et interdit toute image présentée comme un
  chantier réel sans l'être. Le script assainit le HTML ; il ne juge pas la
  cohérence image/titre. Prévoir une relecture, ou un état intermédiaire.
- le déploiement local (`vercel deploy`) devient une exception : le flux normal
  redevient « push, puis Vercel déploie ». La règle §2 s'inverse.

**Option B — rester en déploiement manuel**
On garde le CLI. Le workflow horaire n'a alors pas de sens : soit on le passe en
`workflow_dispatch` uniquement (lancement à la main, suivi d'un déploiement), soit
on le désactive. Les articles sont importés à la demande, relus, puis déployés.

Sans décision, l'état actuel est : **automate actif, inoffensif tant qu'aucun
brouillon n'existe, défaillant dès le premier.**

## 7. Commandes de référence

```bash
# se mettre à jour avant tout
git pull

# construire et vérifier localement
npm run build
npx tsc --noEmit

# déployer en production (depuis un main à jour uniquement)
vercel deploy --prod

# puis partager
git push

# outils de contrôle propres au projet (images)
python3 scripts/verif-integration.py     # cadres, provenance, surexposition
python3 scripts/fichiers-identiques.py   # même fichier sous deux noms
python3 scripts/surexposition.py         # une image vue sur trop de pages
```

Le compte Vercel employé pour `vercel deploy` est celui de Yanis ; le CLI doit
être connecté (`vercel whoami`). Le projet est lié via `.vercel/project.json`
(non versionné).
