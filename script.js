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
    let mainMask = document.createElement('div');
    let details = document.createElement('div');
    let name = document.createElement('h3');
    let abstract = document.createElement('p');
    let techno = document.createElement('p');
    let frame = document.createElement('iframe');
    article.setAttribute('class', 'project-card');
    details.setAttribute('class', 'project-details');
    mainMask.setAttribute('class', 'main-mask');
    name.innerHTML = project.name;
    abstract.innerHTML = project.abstract;
    project.technologies.forEach((technologie) => {
      let span = document.createElement('span');
      span.setAttribute('class', 'key-word');
      span.innerHTML = technologie.toUpperCase();
      techno.appendChild(span);
    });
    frame.setAttribute('src', `${project.url}`);
    frame.setAttribute('scrolling', 'no');
    frame.setAttribute('seamless', 'seamless');
    details.appendChild(name);
    details.appendChild(abstract);
    details.appendChild(techno);
    article.appendChild(frame);
    article.appendChild(mainMask);
    article.appendChild(details);
    projectsContainer.appendChild(article);
  });
};

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => toggleShadow(navbar));
displaySkills();
displayProjects();
