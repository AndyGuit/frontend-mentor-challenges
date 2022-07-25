const errorText = document.querySelector('.error-text');
const errorIcon = document.querySelector('.error-icon');
const form = document.querySelector('form.main__form');
const inputEmail = document.querySelector('.form__email');

const validateEmail = (value) => {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(value);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputEmail = e.target[0];

  if (!validateEmail(inputEmail.value)) {
    inputEmail.classList.add('form__email--invalid');
    errorText.classList.remove('disabled');
    errorIcon.classList.remove('disabled');
  } else {
    inputEmail.classList.remove('form__email--invalid');
    errorText.classList.add('disabled');
    errorIcon.classList.add('disabled');
  }
})