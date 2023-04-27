import { createAlert, addAlert, removeAlert } from './alerts.js';

function updateInput(field, result) {
  const input = field.input;
  if (result === false) {
    input.classList.remove('input-info');
    input.classList.add('input-error');
    const alert = createAlert(field.alertMessage);
    addAlert(alert, input);
  } else if (result === true) {
    input.classList.remove('input-error');
    input.classList.add('input-info');
    removeAlert(input);
  }
}

export default updateInput;
