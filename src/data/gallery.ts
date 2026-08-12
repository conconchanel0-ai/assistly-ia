import type { CoverflowSlide } from "@/components/ui/coverflow-carousel";

/**
 * Une seule liste pour toutes les photos du site.
 *
 * La page les affiche en noir et blanc (filtre CSS) ; l'éventail rouvre
 * exactement les mêmes fichiers, sans filtre, donc en couleur. Aucun doublon
 * d'image à maintenir, et la couleur est forcément raccord avec le N&B.
 */
export interface GalleryPhoto extends CoverflowSlide {
  /** Clé courte utilisée dans les sections pour pointer une photo. */
  name: string;
  /** Phrase de contexte affichée sous la photo dans l'éventail. */
  note?: string;
}

export const GALLERY: GalleryPhoto[] = [
  {
    name: "jardin",
    src: "images/jardin.jpg",
    alt: "Jardin aménagé avec escalier en pierre, pelouse et arbres taillés en boule",
    title: "Jardin complet",
    subtitle: "Saint-Grégoire",
    note: "Terrain en pente reprise en deux paliers : escalier en pierre bouchardée, pelouse plane au centre, lauriers taillés en boule pour tenir le vis-à-vis sans mur.",
    meta: [
      { label: "Année", value: "2024" },
      { label: "Surface", value: "410 m²" },
      { label: "Durée", value: "3 semaines" },
    ],
  },
  {
    name: "chemin",
    src: "images/chemin.jpg",
    alt: "Allée de gravier serpentant entre deux massifs plantés et des ifs taillés",
    title: "Allée de gravier",
    subtitle: "Saint-Grégoire",
    note: "Tracé courbe pour casser la longueur du terrain. Gravier stabilisé sur géotextile, bordures acier invisibles, ifs taillés tous les trois mètres.",
    meta: [
      { label: "Année", value: "2024" },
      { label: "Longueur", value: "28 m" },
      { label: "Durée", value: "5 jours" },
    ],
  },
  {
    name: "massif",
    src: "images/massif.jpg",
    alt: "Massif de vivaces mêlant nepeta, sauges et graminées",
    title: "Massif de vivaces",
    subtitle: "Betton",
    note: "Nepeta, sauges et graminées plantées serré : le massif se referme en deux saisons et ne demande plus de désherbage. Aucun arrosage depuis la première année.",
    meta: [
      { label: "Année", value: "2025" },
      { label: "Surface", value: "62 m²" },
      { label: "Espèces", value: "17" },
    ],
  },
  {
    name: "haie",
    src: "images/haie.jpg",
    alt: "Taille d'une haie de thuyas au taille-haie thermique",
    title: "Taille de haie",
    subtitle: "Melesse",
    note: "Thuyas d'une haie existante rabattus de soixante centimètres, puis taille d'entretien deux fois l'an. Les déchets partent en compostage le jour même.",
    meta: [
      { label: "Année", value: "2025" },
      { label: "Linéaire", value: "45 m" },
      { label: "Passages", value: "2 / an" },
    ],
  },
  {
    name: "terrasse",
    src: "images/terrasse.jpg",
    alt: "Terrasse en bois construite autour du tronc d'un arbre existant",
    title: "Terrasse bois",
    subtitle: "Cesson-Sévigné",
    note: "Terrasse construite autour d'un merisier conservé, avec un jeu laissé au tronc pour qu'il grossisse. Lames de châtaignier local, sur plots réglables.",
    meta: [
      { label: "Année", value: "2023" },
      { label: "Surface", value: "34 m²" },
      { label: "Essence", value: "Châtaignier" },
    ],
  },
  {
    name: "allee",
    src: "images/allee.jpg",
    alt: "Pas japonais en dalles de pierre posés dans une pelouse",
    title: "Pas japonais",
    subtitle: "Chantepie",
    note: "Dalles de schiste posées sur lit de sable, espacées au pas moyen d'un adulte. La tondeuse passe dessus sans les accrocher.",
    meta: [
      { label: "Année", value: "2024" },
      { label: "Dalles", value: "23" },
      { label: "Durée", value: "2 jours" },
    ],
  },
  {
    name: "potager",
    src: "images/potager.jpg",
    alt: "Potager en planches avec serre en verre et allée de gravier",
    title: "Potager et serre",
    subtitle: "Thorigné-Fouillard",
    note: "Six planches surélevées orientées selon le soleil et non selon la symétrie, serre de récupération remontée sur dalle drainante, allées en gravier.",
    meta: [
      { label: "Année", value: "2023" },
      { label: "Planches", value: "6" },
      { label: "Surface", value: "88 m²" },
    ],
  },
  {
    name: "pelouse",
    src: "images/pelouse.jpg",
    alt: "Grande pelouse tondue en bandes descendant vers une rivière bordée d'arbres",
    title: "Pelouse et arbres",
    subtitle: "Liffré",
    note: "Grande pelouse tondue en bandes, tonte haute pour tenir la sécheresse. Les abords de la rivière sont fauchés une fois l'an, pas plus.",
    meta: [
      { label: "Année", value: "2022" },
      { label: "Surface", value: "1 200 m²" },
      { label: "Entretien", value: "14 passages" },
    ],
  },
  {
    name: "graminees",
    src: "images/graminees.jpg",
    alt: "Chemin de gravier traversant un massif de graminées et de vivaces en automne",
    title: "Jardin de graminées",
    subtitle: "Rennes",
    note: "Jardin sec de graminées et vivaces : plantation en novembre, paillage minéral, aucun arrosage prévu une fois la première année passée.",
    meta: [
      { label: "Année", value: "2025" },
      { label: "Surface", value: "140 m²" },
      { label: "Arrosage", value: "Aucun" },
    ],
  },
  {
    name: "fruitiers",
    src: "images/fruitiers.jpg",
    alt: "Pommiers palissés le long d'un mur de pierre au-dessus d'un massif fleuri",
    title: "Fruitiers palissés",
    subtitle: "Vitré",
    note: "Neuf pommiers palissés en cordon contre un mur exposé sud, sur fil tendu. Taille en vert l'été, taille de formation l'hiver.",
    meta: [
      { label: "Année", value: "2021" },
      { label: "Sujets", value: "9" },
      { label: "Formes", value: "Cordon" },
    ],
  },
  {
    name: "topiaires",
    src: "images/topiaires.jpg",
    alt: "Arbre pleureur et boules de buis taillées au-dessus d'un muret de pierre",
    title: "Buis et muret",
    subtitle: "Bruz",
    note: "Muret de pierre sèche remonté avec les pierres du terrain, buis taillés en boules irrégulières et arbre pleureur conservé au centre.",
    meta: [
      { label: "Année", value: "2022" },
      { label: "Muret", value: "16 m" },
      { label: "Topiaires", value: "11" },
    ],
  },
  {
    name: "cloture",
    src: "images/cloture.jpg",
    alt: "Clôture en lames de bois neuve fermant un jardin engazonné",
    title: "Clôture bois",
    subtitle: "Acigné",
    note: "Trente et un mètres de clôture bois posés sur poteaux scellés, doublés d'une haie mixte qui prendra le relais dans quatre ou cinq ans.",
    meta: [
      { label: "Année", value: "2025" },
      { label: "Linéaire", value: "31 m" },
      { label: "Hauteur", value: "1,80 m" },
    ],
  },
  {
    name: "bande",
    src: "images/bande-jardin.jpg",
    alt: "Chaises de jardin posées sur une aire de gravier entre des buis taillés et des graminées",
    title: "Aire de gravier",
    subtitle: "Betton",
    note: "Aire de gravier creusée dans la pelouse pour poser deux chaises au soleil du soir, encadrée de buis et de graminées hautes.",
    meta: [
      { label: "Année", value: "2024" },
      { label: "Surface", value: "26 m²" },
      { label: "Assises", value: "4" },
    ],
  },
  {
    name: "portail",
    src: "images/portail.jpg",
    alt: "Portail métallique ouvert sur une allée de jardin bordée de végétation",
    title: "Entrée de jardin",
    subtitle: "Acigné",
    note: "Entrée retravaillée autour du portail existant : allée reprise, plantations grimpantes des deux côtés, éclairage bas enterré.",
    meta: [
      { label: "Année", value: "2023" },
      { label: "Portail", value: "Acier" },
      { label: "Durée", value: "3 jours" },
    ],
  },
  {
    name: "paysagiste",
    src: "images/paysagiste.jpg",
    alt: "Maëlle Le Guen au travail, désherbant un massif de graminées",
    title: "Maëlle Le Guen",
    subtitle: "Sur un chantier d'entretien",
    note: "Sur un chantier d'entretien à Melesse : désherbage manuel d'un massif de graminées, en fin d'hiver, avant la taille des vivaces.",
    meta: [
      { label: "Métier", value: "Paysagiste" },
      { label: "Depuis", value: "2017" },
      { label: "Base", value: "Betton" },
    ],
  },
  {
    name: "taille",
    src: "images/taille.jpg",
    alt: "Taille au sécateur d'un arbuste en fin d'hiver",
    title: "Taille d'hiver",
    subtitle: "Melesse",
    note: "Taille de formation au sécateur, en février, avant la montée de sève. Chaque espèce est taillée à sa saison, pas à celle du planning.",
    meta: [
      { label: "Saison", value: "Février" },
      { label: "Outil", value: "Sécateur" },
      { label: "Sujets", value: "40" },
    ],
  },
  {
    name: "etape-visite",
    src: "images/etape-visite.jpg",
    alt: "Croquis et relevés du terrain sur un carnet, crayon en main",
    title: "Le relevé",
    subtitle: "Étape 1 — la visite",
    note: "Le relevé se fait sur place, au carnet : exposition, pente, nature du sol, ce qui reste et ce qui part. Une heure, gratuite, sans engagement.",
    meta: [
      { label: "Durée", value: "1 heure" },
      { label: "Prix", value: "Gratuit" },
    ],
  },
  {
    name: "etape-plan",
    src: "images/etape-plan.jpg",
    alt: "Plan de jardin dessiné à la main au crayon, massifs et allées tracés",
    title: "Le plan",
    subtitle: "Étape 2 — le devis",
    note: "Plan dessiné à la main puis mis au propre à l'échelle, avec la liste des végétaux et leur taille adulte. Livré sous dix jours avec le devis.",
    meta: [
      { label: "Délai", value: "10 jours" },
      { label: "Échelle", value: "1/100" },
    ],
  },
  {
    name: "etape-chantier",
    src: "images/etape-chantier.jpg",
    alt: "Chantier de terrassement, brouette et terre remuée avant plantation",
    title: "Le chantier",
    subtitle: "Étape 3 — les travaux",
    note: "Terrassement puis maçonnerie avant toute plantation. Le terrain est nettoyé chaque soir et les déchets verts partent au compostage.",
    meta: [
      { label: "Durée", value: "2 j à 3 sem." },
      { label: "Chantiers", value: "Un seul" },
    ],
  },
  {
    name: "etape-reprise",
    src: "images/etape-reprise.jpg",
    alt: "Mains gantées travaillant la terre d'un massif planté et fleuri",
    title: "La reprise",
    subtitle: "Étape 4 — le suivi",
    note: "Visite de reprise à trois mois puis à un an : ce qui n'a pas pris est remplacé à mes frais, hors défaut d'arrosage le premier été.",
    meta: [
      { label: "Visites", value: "3 mois, 1 an" },
      { label: "Garantie", value: "1 an" },
    ],
  },
];

/** Index d'une photo par son nom court — sert à ouvrir l'éventail au bon endroit. */
export const photoIndex = (name: string): number => {
  const index = GALLERY.findIndex((photo) => photo.name === name);
  if (index === -1) throw new Error(`Photo inconnue : ${name}`);
  return index;
};

export const photo = (name: string): GalleryPhoto => GALLERY[photoIndex(name)];
