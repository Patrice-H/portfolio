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

const createProjectCard = (project) => {
  const card = document.createElement('article');
  const mainMask = document.createElement('div');
  const details = document.createElement('div');
  const name = document.createElement('h3');
  const abstract = document.createElement('p');
  const techno = document.createElement('p');
  const frame = document.createElement('iframe');
  card.setAttribute('class', 'project-card');
  details.setAttribute('class', 'project-details');
  mainMask.setAttribute('class', 'main-mask');
  name.innerHTML = project.name;
  abstract.innerHTML = project.abstract;
  project.technologies.forEach((technologie) => {
    const keyWord = document.createElement('span');
    keyWord.setAttribute('class', 'key-word');
    keyWord.innerHTML = technologie.toUpperCase();
    techno.appendChild(keyWord);
  });
  frame.setAttribute('src', `${project.url}`);
  frame.setAttribute('scrolling', 'no');
  frame.setAttribute('seamless', 'seamless');
  details.appendChild(name);
  details.appendChild(abstract);
  details.appendChild(techno);
  card.appendChild(frame);
  card.appendChild(mainMask);
  card.appendChild(details);

  return card;
};

const displayProjects = () => {
  const projectsContainer = document.getElementById('projects-container');

  projects.forEach((project) => {
    const article = createProjectCard(project);
    projectsContainer.appendChild(article);
  });
};

const displayErrorMessage = (inputField, errorField, message) => {
  inputField.classList.add('error');
  errorField.innerHTML = message;
  errorField.classList.remove('hidden');
};

const removeErrorMessage = (inputField, errorField) => {
  inputField.classList.remove('error');
  errorField.classList.add('hidden');
};

const isEmailConform = (inputField) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(inputField.value)) {
    return false;
  }

  return true;
};

const isOnlyLetters = (inputField) => {
  const regex = /^[a-zA-Z]+([a-zA-Z\s\-]*)+[a-zA-Z]$/;
  if (!regex.test(inputField.value)) {
    return false;
  }

  return true;
};

const isfillingField = (inputField) => {
  if (inputField.value === '') {
    return false;
  }

  return true;
};

const controlMessage = (input, error, messages) => {
  let messageNumber;
  let isControlOK = true;
  if (!isfillingField(input)) {
    messageNumber = 0;
    isControlOK = false;
  }
  if (isControlOK) {
    removeErrorMessage(input, error);
  } else {
    displayErrorMessage(input, error, messages[messageNumber]);
  }

  return isControlOK;
};

const controlEmail = (input, error, messages) => {
  let messageNumber;
  let isControlOK = true;
  if (!isEmailConform(input)) {
    messageNumber = 2;
    isControlOK = false;
  }
  if (!isfillingField(input)) {
    messageNumber = 0;
    isControlOK = false;
  }
  if (isControlOK) {
    removeErrorMessage(input, error);
  } else {
    displayErrorMessage(input, error, messages[messageNumber]);
  }

  return isControlOK;
};

const controlName = (input, error, messages) => {
  let messageNumber;
  let isControlOK = true;
  if (!isOnlyLetters(input)) {
    messageNumber = 1;
    isControlOK = false;
  }
  if (!isfillingField(input)) {
    messageNumber = 0;
    isControlOK = false;
  }
  if (isControlOK) {
    removeErrorMessage(input, error);
  } else {
    displayErrorMessage(input, error, messages[messageNumber]);
  }

  return isControlOK;
};

const controlForm = (inputs, errors, messages) => {
  let isFormOk = true;
  for (let i = 0; i < 2; i++) {
    if (!controlName(inputs[i], errors[i], messages)) {
      isFormOk = false;
    }
  }
  if (!controlEmail(inputs[2], errors[2], messages)) {
    isFormOk = false;
  }
  for (let i = 3; i < inputs.length; i++) {
    if (!controlMessage(inputs[i], errors[i], messages)) {
      isFormOk = false;
    }
  }
  console.log('send form : ', isFormOk);
};

const navbar = document.getElementById('navbar');
const submitBtn = document.getElementById('submit-btn');
const lastNameInput = document.getElementById('lastname');
const lastNameError = document.getElementById('error-lastname');
const firstNameInput = document.getElementById('firstname');
const firstNameError = document.getElementById('error-firstname');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('error-email');
const subjectInput = document.getElementById('subject');
const subjectError = document.getElementById('error-subject');
const messageInput = document.getElementById('message');
const messageError = document.getElementById('error-message');
const inputs = [
  lastNameInput,
  firstNameInput,
  emailInput,
  subjectInput,
  messageInput,
];
const errors = [
  lastNameError,
  firstNameError,
  emailError,
  subjectError,
  messageError,
];
const errorMessages = [
  'Ce champ doit être renseigné',
  'Ne doit contenir que des lettres et au moins 2 caractères',
  "Ce champ doit être au format d'un email",
];
window.addEventListener('scroll', () => toggleShadow(navbar));
submitBtn.addEventListener('click', () =>
  controlForm(inputs, errors, errorMessages)
);
lastNameInput.addEventListener('blur', () => {
  controlName(lastNameInput, lastNameError, errorMessages);
});
firstNameInput.addEventListener('blur', () => {
  controlName(firstNameInput, firstNameError, errorMessages);
});
emailInput.addEventListener('blur', () => {
  controlEmail(emailInput, emailError, errorMessages);
});
subjectInput.addEventListener('blur', () => {
  controlMessage(subjectInput, subjectError, errorMessages);
});
messageInput.addEventListener('blur', () => {
  controlMessage(messageInput, messageError, errorMessages);
});

displaySkills();
displayProjects();
