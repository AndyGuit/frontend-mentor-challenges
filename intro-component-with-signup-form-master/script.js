const form = document.querySelector('.sign-up-form');
const inputs = document.querySelectorAll('.sign-up-form__field');

const highlightInvalid = function (inputContainer) {
  inputContainer.classList.add('invalid');
};

const showInvalidText = function (textEl, message) {
  textEl.textContent = message;
};

const validateEmail = function (email) {
  // https://www.w3resource.com/javascript/form/email-validation.php
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const validateInput = function (inputContainer) {
  const input = inputContainer.querySelector('input');
  const ivalidTextEl = inputContainer.querySelector('small');

  if (input.value === '') {
    const message = `${input.placeholder} cannot be empty`;

    highlightInvalid(inputContainer);
    showInvalidText(ivalidTextEl, message);
    return false;
  }

  if (input.type === 'email' && !validateEmail(input.value)) {
    const message = 'Looks like this is not an email';

    highlightInvalid(inputContainer);
    showInvalidText(ivalidTextEl, message);
    return false;
  }

  return true;
};

inputs.forEach(input => {
  // Remove invalid class on user type in
  input.addEventListener('input', () => {
    input.classList.remove('invalid');
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  inputs.forEach(inputContainer => {
    const input = inputContainer.querySelector('input');
    const isValid = validateInput(inputContainer);

    if (isValid) {
      formData.set(input.id, input.value);
    }
  })

  // Check if all inputs are valid
  if (Array.from(formData.keys()).length === inputs.length) {
    // Send data
    console.log('All inputs are valid');
  }
});