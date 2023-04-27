import formFields from './formFields.js';
import updateInput from './updateInput.js';
import { createSubmitAlert, addAlert, checkAlerts } from './alerts.js';

const alertWrapper = document.querySelector('.alert-wrapper');

function checkRequirement(regexPattern, input) {
  return regexPattern.test(input.value);
}

function checkConfirmPassword(password, confirmPassword) {
  const result =
    password.input.value === confirmPassword.input.value &&
    confirmPassword.input.value !== '';
  updateInput(confirmPassword, result);
}

function checkRodo(rodo) {
  const result = rodo.input.checked;
  updateInput(rodo, result);
}

function validateField(field) {
  if (field.name === 'rodo') {
    checkRodo(field);
  } else if (field.name === 'confirmPassword') {
    checkConfirmPassword(formFields.password, field);
  } else {
    const result = checkRequirement(field.regex, field.input);
    updateInput(field, result);
  }
}

function checkAllForms() {
  return checkAlerts(document);
}

function addFormData(formFields) {
  const data = {};
  Object.entries(formFields).forEach(([key, field]) => {
    data[field.name] = field.input.value;
  });
  return data;
}

function submitData(data) {
  const URL = 'https://przeprogramowani.pl/projekt-walidacja'
  fetch(URL, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
      throw 'Not working';
    })
    .then((responseText) => {
      console.log(responseText);
      const submitAlert = createSubmitAlert('The form has been sent', 'success');
      addAlert(submitAlert, alertWrapper);
    })
    .catch((err) => {
      console.log(err)
      const submitAlert = createSubmitAlert('Try again', 'error');
      addAlert(submitAlert, alertWrapper);
    });
}

function validation() {
  Object.entries(formFields).forEach(([key, field]) => {
    validateField(field);
  });
  if (checkAllForms(document)) {
    const data = addFormData(formFields);
    console.log(data);
    submitData(data);
  }
}

export default validation;
