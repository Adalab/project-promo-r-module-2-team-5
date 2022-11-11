'use strict';
const shareBtn = document.querySelector('.js_share_btn');

//const previewCardLS = JSON.parse(localStorage.getItem(previewCard));

function createLinkSection(responseJson) {
  const boxShareCard = document.querySelector('.js_box_share_card');
  const text = document.createElement('p');
  text.classList.add('form__collapsible__cardText');
  const successText = document.createTextNode('La tarjeta ha sido creada: ');
  text.appendChild(successText);
  const link = document.createElement('a');
  link.classList.add('form__collapsible__cardLink');
  const contentLink = document.createTextNode(responseJson.cardURL);
  link.setAttribute('href', responseJson.cardURL);
  link.setAttribute('target', '_blank');
  link.appendChild(contentLink);
  boxShareCard.appendChild(text);
  boxShareCard.appendChild(link);
}

function sendCard(e) {
  e.preventDefault();
  fetch('https://awesome-profile-cards.herokuapp.com/card', {
    method: 'POST',
    body: JSON.stringify(previewCard),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.success) {
        const shareCard = document.querySelector('.js_share_section');
        const errorTextEl = document.querySelector(
          '.form__collapsible__errorText'
        );
        if (errorTextEl !== null) {
          errorTextEl.remove();
        }
        createLinkSection(responseJson);
        shareCard.classList.remove('collapsed');
        shareBtn.setAttribute('disabled', true);
        //Crear enlace-boton de compartir en twitter
        const twitterBtn = document.querySelector('.js_twitter_btn');
        twitterBtn.setAttribute('target', '_blank');
        twitterBtn.href = `https://twitter.com/intent/tweet?text=¡Os%20comparto%20la%20mejor%20tarjeta%20del%20mundo!&url=${responseJson.cardURL}`;
      } else {
        console.log('error');
        const errorTextEl = document.querySelector(
          '.form__collapsible__errorText'
        );
        if (errorTextEl !== null) {
          errorTextEl.remove();
        }
        const boxBtnShare = document.querySelector('.js_share_box2');
        // Crear p para poner el mensaje de error
        const text = document.createElement('p');
        text.classList.add('form__collapsible__errorText');
        const errorText = document.createTextNode(
          'Algo ha ido mal. Asegúrate de rellenar todos los campos y adjuntar una imagen.'
        );
        text.appendChild(errorText);
        //text.classList.remove('collapsed');
        boxBtnShare.appendChild(text);
      }
    });
}

shareBtn.addEventListener('click', sendCard);
