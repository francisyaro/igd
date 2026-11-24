export type ProgramStatus = "en-cours" | "termine";

export interface ProgramStat {
  value: string;
  label: string;
}

export interface ProgramItemBlock {
  title: string;
  description: string;
}

export interface Program {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  status: ProgramStatus;
  logo?: string;
  period: string;
  countries: string[];
  financialPartner: string;
  technicalPartner?: string;
  summary: string;
  heroTitle: string;
  heroSubtitle: string;
  pills: string[];
  stats: ProgramStat[];
  presentation: string[];
  generalObjective: string;
  objectives: ProgramItemBlock[];
  stakeholders: ProgramItemBlock[];
  activities: ProgramItemBlock[];
  coverage: ProgramItemBlock[];
  impact: string;
  tags: string[];
  externalUrl?: string;
}

export const PROGRAMS: Program[] = [
  {
    slug: "projet-jeunes-leaders",
    title: "Projet Jeunes Leaders (PJL)",
    shortTitle: "PJL",
    subtitle: "Coaching & formation – Leadership des jeunes",
    status: "en-cours",
    logo: "/images/Logo-Jeunes-Leaders.png",
    period: "Depuis novembre 2022",
    countries: ["Burkina Faso"],
    financialPartner: "Union européenne",
    technicalPartner: "Fondation Hirondelle",
    summary:
      "Programme financé par l’Union européenne visant à renforcer la démocratie et le leadership citoyen des jeunes au Burkina Faso à travers formations, coaching et voyages d’étude.",
    heroTitle: "Former une génération de jeunes leaders engagés",
    heroSubtitle:
      "Mis en œuvre depuis novembre 2022 avec la Fondation Hirondelle, le PJL vise à renforcer la démocratie et l’inclusion citoyenne des jeunes au Burkina Faso, grâce à un parcours combinant formation, coaching et immersion.",
    pills: ["2022 → 3 ans", "Fondation Hirondelle + IGD", "Burkina Faso", "Financé par l’UE"],
    stats: [
      { value: "15 / an", label: "Jeunes recrutés par cohorte" },
      { value: "3 ans", label: "Durée du programme" },
      { value: "100%", label: "Coaching individualisé" },
    ],
    presentation: [
      "Le Projet Jeunes Leaders (PJL) est mis en œuvre depuis novembre 2022 par l’Institut Général Tiémoko Marc Garango (IGD) en partenariat avec la Fondation Hirondelle.",
      "Le projet est financé par l’Union européenne pour une durée de trois ans et vise à renforcer la démocratie et l’inclusion citoyenne des jeunes au Burkina Faso.",
      "À travers des activités de formation, de coaching personnalisé et de voyage d’étude, le PJL accompagne l’émergence d’une nouvelle génération de jeunes leaders capables d’impacter positivement leur société dans différents domaines tels que l’entrepreneuriat, la citoyenneté, le sport, la culture et l’engagement public.",
    ],
    generalObjective:
      "Contribuer au renforcement de la démocratie et de l’inclusion citoyenne des jeunes au Burkina Faso.",
    objectives: [
      {
        title: "Développement du leadership",
        description:
          "Renforcer les capacités des jeunes à exercer un leadership responsable et engagé dans la vie publique.",
      },
      {
        title: "Soutien aux initiatives",
        description:
          "Accompagner la concrétisation de projets portés par les jeunes dans des domaines d’intérêt collectif.",
      },
    ],
    stakeholders: [
      {
        title: "Jeunes bénéficiaires",
        description:
          "Quinze jeunes sont recrutés chaque année sur appel à candidatures pour participer au programme.",
      },
      {
        title: "Coachs / mentors",
        description:
          "Des personnalités compétentes et expérimentées accompagnent individuellement les jeunes sélectionnés.",
      },
      {
        title: "Écosystème d’appui",
        description:
          "Le programme mobilise différents acteurs institutionnels et sociaux autour du leadership des jeunes.",
      },
    ],
    activities: [
      {
        title: "Ateliers de formation",
        description:
          "Sessions pratiques sur le leadership, l’engagement citoyen, la prise de parole et les outils d’action publique.",
      },
      {
        title: "Coaching individuel",
        description:
          "Accompagnement personnalisé de chaque participant par un mentor expérimenté.",
      },
      {
        title: "Voyage d’étude",
        description:
          "Immersion hors du Burkina Faso pour apprendre d’autres expériences et élargir les perspectives.",
      },
      {
        title: "Mise en œuvre de projets",
        description:
          "Appui aux jeunes pour concrétiser des initiatives à impact dans leurs domaines d’engagement.",
      },
    ],
    coverage: [
      {
        title: "Zone principale d’intervention",
        description: "Le programme est mis en œuvre au Burkina Faso.",
      },
      {
        title: "Ouverture internationale",
        description:
          "Des voyages d’étude hors du Burkina Faso permettent une ouverture à d’autres contextes et pratiques.",
      },
    ],
    impact:
      "Le PJL vise à faire émerger une génération de jeunes leaders capables d’influencer positivement leur société et de contribuer à la consolidation de la démocratie et de l’inclusion citoyenne.",
    tags: ["Burkina Faso", "Depuis 2022", "Union Européenne"],
  },
  {
    slug: "afrobarometer",
    title: "Afrobarometer",
    shortTitle: "Afrobarometer",
    subtitle: "Enquêtes panafricaines – Gouvernance & qualité de vie",
    status: "en-cours",
    logo: "/images/logo-afrobarometer.png",
    period: "Cycles biennaux (tous les 2 ans)",
    countries: ["Burkina Faso", "Réseau panafricain (39 pays)"],
    financialPartner: "Réseau Afrobarometer",
    technicalPartner: "Center for Democratic Development (CDD – Ghana)",
    summary:
      "Programme d’enquêtes d’opinion publique permettant de comprendre les perceptions des citoyens sur la démocratie, la gouvernance et la qualité de vie au Burkina Faso.",
    heroTitle: "Donner la parole aux citoyens grâce aux données",
    heroSubtitle:
      "Afrobarometer est un réseau panafricain et non-partisan de recherche par sondage, produisant des données fiables sur la démocratie, la gouvernance et la qualité de vie. L’IGD en est le partenaire national au Burkina Faso.",
    pills: ["Partenaire national : Burkina Faso", "Avec CDD (Ghana)", "Tous les 2 ans", "Réseau panafricain"],
    stats: [
      { value: "39", label: "Pays africains dans le réseau" },
      { value: "2 ans", label: "Fréquence des enquêtes" },
      { value: "100%", label: "Données publiques accessibles" },
    ],
    presentation: [
      "Afrobarometer est un réseau panafricain et non-partisan de recherche par sondage qui mesure les attitudes publiques sur la démocratie, la gouvernance, l’économie et la société en Afrique.",
      "En tant que partenaire national au Burkina Faso, l’IGD assure la collecte des données sur le terrain, l’analyse scientifique et la dissémination des résultats auprès des décideurs, des médias et de la société civile, en collaboration avec le Center for Democratic Development (CDD – Ghana).",
    ],
    generalObjective:
      "Produire des données fiables et comparables sur les perceptions et les expériences des citoyens africains en matière de démocratie, de gouvernance et de qualité de vie.",
    objectives: [
      {
        title: "Collecte d’opinion publique",
        description:
          "Collecter des données représentatives sur la gouvernance, la sécurité, la démocratie et les services publics.",
      },
      {
        title: "Éclairage des politiques publiques",
        description:
          "Analyser et diffuser les résultats auprès des décideurs, médias et OSC pour améliorer l’action publique.",
      },
    ],
    stakeholders: [
      {
        title: "Décideurs publics",
        description:
          "Utilisent les données Afrobarometer pour éclairer les décisions politiques et les réformes institutionnelles.",
      },
      {
        title: "Société civile",
        description:
          "S’appuie sur les résultats pour renforcer ses actions de plaidoyer et de sensibilisation.",
      },
      {
        title: "Médias",
        description:
          "Relayent les données Afrobarometer pour informer le public et alimenter le débat démocratique.",
      },
    ],
    activities: [
      {
        title: "Collecte de données",
        description:
          "Réalisation d’enquêtes d’opinion publique auprès d’échantillons représentatifs de la population.",
      },
      {
        title: "Analyse des résultats",
        description:
          "Production de rapports, dépêches et notes d’orientation sur la gouvernance.",
      },
      {
        title: "Diffusion et plaidoyer",
        description:
          "Ateliers, conférences de presse et publications pour partager les résultats avec les acteurs publics.",
      },
    ],
    coverage: [
      {
        title: "Burkina Faso",
        description:
          "L’IGD est responsable de la mise en œuvre nationale des enquêtes Afrobarometer au Burkina Faso.",
      },
      {
        title: "Réseau panafricain",
        description:
          "Les enquêtes Afrobarometer sont menées dans jusqu’à 39 pays africains depuis 1999.",
      },
    ],
    impact:
      "Les données produites constituent une référence incontournable pour évaluer la demande et l’offre de gouvernance démocratique au Burkina Faso et en Afrique.",
    tags: ["Réseau panafricain", "Tous les 2 ans", "Données publiques"],
    externalUrl: "https://www.afrobarometer.org",
  },
  {
    slug: "empowering-women-in-politics",
    title: "Empowering Women in Politics (EWIP)",
    shortTitle: "EWIP",
    subtitle: "Autonomisation des femmes en politique",
    status: "en-cours",
    logo: "/images/logo-EWIP.png",
    period: "Depuis 2019",
    countries: ["Burkina Faso", "Togo"],
    financialPartner: "Agence suédoise de coopération au développement international (ASDI)",
    technicalPartner: "Fondation internationale du parti du centre suédois (CIS)",
    summary:
      "Programme régional axé sur le leadership féminin en politique, renforçant les capacités des femmes et favorisant leur participation active dans la gouvernance.",
    heroTitle: "Accroître la participation et l’influence des femmes en politique",
    heroSubtitle:
      "Mis en œuvre depuis 2019 par l’IGD avec la Fondation internationale du parti du centre suédois (CIS), EWIP contribue au renforcement des capacités des femmes en politique et à une meilleure prise en compte de leurs besoins.",
    pills: ["Depuis 2019", "Partenariat : IGD + CIS", "Financé par l’ASDI", "Burkina Faso & Togo"],
    stats: [
      { value: "2", label: "Pays couverts (Burkina Faso & Togo)" },
      { value: "2019", label: "Année de lancement" },
      { value: "360°", label: "Approche femmes, partis & entourage" },
    ],
    presentation: [
      "Empowering Women in Politics (EWIP) est un programme mis en œuvre par l’IGD depuis 2019 en partenariat avec la Fondation internationale du parti du centre suédois (CIS).",
      "Financé par l’Agence suédoise de coopération au développement international (ASDI), il vise à accroître la participation et l’influence des femmes dans la vie politique en Afrique.",
      "EWIP intervient à travers le renforcement des capacités, le dialogue avec les partis politiques et les parties prenantes, ainsi que la sensibilisation de l’environnement social et familial des femmes engagées.",
    ],
    generalObjective:
      "Contribuer à accroître la participation et l’influence des femmes dans la vie politique dans les pays d’intervention du programme.",
    objectives: [
      {
        title: "Renforcement des capacités",
        description:
          "Les capacités, les compétences et la confiance des femmes actives en politique sont renforcées.",
      },
      {
        title: "Réceptivité des acteurs",
        description:
          "Les partis politiques et autres parties prenantes deviennent plus réceptifs aux besoins spécifiques des femmes.",
      },
    ],
    stakeholders: [
      {
        title: "Femmes actives en politique",
        description:
          "Principales bénéficiaires du programme, issues des partis politiques et engagées dans la vie publique.",
      },
      {
        title: "Partis politiques",
        description:
          "Acteurs institutionnels clés appelés à créer un environnement plus favorable à la participation des femmes.",
      },
      {
        title: "Entourage social et familial",
        description:
          "Les maris et proches des femmes politiques sont mobilisés pour réduire les freins sociaux à leur engagement.",
      },
    ],
    activities: [
      {
        title: "Ateliers de formation",
        description:
          "Renforcement des capacités sur le leadership, la communication politique et les compétences de terrain.",
      },
      {
        title: "Dialogue avec les partis",
        description:
          "Échanges avec les leaders des partis politiques sur les besoins spécifiques des femmes.",
      },
      {
        title: "Dialogue social et familial",
        description:
          "Rencontres avec l’entourage des femmes politiques pour renforcer l’acceptation et l’appui à leur engagement.",
      },
    ],
    coverage: [
      {
        title: "Pays couverts",
        description: "Le programme couvre actuellement le Burkina Faso et le Togo.",
      },
      {
        title: "Portée stratégique",
        description:
          "EWIP s’inscrit dans une dynamique plus large visant à accroître la participation politique des femmes en Afrique.",
      },
    ],
    impact:
      "Le programme contribue à renforcer la présence, la légitimité et l’influence des femmes dans les espaces de décision politique et dans les partis politiques.",
    tags: ["Burkina Faso & Togo", "Depuis 2019", "Ateliers & dialogues"],
  },
  {
    slug: "refonder-la-gouvernance",
    title: "Refonder la gouvernance",
    shortTitle: "Refonder la gouvernance",
    subtitle: "Démocratie, inclusion & participation citoyenne",
    status: "en-cours",
    logo: "/images/diakonia-logo.jpg",
    period: "2023–2024",
    countries: ["Burkina Faso"],
    financialPartner: "Diakonia (Gouvernance et citoyenneté active et responsable)",
    technicalPartner: "Diakonia",
    summary:
      "Programme soutenu par Diakonia visant à promouvoir une gouvernance inclusive, responsable et égalitaire, notamment via études, ateliers et engagement citoyen.",
    heroTitle: "Renforcer la démocratie et une gouvernance juste et équitable",
    heroSubtitle:
      "Projet mis en œuvre par l’IGD en partenariat avec Diakonia, visant à favoriser l’enracinement de la démocratie, l’usage responsable des médias et l’engagement citoyen au Burkina Faso.",
    pills: ["2023 → 2024", "Partenariat : IGD + Diakonia", "Burkina Faso", "Gouvernance & citoyenneté active"],
    stats: [
      { value: "3", label: "Piliers thématiques" },
      { value: "BF", label: "Couverture nationale" },
      { value: "2023–24", label: "Phase de mise en œuvre" },
    ],
    presentation: [
      "Le programme Refonder la gouvernance au Burkina Faso est mis en œuvre par l’IGD en partenariat avec Diakonia.",
      "Il vise à contribuer à la diffusion et à l’enracinement de la démocratie ainsi qu’à la promotion d’une gouvernance juste et équitable au profit des hommes et des femmes au Burkina Faso.",
      "Le projet agit à travers la recherche, le renforcement des capacités, les échanges d’expériences et les voyages d’étude afin d’encourager une participation citoyenne plus inclusive et informée.",
    ],
    generalObjective:
      "Contribuer à la diffusion et à l’enracinement de la démocratie et à une gouvernance juste et équitable au profit des hommes et des femmes au Burkina Faso.",
    objectives: [
      {
        title: "Usage responsable des médias",
        description:
          "Soutenir les efforts visant un usage responsable des médias et des réseaux sociaux par les jeunes femmes et jeunes hommes.",
      },
      {
        title: "Réflexion participative",
        description:
          "Initier une réflexion participative pour favoriser l’émergence d’une démocratie représentative, inclusive et égalitaire.",
      },
      {
        title: "Participation citoyenne",
        description:
          "Encourager la participation citoyenne sur les politiques minières et foncières.",
      },
    ],
    stakeholders: [
      {
        title: "Jeunes femmes et jeunes hommes",
        description:
          "Principaux bénéficiaires sur l’usage responsable des médias et la participation citoyenne.",
      },
      {
        title: "Acteurs institutionnels",
        description:
          "Administrations et institutions publiques concernées par les politiques minières et foncières.",
      },
      {
        title: "Société civile et communautés",
        description:
          "Organisations citoyennes et communautés impliquées dans la réflexion participative et le plaidoyer.",
      },
    ],
    activities: [
      {
        title: "Études",
        description: "Production d’analyses et de connaissances pour éclairer les débats publics.",
      },
      {
        title: "Ateliers de renforcement",
        description: "Renforcement des capacités sur la gouvernance et la citoyenneté.",
      },
      {
        title: "Partage d’expériences & voyages d’étude",
        description: "Capitalisation des bonnes pratiques et apprentissage comparé.",
      },
    ],
    coverage: [
      {
        title: "Zone principale d’intervention",
        description: "Le programme est mis en œuvre au Burkina Faso.",
      },
      {
        title: "Portée thématique",
        description:
          "Démocratie, citoyenneté active, participation publique et gouvernance des ressources.",
      },
    ],
    impact:
      "Contribution directe aux objectifs du programme « Gouvernance et citoyenneté active et responsable » de Diakonia.",
    tags: ["2023–2024", "Diakonia", "Plaidoyer"],
  },
  {
    slug: "program-for-young-politicians-in-africa",
    title: "Program for Young Politicians in Africa (PYPA)",
    shortTitle: "PYPA",
    subtitle: "Renforcement des jeunes leaders politiques",
    status: "en-cours",
    logo: "/images/logo-PYPA.png",
    period: "Depuis 2012",
    countries: ["Burkina Faso", "Bénin", "Côte d’Ivoire", "Mali", "Niger", "Sénégal", "Togo"],
    financialPartner: "Agence suédoise de coopération au développement international (ASDI)",
    technicalPartner: "Fondation internationale du parti du centre suédois (CIS)",
    summary:
      "Programme panafricain formant de jeunes leaders politiques dans plusieurs pays afin de renforcer la gouvernance démocratique et le dialogue interpartis.",
    heroTitle: "Former des jeunes leaders politiques au service de la démocratie",
    heroSubtitle:
      "Depuis 2012, l’IGD met en œuvre la composante Afrique de l’Ouest du PYPA avec la fondation CIS. Financé par l’ASDI, le programme renforce le leadership, l’influence au sein des partis et le dialogue interpartis.",
    pills: ["Depuis 2012", "Partenariat : IGD + CIS", "Financé par l’ASDI", "Dialogue interpartis"],
    stats: [
      { value: "700+", label: "Jeunes formés" },
      { value: "7", label: "Pays d’Afrique de l’Ouest" },
      { value: "400+", label: "Alumni actifs" },
    ],
    presentation: [
      "Depuis 2012, l’Institut Général Tiémoko Marc Garango (IGD), en partenariat avec la Fondation internationale du parti du centre suédois (CIS), met en œuvre la composante Afrique de l’Ouest du Program for Young Politicians in Africa (PYPA).",
      "Financé par l’Agence suédoise de coopération au développement international (ASDI), il prépare les jeunes leaders politiques à assumer des responsabilités au service de la démocratie, de la bonne gouvernance et du dialogue politique.",
      "À travers la formation, l’accompagnement et la mise en réseau, le PYPA contribue à faire émerger une nouvelle génération d’acteurs politiques capables de consolider le dialogue interpartis au niveau national et sous-régional.",
    ],
    generalObjective:
      "Contribuer à la consolidation de la démocratie et de la bonne gouvernance en Afrique de l’Ouest à travers le renforcement des capacités des jeunes leaders politiques.",
    objectives: [
      {
        title: "Leadership démocratique",
        description:
          "Préparer les jeunes à assumer des rôles de leader au service de la démocratie et de la bonne gouvernance.",
      },
      {
        title: "Influence dans les partis",
        description:
          "Accroître la capacité d’influence des jeunes dans leurs partis politiques respectifs.",
      },
      {
        title: "Dialogue interpartis",
        description:
          "Approfondir le dialogue interpartis au niveau national et dans la sous-région ouest-africaine.",
      },
    ],
    stakeholders: [
      {
        title: "Jeunes leaders politiques",
        description: "Issus des partis politiques de plusieurs pays d’Afrique de l’Ouest.",
      },
      {
        title: "Partis politiques",
        description: "Structures d’ancrage institutionnel et d’application des acquis.",
      },
      {
        title: "Réseaux alumni",
        description: "Réseaux nationaux et régionaux prolongeant la dynamique du programme.",
      },
    ],
    activities: [
      {
        title: "Sessions de formation",
        description: "Leadership, démocratie, gouvernance, communication et gestion publique.",
      },
      {
        title: "Dialogue interpartis",
        description: "Échanges entre jeunes de différents partis politiques au niveau national et régional.",
      },
      {
        title: "Mise en réseau des alumni",
        description: "Structuration et animation de réseaux de jeunes leaders dans les 7 pays.",
      },
    ],
    coverage: [
      {
        title: "7 pays d’Afrique de l’Ouest",
        description:
          "Burkina Faso, Bénin, Côte d’Ivoire, Mali, Niger, Sénégal et Togo.",
      },
    ],
    impact:
      "Plus de 700 jeunes leaders formés et un réseau actif d’environ 400 alumni influençant la vie politique en Afrique de l’Ouest.",
    tags: ["Afrique de l’Ouest", "Depuis 2012", "+400 alumni"],
  },
  {
    slug: "politiques-securite-democratisation-elites-sahel",
    title: "SDEP-Sahel",
    shortTitle: "SDEP-Sahel",
    subtitle: "Recherche – Sécurité, démocratisation & élites",
    status: "en-cours",
    logo: "/images/logo-SDEP-Sahel.png",
    period: "Depuis 2022",
    countries: ["Burkina Faso", "Niger", "Nigéria"],
    financialPartner: "Economic and Social Research Council (ESRC – Royaume-Uni)",
    technicalPartner: "Université de Portsmouth (Dr Eloïse Bertrand)",
    summary:
      "Projet de recherche comparatif sur les élites, la sécurité et la démocratisation au Sahel, impliquant plusieurs institutions africaines et européennes.",
    heroTitle: "Politiques de la sécurité, de la démocratisation et des élites au Sahel",
    heroSubtitle:
      "Depuis 2022, l’IGD participe au projet de recherche comparatif SDEP-Sahel, financé par l’ESRC (Royaume-Uni) et dirigé par le Dr Eloïse Bertrand (Université de Portsmouth), comparant le Burkina Faso, le Niger et le Nigéria.",
    pills: ["Depuis 2022", "Financement : ESRC (UK)", "Recherche académique", "Burkina • Niger • Nigéria"],
    stats: [
      { value: "3", label: "Pays comparés" },
      { value: "4+", label: "Partenaires académiques" },
      { value: "ESRC", label: "Soutien scientifique (UK)" },
    ],
    presentation: [
      "Le projet SDEP-Sahel (Security, Democratisation and Elite Politics in the Sahel) est un programme de recherche comparatif lancé en 2022 sous la direction du Dr Eloïse Bertrand (Université de Portsmouth) et financé par l’ESRC (Royaume-Uni).",
      "L’IGD y contribue en tant que partenaire de recherche clé au Burkina Faso, analysant les interactions complexes entre les stratégies des élites politiques et sécuritaires, les dynamiques de démocratisation et l’insécurité au Sahel.",
      "L’approche comparative entre le Burkina Faso, le Niger et le Nigéria permet de dégager des enseignements empiriques majeurs pour les chercheurs et les décideurs.",
    ],
    generalObjective:
      "Comprendre comment les stratégies des élites interagissent avec les crises sécuritaires et les trajectoires de démocratisation au Sahel.",
    objectives: [
      {
        title: "Analyse comparative des élites",
        description:
          "Étudier les reconfigurations des élites politiques, militaires et civiles face aux défis sécuritaires.",
      },
      {
        title: "Production de savoirs scientifiques",
        description:
          "Publier des articles académiques, notes politiques et données de terrain sur le Sahel.",
      },
    ],
    stakeholders: [
      {
        title: "Chercheurs & universités",
        description:
          "Consortium réunissant l’Université de Portsmouth, l’IGD et des partenaires académiques ouest-africains.",
      },
      {
        title: "Décideurs & analystes",
        description:
          "Institutions publiques et partenaires internationaux intéressés par la stabilité au Sahel.",
      },
    ],
    activities: [
      {
        title: "Enquêtes de terrain & entretiens",
        description:
          "Collecte de données qualitatives auprès d’acteurs politiques, institutionnels et communautaires.",
      },
      {
        title: "Séminaires & restitutions",
        description:
          "Ateliers scientifiques internationaux et restitution des résultats auprès des acteurs locaux.",
      },
      {
        title: "Publications scientifiques",
        description: "Rédaction de policy briefs, working papers et articles de recherche.",
      },
    ],
    coverage: [
      {
        title: "Zone d’étude comparative",
        description: "Burkina Faso, Niger et Nigéria.",
      },
    ],
    impact:
      "Contribution de haut niveau à la compréhension académique et politique des crises de gouvernance et de sécurité dans l’espace sahélien.",
    tags: ["Depuis 2022", "ESRC (UK)", "Partenaires académiques"],
  },
  {
    slug: "wyde-political-parties",
    title: "WYDE – Political Parties",
    shortTitle: "WYDE",
    subtitle: "Participation politique des femmes et des jeunes",
    status: "en-cours",
    logo: "/images/Logo-WYDE.png",
    period: "En cours",
    countries: ["Côte d’Ivoire", "Sénégal"],
    financialPartner: "Union européenne",
    technicalPartner: "European Network of Political Foundations (ENoP)",
    summary:
      "Programme financé par l’Union européenne et dirigé par ENoP, visant à renforcer la participation des femmes et des jeunes dans les processus politiques en Afrique de l’Est et de l’Ouest.",
    heroTitle: "Renforcer la participation politique des femmes et des jeunes",
    heroSubtitle:
      "Women and Youth Democratic Engagement – Political Parties (WYDE) est un programme financé par l’Union européenne et coordonné par ENoP. L’IGD le met en œuvre en Côte d’Ivoire et au Sénégal.",
    pills: ["Participation politique", "Afrique de l’Ouest", "Coordination : ENoP", "Financé par l’UE"],
    stats: [
      { value: "2", label: "Pays d’intervention IGD" },
      { value: "Femmes & jeunes", label: "Public cible prioritaire" },
      { value: "UE / ENoP", label: "Partenariat international" },
    ],
    presentation: [
      "Women and Youth Democratic Engagement – Political Parties (WYDE – Political Parties) est un programme financé par l’Union européenne et dirigé par le European Network of Political Foundations (ENoP).",
      "Le programme vise à renforcer la participation des femmes et des jeunes dans les processus politiques en Afrique de l’Ouest et de l’Est afin de rendre les institutions démocratiques plus inclusives et représentatives.",
      "L’IGD met en œuvre ce programme en Côte d’Ivoire et au Sénégal, à travers des activités de formation, de mentorat et de plaidoyer destinées à soutenir l’engagement politique des femmes et des jeunes.",
    ],
    generalObjective:
      "Contribuer au renforcement de la participation politique des femmes et des jeunes afin de favoriser des systèmes politiques plus inclusifs et démocratiques.",
    objectives: [
      {
        title: "Renforcement des capacités",
        description:
          "Développer les compétences politiques et organisationnelles des femmes et des jeunes engagés dans les partis.",
      },
      {
        title: "Participation politique",
        description:
          "Soutenir leur engagement actif au sein des partis politiques et dans les processus démocratiques.",
      },
      {
        title: "Plaidoyer pour l’inclusion",
        description:
          "Promouvoir le dialogue politique et le plaidoyer pour une gouvernance inclusive.",
      },
    ],
    stakeholders: [
      {
        title: "Femmes et jeunes leaders",
        description:
          "Principaux bénéficiaires engagés dans les partis politiques en Côte d’Ivoire et au Sénégal.",
      },
      {
        title: "Partis politiques & ENoP",
        description:
          "Partenaires institutionnels favorisant l’ouverture des instances dirigeantes.",
      },
    ],
    activities: [
      {
        title: "Formations politiques",
        description:
          "Sessions de formation sur le leadership politique, la gouvernance démocratique et la participation citoyenne.",
      },
      {
        title: "Mentorat",
        description:
          "Accompagnement personnalisé des femmes et des jeunes leaders dans leur parcours politique.",
      },
      {
        title: "Plaidoyer & dialogue",
        description:
          "Rencontres régionales de plaidoyer pour une meilleure représentativité.",
      },
    ],
    coverage: [
      {
        title: "Pays couverts par l’IGD",
        description: "Côte d’Ivoire et Sénégal.",
      },
    ],
    impact:
      "Une génération mieux outillée de femmes et de jeunes leaders politiques participant activement aux décisions au sein de leurs partis.",
    tags: ["Côte d’Ivoire & Sénégal", "Union Européenne", "ENoP"],
  },
  // PROGRAMMES TERMINÉS
  {
    slug: "jeunes-transition-au-burkina-faso",
    title: "Jeunes et transition au Burkina Faso",
    shortTitle: "Jeunes & transition",
    subtitle: "Engagement des jeunes dans la gouvernance politique",
    status: "termine",
    period: "2016",
    countries: ["Burkina Faso"],
    financialPartner: "Agence suédoise de coopération au développement international (ASDI)",
    technicalPartner: "Fondation CIS",
    summary:
      "Accompagnement des jeunes pour une meilleure insertion dans la gouvernance politique : conférences, campagne médiatique, plaidoyer, concours et formations.",
    heroTitle: "Accompagner l’engagement des jeunes dans la gouvernance politique",
    heroSubtitle:
      "Projet mis en œuvre avec la Fondation CIS et financé par l’ASDI, mobilisant des jeunes issus de la société civile et des partis politiques (alumni PYPA) pour renforcer la prise en compte des droits des jeunes.",
    pills: ["2016", "Partenariat : IGD + CIS", "Financé par l’ASDI", "Burkina Faso"],
    stats: [
      { value: "2016", label: "Année de mise en œuvre" },
      { value: "6+", label: "Types d’activités menées" },
      { value: "1", label: "Conférence régionale" },
    ],
    presentation: [
      "Mis en œuvre en 2016 dans le contexte post-transition au Burkina Faso, ce projet a mobilisé les jeunes de la société civile et les alumni du PYPA pour promouvoir la Charte africaine de la jeunesse.",
    ],
    generalObjective:
      "Contribuer à une meilleure prise en compte des droits des jeunes dans les politiques publiques, en favorisant la connaissance de la Charte africaine de la jeunesse (2006).",
    objectives: [
      {
        title: "Plaidoyer jeunesse",
        description: "Sensibiliser les décideurs aux droits et attentes des jeunes.",
      },
      {
        title: "Mobilisation citoyenne",
        description: "Associer jeunes de la société civile et jeunes des partis politiques.",
      },
    ],
    stakeholders: [
      { title: "Jeunes de la société civile", description: "Engagés dans le plaidoyer et le suivi." },
      { title: "Jeunes des partis politiques", description: "Notamment des alumni du programme PYPA." },
    ],
    activities: [
      { title: "Conférences publiques", description: "Sensibilisation autour des droits des jeunes." },
      { title: "Campagne médiatique & concours", description: "Mobilisation citoyenne à grande échelle." },
    ],
    coverage: [{ title: "Burkina Faso", description: "Couverture nationale." }],
    impact: "Appropriation renforcée de la Charte africaine de la jeunesse par les acteurs jeunes.",
    tags: ["2016", "Burkina Faso", "ASDI"],
  },
  {
    slug: "engageons-nous-pour-plus-de-femmes-en-politique-au-benin-et-au-maroc",
    title: "Engageons-nous : pour plus de femmes en politique",
    shortTitle: "Femmes en politique",
    subtitle: "Participation politique des jeunes femmes",
    status: "termine",
    period: "2018–2021",
    countries: ["Bénin", "Maroc"],
    financialPartner: "Union européenne",
    technicalPartner: "Consortium africain et européen",
    summary:
      "Formation de jeunes femmes au Bénin et au Maroc (genre, démocratie, leadership…). Renforcement du débat public et consolidation de l’engagement politique.",
    heroTitle: "Renforcer l’engagement politique des jeunes femmes",
    heroSubtitle:
      "Projet financé par l’Union européenne, mis en œuvre de 2018 à 2021 au Bénin et au Maroc par un consortium africain et européen.",
    pills: ["2018–2021", "Bénin & Maroc", "Union européenne", "Consortium international"],
    stats: [
      { value: "300", label: "Jeunes femmes formées" },
      { value: "2", label: "Pays couverts (Bénin & Maroc)" },
      { value: "+", label: "Femmes élues accompagnées" },
    ],
    presentation: [
      "Ce projet visait à renforcer la participation politique des jeunes femmes et à promouvoir l’inclusion féminine dans la gouvernance démocratique au Bénin et au Maroc.",
    ],
    generalObjective:
      "Renforcer la participation politique des jeunes femmes et stimuler le débat public sur l’égalité de genre en politique.",
    objectives: [
      { title: "Formations politiques", description: "Leadership, genre, démocratie et partis politiques." },
      { title: "Réseaux & alumni", description: "Mobilisation du réseau PYPA au Bénin." },
    ],
    stakeholders: [
      { title: "Jeunes femmes politiques", description: "300 participantes formées." },
    ],
    activities: [
      { title: "Académies politiques", description: "Cycles de formation intensifs et mentorat." },
    ],
    coverage: [{ title: "Bénin & Maroc", description: "Mise en œuvre bilatérale." }],
    impact: "Renforcement durable des compétences politiques et émergence de nouvelles élues.",
    tags: ["2018–2021", "Bénin & Maroc", "Union Européenne"],
  },
  {
    slug: "jeunes-et-resilience-a-l-injustice-sociale",
    title: "Jeunes et résilience à l’injustice sociale",
    shortTitle: "Jeunes & résilience",
    subtitle: "Recherche & plaidoyer sur la résilience des jeunes",
    status: "termine",
    period: "2017–2020",
    countries: ["Burkina Faso (Ouagadougou & Bobo-Dioulasso)"],
    financialPartner: "CRDI (Coopération canadienne)",
    technicalPartner: "Consortium de recherche",
    summary:
      "Recherche & plaidoyer sur la résilience des jeunes face à l’injustice sociale : enquêtes, ateliers de restitution, publications et recommandations.",
    heroTitle: "Recherche & plaidoyer pour l’inclusion des jeunes",
    heroSubtitle:
      "Projet mis en œuvre de 2017 à 2020 : recherche, formation de jeunes et plaidoyer pour une meilleure inclusion des jeunes dans les milieux décisionnels, avec un focus sur la résilience face à l’injustice et la tentation de la violence.",
    pills: ["2017–2020", "CRDI (coopération canadienne)", "Consortium", "Ouagadougou & Bobo-Dioulasso"],
    stats: [
      { value: "3", label: "Partenaires du consortium" },
      { value: "2", label: "Villes couvertes" },
      { value: "4+", label: "Policy briefs publiés" },
    ],
    presentation: [
      "Ce projet de recherche-action a analysé les facteurs de résilience des jeunes face aux injustices sociales et aux risques de basculement dans la violence.",
    ],
    generalObjective:
      "Comprendre les dynamiques de résistance des jeunes à la tentation de la violence et renforcer le plaidoyer pour améliorer les politiques publiques jeunesse.",
    objectives: [
      { title: "Recherche empirique", description: "Enquête par sondage à Ouagadougou et Bobo-Dioulasso." },
      { title: "Plaidoyer", description: "Restitution des résultats et dialogue avec les décideurs." },
    ],
    stakeholders: [
      { title: "Jeunes urbains", description: "Participants aux enquêtes et ateliers." },
      { title: "Décideurs publics", description: "Destinataires des policy briefs." },
    ],
    activities: [
      { title: "Enquête par sondage", description: "Collecte de données dans deux grandes villes." },
      { title: "Publications", description: "Production de notes politiques sur la jeunesse et la violence." },
    ],
    coverage: [{ title: "Ouagadougou & Bobo-Dioulasso", description: "Burkina Faso." }],
    impact: "Production de 4 policy briefs de référence disponibles dans nos publications.",
    tags: ["2017–2020", "CRDI", "Recherche"],
  },
  {
    slug: "projet-ecole-des-cadres-des-partis-politiques",
    title: "École des cadres des partis politiques",
    shortTitle: "École des cadres",
    subtitle: "Programme fondateur (2009–2011)",
    status: "termine",
    period: "2009–2011",
    countries: ["Burkina Faso", "Bénin", "Mali", "Niger"],
    financialPartner: "Agence suédoise de coopération au développement international (ASDI)",
    technicalPartner: "Fondation CIS",
    summary:
      "Plus de 120 leaders formés (leadership, démocratie, communication, planification, genre…). Base fondatrice des acquis du PYPA.",
    heroTitle: "Renforcement des capacités des leaders politiques",
    heroSubtitle:
      "Projet mis en œuvre par l’IGD avec la Fondation CIS de 2009 à 2011 au Niger, au Mali, au Burkina Faso et au Bénin. Financé par l’ASDI, il a jeté les bases du programme PYPA.",
    pills: ["2009–2011", "Niger • Mali • Burkina • Bénin", "ASDI", "Partenariat : IGD + CIS"],
    stats: [
      { value: "120+", label: "Leaders formés" },
      { value: "4", label: "Pays couverts" },
      { value: "1", label: "Manuel de formation participatif" },
    ],
    presentation: [
      "Premier programme structurant de l’IGD, l’École des cadres des partis politiques a permis de former plus de 120 cadres politiques dans 4 pays d’Afrique de l’Ouest et d’élaborer un manuel pédagogique de référence.",
    ],
    generalObjective:
      "Contribuer au renforcement des capacités des leaders de partis politiques de la région sur les problématiques de la gouvernance démocratique.",
    objectives: [
      { title: "Manuel participatif", description: "Élaboration d’un cadre pédagogique commun." },
      { title: "Réseau de formateurs", description: "Constitution d’équipes nationales de formateurs." },
    ],
    stakeholders: [
      { title: "Cadres des partis politiques", description: "Plus de 120 leaders formés." },
    ],
    activities: [
      { title: "Modules de formation", description: "Leadership, démocratie, communication, planification et genre." },
    ],
    coverage: [{ title: "4 pays", description: "Burkina Faso, Bénin, Mali et Niger." }],
    impact: "Socle fondateur ayant donné naissance au programme régional PYPA en 2012.",
    tags: ["2009–2011", "4 pays", "Fondateur"],
  },
];

export const ACTIVE_PROGRAMS = PROGRAMS.filter((p) => p.status === "en-cours");
export const COMPLETED_PROGRAMS = PROGRAMS.filter((p) => p.status === "termine");

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}
