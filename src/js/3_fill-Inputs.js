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
//const previewName declarada en design-form
const previewJob = document.querySelector(".js_preview_job");
const previewImage = document.querySelector(".js_preview_picture");
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
        
        if(previewCard.name === "") {
            previewName.innerHTML = 'Nombre Apellido';
        } else {
            previewName.innerHTML = previewCard.name;
        }
        if(previewCard.job === "") {
            previewJob.innerHTML = 'Front-end developer';
        } else {
            previewJob.innerHTML = previewCard.job;
        }
        if(previewCard.image === "") {
            previewImage.style = "background-image:url(./assets/images/astronaut.jpg)";
        } else {
            previewImage.style = previewCard.image;
        }
        
        
        for(const link of previewLinks) {
            if(link.id === 'phone') {
                link.href = previewCard.phone;
            } else if (link.id === 'email') {
                link.href = previewCard.email;
            } else if (link.id === 'linkedin') {
                link.href = previewCard.linkedin;
            } else if (link.id === 'github') {
                link.href = previewCard.github;
            }
        }
    }

    

//Events
form.addEventListener('input', handleInputForm);
