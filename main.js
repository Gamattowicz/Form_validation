import validation from './src/validation.js';

const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click', () => {
  validation();
});
