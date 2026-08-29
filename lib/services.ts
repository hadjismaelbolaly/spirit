export type ServiceCategory =
  | "protection-spirituelle"
  | "purification-spirituelle"
  | "chance-et-reussite"
  | "prosperite-et-abondance"
  | "amour-et-relations"
  | "consultation-spirituelle";

export const serviceCategories: {
  slug: ServiceCategory;
  label: string;
  description: string;
}[] = [
  {
    slug: "protection-spirituelle",
    label: "Protection spirituelle",
    description:
      "Accompagnement personnalisé pour la protection énergétique du foyer et de la personne.",
  },
  {
    slug: "purification-spirituelle",
    label: "Purification spirituelle",
    description:
      "Consultations et rituels symboliques de nettoyage énergétique du lieu de vie.",
  },
  {
    slug: "chance-et-reussite",
    label: "Chance & réussite",
    description:
      "Accompagnement spirituel pour vos projets, vos opportunités et vos nouveaux départs.",
  },
  {
    slug: "prosperite-et-abondance",
    label: "Prospérité & abondance",
    description:
      "Consultations orientées vers la réussite professionnelle et la prospérité financière.",
  },
  {
    slug: "amour-et-relations",
    label: "Amour & relations",
    description:
      "Accompagnement spirituel pour l'harmonie du couple et les questions sentimentales.",
  },
  {
    slug: "consultation-spirituelle",
    label: "Consultation & accompagnement",
    description:
      "Consultations spirituelles personnalisées, à distance, par téléphone ou WhatsApp.",
  },
];

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  description: string;
  format: string;
  seoTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  // Protection spirituelle
  {
    slug: "consultation-protection-spirituelle",
    title: "Consultation en Protection Spirituelle",
    category: "protection-spirituelle",
    shortDescription:
      "Un échange personnalisé pour identifier vos besoins en matière de protection spirituelle.",
    description:
      "Cette consultation vous permet d'échanger directement sur votre situation et de comprendre les démarches symboliques de protection spirituelle adaptées à votre contexte personnel ou familial.",
    format: "À distance ou par WhatsApp",
    seoTitle: "Consultation en Protection Spirituelle | Accompagnement Personnalisé",
    metaDescription:
      "Consultation en protection spirituelle personnalisée. Échange direct par WhatsApp ou téléphone pour comprendre votre situation.",
  },
  {
    slug: "protection-spirituelle-du-foyer",
    title: "Protection Spirituelle du Foyer",
    category: "protection-spirituelle",
    shortDescription: "Un accompagnement dédié à la protection énergétique de votre maison.",
    description:
      "Ce service accompagne les démarches symboliques de protection énergétique appliquées à l'échelle du foyer, pour instaurer un climat de sérénité au sein de la maison.",
    format: "Sur rendez-vous",
    seoTitle: "Protection Spirituelle du Foyer | Rituel de Protection de la Maison",
    metaDescription:
      "Service de protection spirituelle du foyer pour accompagner la sérénité de votre maison. Prenez contact par WhatsApp.",
  },
  {
    slug: "accompagnement-protection-energetique",
    title: "Accompagnement en Protection Énergétique",
    category: "protection-spirituelle",
    shortDescription:
      "Un suivi personnalisé pour vous accompagner dans la durée sur les questions de protection énergétique.",
    description:
      "Un accompagnement pensé pour un suivi dans le temps, destiné à celles et ceux qui souhaitent instaurer une pratique régulière autour de la protection énergétique.",
    format: "Suivi personnalisé",
    seoTitle: "Accompagnement en Protection Énergétique | Suivi Personnalisé",
    metaDescription:
      "Accompagnement en protection énergétique avec suivi personnalisé. Contact direct par WhatsApp ou e-mail.",
  },

  // Purification spirituelle
  {
    slug: "consultation-purification-spirituelle",
    title: "Consultation de Purification Spirituelle",
    category: "purification-spirituelle",
    shortDescription:
      "Un échange pour comprendre les démarches de purification adaptées à votre situation.",
    description:
      "Cette consultation permet d'aborder ensemble les besoins spécifiques liés à la purification spirituelle, qu'il s'agisse de votre personne ou de votre lieu de vie.",
    format: "À distance ou par WhatsApp",
    seoTitle: "Consultation de Purification Spirituelle | Nettoyage Énergétique",
    metaDescription:
      "Consultation de purification spirituelle personnalisée pour le nettoyage énergétique de votre personne ou de votre lieu de vie.",
  },
  {
    slug: "purification-energetique-du-domicile",
    title: "Purification Énergétique du Domicile",
    category: "purification-spirituelle",
    shortDescription: "Un accompagnement pour purifier l'énergie de votre domicile.",
    description:
      "Ce service accompagne les démarches symboliques de purification à l'échelle du domicile, pour renouveler l'atmosphère d'un lieu de vie.",
    format: "Sur rendez-vous",
    seoTitle: "Purification Énergétique du Domicile | Nettoyage du Lieu de Vie",
    metaDescription:
      "Service de purification énergétique du domicile pour renouveler l'atmosphère de votre lieu de vie. Contact WhatsApp.",
  },
  {
    slug: "bain-spirituel-de-purification",
    title: "Bain Spirituel de Purification",
    category: "purification-spirituelle",
    shortDescription: "Un accompagnement autour du rituel traditionnel de bain de purification.",
    description:
      "Ce service transmet les indications relatives au bain spirituel de purification, une pratique traditionnelle destinée à accompagner un moment de renouveau personnel.",
    format: "Consultation préalable requise",
    seoTitle: "Bain Spirituel de Purification | Rituel Traditionnel",
    metaDescription:
      "Accompagnement autour du bain spirituel de purification, pratique traditionnelle de renouveau personnel. Prenez rendez-vous.",
  },

  // Chance & réussite
  {
    slug: "consultation-spirituelle-pour-la-chance",
    title: "Consultation Spirituelle pour la Chance",
    category: "chance-et-reussite",
    shortDescription: "Un échange personnalisé autour de vos projets et de vos opportunités.",
    description:
      "Cette consultation vous accompagne dans une réflexion symbolique autour de la chance, des opportunités à saisir et des nouveaux départs.",
    format: "À distance ou par WhatsApp",
    seoTitle: "Consultation Spirituelle pour la Chance | Opportunités et Réussite",
    metaDescription:
      "Consultation spirituelle personnalisée autour de la chance et des opportunités. Échange direct par WhatsApp.",
  },
  {
    slug: "accompagnement-pour-la-reussite-professionnelle",
    title: "Accompagnement pour la Réussite Professionnelle",
    category: "chance-et-reussite",
    shortDescription:
      "Un accompagnement dédié aux questions professionnelles et à vos projets de carrière.",
    description:
      "Un accompagnement pensé pour les personnes en recherche d'orientation ou de soutien symbolique dans leurs démarches professionnelles.",
    format: "Suivi personnalisé",
    seoTitle: "Accompagnement pour la Réussite Professionnelle | Projets & Carrière",
    metaDescription:
      "Accompagnement spirituel pour la réussite professionnelle et vos projets de carrière. Prenez contact dès maintenant.",
  },
  {
    slug: "rituel-symbolique-de-chance",
    title: "Rituel Symbolique de Chance",
    category: "chance-et-reussite",
    shortDescription: "Un accompagnement pour la mise en place d'un rituel personnel de chance.",
    description:
      "Ce service transmet les indications nécessaires à la réalisation d'un rituel symbolique personnel autour de la thématique de la chance.",
    format: "Consultation préalable requise",
    seoTitle: "Rituel Symbolique de Chance | Accompagnement Personnalisé",
    metaDescription:
      "Accompagnement pour la mise en place d'un rituel symbolique de chance personnalisé. Contact WhatsApp direct.",
  },

  // Prospérité & abondance
  {
    slug: "consultation-spirituelle-pour-la-prosperite",
    title: "Consultation Spirituelle pour la Prospérité",
    category: "prosperite-et-abondance",
    shortDescription: "Un échange autour de vos objectifs de prospérité et d'abondance.",
    description:
      "Cette consultation aborde vos préoccupations liées à la prospérité et à l'abondance, dans une démarche d'accompagnement symbolique personnalisé.",
    format: "À distance ou par WhatsApp",
    seoTitle: "Consultation Spirituelle pour la Prospérité | Abondance",
    metaDescription:
      "Consultation spirituelle personnalisée pour la prospérité et l'abondance. Échange direct par WhatsApp ou e-mail.",
  },
  {
    slug: "accompagnement-pour-les-entrepreneurs",
    title: "Accompagnement pour les Entrepreneurs",
    category: "prosperite-et-abondance",
    shortDescription:
      "Un accompagnement dédié aux porteurs de projet et aux entrepreneurs.",
    description:
      "Un accompagnement pensé spécifiquement pour les entrepreneurs souhaitant un soutien symbolique dans le développement de leurs projets.",
    format: "Suivi personnalisé",
    seoTitle: "Accompagnement pour les Entrepreneurs | Projets Professionnels",
    metaDescription:
      "Accompagnement spirituel pour les entrepreneurs et porteurs de projet. Prenez rendez-vous par WhatsApp.",
  },
  {
    slug: "consultation-abondance-et-prosperite",
    title: "Consultation Abondance et Prospérité",
    category: "prosperite-et-abondance",
    shortDescription: "Une consultation centrée sur les objectifs financiers et l'abondance.",
    description:
      "Cette consultation vous accompagne dans une réflexion autour de vos objectifs financiers, avec une approche symbolique et personnalisée.",
    format: "À distance ou par WhatsApp",
    seoTitle: "Consultation Abondance et Prospérité | Objectifs Financiers",
    metaDescription:
      "Consultation spirituelle centrée sur l'abondance et la prospérité financière. Contact direct par WhatsApp.",
  },

  // Amour & relations
  {
    slug: "consultation-spirituelle-pour-l-amour",
    title: "Consultation Spirituelle pour l'Amour",
    category: "amour-et-relations",
    shortDescription: "Un échange personnalisé autour de vos questions sentimentales.",
    description:
      "Cette consultation vous permet d'aborder librement vos préoccupations sentimentales dans un cadre confidentiel et bienveillant.",
    format: "À distance ou par WhatsApp",
    seoTitle: "Consultation Spirituelle pour l'Amour | Accompagnement Sentimental",
    metaDescription:
      "Consultation spirituelle personnalisée pour vos questions sentimentales. Échange confidentiel par WhatsApp.",
  },
  {
    slug: "accompagnement-pour-l-harmonie-du-couple",
    title: "Accompagnement pour l'Harmonie du Couple",
    category: "amour-et-relations",
    shortDescription: "Un accompagnement dédié à l'harmonie et à la communication du couple.",
    description:
      "Un accompagnement pensé pour les couples souhaitant un soutien symbolique dans leur démarche de communication et d'harmonie.",
    format: "Suivi personnalisé",
    seoTitle: "Accompagnement pour l'Harmonie du Couple | Communication et Paix",
    metaDescription:
      "Accompagnement spirituel pour l'harmonie et la communication du couple. Prenez contact par WhatsApp.",
  },
  {
    slug: "accompagnement-apres-une-separation",
    title: "Accompagnement après une Séparation",
    category: "amour-et-relations",
    shortDescription: "Un soutien symbolique pour traverser une période de séparation.",
    description:
      "Ce service accompagne les personnes traversant une période de séparation, dans une démarche de soutien et de reconstruction personnelle.",
    format: "À distance ou par WhatsApp",
    seoTitle: "Accompagnement après une Séparation | Soutien Personnel",
    metaDescription:
      "Accompagnement spirituel après une séparation, pour un soutien personnel dans cette période. Contact confidentiel par WhatsApp.",
  },

  // Consultation & accompagnement général
  {
    slug: "consultation-spirituelle-personnalisee",
    title: "Consultation Spirituelle Personnalisée",
    category: "consultation-spirituelle",
    shortDescription: "Une consultation individuelle adaptée à votre situation personnelle.",
    description:
      "Cette consultation s'adapte à votre situation particulière, quel que soit le sujet abordé : protection, purification, chance, prospérité ou relations.",
    format: "À distance, téléphone ou WhatsApp",
    seoTitle: "Consultation Spirituelle Personnalisée | Accompagnement Individuel",
    metaDescription:
      "Consultation spirituelle personnalisée adaptée à votre situation. Disponible à distance, par téléphone ou WhatsApp.",
  },
  {
    slug: "consultation-spirituelle-a-distance",
    title: "Consultation Spirituelle à Distance",
    category: "consultation-spirituelle",
    shortDescription: "Une consultation accessible où que vous soyez, en Afrique ou ailleurs.",
    description:
      "Ce format de consultation s'adresse aux personnes résidant en dehors du Bénin ou ne pouvant pas se déplacer, avec un accompagnement entièrement réalisé à distance.",
    format: "À distance",
    seoTitle: "Consultation Spirituelle à Distance | Accompagnement en Afrique Francophone",
    metaDescription:
      "Consultation spirituelle à distance accessible depuis toute l'Afrique francophone. Prenez rendez-vous par WhatsApp ou e-mail.",
  },
  {
    slug: "seance-de-guidance-spirituelle",
    title: "Séance de Guidance Spirituelle",
    category: "consultation-spirituelle",
    shortDescription: "Une séance dédiée à l'orientation et à la clarification personnelle.",
    description:
      "Cette séance vous offre un espace d'écoute et d'orientation pour clarifier une situation personnelle ou une décision importante.",
    format: "Sur rendez-vous",
    seoTitle: "Séance de Guidance Spirituelle | Orientation Personnelle",
    metaDescription:
      "Séance de guidance spirituelle pour vous accompagner dans une décision ou une situation personnelle. Prenez rendez-vous.",
  },
];

export function getServicesByCategory(category: ServiceCategory) {
  return services.filter((s) => s.category === category);
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
