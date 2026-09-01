import type { CoverflowSlide } from "@/components/ui/coverflow-carousel";

/**
 * Une seule liste pour toutes les photos du site.
 *
 * La page les affiche en noir et blanc (filtre CSS) ; l'éventail rouvre
 * exactement les mêmes fichiers, sans filtre, donc en couleur. Aucun doublon
 * d'image à maintenir, et la couleur est forcément raccord avec le N&B.
 *
 * Les fichiers attendus vont dans `public/images/`, sous le nom indiqué par
 * `src`. Tant qu'une photo manque, la page affiche un cadre nommé à sa place
 * plutôt qu'une image cassée.
 *
 * Sauf mention `provisoire` ci-dessous, ce sont les photos de chantier de
 * l'entreprise, reprises des albums de dis-moi-nature.fr et recadrées aux
 * formats du site. Les originaux pleine résolution sont conservés dans
 * `public/images/source/`.
 */
export interface GalleryPhoto extends CoverflowSlide {
  /** Clé courte utilisée dans les sections pour pointer une photo. */
  name: string;
  /** Phrase de contexte affichée sous la photo dans l'éventail. */
  note?: string;
  /** Vrai tant que la photo est une image d'illustration, pas un chantier. */
  provisoire?: boolean;
}

export const GALLERY: GalleryPhoto[] = [
  {
    name: "jardin",
    src: "images/jardin.jpg",
    alt: "Haie taillée au cordeau bordant une allée bétonnée, en été",
    title: "L'allée et la haie",
    subtitle: "Taille d'entretien",
    note: "Une haie menée au cordeau sur toute la longueur de l'allée : faces d'aplomb, sommet réglé, et l'allée dégagée jusqu'au bout. C'est la photo d'ouverture du site.",
    meta: [
      { label: "Prestation", value: "Taille de haies" },
      { label: "Saison", value: "Août" },
      { label: "Aide", value: "50 %" },
    ],
  },
  {
    name: "haie",
    src: "images/haie.jpg",
    alt: "Haie taillée à angle droit près d'un escalier de jardin",
    title: "La haie taillée",
    subtitle: "Haies et arbustes",
    note: "Taille d'entretien : les faces reprises d'aplomb, les angles marqués, et les conifères rampants du pied laissés libres. Déchets de coupe évacués.",
    meta: [
      { label: "Prestation", value: "Taille" },
      { label: "Déchets", value: "Évacués" },
      { label: "Aide", value: "50 %" },
    ],
  },
  {
    name: "massif",
    src: "images/massif.jpg",
    alt: "Azalée en pleine floraison orange dans un jardin de printemps",
    title: "L'azalée",
    subtitle: "Soin des plantes",
    note: "Un arbuste suivi d'une année sur l'autre — taille après floraison, surveillance, sol entretenu. C'est ce que donne un soin régulier, au printemps suivant.",
    meta: [
      { label: "Saison", value: "Fin mai" },
      { label: "Suivi", value: "Annuel" },
    ],
  },
  {
    name: "graminees",
    src: "images/graminees.jpg",
    alt: "Aménagement de dalles de pierre, gravier d'ardoise et graminées",
    title: "L'aménagement minéral",
    subtitle: "Aménagement végétalisé",
    note: "Dalles de pierre, courbe de gravier d'ardoise et touffes de graminées, posées sur un sol préparé. Peu d'entretien ensuite : une taille par an, pas d'arrosage.",
    meta: [
      { label: "Entretien", value: "1 taille/an" },
      { label: "Arrosage", value: "Faible" },
      { label: "Devis", value: "Gratuit" },
    ],
  },
  {
    name: "topiaires",
    src: "images/topiaires.jpg",
    alt: "Arbuste taillé en boule sur un paillage d'ardoise, sous le givre",
    title: "La boule taillée",
    subtitle: "Taille de forme",
    note: "Une taille de forme se tient sur la durée : deux passages par an suffisent à garder le dessin. Le paillage d'ardoise limite le désherbage autour.",
    meta: [
      { label: "Passages", value: "2 par an" },
      { label: "Paillage", value: "Ardoise" },
    ],
  },
  {
    name: "bande-jardin",
    src: "images/bande-jardin.jpg",
    alt: "Massif paillé d'ardoise en bordure de pelouse, par temps de gel",
    title: "La bordure",
    subtitle: "Paillage & détourage",
    note: "Bordure nette entre la pelouse et le massif, sol paillé d'ardoise : moins de désherbage, moins d'arrosage, et une limite qui tient toute l'année.",
    meta: [
      { label: "Paillage", value: "Posé" },
      { label: "Désherbage", value: "Naturel" },
    ],
  },
  {
    name: "arbre",
    src: "images/arbre.jpg",
    alt: "Lilas des Indes en fleurs roses au bord d'un pré",
    title: "Le lilas des Indes",
    subtitle: "Taille & soin",
    note: "Taille de formation puis d'entretien, sur un sujet isolé. Ce sont les tailles d'hiver qui décident de la floraison qu'on voit ici, en juillet.",
    meta: [
      { label: "Taille", value: "Hiver" },
      { label: "Floraison", value: "Juillet" },
    ],
  },
  {
    name: "hortensia",
    src: "images/hortensia.jpg",
    alt: "Hortensia bleu en pleine floraison au milieu d'une pelouse",
    title: "L'hortensia",
    subtitle: "Soin des plantes",
    note: "Un arbuste qui décline se rattrape le plus souvent : on cherche la cause — sol, exposition, arrosage — avant de parler de remplacement.",
    meta: [
      { label: "Prestation", value: "Soin des plantes" },
      { label: "Floraison", value: "Juillet" },
    ],
  },
  {
    name: "haie-longue",
    src: "images/haie-longue.jpg",
    alt: "Longue haie de charmille taillée en hiver, le long d'une allée",
    title: "La charmille",
    subtitle: "Taille d'hiver",
    note: "La même conduite au cordeau, vue en hiver : feuilles rousses encore en place, structure de la haie entièrement lisible. C'est la saison où l'on taille.",
    meta: [
      { label: "Saison", value: "Hiver" },
      { label: "Longueur", value: "Toute l'allée" },
    ],
  },
  {
    name: "pelouse",
    src: "images/pelouse.jpg",
    alt: "Abords tondus le long d'une route, devant un abri de jardin",
    title: "La tonte",
    subtitle: "Tonte & débroussaillage",
    note: "Les abords repris et tondus après débroussaillage. Sur un terrain laissé de côté, c'est le premier passage qui demande du temps ; ensuite, l'entretien suit.",
    meta: [
      { label: "Prestation", value: "Tonte" },
      { label: "Rythme", value: "Au choix" },
    ],
  },
  {
    name: "allee",
    src: "images/allee.jpg",
    alt: "Allée gravillonnée neuve, bordure béton et plate-bande fleurie",
    title: "L'allée neuve",
    subtitle: "Préparation du sol",
    note: "Sol décaissé, bordure posée, gravier réglé, et la plate-bande replantée le long. La préparation du sol est ce qui décide de la tenue deux ans plus tard.",
    meta: [
      { label: "Sol", value: "Préparé" },
      { label: "Bordure", value: "Posée" },
    ],
  },
  {
    name: "chemin",
    src: "images/chemin.jpg",
    alt: "Allée gravillonnée entre un portail et la maison, bordée de plantations",
    title: "Le passage",
    subtitle: "Circulation",
    note: "Un jardin se dessine autant par ses passages que par ses plantations. Gravier neuf, bordures franches, et les plantations tenues de part et d'autre. C'est l'ouverture du site sur téléphone.",
    meta: [
      { label: "Entretien", value: "Régulier" },
      { label: "Bordures", value: "Détourées" },
    ],
  },
  {
    name: "terrasse",
    src: "images/terrasse.jpg",
    alt: "Bande de gravier clair et jeunes plants au pied d'une façade",
    title: "Le pied de mur",
    subtitle: "Les abords",
    note: "Les abords immédiats de la maison : bande drainante, jeunes plants espacés pour tenir dans deux ans. C'est ce qu'on voit tous les jours, donc ce qui compte.",
    meta: [
      { label: "Surface", value: "Réduite" },
      { label: "Effet", value: "Immédiat" },
    ],
  },
  {
    name: "cloture",
    src: "images/cloture.jpg",
    alt: "Végétation dense envahissant une limite de terrain au bord d'une route",
    title: "Avant l'intervention",
    subtitle: "Les limites",
    note: "Le long des clôtures et des routes, la végétation s'installe vite et masque la limite du terrain. C'est le point de départ d'un débroussaillage.",
    meta: [
      { label: "Prestation", value: "Débroussaillage" },
      { label: "État", value: "Avant" },
    ],
  },
  {
    name: "potager",
    src: "images/potager.jpg",
    alt: "Potager en planches avec légumes et aromatiques",
    title: "Le potager",
    subtitle: "Création & entretien",
    note: "Créer ou réaménager un potager, avec la thématique qui vous tient à cœur : aromatiques, petits fruits, carrés surélevés, légumes anciens.",
    provisoire: true,
    meta: [
      { label: "Formule", value: "Sur mesure" },
      { label: "Suivi", value: "De saison" },
    ],
  },
  {
    name: "taille",
    src: "images/taille.jpg",
    alt: "Taille d'un arbuste au sécateur",
    title: "Le geste",
    subtitle: "Au sécateur",
    note: "On taille au rythme de la plante, pas à celui du calendrier. Le bon geste au bon moment évite l'essentiel des interventions d'urgence.",
    provisoire: true,
    meta: [
      { label: "Saison", value: "Selon l'espèce" },
      { label: "Outil", value: "Sécateur" },
    ],
  },
  {
    name: "outils",
    src: "images/outils.jpg",
    alt: "Vieille brouette et branches coupées devant une végétation dense",
    title: "Sur le chantier",
    subtitle: "Débroussaillage",
    note: "Les branches coupées mises de côté, la brouette au milieu de la friche. Le désherbage et le débroussaillage se font à la main et mécaniquement, sans produit.",
    meta: [
      { label: "Depuis", value: "2013" },
      { label: "Méthode", value: "Sans produit" },
    ],
  },
  {
    name: "etape-visite",
    src: "images/etape-visite.jpg",
    alt: "Rendez-vous et échange autour d'un projet de jardin",
    title: "Le contact",
    subtitle: "Étape 01",
    note: "Un appel, un SMS, un mail ou le formulaire. Vos questions trouvent une réponse très rapidement, sans engagement.",
    provisoire: true,
    meta: [{ label: "Réponse", value: "Rapide" }],
  },
  {
    name: "etape-plan",
    src: "images/etape-plan.jpg",
    alt: "Plan et croquis d'un projet d'aménagement paysager",
    title: "L'analyse",
    subtitle: "Étape 02",
    note: "L'analyse paysagère : sol, exposition, végétation en place, et le temps d'entretien dont vous disposerez ensuite.",
    provisoire: true,
    meta: [{ label: "Sur place", value: "Sur rendez-vous" }],
  },
  {
    name: "etape-chantier",
    src: "images/etape-chantier.jpg",
    alt: "Terrain dégagé au pied d'un mur de pierre, chantier en cours",
    title: "Le chantier",
    subtitle: "Étape 03",
    note: "Le terrain dégagé, les souches sorties, le sol remis à nu avant plantation. Le chantier ne commence qu'une fois le devis validé.",
    meta: [{ label: "Devis", value: "Gratuit" }],
  },
  {
    name: "etape-reprise",
    src: "images/etape-reprise.jpg",
    alt: "Talus replanté avec muret de pierre, paillage d'écorce et jeunes plants",
    title: "La reprise",
    subtitle: "Étape 04",
    note: "Le même talus, muret repris, sol paillé d'écorce et jeunes plants en place. L'entretien qui suit est ponctuel ou régulier, comme vous préférez.",
    meta: [{ label: "Fidélité", value: "10 %" }],
  },
];

/** Index d'une photo par son nom court — sert à ouvrir l'éventail au bon endroit. */
export const photoIndex = (name: string): number => {
  const index = GALLERY.findIndex((photo) => photo.name === name);
  if (index === -1) throw new Error(`Photo inconnue : ${name}`);
  return index;
};

export const photo = (name: string): GalleryPhoto => GALLERY[photoIndex(name)];

/** Photos encore illustratives, à remplacer par des clichés de l'entreprise. */
export const PROVISOIRES = GALLERY.filter((p) => p.provisoire);
