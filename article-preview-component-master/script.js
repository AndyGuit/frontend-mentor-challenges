const arrowSvg = document.querySelector('.arcticle-card__button');


// Change SVG color on hover
arrowSvg.addEventListener('mouseenter', () => {
  const color = arrowSvg.querySelector('svg path');
  color.setAttribute('fill', '#ECF2F8');
});

arrowSvg.addEventListener('mouseleave', () => {
  const color = arrowSvg.querySelector('svg path');
  color.setAttribute('fill', '#6E8098');
});