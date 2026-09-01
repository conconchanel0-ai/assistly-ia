# Dis Moi Nature — site paysagiste

Site pour **Dis Moi Nature**, entretien et aménagement du jardin à
Bains-les-Bains (La Vôge-les-Bains, Vosges). Entreprise individuelle créée en
2013 par Véronique Géhin, Siren 794277996.

Mise en page éditoriale : planches beige / bleu, photos en noir et blanc qui
reprennent leur couleur au survol et dans la galerie.

React 19 + Vite + TypeScript + Tailwind v4, structure shadcn.

## Lancer

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` produit un dossier `dist/` autonome (chemins relatifs).
La publication est automatique : `.github/workflows/deploy.yml` construit le
site à chaque envoi sur `main` et le publie sur GitHub Pages.

## Organisation

```
src/
  components/
    ui/coverflow-carousel.tsx   composant fourni (+ initialIndex, onSelect, clic directionnel)
    gallery-lightbox.tsx        l'éventail plein écran, en couleur
    gallery-context.tsx         open(index) partagé à toute la page
    photo.tsx                   photo N&B cliquable (couleur au survol)
    reveal.tsx                  apparition au défilement + compteurs chiffrés
    site-nav.tsx                barre : chapitres si ça tient, sinon sommaire
    slide-chrome.tsx            bandeau, numéro de planche, pied
  sections/                     une planche par fichier
  data/gallery.ts               les 21 photos + légendes, notes et fiches
  data/content.ts               marque, étapes, prestations, avis, questions
public/images/                  les photos (mêmes fichiers pour le N&B et la couleur)
public/fonts/                   Anton, Great Vibes, Archivo (sous-ensembles latins)
```

## Choix à connaître

- **Noir et blanc en CSS, pas en double.** Les photos de la page portent un
  filtre `grayscale`, retiré au survol et absent dans l'éventail. Il n'y a donc
  qu'un seul fichier par image, et la couleur est forcément raccord. Le filtre
  rend aussi service à ces photos prises au téléphone en lumière plate.
- **Utilitaires `type-poster` / `type-editorial`.** Ils ne s'appellent pas
  `text-*` volontairement : `tailwind-merge` prendrait `text-poster` pour une
  couleur de texte et le supprimerait dès qu'une classe `text-blue` suit.
- **La barre de navigation mesure la place disponible** (largeur du nom +
  marge + liste + bouton) au lieu d'utiliser un point de rupture : soit tous
  les chapitres sont affichés, soit le sommaire prend le relais. Jamais les deux.
- **Photo manquante = cadre nommé.** Tant qu'un fichier n'est pas dans
  `public/images/`, `photo.tsx` affiche un cadre gris portant son nom : la mise
  en page reste juste, et on voit d'un coup d'œil ce qui manque.

## Ce que le dépôt contient — et ne contient pas

Le dépôt ne porte que ce dont `npm ci && npm run build` a besoin : le code, les
configs, les 5 polices et les 22 images servies par le site (6,2 Mo).

Restent sur la machine de travail, exclus par `.gitignore` :

| Chemin | Quoi | Poids |
|---|---|---|
| `public/images/source/` | Originaux pleine résolution des photos | 87 Mo |
| `public/images/_ancien-paysagiste/` | Photos de l'ancienne maquette, en réserve | 3,5 Mo |
| `.claude/` | Réglages locaux du serveur de développement | — |

## Photos

Les visuels viennent des albums de [dis-moi-nature.fr](https://www.dis-moi-nature.fr/),
recadrés aux formats du site, EXIF supprimés — les originaux portaient les
coordonnées GPS des chantiers.

Quatre cadres restent illustratifs faute de photo correspondante dans les
albums : le potager, le geste de taille et les deux premières étapes de
« Comment ça se passe ». Ils portent `provisoire: true` dans
`src/data/gallery.ts`, et la constante `PROVISOIRES` les liste.

Le détail du casting, les formats attendus et le message à envoyer pour les
photos manquantes sont dans [`PHOTOS-A-FOURNIR.md`](PHOTOS-A-FOURNIR.md).

## À régler avant mise en ligne

1. **Les avis clients** (`TESTIMONIALS` dans `src/data/content.ts`) sont
   fictifs, tout comme la note de 4,9 sur 27. À remplacer ou à supprimer.
2. **Le formulaire** pointe vers le Formspree de la maquette
   (`src/sections/contact.tsx`, constante `ENDPOINT`). À rebrancher sur
   dismoinature@gmail.com.
3. **L'usage des photos** mérite un accord explicite de l'entreprise.
