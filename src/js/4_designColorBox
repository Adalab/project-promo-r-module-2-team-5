// eslint-disable-next-line strict
const radioInput = document.querySelector('.js_input');
console.log(radioInput);
const randomNumb = (n) => {
  return Math.floor(Math.random() * (n + 1));
};

const colorGen = (divSelector, callback) => {
  const rgbCol = `rgb(${callback(255)}, ${callback(255)}, ${callback(255)})`;
  const divElement = document.querySelector(divSelector);
  return divElement.style.backgroundColor = rgbCol;
};

radioInput.addEventListener('click', () => {
  colorGen('.color1', randomNumb);
  colorGen('.color2', randomNumb);
  colorGen('.color3', randomNumb);
});