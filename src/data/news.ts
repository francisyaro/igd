export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  category: string;
  location: string;
  image: string;
  excerpt: string;
  content: string[];
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    slug: "session-formation-wyde-abidjan",
    title: "Session de formation WYDE à Abidjan",
    date: "26 avril 2025",
    category: "Formation",
    location: "Abidjan, Côte d’Ivoire",
    image: "/images/news1.jpg",
    excerpt:
      "Une trentaine de jeunes et de femmes venus de Côte d’Ivoire et du Sénégal ont participé à la session de formation WYDE.",
    content: [
      "Du 22 au 26 avril 2025, une trentaine de jeunes et de femmes venus de Côte d’Ivoire et du Sénégal ont participé à une session de formation dans le cadre du programme Women and Youth Democratic Engagement (WYDE – Political Parties).",
      "Cette formation, organisée par l’Institut Général Tiémoko Marc Garango pour la Gouvernance et le Développement (IGD), avait pour objectif de renforcer les capacités de leadership et de gouvernance démocratique chez les jeunes acteurs et actrices politiques.",
      "Les participants ont échangé sur des thématiques clés telles que la participation citoyenne, la gestion éthique du pouvoir, le plaidoyer interne et l’inclusion politique. La session s’est clôturée par la remise officielle des attestations de participation.",
    ],
  },
  {
    slug: "jeunes-leaders-troisieme-cohorte",
    title: "Jeunes leaders – 3e cohorte",
    date: "20 avril 2025",
    category: "Leadership",
    location: "Ouagadougou, Burkina Faso",
    image: "/images/news2.jpg",
    excerpt:
      "Première session de formation de la troisième cohorte du Projet Jeunes Leaders (PJL).",
    content: [
      "L’IGD et la Fondation Hirondelle ont lancé la première session de formation de la troisième cohorte du Projet Jeunes Leaders (PJL) à Ouagadougou.",
      "Quinze jeunes issus de divers horizons (entrepreneuriat, citoyenneté, culture, sport et engagement associatif) ont entamé un parcours intensif combinant ateliers pratiques, prise de parole en public et mentorat individualisé.",
      "Financé par l’Union européenne, le PJL vise à outiller cette nouvelle génération de leaders pour un engagement citoyen constructif et inclusif au Burkina Faso.",
    ],
  },
  {
    slug: "ceremonie-femin-in-2025",
    title: "Cérémonie Citoyen FEMIN-IN 2025",
    date: "5 mars 2025",
    category: "Événement",
    location: "Ouagadougou, Burkina Faso",
    image: "/images/news3.jpg",
    excerpt:
      "Clôture de la cohorte 2024 et lancement de la cohorte 2025 de l’Incubateur Politique Citoyen FEMIN-IN.",
    content: [
      "La cérémonie officielle de clôture de la cohorte 2024 et de lancement de la cohorte 2025 de l’Incubateur Politique Citoyen FEMIN-IN s’est tenue en présence des partenaires institutionnels, formateurs et alumni.",
      "Cet événement a permis de célébrer le parcours des participantes sortantes et d’accueillir la nouvelle promotion de femmes engagées pour le leadership démocratique et la participation citoyenne.",
      "Les échanges ont mis l’accent sur la solidarité intergénérationnelle, la prise de décision publique et l’importance des réseaux de mentorat.",
    ],
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return NEWS_ARTICLES.find((a) => a.slug === slug);
}
