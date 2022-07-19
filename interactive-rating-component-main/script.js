const ratingForm = document.querySelector('.rating-form');
const ratingState = document.querySelector('.rating-state');
const thankYouState = document.querySelector('.thank-you-state');
const selectedRating = document.querySelector('.thank-you-state__selected-rating');

ratingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(e.target);

  for (const [name, value] of data) {
    console.log(`User selected ${name}: ${value}`);
    selectedRating.textContent = value;
  }

  ratingState.classList.toggle('disabled');
  thankYouState.classList.toggle('disabled');
})