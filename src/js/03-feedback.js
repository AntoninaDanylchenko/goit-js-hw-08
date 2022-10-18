import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

const formData = {};
messageFromLocal();
formEl.addEventListener('input', onInputElements);
formEl.addEventListener('submit', throttle(onFormSubmit, 500));

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
}

function onInputElements(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function messageFromLocal() {
  let savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    savedMessage = JSON.parse(savedMessage);
    console.log(savedMessage);
    if (savedMessage.email) {
      inputEl.value = savedMessage.email;
    }
    if (savedMessage.message) {
      textAreaEl.value = savedMessage.message;
    }
  }
}
