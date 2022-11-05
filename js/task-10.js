function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let  amount = '';
let  width = 30; 
let  height = 30;  
const  wChange = 10; 
const  hChange = 10;

const divStyleCreate = () => {
  const backgroundColor = getRandomHexColor();
  let divStyle = "width: "+ 
                width + "px; height: "+ 
                height + "px; background-color: "+ 
                backgroundColor + "; border: 2px solid #222";
  width += wChange;
  height += hChange;  
  return divStyle;
};

const refs = {
  div: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
};
 
const inputAmount = (e) => {
  amount = Number(e.target.value);
  refs.btnCreate.addEventListener('click', createBoxes(amount));
};

refs.input.addEventListener('blur', inputAmount);
let elements = '';
function createBoxes(amount) {
  
  for (let i = 0; i < amount; i++) {
    const divCreateItem = document.createElement('div');
    // console.log(divCreateItem);
    divCreateItem.style = divStyleCreate();
    // elements.push(divCreateItem);
    console.log(divsArray, divsArrayItems);
    elements.insertAdjacentElement('afterend', divsItems);
  };
  return elements;
};

refs.div.insertAdjacentElement('afterbegin', elements);