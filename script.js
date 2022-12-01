const toggleShadow = (element) => {
  let scrollBar = window.scrollY;
  if (scrollBar === 0) {
    element.classList.remove('shadow');
  } else {
    element.classList.add('shadow');
  }
};

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => toggleShadow(navbar));
