import html from '/assets/html.svg';
import css from '/assets/css.svg';
import js from '/assets/javascript.png';
import react from '/assets/reactjs.png';
import bootstrap from '/assets/bootstrap.svg';
import mysql from '/assets/mysql.svg';
import vite from '/assets/vite.svg';
import sass from '/assets/sass.svg';
import tailwind from '/assets/tailwind.png';
import git from '/assets/git.png';

const navLinks = [
  {
    link: '# navigate:',
  },
  {
    link: '_hello',
    path: '',
  },
  {
    link: '_about-me',
    path: 'about',
  },
  {
    link: '_skills',
    path: 'skill',
  },
  {
    link: '_projects',
    path: 'project',
  },
  {
    link: '_contact-me',
    path: 'contact',
  },
];

const skillsStack = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: js,
  },
  {
    name: 'React JS',
    icon: react,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Vite JS',
    icon: vite,
  },
  {
    name: 'BootStrap',
    icon: bootstrap,
  },
  {
    name: 'Sass',
    icon: sass,
  },
  {
    name: 'mysql',
    icon: mysql,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const projectCards = [
  {
    id: 1,
    title: 'Blueleads Landing Page',
    image: 'blueleads.png',
    info: 'Modern responsive landing page with smooth animations and clean layout for lead capture.',
    techStack: ['React', 'Bootstrap', 'Sass', 'Framer-motion'],
    githublink: 'https://github.com/DoCodingkeval/BlueLeads',
    livelink: 'https://blueleads.netlify.app',
  },
  {
    id: 2,
    title: 'Weather App',
    image: 'weather.jpg',
    info: 'A real-time weather dashboard with an intuitive UI and vibrant, data-driven design.',
    techStack: ['React', 'Tailwind CSS', 'Api Integration'],
    githublink: 'https://github.com/DoCodingkeval/weather-app',
    livelink: 'https://weather-apiappp.netlify.app',
  },
  {
    id: 3,
    title: 'Pokemon Finder',
    image: 'pokemon.png',
    info: 'A Pokémon search app with API-powered data and engaging visual cards.',
    techStack: ['React', 'Tailwind CSS', 'Api Integration'],
    githublink: 'https://github.com/DoCodingkeval/WizardZ',
    livelink: 'https://pokemondataapi.netlify.app',
  },
  {
    id: 4,
    title: 'WizardZ Landing Page',
    image: 'wizardZ.png',
    info: 'A sleek agency landing page with bold visuals and smooth animations.',
    techStack: ['Html', 'Css', 'JavaScript', 'Gsap'],
    githublink: 'https://github.com/DoCodingkeval/WizardZ',
    livelink: 'https://docodingkeval.github.io/WizardZ',
  },
  {
    id: 5,
    title: 'Coffee Landing Page',
    image: 'coffee.png',
    info: 'A warm, responsive coffee landing page with smooth animations and modern design.',
    techStack: ['Html', 'Css', 'JavaScript', 'Gsap'],
    githublink: 'https://github.com/DoCodingkeval/Coffee',
    livelink: 'https://docodingkeval.github.io/Coffee',
  },
];

export { navLinks, skillsStack, projectCards };
