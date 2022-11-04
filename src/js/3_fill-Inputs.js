'use strict';//descomentarlo al final

//Elementos HTML del DOM
const form = document.querySelector('.js_form');
const previewCard = {
    palette: '',
    name: '',
    job: '',
    image: '',
    email: '',
    phone: '',
    linkedin: '',
    gitHub: ''

};
const previewName = document.querySelector(".js_preview_name");
const previewJob = document.querySelector(".js_preview_job");
const previewImage = document.querySelector(".js_preview_image");
const previewLinks = document.querySelectorAll(".js_preview_link");

//Functions

function handleInputForm(event) {
   
    const inputName = event.target.name;
    const inputValue = event.target.value;

    /*if(inputName === 'name') {
        previewCard.name = inputValue;
    } else if (inputName === 'job') {
        previewCard.job = inputValue;
    } else if (inputName === 'image') {
        previewCard.image = inputValue;
    } else if (inputName === 'email') {
        previewCard.email = inputValue;
    } else if (inputName === 'phone') {
        previewCard.phone = inputValue;
    } else if (inputName === 'linkedin') {
        previewCard.linkedin = inputValue;
    } else if (inputName === 'gitHub') {
        previewCard.gitHub = inputValue;
    } */ //forma larga
    
    

    previewCard[inputName] = inputValue; //forma rápida //para rellenar el objeto

    renderCard();
}
    function renderCard() {
        previewName.innerHTML = previewCard.name;
        previewJob.innerHTML = 
        previewImage = 
        previewLinks 
    }

    

//Events
form.addEventListener('input', handleInputForm);
