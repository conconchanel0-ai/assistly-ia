export const BRAND = {
  name: "Dis Moi Nature",
  kind: "Paysagiste",
  person: "Véronique Géhin",
  role: "Entretien & aménagement du jardin",
  area: "Bains-les-Bains",
  town: "La Vôge-les-Bains",
  site: "dis-moi-nature.fr",
  email: "dismoinature@gmail.com",
  phone: "06 40 70 31 08",
  since: "2013",
  edition: "Vosges · depuis 2013",
  label: "Services à la personne · Siren 794277996",
  /** Rayon d'intervention annoncé autour de Bains-les-Bains. */
  radius: "25 km",
};

export interface Step {
  n: string;
  title: string;
  body: string;
  aside: string;
  photo: string;
}

/** Comment se déroule une intervention, du premier appel à l'entretien qui suit. */
export const STEPS: Step[] = [
  {
    n: "01",
    title: "On se parle",
    body: "Un appel, un SMS, un mail ou le formulaire de cette page. Vous posez vos questions, on y répond très rapidement — et sans que ça vous engage à quoi que ce soit.",
    aside: "Réponse rapide",
    photo: "etape-visite",
  },
  {
    n: "02",
    title: "L'analyse paysagère",
    body: "On prend rendez-vous et on regarde le terrain ensemble. Exposition, sol, végétation en place, et surtout le temps que vous pourrez consacrer à l'entretien plus tard.",
    aside: "Sur votre terrain",
    photo: "etape-plan",
  },
  {
    n: "03",
    title: "Le devis, puis le chantier",
    body: "Le devis part par mail, gratuitement et adapté à vos besoins. Une fois validé, le chantier commence. Règlement en espèces, par chèque ou par virement, facture à la clé.",
    aside: "Devis gratuit",
    photo: "etape-chantier",
  },
  {
    n: "04",
    title: "L'entretien qui suit",
    body: "Ponctuel ou tout au long de l'année, comme vous préférez. Au bout de cinq interventions, la carte de fidélité vous offre 10 % sur la suivante.",
    aside: "Ponctuel ou régulier",
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
    title: "Taille des haies et arbustes",
    body: "Taille d'entretien et taille de formation, haies libres ou taillées au cordeau. On respecte le rythme de la plante et les périodes de nidification, et on évacue ou on broie les déchets de coupe.",
  },
  {
    n: "02",
    title: "Débroussaillage et tonte",
    body: "Tonte régulière ou remise en état d'un terrain laissé de côté. Découpe de bordures et détourage des pieds d'arbres pour que la pelouse retrouve un dessin net.",
  },
  {
    n: "03",
    title: "Désherbage naturel",
    body: "Désherbage manuel, mécanique et paillage, sans produit chimique. Les allées, les cours et les massifs restent propres, la vie du sol reste intacte.",
  },
  {
    n: "04",
    title: "Soin des plantes",
    body: "Arrosage, taille, fertilisation, surveillance des maladies et des ravageurs. Un suivi régulier vaut mieux qu'un traitement d'urgence — c'est presque toujours moins cher, aussi.",
  },
  {
    n: "05",
    title: "Sauvetage de plantes",
    body: "Un arbuste qui décline, un massif qui s'épuise, une plante d'intérieur ou de terrasse mal en point : on cherche la cause avant de remplacer. Beaucoup repartent.",
  },
  {
    n: "06",
    title: "Aménagements végétalisés",
    body: "Création ou reprise d'un massif, d'une bordure, d'une haie, d'un coin d'ombre. Vous dessinez votre projet et on vous accompagne, ou vous nous le confiez entièrement.",
  },
  {
    n: "07",
    title: "Préparation du sol",
    body: "Décompactage, amendement, nivellement, désherbage préalable et paillage. Le sol se prépare avant de planter : c'est ce qui décide de la reprise deux ans plus tard.",
  },
  {
    n: "08",
    title: "Conception et entretien du potager",
    body: "Création ou réaménagement d'un potager, avec la thématique qui vous tient à cœur : aromatiques, petits fruits, carrés surélevés, légumes anciens. Et l'entretien de saison si vous le souhaitez.",
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
      "La haie de thuyas n'avait pas été taillée depuis quatre ans. Elle a été reprise en deux jours, hauteur ramenée, déchets emportés, et rien à balayer derrière.",
    name: "Michel D.",
    place: "Bains-les-Bains",
    job: "Taille de haies",
    stars: 5,
  },
  {
    quote:
      "Un massif entier était à refaire. On a discuté du terrain avant de parler plantes, et surtout du temps que je pouvais y passer. Le résultat me demande vingt minutes par mois.",
    name: "Christine V.",
    place: "Xertigny",
    job: "Aménagement végétalisé",
    stars: 5,
  },
  {
    quote:
      "Le terrain de la maison de mes parents était en friche. Débroussaillé, tondu, bordures découpées : on a retrouvé le jardin qu'on connaissait.",
    name: "Julien M.",
    place: "Fontenoy-le-Château",
    job: "Débroussaillage",
    stars: 5,
  },
  {
    quote:
      "L'accompagnement pour l'inscription à la coopérative a été fait de bout en bout, gratuitement. Cinquante pour cent en moins sur la facture, ça change tout sur l'année.",
    name: "Annie L.",
    place: "La Vôge-les-Bains",
    job: "Entretien à l'année",
    stars: 5,
  },
  {
    quote:
      "Deux hortensias et un érable du Japon que je croyais perdus. On m'a expliqué ce qui n'allait pas au lieu de me vendre des plants neufs. Ils sont repartis au printemps.",
    name: "Pascal R.",
    place: "Plombières-les-Bains",
    job: "Sauvetage de plantes",
    stars: 5,
  },
  {
    quote:
      "Le potager en carrés a été monté et planté en une journée, avec les aromatiques que je voulais. On me rappelle chaque saison pour savoir si tout tient.",
    name: "Nadia B.",
    place: "Darney",
    job: "Potager",
    stars: 4,
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQ: Faq[] = [
  {
    q: "Comment obtenir un devis ?",
    a: "Par téléphone au 06 40 70 31 08, par SMS, par mail à dismoinature@gmail.com ou avec le formulaire de cette page. On convient d'un rendez-vous, on regarde le terrain, puis le devis vous part par mail — gratuit, adapté à vos besoins et sans engagement. Le chantier ne commence qu'une fois le devis validé.",
  },
  {
    q: "Comment fonctionne la réduction de 50 % ?",
    a: "Dis Moi Nature est adhérente d'une coopérative de services à la personne. Il vous suffit de vous inscrire pour bénéficier de 50 % sur votre facture, soit en remboursement différé sous forme de crédit d'impôt, soit en déduction immédiate — à vous de choisir. On vous renseigne et on vous accompagne gratuitement dans les démarches d'inscription, sur simple demande.",
  },
  {
    q: "Jusqu'où vous déplacez-vous ?",
    a: "Jusqu'à 25 kilomètres autour de Bains-les-Bains, dans les Vosges. Particuliers comme entreprises. Si vous n'êtes pas sûr d'être dans la zone, demandez : c'est le genre de question qui se règle en un appel.",
  },
  {
    q: "Travaillez-vous sans produits chimiques ?",
    a: "Le désherbage se fait naturellement : à la main, mécaniquement, et par paillage. C'est plus long la première année, puis nettement moins ensuite. L'objectif est toujours d'optimiser l'espace végétalisé en respectant la végétation en place.",
  },
  {
    q: "Faut-il s'engager à l'année ?",
    a: "Non. On intervient pour un besoin ponctuel comme pour un entretien régulier, selon ce qui vous arrange. Et la carte de fidélité est gratuite : après cinq interventions réalisées, vous bénéficiez de 10 % sur la prestation suivante.",
  },
  {
    q: "Quels sont les horaires ?",
    a: "Du lundi au vendredi de 8 h à 18 h, le samedi de 9 h à 17 h. Fermé le dimanche. Les messages laissés en dehors de ces horaires trouvent une réponse dès la réouverture.",
  },
  {
    q: "Comment se passe le règlement ?",
    a: "En espèces, par chèque ou par virement, à la fin de l'intervention. La facture vous est envoyée par mail ou remise en main propre. Dis Moi Nature est une entreprise individuelle immatriculée sous le Siren 794277996.",
  },
];

export const STATS = [
  { value: 2013, label: "année de création" },
  { value: 25, label: "km autour de Bains-les-Bains" },
  { value: 50, label: "% de réduction, services à la personne" },
  { value: 10, label: "% avec la carte de fidélité" },
];
