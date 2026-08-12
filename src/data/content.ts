export const BRAND = {
  name: "Atelier des Lisières",
  person: "Maëlle Le Guen",
  role: "Paysagiste",
  area: "Rennes · 30 km",
  town: "Betton, Ille-et-Vilaine",
  site: "www.atelierdeslisieres.fr",
  since: "2017",
  edition: "Édition 2026",
};

export interface Step {
  n: string;
  title: string;
  body: string;
  aside: string;
  photo: string;
}

export const STEPS: Step[] = [
  {
    n: "01",
    title: "La visite",
    body: "On fait le tour du terrain ensemble. Je relève l'exposition, la pente, la nature du sol, ce qui reste et ce qui part. Vous me dites ce qui vous agace aujourd'hui.",
    aside: "1 heure · gratuite",
    photo: "etape-visite",
  },
  {
    n: "02",
    title: "Le plan et le devis",
    body: "Un plan à l'échelle, la liste des végétaux avec leur taille adulte, un devis chiffré poste par poste. Vous voyez ce que coûte chaque ligne — et vous pouvez en retirer.",
    aside: "Sous 10 jours",
    photo: "etape-plan",
  },
  {
    n: "03",
    title: "Le chantier",
    body: "Un seul jardin à la fois, dates fixées avant la signature. Terrassement, maçonnerie, puis plantations. Le terrain est nettoyé chaque soir, les déchets verts partent au compost.",
    aside: "2 jours à 3 semaines",
    photo: "etape-chantier",
  },
  {
    n: "04",
    title: "La reprise",
    body: "Je repasse à trois mois, puis à un an. Ce qui n'a pas repris est remplacé à mes frais. On décide ensuite si vous gardez la main ou si je passe à l'année.",
    aside: "2 visites de suivi",
    photo: "etape-reprise",
  },
];

export interface Service {
  n: string;
  title: string;
  body: string;
}

export const SERVICES: Service[] = [
  {
    n: "01",
    title: "Conception & plans",
    body: "Relevé du terrain, plan à l'échelle, palette végétale avec les tailles adultes. Vous repartez avec un document utilisable, même si vous plantez vous-même.",
  },
  {
    n: "02",
    title: "Plantations",
    body: "Arbres, haies libres, vivaces, bulbes. Sol décompacté en profondeur, paillage, arrosage suivi la première année. Garantie de reprise un an.",
  },
  {
    n: "03",
    title: "Terrasses & allées",
    body: "Bois, pierre naturelle, pavés, gravier stabilisé. Le drainage est pensé avant l'esthétique : c'est ce qui fait tenir dix ans au lieu de trois.",
  },
  {
    n: "04",
    title: "Taille & élagage",
    body: "Haies, arbustes, fruitiers, arbres jusqu'à huit mètres. Chaque espèce est taillée à sa saison, pas à celle qui m'arrange.",
  },
  {
    n: "05",
    title: "Entretien à l'année",
    body: "Tonte, désherbage, taille, ramassage des feuilles. Six, dix ou quatorze passages selon le jardin. Éligible au crédit d'impôt de 50 %.",
  },
  {
    n: "06",
    title: "Clôtures & occultation",
    body: "Ganivelles de châtaignier, lames bois, haies mixtes persistantes. Pour ne plus voir le voisin sans lui construire un mur.",
  },
  {
    n: "07",
    title: "Arrosage & eau de pluie",
    body: "Goutte-à-goutte enterré, programmateur, récupérateurs. Un jardin bien planté boit peu, mais il boit beaucoup la première année.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  place: string;
  job: string;
  stars: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Elle est venue trois fois avant de dessiner quoi que ce soit. Le plan tenait compte de la pente, du chien et de mon dos. Trois ans après, tout a poussé comme sur le dessin.",
    name: "Anne-Laure & Ronan",
    place: "Betton",
    job: "Création complète",
    stars: 5,
  },
  {
    quote:
      "Devis détaillé poste par poste, aucun dépassement. On avait retiré le bassin pour tenir le budget : elle a laissé l'arrivée d'eau prête pour plus tard.",
    name: "Fabien M.",
    place: "Saint-Grégoire",
    job: "Terrasse et allée",
    stars: 5,
  },
  {
    quote:
      "Deux arbustes n'ont pas repris l'hiver suivant. Remplacés au printemps, sans discussion et sans facture.",
    name: "Sylvie D.",
    place: "Melesse",
    job: "Haie et massifs",
    stars: 5,
  },
  {
    quote:
      "Un passage toutes les six semaines, jamais eu à relancer. Deux mois d'attente avant le premier rendez-vous, mais ça valait le coup.",
    name: "Jean-Yves L.",
    place: "Cesson-Sévigné",
    job: "Entretien annuel",
    stars: 4,
  },
  {
    quote:
      "Le potager tourne depuis deux saisons sans que j'y comprenne grand-chose. Elle a dessiné les planches en fonction du soleil, pas de la symétrie.",
    name: "Nadia B.",
    place: "Thorigné-Fouillard",
    job: "Potager et serre",
    stars: 5,
  },
  {
    quote:
      "Elle nous a dit non sur le gazon anglais et oui sur les graminées. On a moins arrosé cet été que le voisin en une semaine.",
    name: "Pierre & Camille",
    place: "Rennes",
    job: "Jardin de graminées",
    stars: 5,
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQ: Faq[] = [
  {
    q: "Combien coûte un jardin ?",
    a: "Des ordres de grandeur : une terrasse en bois autour de 200 €/m², une allée pavée autour de 130 €/m², un massif planté et paillé autour de 60 €/m², une haie plantée autour de 45 € le mètre linéaire. Un jardin complet de 400 m² se situe le plus souvent entre 12 000 et 25 000 €. La visite et le devis chiffré, eux, sont gratuits.",
  },
  {
    q: "Sous quel délai intervenez-vous ?",
    a: "Réponse sous 48 h, visite dans les deux semaines. Pour une création, comptez deux à quatre mois d'attente selon la saison : les plantations se font de novembre à mars, c'est là que tout reprend le mieux. Pour de l'entretien, sous quinze jours.",
  },
  {
    q: "Jusqu'où vous déplacez-vous ?",
    a: "Trente kilomètres autour de Rennes : Betton, Saint-Grégoire, Melesse, Liffré, Thorigné-Fouillard, Cesson-Sévigné, Chantepie, Bruz, Acigné. Au-delà, je réponds quand même — parfois le chantier vaut le trajet.",
  },
  {
    q: "L'entretien donne-t-il droit au crédit d'impôt ?",
    a: "Oui. Les petits travaux de jardinage relèvent des services à la personne : 50 % de crédit d'impôt, dans la limite de 5 000 € de dépenses par an et par foyer. L'attestation fiscale vous est envoyée en janvier. En revanche, la création et la maçonnerie paysagère n'y ouvrent pas droit.",
  },
  {
    q: "Que devient le jardin pendant le chantier ?",
    a: "Un seul chantier à la fois, dates fixées avant la signature. Les accès sont protégés par des plaques de roulage, le terrain est balayé chaque soir, et les déchets verts partent en compostage — rien ne reste en tas trois semaines.",
  },
  {
    q: "Et si une plante meurt ?",
    a: "Toute plante qui n'a pas repris dans l'année est remplacée à mes frais, hors défaut d'arrosage le premier été. On en parle à la livraison : c'est le seul vrai risque, et il tient à un tuyau.",
  },
];

export const STATS = [
  { value: "15", label: "ans de métier" },
  { value: "140", label: "jardins dessinés" },
  { value: "30", label: "km autour de Rennes" },
  { value: "1", label: "an de garantie" },
];
