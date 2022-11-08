'use strict';
const shareBtn = document.querySelector('.js_share_btn');

const previewCardLS = JSON.parse(localStorage.getItem(previewCard));

function sendCard (e) {
    e.preventDefault();
    fetch('https://awesome-profile-cards.herokuapp.com/card', {
      method: 'POST',
      body: JSON.stringify(previewCard),
      headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if(responseJson.success) {
                //Mostrar link a la tarjeta creada
                } else {
                    console.log('error');
                }
            })
}


shareBtn.addEventListener('click', sendCard);



