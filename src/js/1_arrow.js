'use strict';

//Constantes y elementos DOM
const arrowUp = document.querySelector('.js-arrow-up');
const arrowDown = document.querySelector('.js-arrow-down');
const formFieldsetFill = document.querySelector('.js-fieldset-fill');

//Funciones
function open() {
  arrowDown.classList.add('collapsed');
  arrowUp.classList.remove('collapsed');
  formFieldset.classList.remove('collapsed');
  //Añadir que si las otras dos secciones fieldset design y fieldset share no tienen la clase collapse se les debe añadir
  //para que solo haya abierta una seccion at a time. Si la tienen entonces no se hace nada
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
