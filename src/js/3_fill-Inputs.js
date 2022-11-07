'use strict'; //descomentarlo al final

//Elementos HTML del DOM
const form = document.querySelector('.js_form');
/*const previewName ya declarada en design-form*/
const previewJob = document.querySelector('.js_preview_job');
const previewImage = document.querySelector('.js_preview_picture');
const previewLinks = document.querySelectorAll('.js_preview_link');

const previewCard = {
  palette: '',
  name: '',
  job: '',
  image: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

//Functions
function handleInputForm(event) {
  const inputName = event.target.name;
  const inputValue = event.target.value;

  //Forma corta para rellenar el objeto
  previewCard[inputName] = inputValue;
  renderCard();

  //Forma larga para rellenar el objeto
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
}

function renderCard() {
  let name = '';
  let job = '';
  let img = '';
  let links = [];

  if (previewCard.name === '') {
    name = 'Nombre Apellido';
  } else {
    name = previewCard.name;
  }
  if (previewCard.job === '') {
    job = 'Front-end developer';
  } else {
    job = previewCard.job;
  }
  if (previewCard.image === '') {
    img = 'background-image:url(./assets/images/astronaut.jpg)';
  } else {
    img = previewCard.image;
  }

  for (let i = 0; i < previewLinks.length; i++) {
    if (previewLinks[i].id === 'phone') {
      links = previewCard.phone;
    } else if (previewLinks[i].id === 'email') {
      links = previewCard.email;
    } else if (previewLinks[i].id === 'linkedin') {
      links = previewCard.linkedin;
    } else if (previewLinks[i].id === 'github') {
      links = previewCard.github;
    }
    previewLinks[i].href = links[i];
  }

  previewName.innerHTML = name;
  previewJob.innerHTML = job;
  previewImage.style = img;
}

//Events
form.addEventListener('input', handleInputForm);
