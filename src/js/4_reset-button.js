function emptyFields() {
  const fieldsToReset = document.querySelectorAll('.js_resetable');
  for (let i = 0; i < fieldsToReset.length; i++) {
    fieldsToReset[i].value = '';
  }
}
function emptyImg() {
  const imgToReset = document.querySelector('.js_cardPic');
  imgToReset.style = 'background-image:url(./assets/images/default_image.jpg)';
  const imgMiniToReset = document.querySelector('.js_mini_image');
  imgMiniToReset.style = '';
}

function resetRadios() {
  const defaultRadio = document.querySelector('.js_default_radio');
  defaultRadio.checked = true;
}
function inputPaletteDefault() {
  previewName.classList.remove('palette2-color1', 'palette3-color1');
  previewName.classList.add('palette1-color1');

  previewBorder.classList.remove('palette2-color2', 'palette3-color2');
  previewBorder.classList.add('palette1-color2');

  for (const icon of previewIcons) {
    icon.classList.remove('palette2-color1', 'palette3-color1');
    icon.classList.add('palette1-color1');
  }

  for (const iconBorder of previewIconsBorder) {
    iconBorder.classList.remove('palette2-color3', 'palette3-color3');
    iconBorder.classList.add('palette1-color3');
  }
}
function resetCardText() {
  const name = document.querySelector('.js_preview_name');
  const job = document.querySelector('.js_preview_job');
  name.innerHTML = 'Nombre Apellido';
  job.innerHTML = 'Front-end developer';
}

function closeSection() {
  shareCard.classList.add('collapsed');
  console.log(shareCard);
}

function resetObject() {
  previewCard = {
    palette: '1',
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  };
  // let objectValues = Object.values(previewCard);
  // console.log(objectValues);
  // for (const key in previewCard) {
  //   console.log(key);
  //   previewCard.key = '';
  // }
}

function handleResetBtn(event) {
  event.preventDefault();
  emptyFields();
  resetObject();
  resetCardText();
  emptyImg();
  inputPaletteDefault();
  resetRadios();
  closeSection();
}

cardResetBtn.addEventListener('click', handleResetBtn);
