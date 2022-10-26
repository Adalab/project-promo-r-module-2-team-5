//----------(PLANTEAMIENTO DEMO YARA)-------------------

// 'use strict';

//**** Elementos DOM
//---(Almaceno en constantes los elementos flecha)
// const arrowDownDesign = document.querySelector('.js-arrow-down-design');
// const arrowDownFill = document.querySelector('.js-arrow-down-fill');
// const arrowDownShare = document.querySelector('.js-arrow-down-share');
//---(Almaceno en constantes las cajitas colapsables)
// const formFieldsetDesign = document.querySelector('.js-fieldset-design');
// const formFieldsetFill = document.querySelector('.js-fieldset-fill');
// const formFieldsetShare = document.querySelector('.js-fieldset-share');

//Funciones
//------(creo funciones manejadoras para cada evento click de cada flecha)
//------(Requisitos: solo una seccion puede permanecer abierta, no puede haber varias abiertas a la vez / No podemos tener todas las secciones cerradas al mismo tiempo)
//function handleclickFill() { //Lo mismo para todas las secciones
//if (formFieldsetFill.classList.contains('collapsed')) {
//formFieldsetFill.classList.remove('collapsed');
//arrowDownFill.classList.add('upsideDown');
//if (!formFieldsetDesign.classList.contains('collapsed')) {
//formFieldsetFill.classList.add('collapsed');
//arrowDownFill.classList.remove('upsideDown');
//}
//if (!formFieldsetShare.classList.contains('collapsed')) {
// formFieldsetFill.classList.add('collapsed');
//arrowDownFill.classList.remove('upsideDown');
//}
//} else if (
//!formFieldsetFill.classList.contains('collapsed') &&
//formFieldsetShare.classList.contains('collapsed') &&
//formFieldsetDesign.classList.contains('collapsed')
//) {
// formFieldsetFill.classList.remove('collapsed');
// arrowDownFill.classList.add('upsideDown');
// }
//}

//*** Eventos
//------(Aplico los eventos click sobre las flechas)
// arrowDownDesign.addEventListener('click', handleclick(arrow));
// arrowDownFill.addEventListener('click', handleclickFill);
// arrowDownShare.addEventListener('click', handleclick(arrow));

// [Quizá se pueda reducir más el código todavía aplicando arrays. Se almacenarían todas las flechas dentro de una misma constante aplicando la clase común js-arrow-down a todas las flechas, llamandola y guardandola en esta constante / sería esta constante sobre la que se aplicaría el evento click / luego sería en la function donde dependiendo del elemento del array sobre el que se hiciera click se aplicarían unas acciones u otras ya que identificaría sobre qué flecha estamos haciendo click]

// ------------------------------------- (PLANTEAMIENTO ENTRE TODAS)------------------

// 'use strict';

// 1.Llamar clases de js que intervengan en la accion[HECHO]
// 2.3 eventos click en las flechas
// 3. Dentro del evento classlist add y remove

//Elementos del DOM
//const arrowDown = document.querySelector('.js-arrow-down-fill');

//Variables globales

//Funciones

//Eventos
//arrowDown.addEventListener('click', () => {
//const fieldsetFill = document.querySelector('.js-fieldset-fill');
//fieldsetFill.classList.remove('collapsed');
//});
