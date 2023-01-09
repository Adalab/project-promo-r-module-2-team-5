let previewCard = {
  palette: '1',
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

//Functions
function handleInputForm(event) {
  const inputName = event.target.name;
  const inputValue = event.target.value;

  previewCard[inputName] = inputValue; //forma rápida para rellenar el objeto

  renderCard();
}

function renderCard() {
  let name = '';
  let job = '';
  let links = [];

  switch (previewCard.name) {
    case '':
      name = defaultName;
      break;
    default:
      name = previewCard.name;
  }

  switch (previewCard.job) {
    case '':
      job = defaultJob;
      break;
    default:
      job = previewCard.job;
  }

  for (let i = 0; i < previewLinks.length; i++) {

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
}

//Events
form.addEventListener('input', handleInputForm);
