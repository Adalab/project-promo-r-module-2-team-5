

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

  /*if(inputName === 'name') {
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

  previewCard[inputName] = inputValue; //forma rápida //para rellenar el objeto

  renderCard();
}
function renderCard() {
  if (previewCard.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = previewCard.name;
  }
  if (previewCard.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = previewCard.job;
  }
  if (previewCard.image === '') {
    previewImage.style = 'background-image:url(./assets/images/astronaut.jpg)';
  } else {
    previewImage.style = previewCard.image;
  }

  for (const link of previewLinks) {
    if (link.id === 'phone') {
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

function renderCard() {
  let name = '';
  let job = '';
  let img = '';
  let links = [];

  /*if (previewCard.name === '') {
      name = 'Nombre Apellido';
    } else {
      name = previewCard.name;
    }*/

  switch (previewCard.name) {
    case '':
      name = 'Nombre Apellido';
      break;
    default:
      name = previewCard.name;
  }

  /*if (previewCard.job === '') {
      job = 'Front-end developer';
    } else {
      job = previewCard.job;
      }*/

  switch (previewCard.job) {
    case '':
      job = 'Front-end developer';
      break;
    default:
      job = previewCard.job;
  }

  /* if (previewCard.image === '') {
      img = 'background-image:url(./assets/images/astronaut.jpg)';
    } else {
      img = previewCard.image;
      }*/

  switch (previewCard.image) {
    case '':
      img = 'background-image:url(./assets/images/astronaut.jpg)';
      break;
    default:
      img = previewCard.image;
  }

  for (let i = 0; i < previewLinks.length; i++) {
    /*if (previewLinks[i].id === 'phone') {
      links[i] = previewCard.phone;
    } else if (previewLinks[i].id === 'email') {
      links[i] = previewCard.email;
    } else if (previewLinks[i].id === 'linkedin') {
      links[i] = previewCard.linkedin;
    } else if (previewLinks[i].id === 'github') {
      links[i] = previewCard.github;
    }
    previewLinks[i].href = links[i];*/

    switch (previewLinks[i].id) {
      case 'phone':
        links[i] = previewCard.phone;
        break;
      case 'email':
        links[i] = previewCard.email;
        break;
      case 'linkedin':
        links[i] = previewCard.linkedin;
        break;
      case 'github':
        links[i] = previewCard.github;
        break;
    }
    previewLinks[i].href = links[i];
  }

  previewName.innerHTML = name;
  previewJob.innerHTML = job;
  previewImage.style = img;
}

//Events
form.addEventListener('input', handleInputForm);
