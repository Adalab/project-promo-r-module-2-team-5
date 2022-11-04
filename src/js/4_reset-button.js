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
function inputPaletteDefault() {
    previewName.classList.remove('palette2-color1','palette3-color1');
    previewName.classList.add('palette1-color1');
  
    previewBorder.classList.remove('palette2-color2','palette3-color2');
    previewBorder.classList.add('palette1-color2');
  
    for (const icon of previewIcons) {
      icon.classList.remove('palette2-color1','palette3-color1');
      icon.classList.add('palette1-color1');
    }
  
    for (const iconBorder of previewIconsBorder) {
      iconBorder.classList.remove('palette2-color3','palette3-color3');
      iconBorder.classList.add('palette1-color3');
    }
  }
function handleResetBtn(event) {
  event.preventDefault();
  emptyFields();
  //emptyImg();
  inputPaletteDefault();
  resetRadios();
}

cardResetBtn.addEventListener ('click',handleResetBtn);

