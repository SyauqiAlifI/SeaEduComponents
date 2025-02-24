// document.addEventListener('DOMContentLoaded', () => {
//   const form = document.getElementById('signUpForm');
//   const passwordInput = document.getElementById('passwordfield');
//   const confirmPasswordInput = document.getElementById('confirmPasswordField');
//   const toggleButtons = document.querySelectorAll('.toggle-password');
// });

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signUpForm');
  const passwordInput = document.getElementById('passwordfield');
  const confirmPasswordInput = document.getElementById('confirmPasswordField');
  const toggleButtons = document.querySelectorAll('.toggle-password');
  const requirements = document.querySelectorAll('.requirement');
  const submitButton = form.querySelector('.submit-btn');
  const matchStatus = document.getElementById('password-match-status');

  const passwordRequirements = {
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    number: /[0-9]/,
    special: /[!@#$%^&*()_+\-=\[\]{}|;:,.<>?]/
  };

  function validatePassword(password) {
    const results = {
      uppercase: passwordRequirements.uppercase.test(password),
      lowercase: passwordRequirements.lowercase.test(password),
      number: passwordRequirements.number.test(password),
      special: passwordRequirements.special.test(password)
    };

    requirements.forEach(req => {
      const requirement = req.dataset.requirement;
      if (results[requirement]) {
        req.classList.add('valid');
      } else {
        req.classList.remove('valid');
      }
    });

    return Object.values(results).every(result => result === true);
  }

  function validatePasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (!password || !confirmPassword) {
      matchStatus.textContent = '';
      matchStatus.className = 'validation-message';
      confirmPasswordInput.classList.remove('valid', 'error');
      return false;
    }

    if (password === confirmPassword) {
      matchStatus.textContent = '';
      matchStatus.className = 'validation-message success';
      confirmPasswordInput.classList.add('valid');
      confirmPasswordInput.classList.remove('error');
      return true;
    } else {
      matchStatus.textContent = 'Passwords do not match';
      matchStatus.className = 'validation-message error';
      confirmPasswordInput.classList.add('error');
      confirmPasswordInput.classList.remove('valid');
      return false;
    }
  }

  function updateSubmitButton() {
    const password = passwordInput.value;
    const isPasswordValid = validatePassword(password);
    const isMatchValid = validatePasswordMatch();
    submitButton.disabled = !(isPasswordValid && isMatchValid);
  }

  // Password input validation
  passwordInput.addEventListener('input', () => {
    validatePassword(passwordInput.value);
    validatePasswordMatch();
    updateSubmitButton();
  });

  // Confirm password validation
  confirmPasswordInput.addEventListener('input', () => {
    validatePasswordMatch();
    updateSubmitButton();
  });

  // Toggle password visibility
  toggleButtons.forEach(button => {
    const input = button.previousElementSibling;
    button.addEventListener('click', () => {
      if (input.type === 'password') {
        input.type = 'text';
        button.textContent = 'Hide';
      } else {
        input.type = 'password';
        button.textContent = 'Show';
      }
    });
  });

  // Form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Final validation check
    if (!validatePassword(password)) {
      passwordInput.classList.add('error');
      return;
    }

    if (!validatePasswordMatch()) {
      return;
    }

    // If validation passes, you can submit the form
    console.log('Form submitted:', {
      email,
      password
    });

    // Clear form and reset states
    form.reset();
    requirements.forEach(req => req.classList.remove('valid'));
    matchStatus.textContent = '';
    matchStatus.className = 'validation-message';
    confirmPasswordInput.classList.remove('valid', 'error');
    passwordInput.classList.remove('valid', 'error');
    submitButton.disabled = true;
  });

});