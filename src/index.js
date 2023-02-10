import { loadLandingPage, loadNavBar } from './landingPage.js';
import loadMenu from './menu.js';

loadNavBar();
loadLandingPage();

const homeNav = document.querySelector('#home');
homeNav.addEventListener('click', () => {
  removeAfterNav();
  loadLandingPage();
});

const menuNav = document.querySelector('#menu');
menuNav.addEventListener('click', () => {
  removeAfterNav();
  loadMenu();
});

export function createElement(elementType, appendTo, className, textContent) {
  const element = document.createElement(elementType);

  if (className) {
    element.classList.add(className);
  }

  if (textContent) {
    element.textContent = textContent;
  }

  if (appendTo) {
    appendTo.appendChild(element);
  }

  return element;
}

function removeAfterNav() {
  const nav = document.querySelector('nav');
  while (nav.nextSibling) {
    nav.nextSibling.remove();
  }
}
