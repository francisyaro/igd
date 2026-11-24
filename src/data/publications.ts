export type PublicationCategory =
  | "Rapports"
  | "Études & recherches"
  | "Notes politiques"
  | "Appels & communiqués";

export interface Publication {
  id: string;
  title: string;
  description: string;
  category: PublicationCategory;
  badge: string;
  year: string;
  theme: string;
  coverImage?: string;
  pdfUrl: string;
}

export const PUBLICATIONS: Publication[] = [
  {
    id: "brochure-pypa",
    title: "Programme PYPA – Brochure de présentation",
    description:
      "Programme régional de renforcement de capacités des jeunes leaders politiques en Afrique de l’Ouest.",
    category: "Rapports",
    badge: "Brochure",
    year: "2024",
    theme: "Gouvernance",
    coverImage: "/images/publications/Brochure-Projet-PYPA.jpg",
    pdfUrl: "/publications/Brochure-Projet-PYPA.pdf",
  },
  {
    id: "ewip-strategie-genre-bf",
    title: "EWIP – Stratégie genre des partis politiques (Burkina Faso)",
    description:
      "Document de référence pour renforcer la participation et l’influence des femmes en politique au Burkina Faso.",
    category: "Études & recherches",
    badge: "Étude",
    year: "2024",
    theme: "Genre",
    coverImage: "/images/publications/programme-ewip-strategie-genre.jpg",
    pdfUrl: "/publications/Strategie-Genre-partis-politiques-EWIP-BF.pdf",
  },
  {
    id: "ewip-strategie-genre-togo",
    title: "EWIP – Stratégie genre des partis politiques (Togo)",
    description:
      "Stratégie et recommandations opérationnelles pour l’inclusion politique des femmes au Togo.",
    category: "Études & recherches",
    badge: "Étude",
    year: "2024",
    theme: "Genre",
    coverImage: "/images/publications/Strateegie-Genre-partis-politiques-EWIP-Togo.jpg",
    pdfUrl: "/publications/Strategie-Genre-partis-politiques-EWIP-Togo.pdf",
  },
  {
    id: "afrobarometer-ad692",
    title: "Afrobarometer – Confiance envers l’armée et gouvernance politique",
    description:
      "Dépêche AD692 : Les Burkinabè font confiance à l’armée mais ne veulent pas d’elle en politique.",
    category: "Études & recherches",
    badge: "Afrobarometer",
    year: "2023",
    theme: "Démocratie",
    coverImage: "/images/publications/Insecurite-Armee-Burkina-Faso-.png",
    pdfUrl:
      "/publications/AD692-Les-Burkinabe-font-confiance-a-larmee-mais-ne-veulent-pas-delle-en-politique-Afrobarometer-22aug23.pdf",
  },
  {
    id: "action-publique-violences-jeunesse",
    title: "Action publique et violences associées à la jeunesse",
    description:
      "Policy brief : Pistes d’amélioration de l’action publique pour prévenir les violences liées à la jeunesse.",
    category: "Notes politiques",
    badge: "Policy Brief",
    year: "2022",
    theme: "Jeunesse",
    coverImage: "/images/publications/Action-publique.jpg",
    pdfUrl: "/publications/Action-publique-violences-associee-a-la-jeunesse-Policy-brief-IGD.pdf",
  },
  {
    id: "implication-jeunes-violence",
    title: "Implication des jeunes dans la violence",
    description:
      "Note politique analysant les facteurs socio-économiques et politiques de l’implication des jeunes dans la violence.",
    category: "Notes politiques",
    badge: "Policy Brief",
    year: "2022",
    theme: "Sécurité",
    coverImage: "/images/publications/implication-jeunes-violence.jpg",
    pdfUrl: "/publications/Implication-des-jeunes-dans-la-violence-Policy-brief-IGD.pdf",
  },
  {
    id: "partis-politiques-violences-jeunes",
    title: "Partis politiques et violences des jeunes",
    description:
      "Analyse des responsabilités et des leviers d’action des partis politiques face aux violences impliquant les jeunes.",
    category: "Notes politiques",
    badge: "Policy Brief",
    year: "2022",
    theme: "Politiques publiques",
    coverImage: "/images/publications/Partis-Politique-violences-jeunes.jpg",
    pdfUrl: "/publications/Partis-politiques-et-violences-des-jeunes-policy-briefs-IGD.pdf",
  },
  {
    id: "strategie-resilience-jeunes",
    title: "Stratégie de résilience des jeunes face à l’injustice sociale",
    description:
      "Synthèse et recommandations issues du programme de recherche sur la résilience des jeunes au Burkina Faso.",
    category: "Notes politiques",
    badge: "Policy Brief",
    year: "2021",
    theme: "Jeunesse",
    coverImage: "/images/publications/Strategies-Resilience-Jeunes.png",
    pdfUrl: "/publications/Strategie-de-resiliences-des-jeunes-Policy-briefs-IGD.pdf",
  },
  {
    id: "appel-candidatures-postdoc-niger",
    title: "Appel à candidatures – Chercheur post-doctorant (Niger)",
    description:
      "Appel à candidatures dans le cadre du programme de recherche comparative SDEP-Sahel.",
    category: "Appels & communiqués",
    badge: "Appel",
    year: "2023",
    theme: "Sécurité",
    pdfUrl: "/publications/Appel-a-candidatures-post-doc-Niger.pdf",
  },
];

export const PUBLICATION_THEMES = [
  "Gouvernance",
  "Sécurité",
  "Genre",
  "Jeunesse",
  "Politiques publiques",
  "Démocratie",
];
