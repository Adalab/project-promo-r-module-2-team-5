for (let i = 0; i < titleHeader.length; i++) {
  titleHeader[i].addEventListener('click', () => {
    for (let j = 0; j < content.length; j++) {
      if (i === j) {
        content[j].classList.contains('collapsed') &&
          content[j].classList.remove('collapsed');
        arrow[j].classList.contains('upsideDown') &&
          arrow[j].classList.remove('upsideDown');
      } else {
        content[j].classList.add('collapsed');
        arrow[j].classList.add('upsideDown');
      }
    }
  });
}
