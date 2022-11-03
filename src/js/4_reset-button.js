'use strict';
// Monica Boton de reset

const cardResetBtn = document.querySelector('.js_card_reset_btn');

function emptyFields (){
  const fieldsToReset = document.querySelectorAll('.js_resetable');
  for (let i = 0; i < fieldsToReset.length; i++) {
    fieldsToReset[i].value = '';
  }
}
//function emptyImg () {
//  const imgToReset = document.querySelector('.js_cardPic');
//  imgToReset.src = './assets/images/astronaut.jpg';
//}

function resetRadios() {
  const defaultRadio = document.querySelector('.js_default_radio');
  defaultRadio.checked = true;
}

function handleResetBtn(event) {
  event.preventDefault();
  emptyFields();
  //emptyImg();
  handleInputPalette1();
  resetRadios();
}

cardResetBtn.addEventListener ('click',handleResetBtn);