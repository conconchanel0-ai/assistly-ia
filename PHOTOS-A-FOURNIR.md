# Photos — Dis Moi Nature

## Où on en est

**17 des 21 visuels du site sont désormais de vraies photos de chantier de
l'entreprise**, reprises des albums de dis-moi-nature.fr (Jardins, Taille de
haies, Cours, Soin des plantes) et recadrées aux formats du site.

Les originaux pleine résolution — 3456 × 3456 pour les prises au téléphone,
5184 × 3888 pour celles au reflex — sont conservés dans
`public/images/source/`. Ce dossier est exclu de git (87 Mo) : c'est de la
matière première, le site ne sert que les fichiers recadrés de
`public/images/` (5,9 Mo au total).

Les métadonnées EXIF ont été supprimées au recadrage. C'est volontaire : les
photos d'origine portaient les coordonnées GPS des chantiers, donc des
adresses de clients.

## Ce qui reste à demander à Véronique

Quatre cadres du site sont encore illustratifs, et un cinquième sujet manque
complètement. Les albums en ligne ne couvrent pas ces sujets — ce n'est pas un
problème de qualité, il n'y a simplement aucune photo correspondante.

| Fichier | Sujet manquant | Format | Où ça apparaît |
|---|---|---|---|
| `potager.jpg` | Un potager, en carrés ou en planches | 900 × 1200 | Introduction, Les travaux (grande case) |
| `taille.jpg` | Le geste : sécateur ou taille-haie, les mains au travail | 1000 × 1000 | Les travaux |
| `etape-visite.jpg` | Un rendez-vous chez un client, un échange sur le terrain | 1200 × 825 | Comment ça se passe (01) |
| `etape-plan.jpg` | Un croquis, un carnet, un plan de projet | 1200 × 825 | Comment ça se passe (02) |
| — | **Un portrait de Véronique au travail** | 900 × 1125 | L'entreprise |

Le potager est le manque le plus gênant : c'est une des huit prestations
affichées, et c'est la seule qui n'a aucune image réelle.

Le portrait n'a pas de fichier assigné pour l'instant : la case « L'entreprise »
affiche `outils.jpg` (la brouette et les branches coupées, tirée de l'album
Cours). Ça tient, mais un portrait ferait mieux — sur un site d'artisan, la
personne est l'argument.

### Message prêt à envoyer

> Bonjour Véronique,
>
> J'ai récupéré les photos de vos albums en ligne pour le site, elles
> fonctionnent bien. Il me manque juste cinq sujets que vos albums ne couvrent
> pas :
>
> 1. Un potager que vous avez créé ou que vous entretenez
> 2. Le geste au travail : sécateur ou taille-haie, les mains dans la plante
> 3. Un rendez-vous chez un client, un échange sur le terrain
> 4. Un croquis, un carnet, un plan de projet
> 5. Une photo de vous au travail — c'est ce qui manque le plus au site
>
> Deux ou trois par sujet si vous en avez, pour avoir le choix.
>
> **Comment me les envoyer :** par mail avec un lien WeTransfer, Google Drive
> ou iCloud, avec les fichiers d'origine tels qu'ils sortent du téléphone.
> Surtout pas en message Facebook ou Instagram : la messagerie recompresse les
> photos.
>
> Merci beaucoup,

## Le plus simple, quand elles arrivent

Dépose les nouvelles photos, **avec n'importe quel nom**, dans :

```
public/images/source/
```

Dis-moi ensuite que c'est fait : je les regarde une par une, je choisis
laquelle va où, je recadre aux bons formats, je supprime les EXIF et je les
renomme. Tu n'as rien d'autre à faire.

## Le casting actuel

