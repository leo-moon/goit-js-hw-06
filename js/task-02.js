const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const getElementListSelectorRef = (selector, element = document) =>
    element.querySelector(selector);

const createElementListSelectorRef = (selector = 'li', element = document) =>
    element.createElement(selector);

const products = product => {
  const elementLiRef = createElementListSelectorRef();

  elementLiRef.className = 'item';

  const elementPRef = createElementListSelectorRef('p');
  elementPRef.textContent = product;

  elementLiRef.insertAdjacentElement('afterbegin', elementPRef);
 
  return elementLiRef;
};

const elements = ingredients.map(products);

const ulRef = getElementListSelectorRef('ul');

ulRef.append(...elements);