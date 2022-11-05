function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  div: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
};
 
let  amount = 0;
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

const inputAmount = (e) => {
  amount = parseInt(e.target.value);
  refs.btnCreate.addEventListener('click', createBoxes);
};

const destroyBoxes = () => {
  console.log('death')
  refs.div.innerHTML = '';
  document.location.reload();
}

const createBoxes = () => {
  refs.btnDestroy.addEventListener('click', destroyBoxes);
  // console.log('hi')
  let elements = [];
    for (let i = 0; i < amount; i++) {
      let divItem = document.createElement('div');
      divItem.style = divStyleCreate();
      elements.push(divItem);
    };
    console.log(elements);
    refs.div.append(...elements);
  };

refs.input.addEventListener('input', inputAmount);
