export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  seoTitle: string;
  metaDescription: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "quest-ce-que-la-purification-spirituelle",
    title: "Qu'est-ce que la purification spirituelle ?",
    excerpt:
      "Un tour d'horizon des pratiques traditionnelles de purification spirituelle et de leur place dans un rituel personnel.",
    category: "Purification",
    date: "2026-01-12",
    content: [
      "La purification spirituelle regroupe un ensemble de pratiques traditionnelles destinées à renouveler l'énergie d'un lieu ou d'une personne. Elle prend des formes variées selon les cultures : fumigation de plantes séchées, bains rituels, ou encore usage d'encens naturels.",
      "Dans de nombreuses traditions d'Afrique de l'Ouest, la purification accompagne des moments clés de la vie : un déménagement, un nouveau départ, ou simplement le besoin de retrouver un environnement apaisé.",
      "Ces pratiques restent symboliques et relèvent d'une démarche personnelle. Elles ne remplacent en aucun cas un avis médical ou professionnel lorsque la situation le nécessite.",
    ],
    seoTitle: "Qu'est-ce que la Purification Spirituelle ? | Guide Complet",
    metaDescription:
      "Découvrez ce qu'est la purification spirituelle, ses origines et ses usages traditionnels dans un rituel personnel de nettoyage énergétique.",
  },
  {
    slug: "comment-utiliser-un-baton-de-sauge",
    title: "Comment utiliser un bâton de sauge ?",
    excerpt:
      "Les étapes essentielles pour utiliser un bâton de sauge blanche en toute sécurité lors d'un rituel de purification.",
    category: "Purification",
    date: "2026-01-20",
    content: [
      "Le bâton de sauge blanche est l'un des accessoires les plus utilisés dans les rituels de purification. Sa fumée est traditionnellement associée au nettoyage énergétique d'un espace de vie.",
      "Pour l'utiliser, allumez l'extrémité du fagot puis soufflez doucement la flamme afin de ne conserver que la fumée. Déplacez-vous ensuite calmement dans chaque pièce, en insistant sur les coins et les entrées.",
      "Il est recommandé d'ouvrir une fenêtre en fin de rituel pour laisser s'échapper la fumée, et de toujours utiliser un support adapté, résistant à la chaleur, pour poser le bâton entre deux passages.",
    ],
    seoTitle: "Comment Utiliser un Bâton de Sauge ? | Guide Pratique",
    metaDescription:
      "Guide pratique pour utiliser un bâton de sauge blanche en toute sécurité lors d'un rituel de purification spirituelle.",
  },
  {
    slug: "quest-ce-que-le-palo-santo",
    title: "Qu'est-ce que le Palo Santo ?",
    excerpt:
      "Origines et utilisation traditionnelle du Palo Santo, ce bois sacré utilisé en purification.",
    category: "Purification",
    date: "2026-01-28",
    content: [
      "Le Palo Santo, littéralement « bois sacré » en espagnol, est un bois aromatique originaire d'Amérique du Sud. Il est traditionnellement brûlé pour purifier un espace et instaurer une atmosphère apaisante.",
      "Contrairement à la sauge, le Palo Santo dégage une odeur plus douce, boisée et légèrement sucrée. Il est souvent utilisé en complément d'un rituel de purification, après un premier passage à la sauge.",
      "Comme pour tout accessoire de fumigation, veillez à l'utiliser dans un espace aéré et à ne jamais le laisser brûler sans surveillance.",
    ],
    seoTitle: "Qu'est-ce que le Palo Santo ? | Origines et Utilisation",
    metaDescription:
      "Découvrez les origines du Palo Santo et comment l'utiliser traditionnellement dans un rituel de purification spirituelle.",
  },
  {
    slug: "difference-purification-protection-spirituelle",
    title: "Quelle différence entre purification et protection spirituelle ?",
    excerpt:
      "Deux démarches complémentaires mais distinctes : on vous explique les nuances entre purification et protection.",
    category: "Guides pratiques",
    date: "2026-02-03",
    content: [
      "La purification spirituelle vise à nettoyer une énergie existante, qu'il s'agisse d'un lieu ou d'une personne. Elle intervient généralement en premier, pour repartir sur une base apaisée.",
      "La protection spirituelle, elle, a pour objectif de préserver cette énergie une fois qu'elle a été nettoyée. Elle intervient souvent en complément, après une purification, pour instaurer une forme de préservation dans la durée.",
      "Ces deux démarches sont fréquemment associées au sein d'un même rituel ou d'un même kit, l'une préparant le terrain pour l'autre.",
    ],
    seoTitle: "Différence entre Purification et Protection Spirituelle | Guide",
    metaDescription:
      "Comprenez la différence entre purification spirituelle et protection spirituelle, deux démarches complémentaires mais distinctes.",
  },
  {
    slug: "comment-creer-un-rituel-de-purification-de-son-espace",
    title: "Comment créer un rituel de purification de son espace ?",
    excerpt:
      "Les grandes étapes pour construire votre propre rituel de purification, chez vous, en toute simplicité.",
    category: "Guides pratiques",
    date: "2026-02-10",
    content: [
      "Créer un rituel de purification personnel commence par le choix d'un moment calme, où vous ne serez pas dérangé. Beaucoup de personnes choisissent le matin ou en fin de journée.",
      "Préparez ensuite votre espace : rangez, aérez la pièce, et réunissez les accessoires que vous souhaitez utiliser (sauge, Palo Santo, encens, bougie).",
      "Déplacez-vous ensuite calmement d'une pièce à l'autre, en accordant une attention particulière aux entrées, aux fenêtres et aux angles de chaque pièce, avant de conclure par un moment de calme ou de méditation.",
    ],
    seoTitle: "Créer un Rituel de Purification de son Espace | Guide Étape par Étape",
    metaDescription:
      "Guide étape par étape pour créer votre propre rituel de purification spirituelle de votre espace de vie, chez vous.",
  },
  {
    slug: "guide-pratiques-spirituelles-traditionnelles-afrique",
    title: "Guide des pratiques spirituelles traditionnelles en Afrique",
    excerpt:
      "Un panorama des pratiques spirituelles transmises de génération en génération en Afrique de l'Ouest.",
    category: "Bien-être",
    date: "2026-02-18",
    content: [
      "L'Afrique de l'Ouest est riche d'un héritage de pratiques spirituelles transmises de génération en génération. Ces traditions accompagnent aussi bien les grands moments de la vie que le quotidien.",
      "Parmi elles, on retrouve des rituels de purification, de protection du foyer, ou encore des accompagnements liés aux nouveaux départs et aux moments de transition.",
      "Ces pratiques, bien que diverses selon les régions et les cultures, partagent souvent un point commun : elles s'inscrivent dans une démarche de transmission, de respect des anciens et d'écoute de soi.",
    ],
    seoTitle: "Guide des Pratiques Spirituelles Traditionnelles en Afrique",
    metaDescription:
      "Panorama des pratiques spirituelles traditionnelles transmises de génération en génération en Afrique de l'Ouest.",
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
