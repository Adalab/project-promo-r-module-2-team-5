// eslint-disable-next-line strict
const titleHeader = document.querySelectorAll('.js_fieldset_boxOne');
const arrow = document.querySelectorAll('.js_arrow');
const content = document.querySelectorAll('.js_boxTwo');

for (let i = 0; i < titleHeader.length; i++) {
  titleHeader[i].addEventListener('click', () => {
    for (let j = 0; j < content.length; j++) {
      if (i === j) { //aquí se comprueba si el índice de los títulos (i) coincide con el índice de los contenidos. Si el índice del título coincide con el del contenido, entonces se mostrará el contenido. Si no coinciden los índices, el contenido se esconde.  
        content[j].classList.contains('collapsed')
          && content[j].classList.remove('collapsed');
        arrow[j].classList.contains('upsideDown')
          && arrow[j].classList.remove('upsideDown');
      } else {
        content[j].classList.add('collapsed');
        arrow[j].classList.add('upsideDown');
      }
    }
  });
}
/*https://softauthor.com/accordion-menu-in-vanilla-javascript/*/

// ESTO FUNCIONA
/*for (let i = 0; i < titleHeader.length; i++) {
   titleHeader[i].addEventListener('click', () => {
      if(content[i].classList.contains('collapsed')) {
         content[i].classList.remove('collapsed');
      } 
      if() {
         content[i].classList.add('collapsed');
      }
   })
}
*/
/*LO MISMO PERO CON TERNARY OPERATOR
for (let i = 0; i < titleHeader.length; i++) {
   titleHeader[i].addEventListener('click', () => {
      content[i].classList.contains('collapsed') ? content[i].classList.remove('collapsed') : content[i].classList.add('collapsed');
   })
}
*/

/*FRACASO 1 */
/*titleHeader.forEach(headerElement => {
   console.log(headerElement);
   headerElement.addEventListener('click', () => {
      if(headerElement.classList.contains('collapsed')) {
      headerElement.classList.remove('collapsed');
   } else {
      titleHeader.forEach(headerEl => {
         headerEl.classList.remove('collapsed');
      })
      headerElement.classList.toggle('collapsed');
   })
})*/

/*FRACASO 2 */
/*
function hideContent (el) {
   if(el.classList.contains('collapsed')) {
     el.classList.remove('collapsed');
   } else {
    el.classList.add('collapsed');
   }
 }



 titleHeader.forEach(headerElement => {
   headerElement.addEventListener('click', () => {
     content.forEach(hideContent);
   });
 });
*/
