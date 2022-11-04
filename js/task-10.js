function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let  amount = '';
const  widthStart = 30; 
const  heightStart = 30;  
const  wChange = 10; 
const  hChange = 10;
const  border = "2px solid #222";

const divStyleCreate = (i) => {
  const backgroundColor = getRandomHexColor();
  const width = widthStart + wChange * i;
  const height = heightStart + hChange * i;
  let divStyle = "width: " + width + "px; height: " + height + "px; ";
  divStyle = divStyle + "background-color: " + backgroundColor + "; border: 2px solid #222";
  return divStyle;
};

const refs = {
  div: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
};



// console.log(wChange*3 + 'px', width, divStyle, refs);



 
const inputAmount = (e) => {
  amount = Number(e.target.value);
  refs.btnCreate.addEventListener('click', createBoxes);
};

refs.input.addEventListener('blur', inputAmount);

function createBoxes() {
  
  refs.div.style = divStyleCreate(amount);
  console.log('createBoxes',amount);
};


