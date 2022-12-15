export const projects = [
  {
    id: 1,
    name: 'Booki',
    url: 'https://patrice-h.github.io/booki/',
    abstract: "Site web de réservation d'hébergement",
    description:
      "Le projet \"Booki\" est une intégration de site web, à partir de maquettes fournies. Le développement a été réalisé uniquement en HTML5 et CSS3, après étude et découpage des maquettes sur Photoshop. Au niveau des contraintes imposées, l'interface est responsive pour s'adapter à tous les supports et toutes les dimensions d'écran. Le code respecte le web sémantique et répond au standard du W3C.",
    technologies: ['HTML 5', 'CSS 3'],
    codelink: 'https://github.com/Patrice-H/booki',
  },
  {
    id: 2,
    name: 'Ohmyfood',
    url: 'https://patrice-h.github.io/PatriceHochard_3_17112021/',
    abstract: 'Site web permettant de composer son menu',
    description:
      '"Ohmyfood" est un projet de site web pour mobile mettant en œuvre des effets graphiques avancés. L\'étude et le découpage des maquettes ont été réalisés sur Photoshop. Le concept d\'approche "mobile first" a guidé le développement de cette application et l\'utilisation de SASS a grandement facilité l\'organisation des nombreux styles. Les contraintes du projet excluent toute utilisation de framework ou de JavaScript. Enfin ce site est responsive sur mobile, tablette et ordinateur, et son code répond au standard du W3C.',
    technologies: ['HTML 5', 'SASS'],
    codelink: 'https://github.com/Patrice-H/PatriceHochard_3_17112021',
  },
  {
    id: 3,
    name: 'GameOn',
    url: 'https://patrice-h.github.io/PatriceHochard_4_08122021/',
    abstract: 'Site web de concours de jeux vidéo',
    description:
      '"GameOn" est un projet de création de landing page à partir d\'un repo forké. Le travail a consisté à reprendre un code existant pour le rendre fonctionnel en fixant les issues préétablies par un autre développeur. Le développement a été réalisé en HTML5, CSS3 et JavaScript. La totalité du code est documentée et les maquettes du projet sont disponibles sur Figma.',
    technologies: ['HTML 5', 'CSS 3', 'JavaScript'],
    codelink: 'https://github.com/Patrice-H/PatriceHochard_4_08122021',
  },
  {
    id: 4,
    name: 'Fisheye',
    url: 'https://patrice-h.github.io/PatriceHochard_6_03012022/',
    abstract: 'Site web de photographes',
    description:
      'Le projet "Fisheye" est un prototype de site web constitué de deux pages et d\'une galerie de type Lightbox. Les pages sont générées dynamiquement à partir d\'un fichier JSON en attendant la création de la partie backend. Le projet a été développé à partir de maquettes disponibles sur Figma en respectant certains patrons de conception, et la robustesse de son code est garantie par ESLint. Enfin, le code répond au standard du W3C et WCAG afin de garantir que le contenu est accessible à tous.',
    technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'accessibilité web'],
    codelink: 'https://github.com/Patrice-H/PatriceHochard_6_03012022',
  },
  {
    id: 5,
    name: 'Les petits plats',
    url: 'https://patrice-h.github.io/PatriceHochard_7_01022022/',
    abstract: 'Site web de recettes de cuisine',
    description:
      "La page web \"Les petits plats\" est un projet plus axé sur le développement d'un moteur de recherche que sur le design de la page, ce qui explique l'absence de photographies de présentation des produits. L'algorithme qui a guidé le développement de cette page vérifie la cohérence des scenarios proposés par les cas d'utilisations et s'est concentré sur la rapidité de ses calculs afin d'apporter un maximum de fluidité dans les recherches des utilisateurs.",
    technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'algorithmie', 'UML'],
    codelink: 'https://github.com/Patrice-H/PatriceHochard_7_01022022',
  },
  {
    id: 6,
    name: 'La maison jungle',
    url: 'https://patrice-h.github.io/la-maison-jungle/',
    abstract: "Page web d'un site de commerce en ligne",
    description:
      'Le projet "La maison jungle" est une page développée avec la technologie React. L\'architecture de cette page est constituée de composants modulaires réutilisables qui ne diffèrent les uns des autres que par les propriétés qui leur sont assignées. La gestion du panier d\'achat ainsi que celle des éléments du formulaire est assurée par les états internes des composants. Les maquettes et photos de la page sont disponibles sur Figma.',
    technologies: ['React', 'javaScript'],
    codelink: 'https://github.com/Patrice-H/la-maison-jungle',
  },
  {
    id: 7,
    name: 'Shiny agency',
    url: 'https://patrice-h.github.io/Shiny_Agency/',
    abstract: 'Application web de prestataires freelance',
    description:
      "\"Shiny agency\" est une application web multipage développée avec la technologie React. Les pages sont générées dynamiquement en fonction des données founies par une API REST. La navigation entre les pages est assurée par React Router. L'application inclut un système de gestion de requête utilisateur en générant l'affichage d'une page d'erreur, par exemple si cet utilisateur tente d'accéder à une page inexistante. Les maquettes et autres éléments graphiques sont disponibles sur Figma.",
    technologies: ['React', 'react router', 'interaction avec API'],
    codelink: 'https://github.com/Patrice-H/Shiny_Agency',
  },
  {
    id: 8,
    name: 'Kasa',
    url: 'https://patrice-h.github.io/PatriceHochard_11_05052022/',
    abstract: 'Application web de location de logements',
    description:
      "\"Kasa\" est une refonte totale en React d'un site web multipage. Les pages et la galerie photo de type slider sont générées dynamiquement à partir d'un fichier JSON en attendant la création de la partie backend. La navigation entre les pages est assurée par React Router, celle de la galerie photo par l'état interne du composant. L'application inclut un système de gestion de requête utilisateur en générant l'affichage d'une page d'erreur, par exemple si cet utilisateur tente d'accéder à une page inexistante.",
    technologies: ['React', 'react router'],
    codelink: 'https://github.com/Patrice-H/PatriceHochard_11_05052022',
  },
  {
    id: 9,
    name: 'SportSee',
    url: 'https://patrice-h.github.io/PatriceHochard_12_30052022/#/profile/18',
    abstract: 'Application web sportive',
    description:
      "Le projet \"SportSee\" se concentre sur la réalisation de la page profil personnalisée d'un utilisateur d'une application web sportive. Le développement a été réalisé à l'aide de la technologie React en suivant une méthodologie de projet agile. Les user stories sont disponibles dans un kanban publié sur Notion et les maquettes sont sur Figma. Cette page profil inclut de nombreux éléments graphiques qui reposent sur l'utilisation de la bibliothèque Recharts. Une documentation technique est disponible dans la section Wiki du repo GitHub.",
    technologies: ['React', 'react router', 'recharts'],
    codelink: 'https://github.com/Patrice-H/PatriceHochard_12_30052022',
  },
];
