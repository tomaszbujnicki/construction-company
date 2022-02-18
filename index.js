import * as bootstrap from 'bootstrap';

const navbar = document.getElementById('nav');

function doSomething() {
  if (window.scrollY > 300) navbar.classList.remove('top');
  if (window.scrollY < 200) navbar.classList.add('top');
}

document.addEventListener('scroll', doSomething);
