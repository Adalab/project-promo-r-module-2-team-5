'use strict';

// PARTE DE REBECA Y MONICA
//declarar constantes de los elementos HTMl que intervienen (nombre, borde, iconos,borde de los iconos y divs del diseña) con document.query...

const previewName = document.querySelector(".js_preview_name");
const previewBorder = document.querySelector(".js_preview_box1");
const previewIcons = document.querySelectorAll(".js_card_icon");
const previewIconsBorder = document.querySelectorAll(".js_media_item");
const inputPalette1 = document.querySelector(".js_input_palette1");
const inputPalette2 = document.querySelector(".js_input_palette2");
const inputPalette3 = document.querySelector(".js_input_palette3");
console.log (previewIcons);
//Escuchar el evento los tres eventos (uno por cada input o div).borde


function handleInputPalette1() {
    previewName.classList.remove("palette2-color1");
    previewName.classList.remove("palette3-color1");
    previewName.classList.add("palette1-color1");
    
    previewBorder.classList.remove("palette2-color2");
    previewBorder.classList.remove("palette3-color2");
    previewBorder.classList.add("palette1-color2");
    
    for (const icon of previewIcons) {
    icon.classList.remove("palette2-color1");
    icon.classList.remove("palette3-color1");
    icon.classList.add("palette1-color1");
    }
    
    for (const iconBorder of previewIconsBorder) {
        iconBorder.classList.remove("palette2-color3");
        iconBorder.classList.remove("palette3-color3");
        iconBorder.classList.add("palette1-color3");
        }
};

inputPalette1.addEventListener('change', handleInputPalette1);
    
function handleInputPalette2() {
previewName.classList.remove("palette1-color1");
previewName.classList.remove("palette3-color1");
previewName.classList.add("palette2-color1");

previewBorder.classList.remove("palette1-color2");
previewBorder.classList.remove("palette3-color2");
previewBorder.classList.add("palette2-color2");

for (const icon of previewIcons) {
icon.classList.remove("palette1-color1");
icon.classList.remove("palette3-color1");
icon.classList.add("palette2-color1");
}

for (const iconBorder of previewIconsBorder) {
    iconBorder.classList.remove("palette1-color3");
    iconBorder.classList.remove("palette3-color3");
    iconBorder.classList.add("palette2-color3");
    }
};

inputPalette2.addEventListener('change',handleInputPalette2);




function handleInputPalette3() {
    previewName.classList.remove("palette1-color1");
    previewName.classList.remove("palette2-color1");
    previewName.classList.add("palette3-color1");
    
    previewBorder.classList.remove("palette1-color2");
    previewBorder.classList.remove("palette2-color2");
    previewBorder.classList.add("palette3-color2");
    
    for (const icon of previewIcons) {
    icon.classList.remove("palette1-color1");
    icon.classList.remove("palette2-color1");
    icon.classList.add("palette3-color1");
    }
    
    for (const iconBorder of previewIconsBorder) {
        iconBorder.classList.remove("palette1-color3");
        iconBorder.classList.remove("palette2-color3");
        iconBorder.classList.add("palette3-color3");
        }
};



inputPalette3.addEventListener('change', handleInputPalette3);
    
    


//funciones

