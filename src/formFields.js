const userNameInput = document.querySelector('.user-name');
const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const confirmPasswordInput = document.querySelector('.confirm');
const rodoInput = document.querySelector('.rodo');

const formFields = {
  userName: {
    name: 'userName',
    alertMessage:
      'Incorrect Name. Cannot contain digits or special characters and must be at least 2 characters long',
    regex: /^[a-zA-Z]{2,}$/,
    input: userNameInput,
  },
  email: {
    name: 'email',
    alertMessage: 'Incorrect Email. Must contain "@" character and the domain.',
    regex: /^\S+@\S+\.\S+$/,
    input: emailInput,
  },
  password: {
    name: 'password',
    alertMessage:
      'Incorrect Password. Must contain a minimum of 8 characters, including a minimum of one capital letter, one number and one special character.',
    regex: /^(?=.*[A-Z])(?=.*\d)(?=.*\W).{8,}$/,
    input: passwordInput,
  },
  confirmPassword: {
    name: 'confirmPassword',
    alertMessage:
      'Incorrect Confirm Password. Must be the same as the password.',
    input: confirmPasswordInput,
  },
  rodo: {
    name: 'rodo',
    alertMessage: 'You have to accept our Terms.',
    input: rodoInput,
  },
};

export default formFields;
