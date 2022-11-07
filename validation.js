const form = document.querySelector('form');
const mail = document.getElementById('mail');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm-pw');
const error = document.querySelector('.error');

(function checkEmail() {
  mail.addEventListener('input', (e) => {
    if (mail.validity.typeMismatch) {
      mail.setCustomValidity('Enter an email address.');
      mail.reportValidity();
    } else {
      mail.setCustomValidity('');
    }
  });
})();

(function checkCountry() {
  country.addEventListener('input', (e) => {
    if (country.validity.tooShort) {
      country.setCustomValidity('Please enter at least 3 characters.');
      country.reportValidity();
      console.log('g');
    } else {
      country.setCustomValidity('');
    }
  });
})();

(function checkZip() {
  zip.addEventListener('input', () => {
    if (zip.validity.patternMismatch) {
      zip.setCustomValidity('Enter your 5 digit zip code.');
      zip.reportValidity();
    } else {
      zip.setCustomValidity('');
    }
  });
})();

(function checkPassword() {
  password.addEventListener('input', (e) => {
    if (password.validity.tooShort) {
      password.setCustomValidity(
        'Your password must be between 8 and 20 characters.',
      );
      password.reportValidity();
    } else {
      password.setCustomValidity('');
    }
  });
  passwordConfirm.addEventListener('input', (e) => {
    if (passwordConfirm.value != password.value) {
      passwordConfirm.setCustomValidity('Your passwords do not match.');
      passwordConfirm.reportValidity();
    } else {
      passwordConfirm.setCustomValidity('');
    }
  });
})();

form.addEventListener('submit', (e) => {
  if (
    !mail.validity.valid ||
    !country.validity.valid ||
    !zip.validity.valid ||
    !password.validity.valid ||
    !passwordConfirm.validity.valid
  ) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  error.textContent = 'Please fill out the required* fields correctly.';
}
