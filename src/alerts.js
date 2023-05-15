function createAlert(message) {
  const alert = document.createElement('div')
  alert.innerHTML =
  `<div class="alert-error alert shadow-lg w-full max-w-xs mt-2">
    <span class="text-xs">${message}</span>
  </div>`

  return alert
}

function createSubmitAlert(message, result) {
  const alert = document.createElement('div')
  alert.innerHTML =
  `<div class="alert-${result} alert shadow-lg w-full max-w-xs">
    <span class="text-xs">${message}</span>
  </div>`

  return alert
}

function checkAlerts(input) {
  const alerts = input.querySelectorAll('.alert-error');
  if (alerts.length > 0) {
    return false;
  }
  return true;
}

function addAlert(alert, input) {
  if (checkAlerts(input.parentElement)) {
    input.insertAdjacentElement('afterend', alert);
  }
}

function removeAlert(input) {
  const alert = input.parentElement.querySelector('.alert-error');
  if (alert) {
    alert.remove();
  }
}

export { createAlert, createSubmitAlert, checkAlerts, addAlert, removeAlert };