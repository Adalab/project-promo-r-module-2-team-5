const paletteHandler = (e) => {
  const paletteClicked = e.target.value;
  previewCard.palette = paletteClicked;

  previewName.classList.remove(
    `palette1-color1`,
    `palette2-color1`,
    `palette3-color1`
  );
  previewName.classList.add(`palette${paletteClicked}-color1`);

  previewBorder.classList.remove(
    `palette1-color2`,
    `palette2-color2`,
    `palette3-color2`
  );
  previewBorder.classList.add(`palette${paletteClicked}-color2`);

  previewIcons.forEach((icon) => {
    icon.classList.remove(
      `palette1-color1`,
      `palette2-color1`,
      `palette3-color1`
    );
    icon.classList.add(`palette${paletteClicked}-color1`);
  });

  previewIconsBorder.forEach((iconBorder) => {
    iconBorder.classList.remove(
      `palette1-color3`,
      `palette2-color3`,
      `palette3-color3`
    );
    iconBorder.classList.add(`palette${paletteClicked}-color3`);
  });
};

radioInputs.forEach((input) => {
  input.addEventListener('click', paletteHandler);
});

//const palettes = document.querySelectorAll ('.js_input_palette');
/*const palette1 = 'palette1';
const palette2 = 'palette2';
const palette3 = 'palette3';

function handleInputPalette (currentPalette, noPalette1, noPalette2) {
  previewName.classList.remove(`${noPalette1}-color1`,`${noPalette2}-color1`);
  previewName.classList.add(`${currentPalette}-color1`);

  previewBorder.classList.remove(`${noPalette1}-color2`,`${noPalette2}-color2`);
  previewBorder.classList.add(`${currentPalette}-color2`);

  for (const icon of previewIcons) {
    icon.classList.remove(`${noPalette1}-color1`,`${noPalette2}-color1`);
    icon.classList.add(`${currentPalette}-color1`);
  }

  for (const iconBorder of previewIconsBorder) {
    iconBorder.classList.remove(`${noPalette1}-color3`,`${noPalette2}-color3`);
    iconBorder.classList.add(`${currentPalette}-color3`);
  }
}

function handleInputPalette1() {
  handleInputPalette (palette1, palette2, palette3);
}
function handleInputPalette2() {
  handleInputPalette (palette2, palette1, palette3);
}
function handleInputPalette3() {
  handleInputPalette (palette3, palette2, palette1);
}

inputPalette1.addEventListener('change', handleInputPalette1);
inputPalette2.addEventListener('change', handleInputPalette2);
inputPalette3.addEventListener('change', handleInputPalette3);

// for (let i = 0; i < palettes.length; i++) {
//   if (i===0) {
//     palettes[i].addEventListener('change', handleInputPalette1);
//   } else if (i===1){
//     palettes[i].addEventListener('change', handleInputPalette2);
//   } else {
//     palettes[i].addEventListener('change', handleInputPalette3);
//   }
// }


///////////////////


// function handleInputPalette1() {
//   previewName.classList.remove('palette2-color1','palette3-color1');
//   previewName.classList.add('palette1-color1');

//   previewBorder.classList.remove('palette2-color2','palette3-color2');
//   previewBorder.classList.add('palette1-color2');

//   for (const icon of previewIcons) {
//     icon.classList.remove('palette2-color1','palette3-color1');
//     icon.classList.add('palette1-color1');
//   }

//   for (const iconBorder of previewIconsBorder) {
//     iconBorder.classList.remove('palette2-color3','palette3-color3');
//     iconBorder.classList.add('palette1-color3');
//   }
// }

// inputPalette1.addEventListener('change', handleInputPalette1);

// function handleInputPalette2() {
//   previewName.classList.remove('palette1-color1','palette3-color1');
//   previewName.classList.add('palette2-color1');

//   previewBorder.classList.remove('palette1-color2','palette3-color2');
//   previewBorder.classList.add('palette2-color2');

//   for (const icon of previewIcons) {
//     icon.classList.remove('palette1-color1','palette3-color1');
//     icon.classList.add('palette2-color1');
//   }

//   for (const iconBorder of previewIconsBorder) {
//     iconBorder.classList.remove('palette1-color3','palette3-color3');
//     iconBorder.classList.add('palette2-color3');
//   }
// }

// inputPalette2.addEventListener('change',handleInputPalette2);



// function handleInputPalette3() {
//   previewName.classList.remove('palette1-color1', 'palette2-color1');
//   previewName.classList.add('palette3-color1');

//   previewBorder.classList.remove('palette1-color2','palette2-color2');
//   previewBorder.classList.add('palette3-color2');

//   for (const icon of previewIcons) {
//     icon.classList.remove('palette1-color1','palette2-color1');
//     icon.classList.add('palette3-color1');
//   }

//   for (const iconBorder of previewIconsBorder) {
//     iconBorder.classList.remove('palette1-color3','palette2-color3');
//     iconBorder.classList.add('palette3-color3');
//   }
// }



// inputPalette3.addEventListener('change', handleInputPalette3);
*/
