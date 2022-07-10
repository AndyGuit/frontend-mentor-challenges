const shareBtn = document.querySelector('.arcticle-card__button');
const popup = document.querySelector('.arcticle-card__popup');

shareBtn.addEventListener('click', () => {
  shareBtn.classList.toggle('active');
  popup.classList.toggle('active');
});