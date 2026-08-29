export type ProductCategory =
  | "protection"
  | "purification"
  | "chance-reussite"
  | "prosperite"
  | "amour-harmonie";

export const productCategories: {
  slug: ProductCategory;
  label: string;
  icon: string;
  description: string;
}[] = [
  {
    slug: "protection",
    label: "Protection spirituelle",
    icon: "seal",
    description:
      "Kits, huiles et parfums pensés pour accompagner vos rituels de protection énergétique du foyer et de la personne.",
  },
  {
    slug: "purification",
    label: "Purification spirituelle",
    icon: "smoke",
    description:
      "Sauge, Palo Santo, encens et bains rituels pour purifier votre espace de vie et renouveler son énergie.",
  },
  {
    slug: "chance-reussite",
    label: "Chance & réussite",
    icon: "star",
    description:
      "Des rituels symboliques pour accompagner vos projets, vos opportunités et vos nouveaux départs.",
  },
  {
    slug: "prosperite",
    label: "Prospérité & abondance",
    icon: "coin",
    description:
      "Kits et huiles associés à l'abondance, la prospérité financière et la réussite professionnelle.",
  },
  {
    slug: "amour-harmonie",
    label: "Amour & harmonie",
    icon: "heart",
    description:
      "Accompagnement symbolique pour l'harmonie du couple, la réconciliation et la paix relationnelle.",
  },
];

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  price: number; // FCFA
  compareAtPrice?: number;
  badge?: string;
  shortDescription: string;
  description: string;
  contents?: string[];
  howToUse: string;
  precautions: string;
  image: string; // placeholder path in /public/images
  seoTitle: string;
  metaDescription: string;
};

