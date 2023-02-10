import { createElement } from './index.js';

export default function loadMenu() {
  
  const menuWrap = createElement(
    'div',
    document.querySelector('#content'),
    'menu-wrap'
  );
  const menuGrid = createElement('div', menuWrap, 'menu-grid');

  createCard(
    'Delicious Sushi',
    '$9.95',
    "Delicious sushi is one of our finest items. You won't go wrong with this!",
    '/img/menu1.jpg',
    'Delicious sushi'
  );

  createCard(
    'Sushi Platter',
    '$19.95',
    "The sushi platter contains 8 different sushi rolls. You'll love them all!",
    '/img/menu2.jpg',
    'Sushi platter'
  );

  createCard(
    'Tuna Sushi Roll',
    '$4.95',
    'Just a regular tuna sushi roll.',
    '/img/menu3.jpg',
    'Tuna sushi roll'
  );

  createCard(
    'Triple Tuna Sushi Roll',
    '$11.95',
    'Just three regular tuna sushi roll. Save 3 dollars!',
    '/img/menu4.jpg',
    'Three tuna sushi rolls'
  );

  createCard(
    'Sashimi',
    '$18.95',
    'The finest sashimi in all the land!',
    '/img/menu5.jpg',
    'Sashimi'
  );

  function createCard(title, price, description, img, altText) {
    const menuCard = createElement('div', menuGrid, 'menu-card');
    const cardTop = createElement('div', menuCard, 'card-top');
    const cardTitle = createElement('h2', cardTop, 'card-title', title);
    const cardPrice = createElement('h2', cardTop, 'card-price', price);
  
    const cardDescription = createElement(
      'p',
      menuCard,
      'card-description',
      description
    );
  
    const cardImage = createElement('img', menuCard, 'card-img');
    cardImage.src = img;
    cardImage.alt = altText;
  }
}

