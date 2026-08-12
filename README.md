# Atelier des Lisières — site paysagiste (version éditoriale)

Site de démonstration pour une paysagiste fictive (Maëlle Le Guen, Betton),
dans le style des planches beige / bleu / photos noir et blanc.

React 19 + Vite + TypeScript + Tailwind v4, structure shadcn.

## Lancer

```bash
npm run dev
```

```bash
npm run build
```

`npm run build` produit un dossier `dist/` autonome (chemins relatifs), à
déposer tel quel sur n'importe quel hébergement statique.

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
  data/gallery.ts               les 20 photos + légendes et notes
  data/content.ts               étapes, services, avis, questions
public/images/                  les photos (mêmes fichiers pour le N&B et la couleur)
public/fonts/                   Anton, Great Vibes, Archivo (sous-ensembles latins)
```

## Choix à connaître

- **Noir et blanc en CSS, pas en double.** Les photos de la page portent un
  filtre `grayscale`, retiré au survol et absent dans l'éventail. Il n'y a donc
  qu'un seul fichier par image, et la couleur est forcément raccord.
- **Utilitaires `type-poster` / `type-editorial`.** Ils ne s'appellent pas
  `text-*` volontairement : `tailwind-merge` prendrait `text-poster` pour une
  couleur de texte et le supprimerait dès qu'une classe `text-blue` suit.
- **La barre de navigation mesure la place disponible** (largeur du nom +
  marge + liste + bouton) au lieu d'utiliser un point de rupture : soit tous
  les chapitres sont affichés, soit le sommaire prend le relais. Jamais les deux.
- **Formulaire** : Formspree `xojrpplv`, le même endpoint que le site
  précédent. À remplacer par le vrai compte avant mise en ligne.

## Photos

Toutes les images viennent d'Unsplash (licence Unsplash). Le détail des auteurs
se trouve dans `CREDITS-PHOTOS.md` du dossier `site gite 1 ~ paysagiste`, d'où
elles ont été reprises. Ce sont des photos d'illustration : les légendes citent
des communes précises alors que ce ne sont pas ces chantiers — à remplacer par
de vraies réalisations avant toute mise en ligne réelle.
