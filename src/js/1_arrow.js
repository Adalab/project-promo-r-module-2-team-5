'use strict';

//Constantes y elementos DOM
const arrowUp = document.querySelector('.js-arrow-up');
const arrowDown = document.querySelector('.js-arrow-down');
const formFieldset = document.querySelector('.js-fieldset');

//Funciones
function open() {
  arrowDown.classList.add('collapsed');
  arrowUp.classList.remove('collapsed');
  formFieldset.classList.remove('collapsed');
}

function close() {
  arrowDown.classList.remove('collapsed');
  arrowUp.classList.add('collapsed');
  formFieldset.classList.add('collapsed');
}

//Eventos
arrowDown.addEventListener('click', () => {
  if (!arrowDown.classList.contains('collapsed')) {
    open();
  }
});

arrowUp.addEventListener('click', () => {
  if (arrowDown.classList.contains('collapsed')) {
    close();
  }
});