export const products: Product[] = [
  {
    slug: "kit-protection-spirituelle",
    name: "Kit de Protection Spirituelle",
    category: "protection",
    price: 18000,
    compareAtPrice: 22000,
    badge: "Best-seller",
    shortDescription:
      "Un coffret complet pensé pour accompagner vos rituels de protection énergétique du foyer et de la personne.",
    description:
      "Ce kit réunit plusieurs éléments soigneusement sélectionnés pour vous accompagner dans une démarche de protection spirituelle. Il s'adresse à celles et ceux qui souhaitent instaurer un rituel régulier de protection énergétique, à la maison comme en déplacement.",
    contents: [
      "1 fagot de sauge blanche",
      "1 huile de protection spirituelle",
      "1 sachet d'herbes de protection",
      "1 bougie",
      "1 guide d'utilisation",
    ],
    howToUse:
      "Utilisez chaque élément selon les indications fournies dans le guide. Prenez le temps de vous installer dans un endroit calme avant de commencer votre rituel.",
    precautions:
      "Tenir hors de portée des enfants. Ne pas ingérer. Toujours utiliser la sauge ou l'encens dans un espace aéré, loin de tout matériau inflammable.",
    image: "/images/products/kit-protection-spirituelle.jpg",
    seoTitle: "Kit de Protection Spirituelle | Rituel de Protection Énergétique",
    metaDescription:
      "Découvrez notre kit de protection spirituelle pour accompagner vos rituels de protection énergétique du foyer et de la personne. Commande rapide sur WhatsApp.",
  },
  {
    slug: "huile-de-protection-spirituelle",
    name: "Huile de Protection Spirituelle",
    category: "protection",
    price: 6500,
    shortDescription:
      "Une huile composée d'herbes séchées, pensée pour vos rituels personnels de protection.",
    description:
      "Une huile infusée d'herbes naturelles, préparée avec attention pour accompagner vos gestes rituels de protection. Son flacon en verre laisse apparaître la composition végétale utilisée.",
    howToUse:
      "Quelques gouttes suffisent lors de votre rituel personnel. Se référer aux conseils transmis lors de la commande pour une utilisation adaptée à votre pratique.",
    precautions:
      "Usage externe uniquement. Faire un test cutané avant la première utilisation. Ne pas appliquer sur peau lésée.",
    image: "/images/products/huile-protection-spirituelle.jpg",
    seoTitle: "Huile de Protection Spirituelle | Rituels Personnels",
    metaDescription:
      "Huile de protection spirituelle composée d'herbes naturelles pour accompagner vos rituels personnels. Livraison et commande via WhatsApp.",
  },
  {
    slug: "kit-protection-maison-et-famille",
    name: "Kit Protection Maison et Famille",
    category: "protection",
    price: 25000,
    badge: "Premium",
    shortDescription:
      "Un kit plus complet destiné à la protection énergétique de votre foyer et de votre famille.",
    description:
      "Pensé pour les foyers, ce kit rassemble les éléments essentiels à un rituel de protection à l'échelle de la maison entière : purification préalable, protection et symboles de préservation du lieu de vie.",
    contents: [
      "1 fagot de sauge blanche",
      "1 bâton de Palo Santo",
      "1 huile de protection énergétique",
      "1 sachet d'herbes de protection",
      "1 bougie",
    ],
    howToUse:
      "Commencez par une purification de l'espace, pièce par pièce, avant de procéder au geste de protection avec l'huile fournie.",
    precautions:
      "Tenir hors de portée des enfants et des animaux. Utiliser dans un lieu aéré. Ne jamais laisser une combustion sans surveillance.",
    image: "/images/products/kit-protection-maison-famille.jpg",
    seoTitle: "Kit Protection Maison et Famille | Protection du Foyer",
    metaDescription:
      "Kit de protection énergétique pensé pour la maison et la famille : sauge, Palo Santo, huile et bougie. Contactez-nous sur WhatsApp.",
  },
  {
    slug: "kit-purification-spirituelle",
    name: "Kit de Purification Spirituelle",
    category: "purification",
    price: 17000,
    badge: "Best-seller",
    shortDescription:
      "Un coffret soigneusement composé pour vos rituels de purification et de nettoyage énergétique.",
    description:
      "Ce kit de purification spirituelle rassemble les indispensables pour un rituel de nettoyage énergétique de votre espace de vie : sauge blanche, Palo Santo et accessoires de purification.",
    contents: [
      "1 fagot de sauge blanche",
      "1 bâton de Palo Santo",
      "1 coquillage (support de combustion)",
      "1 guide de purification",
    ],
    howToUse:
      "Allumez délicatement la sauge ou le Palo Santo, laissez la fumée se propager doucement dans chaque pièce en ouvrant une fenêtre en fin de rituel.",
    precautions:
      "À utiliser dans un espace aéré. Ne jamais laisser sans surveillance. Éloigner des matières inflammables et des enfants.",
    image: "/images/products/kit-purification-spirituelle.jpg",
    seoTitle: "Kit de Purification Spirituelle | Nettoyage Énergétique",
    metaDescription:
      "Découvrez notre kit de purification spirituelle destiné aux rituels de nettoyage et de purification. Contactez-nous sur WhatsApp pour plus d'informations.",
  },
  {
    slug: "sauge-blanche",
    name: "Sauge Blanche",
    category: "purification",
    price: 4000,
    shortDescription: "Fagot de sauge blanche séchée pour vos rituels de purification.",
    description:
      "La sauge blanche est traditionnellement utilisée pour purifier un espace avant ou après un événement marquant, ou simplement pour renouveler l'atmosphère d'une pièce.",
    howToUse:
      "Allumez l'extrémité du fagot, laissez la flamme s'éteindre pour ne garder que la fumée, et promenez-la doucement dans la pièce.",
    precautions: "Utiliser dans un lieu aéré et sur un support ininflammable.",
    image: "/images/products/sauge-blanche.jpg",
    seoTitle: "Sauge Blanche | Purification Spirituelle",
    metaDescription:
      "Fagot de sauge blanche séchée pour vos rituels de purification énergétique. Produit disponible en boutique, commande sur WhatsApp.",
  },
  {
    slug: "palo-santo",
    name: "Palo Santo",
    category: "purification",
    price: 5000,
    shortDescription: "Bâtons de bois sacré, utilisés en purification depuis des générations.",
    description:
      "Le Palo Santo est un bois aromatique originaire d'Amérique du Sud, traditionnellement brûlé pour purifier un lieu et apaiser l'atmosphère.",
    howToUse:
      "Allumez une extrémité du bâton quelques secondes, soufflez la flamme et laissez la fumée se diffuser.",
    precautions: "Utiliser sur un support résistant à la chaleur, dans une pièce aérée.",
    image: "/images/products/palo-santo.jpg",
    seoTitle: "Palo Santo | Bâtons de Purification",
    metaDescription:
      "Bâtons de Palo Santo pour vos rituels de purification et de nettoyage énergétique. Livraison rapide, commande sur WhatsApp.",
  },
  {
    slug: "kit-chance-et-reussite",
    name: "Kit de Chance et Réussite",
    category: "chance-reussite",
    price: 19000,
    badge: "Premium",
    shortDescription:
      "Un coffret symbolique pour accompagner vos projets, vos opportunités et vos nouveaux départs.",
    description:
      "Conçu pour accompagner les périodes de changement, ce kit rassemble des éléments symboliques associés à la chance et à l'ouverture des opportunités.",
    contents: [
      "1 parfum de chance",
      "1 huile de réussite",
      "1 bougie",
      "1 sachet d'herbes",
      "1 guide d'utilisation",
    ],
    howToUse:
      "Utilisez ce kit lors d'un moment calme, idéalement au début d'un projet important ou d'une nouvelle étape de vie.",
    precautions: "Usage externe uniquement. Tenir hors de portée des enfants.",
    image: "/images/products/kit-chance-reussite.jpg",
    seoTitle: "Kit de Chance et Réussite | Rituel Symbolique",
    metaDescription:
      "Kit de chance et de réussite pour accompagner vos projets et vos nouveaux départs. Commandez facilement sur WhatsApp.",
  },
  {
    slug: "huile-de-chance",
    name: "Huile de Chance",
    category: "chance-reussite",
    price: 6500,
    shortDescription: "Une huile symbolique associée à la chance et aux opportunités nouvelles.",
    description:
      "Composée d'herbes séchées choisies pour leur symbolique, cette huile accompagne vos rituels personnels liés à la chance et à l'ouverture de nouvelles opportunités.",
    howToUse: "Quelques gouttes suffisent lors de votre rituel personnel.",
    precautions: "Usage externe uniquement. Faire un test cutané avant utilisation.",
    image: "/images/products/huile-de-chance.jpg",
    seoTitle: "Huile de Chance | Rituel de Réussite",
    metaDescription:
      "Huile de chance composée d'herbes naturelles pour accompagner vos rituels personnels de réussite. Commande sur WhatsApp.",
  },
  {
    slug: "kit-prosperite-financiere",
    name: "Kit de Prospérité Financière",
    category: "prosperite",
    price: 21000,
    badge: "Premium",
    shortDescription:
      "Un coffret pensé pour accompagner symboliquement vos objectifs de prospérité et d'abondance.",
    description:
      "Ce kit rassemble des éléments traditionnellement associés à la prospérité et à l'abondance financière, pour accompagner vos projets professionnels et personnels.",
    contents: [
      "1 huile d'abondance",
      "1 parfum de prospérité",
      "1 sachet d'herbes",
      "1 bougie dorée",
    ],
    howToUse:
      "À utiliser lors d'un moment calme, idéalement en lien avec le lancement ou le suivi d'un projet professionnel.",
    precautions: "Usage externe uniquement. Tenir hors de portée des enfants.",
    image: "/images/products/kit-prosperite-financiere.jpg",
    seoTitle: "Kit de Prospérité Financière | Abondance et Réussite",
    metaDescription:
      "Kit de prospérité financière pour accompagner vos objectifs d'abondance et de réussite professionnelle. Contact WhatsApp direct.",
  },
  {
    slug: "huile-d-abondance",
    name: "Huile d'Abondance",
    category: "prosperite",
    price: 6500,
    shortDescription: "Une huile symbolique liée à l'abondance et à la prospérité.",
    description:
      "Préparée à partir d'herbes séchées sélectionnées pour leur symbolique d'abondance, cette huile accompagne vos rituels personnels de prospérité.",
    howToUse: "Quelques gouttes suffisent lors de votre rituel personnel.",
    precautions: "Usage externe uniquement.",
    image: "/images/products/huile-abondance.jpg",
    seoTitle: "Huile d'Abondance | Rituel de Prospérité",
    metaDescription:
      "Huile d'abondance composée d'herbes naturelles pour vos rituels personnels de prospérité. Commande rapide sur WhatsApp.",
  },
  {
    slug: "kit-harmonie-amoureuse",
    name: "Kit d'Harmonie Amoureuse",
    category: "amour-harmonie",
    price: 19000,
    badge: "Best-seller",
    shortDescription:
      "Un coffret symbolique dédié à l'harmonie du couple et à la paix relationnelle.",
    description:
      "Ce kit accompagne symboliquement les moments consacrés à l'harmonie du couple : apaisement, communication et paix relationnelle.",
    contents: [
      "1 huile d'harmonie du couple",
      "1 parfum d'attraction",
      "1 bougie",
      "1 sachet d'herbes",
    ],
    howToUse:
      "À utiliser dans un moment calme, seul ou à deux, selon les indications transmises avec votre commande.",
    precautions: "Usage externe uniquement. Tenir hors de portée des enfants.",
    image: "/images/products/kit-harmonie-amoureuse.jpg",
    seoTitle: "Kit d'Harmonie Amoureuse | Paix du Couple",
    metaDescription:
      "Kit d'harmonie amoureuse pour accompagner symboliquement la paix et l'harmonie du couple. Commande directe sur WhatsApp.",
  },
  {
    slug: "parfum-de-seduction",
    name: "Parfum de Séduction",
    category: "amour-harmonie",
    price: 5500,
    shortDescription: "Un parfum aux notes chaudes, composé d'épices et de fleurs séchées.",
    description:
      "Un parfum artisanal composé d'anis étoilé, de pétales séchés et d'épices, pensé pour accompagner vos rituels personnels liés à l'amour et à l'attraction.",
    howToUse: "Vaporiser légèrement sur les vêtements ou dans une pièce, à distance de la peau.",
    precautions: "Ne pas vaporiser directement sur peau sensible. Usage externe uniquement.",
    image: "/images/products/parfum-seduction.jpg",
    seoTitle: "Parfum de Séduction | Rituel Amoureux",
    metaDescription:
      "Parfum de séduction artisanal aux notes d'épices et de fleurs séchées pour vos rituels personnels. Commande sur WhatsApp.",
  },
  {
    slug: "bougie-naturelle",
    name: "Bougie Naturelle",
    category: "purification",
    price: 3500,
    shortDescription: "Une bougie artisanale pour accompagner vos rituels et moments de calme.",
    description:
      "Bougie simple et naturelle, pensée comme complément à vos rituels de purification, de protection ou de méditation.",
    howToUse: "Allumer dans un lieu calme et aéré, à distance de tout objet inflammable.",
    precautions: "Ne jamais laisser une bougie allumée sans surveillance.",
    image: "/images/products/bougie-naturelle.jpg",
    seoTitle: "Bougie Naturelle | Accessoire de Rituel",
    metaDescription:
      "Bougie naturelle artisanale, complément idéal pour vos rituels de purification et de méditation. Disponible en boutique.",
  },
  {
    slug: "encens-de-purification-spirituelle",
    name: "Encens de Purification Spirituelle",
    category: "purification",
    price: 4500,
    shortDescription: "Résine d'encens naturelle pour purifier votre espace de vie.",
    description:
      "Résine d'encens naturelle traditionnellement utilisée pour purifier un lieu et instaurer une atmosphère apaisante lors de vos rituels personnels.",
    howToUse:
      "Faire brûler quelques grains sur un charbon dédié, dans un contenant adapté à la chaleur, en pièce aérée.",
    precautions:
      "Manipuler le charbon incandescent avec précaution. Tenir hors de portée des enfants.",
    image: "/images/products/encens-purification.jpg",
    seoTitle: "Encens de Purification Spirituelle | Résine Naturelle",
    metaDescription:
      "Encens en résine naturelle pour vos rituels de purification spirituelle. Commande et informations sur WhatsApp.",
  },
];

export function getProductsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
