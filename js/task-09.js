function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  span: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
  color: '#ffffff',
};

const changeBodyColor = () => {
  document.body.style.background = refs.color;
  console.log(document.body.style.background)
};

const writeColor = () => {
  refs.span.textContent = refs.color;
};

const changeBGC = () => {
  refs.color = getRandomHexColor();
  changeBodyColor();
  writeColor();
};

refs.button.addEventListener('click', changeBGC);
