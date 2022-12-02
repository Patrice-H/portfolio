import { skills } from './data/skills.js';

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

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => toggleShadow(navbar));
displaySkills();
