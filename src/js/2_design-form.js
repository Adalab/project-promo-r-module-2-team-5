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