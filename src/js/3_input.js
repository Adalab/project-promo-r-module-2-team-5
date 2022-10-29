
//HTML DOM elements
const formInput = document.querySelectorAll('.js_input'); //Array de inputs. Añado una clase js_input a todos los inputs
const previewName = document.querySelector(".js_preview_name");
const previewJob = document.querySelector('.js_preview_job'); //Clase js para el job añadida
const previewPic = document.querySelector('.js_preview_cardPic'); //Clase js para el pic añadida
const previewIcons = document.querySelectorAll(".js_card_icon"); //Array de iconos (heredado de las paletas)

//Functions
 function handleInput () {
    formInput[i].name = fullname ? previewName.innerHTML = formInput[i].value : null;
    formInput[i].name = job ? previewJob.innerHTML = formInput[i].value : null;
    formInput[i].name = profileImage ? previewPic.innerHTML = formInput[i].value : null;
    
}

//Events 
 for (let i = 0; i < formInput.length; i++) {
    formInput[i].addEventListener('input', handleInput);
 }