export interface PhotoAlbum {
  id: string;
  cover: string;
  title: string;
  count: number;
  date: string;
  year: string;
  tags: string[];
  description: string;
}

export interface VideoItem {
  id: string;
  thumb: string;
  title: string;
  date: string;
  year: string;
  duration: string;
  category: "Programmes" | "Événements" | "Recherche";
  tag: string;
  place: string;
  youtubeId: string;
}

export const PHOTO_ALBUMS: PhotoAlbum[] = [
  {
    id: "album-1",
    cover: "/images/phototheque/album-1.jpg",
    title: "Conférence régionale – Participation des femmes",
    count: 48,
    date: "Avril 2025",
    year: "2025",
    tags: ["Événements", "Femmes", "Conférences"],
    description:
      "Temps forts de la conférence régionale consacrée à l’engagement et au leadership politique des femmes en Afrique de l’Ouest.",
  },
  {
    id: "album-2",
    cover: "/images/phototheque/album-2.jpg",
    title: "Formation WYDE – Abidjan",
    count: 36,
    date: "Avril 2025",
    year: "2025",
    tags: ["Programmes", "Jeunes", "WYDE"],
    description:
      "Ateliers de renforcement de capacités et travaux de groupe avec les jeunes et femmes de Côte d’Ivoire et du Sénégal.",
  },
  {
    id: "album-3",
    cover: "/images/phototheque/album-3.jpg",
    title: "Ateliers Jeunes Leaders – Cohorte 3",
    count: 54,
    date: "Mars 2025",
    year: "2025",
    tags: ["PJL", "Formations"],
    description:
      "Immersion, coaching et sessions pratiques de la troisième cohorte du Projet Jeunes Leaders à Ouagadougou.",
  },
  {
    id: "album-4",
    cover: "/images/phototheque/album-4.jpg",
    title: "Dialogue interpartis – PYPA",
    count: 28,
    date: "2024",
    year: "2024",
    tags: ["PYPA", "Gouvernance"],
    description:
      "Rencontres de dialogue interpartis réunissant les jeunes cadres politiques autour des enjeux démocratiques.",
  },
  {
    id: "album-5",
    cover: "/images/phototheque/album-5.jpg",
    title: "Restitution d’étude – Gouvernance",
    count: 22,
    date: "2024",
    year: "2024",
    tags: ["Recherche", "Restitutions"],
    description:
      "Présentation des résultats de recherche auprès des décideurs publics, chercheurs et organisations de la société civile.",
  },
  {
    id: "album-6",
    cover: "/images/phototheque/album-6.jpg",
    title: "Cérémonie FEMIN-IN – Cohorte 2025",
    count: 41,
    date: "Mars 2025",
    year: "2025",
    tags: ["Femmes", "Cohortes"],
    description:
      "Remise d’attestations et lancement officiel de la cohorte 2025 de l’Incubateur Politique Citoyen FEMIN-IN.",
  },
];

export const VIDEOS: VideoItem[] = [
  {
    id: "v1",
    thumb: "/images/news1.jpg",
    title: "Formation WYDE – Abidjan (Session 1)",
    date: "Avril 2025",
    year: "2025",
    duration: "06:24",
    category: "Programmes",
    tag: "WYDE",
    place: "Abidjan",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v2",
    thumb: "/images/news2.jpg",
    title: "Projet Jeunes Leaders – Témoignages de la cohorte",
    date: "Mars 2025",
    year: "2025",
    duration: "04:58",
    category: "Programmes",
    tag: "PJL",
    place: "Ouagadougou",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v3",
    thumb: "/images/news3.jpg",
    title: "EWIP – Leadership & communication politique",
    date: "2024",
    year: "2024",
    duration: "08:12",
    category: "Programmes",
    tag: "EWIP",
    place: "Ouagadougou",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v4",
    thumb: "/images/hero1.jpg",
    title: "Conférence – Gouvernance et participation citoyenne",
    date: "2024",
    year: "2024",
    duration: "12:05",
    category: "Événements",
    tag: "Conférence",
    place: "Ouagadougou",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v5",
    thumb: "/images/hero2.jpg",
    title: "Restitution d’étude – Politiques publiques & Sahel",
    date: "2024",
    year: "2024",
    duration: "09:30",
    category: "Recherche",
    tag: "Recherche",
    place: "Ouagadougou",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v6",
    thumb: "/images/mission-IGD.jpg",
    title: "PYPA – Dialogue interpartis : best-of",
    date: "2023",
    year: "2023",
    duration: "05:40",
    category: "Programmes",
    tag: "PYPA",
    place: "Abidjan",
    youtubeId: "dQw4w9WgXcQ",
  },
];
