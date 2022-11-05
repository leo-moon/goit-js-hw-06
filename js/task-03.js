const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const getElementListSelectorRef = (selector, element = document) =>
    element.querySelector(selector);

const createElementListSelectorRef = (selector = 'li', element = document) =>
    element.createElement(selector);

const imageCreate = ({ url, alt }) => {
  const elementLiRef = createElementListSelectorRef();
  elementLiRef.className = 'gallery__item';
  elementLiRef.style = 'margin-bottom: 45px; margin-right: 5px'

  const elementImgRef = createElementListSelectorRef('img');
  elementImgRef.src = url;
  elementImgRef.alt = alt;  
  elementImgRef.style = 'object-fit: contain;';
  // console.log(elementImgRef);

  elementLiRef.insertAdjacentElement('afterbegin', elementImgRef);
 
  return elementLiRef;
};

const elements = images.map(imageCreate);
// console.log(elements);

const ulRef = document.querySelector('ul');
// ulRef.style = 'display: flex; flex-wrap: wrap; gap: 30px;';
// ulRef.style = 'display: flex';

ulRef.append(...elements);