| Fichier site | Format | Source | Sujet |
|---|---|---|---|
| `jardin.jpg` | 1440 × 950 | `20230818_191510.jpg` | Haie taillée le long d'une allée — **ouverture, ordinateur** |
| `jardin-mobile.jpg` | 780 × 1170 | `20240709_145004.jpg` | Allée gravillonnée neuve — **ouverture, téléphone** |
| `haie.jpg` | 900 × 1200 | `20230818_191558.jpg` | Haie taillée, escalier de jardin |
| `massif.jpg` | 900 × 1200 | `20250530_104658.jpg` | Azalée en pleine floraison |
| `graminees.jpg` | 1000 × 1000 | `20230513_125142.jpg` | Aménagement minéral : dalles, ardoise, graminées |
| `topiaires.jpg` | 1000 × 1000 | `Bains-7.jpg` | Boule taillée sur paillage d'ardoise |
| `bande-jardin.jpg` | 1000 × 1000 | `Bains-14.jpg` | Bordure paillée en limite de pelouse |
| `arbre.jpg` | 1000 × 1000 | `20250714_163043.jpg` | Lilas des Indes en fleurs |
| `hortensia.jpg` | 1000 × 1000 | `20250718_140324.jpg` | Hortensia bleu isolé |
| `pelouse.jpg` | 1000 × 1000 | `20240720_190726.jpg` | Abords tondus après débroussaillage |
| `allee.jpg` | 1000 × 1000 | `20240727_131515.jpg` | Allée gravillonnée, bordure béton |
| `chemin.jpg` | 1000 × 1000 | `20240709_145004.jpg` | Le passage entre portail et maison |
| `terrasse.jpg` | 1000 × 1000 | `Uri-4.jpg` | Pied de mur, bande drainante, jeunes plants |
| `cloture.jpg` | 1000 × 1000 | `20240715_094526-1-.jpg` | Végétation en limite de terrain (avant) |
| `outils.jpg` | 900 × 1125 | `Uri-1.jpg` | Brouette et branches coupées |
| `etape-chantier.jpg` | 1200 × 825 | `20240715_160745.jpg` | Terrain dégagé au pied d'un mur |
| `etape-reprise.jpg` | 1200 × 825 | `20240709_142029.jpg` | Talus replanté, muret, paillage d'écorce |
| `haie-longue.jpg` | 1440 × 620 | `Bains-2.JPG` | Longue charmille d'hiver — **bande du pied de page** |

## À savoir

- Les photos s'affichent en **noir et blanc** sur la page et reprennent leur
  **couleur** au survol et dans la galerie. Un seul fichier par photo suffit :
  le noir et blanc est un filtre, pas un second fichier. Il rend aussi un
  grand service à ces photos, prises au téléphone en lumière plate.
- Les légendes, les descriptions et les fiches de chaque photo sont dans
  `src/data/gallery.ts`. Les quatre cadres encore illustratifs y portent
  `provisoire: true`, et la constante `PROVISOIRES` les liste.
- Les photos provisoires de l'ancienne maquette paysagiste sont conservées
  dans `public/images/_ancien-paysagiste/` : ce dossier n'est pas utilisé par
  le site, il sert de réserve.
- Tant qu'un fichier manque, la page affiche un cadre gris nommé à sa place —
  la mise en page reste juste, rien ne casse.

## À valider avec l'entreprise avant mise en ligne

1. **L'usage des photos.** Elles viennent des albums publics de leur site.
   Pour un site qu'on construit pour eux c'est normal, mais ça mérite un accord
   explicite si la maquette circule avant commande.
2. **Les avis clients** (`TESTIMONIALS` dans `src/data/content.ts`) sont
   **entièrement fictifs**, tout comme la note de 4,9 sur 27. Leur site
   n'affiche aucun avis. À remplacer par de vrais retours, ou à supprimer.
3. **Le détail des prestations** (`SERVICES`) : les huit intitulés sont ceux
   de dis-moi-nature.fr, mais les précisions de mise en œuvre (broyage sur
   place, périodes de taille, rythmes de passage) sont rédigées pour la
   maquette.
4. **Le formulaire de devis** pointe encore vers le compte Formspree de la
   maquette (`src/sections/contact.tsx`, constante `ENDPOINT`). À rebrancher
   sur l'adresse dismoinature@gmail.com.

Vérifié et repris tel quel : le téléphone 06 40 70 31 08, l'adresse
dismoinature@gmail.com, la zone de 25 km autour de Bains-les-Bains, les 50 %
de réduction en services à la personne (crédit d'impôt différé ou avance
immédiate), l'accompagnement gratuit dans les démarches, la carte de fidélité
à 10 % après cinq interventions, les horaires (lundi-vendredi 8 h-18 h, samedi
9 h-17 h, dimanche fermé), les moyens de paiement, le Siren 794277996 et la
date de création du 12 juillet 2013.
