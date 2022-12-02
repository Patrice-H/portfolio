import { skills } from './data/skills.js';
import { projects } from './data/projects.js';

const toggleShadow = (element) => {
  let scrollBar = window.scrollY;
  if (scrollBar === 0) {
    element.classList.remove('shadow');
  } else {
    element.classList.add('shadow');
  }
};

const displaySkills = () => {
  const skillsContainer = document.getElementById('skills-container');
  skills.forEach((skill) => {
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    img.setAttribute('src', `assets/${skill.file}`);
    img.setAttribute('alt', skill.name);
    figcaption.innerHTML = skill.name;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    skillsContainer.appendChild(figure);
  });
};

const displayProjects = () => {
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach((project) => {
    let article = document.createElement('article');
    let mask = document.createElement('img');
    let frame = document.createElement('iframe');
    article.setAttribute('class', 'project-card');
    mask.setAttribute('src', 'assets/blank.png');
    mask.setAttribute('alt', `projet ${project.name}`);
    mask.setAttribute('class', 'mask');
    frame.setAttribute('src', `${project.url}`);
    frame.setAttribute('scrolling', 'no');
    frame.setAttribute('seamless', 'seamless');
    article.appendChild(mask);
    article.appendChild(frame);
    projectsContainer.appendChild(article);
  });
};

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => toggleShadow(navbar));
displaySkills();
displayProjects();
