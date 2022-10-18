import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('input');
const textAreaEl = document.querySelector('textarea');

const formValueToLocal = {};
messageFromLocal();

formEl.addEventListener('input', throttle(onInputElements, 1000));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  event.currentTarget.reset();

  localStorage.removeItem('feedback-form-state');
}

function onInputElements(e) {
  formValueToLocal[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formValueToLocal));
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
}

function messageFromLocal() {
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  let savedMessage = localStorage.getItem('feedback-form-state');

  if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);

    console.log(parsedMessage);
    Object.entries(parsedMessage).forEach(([name, value]) => {
      formValueToLocal[name] = value;
      formEl.elements[name].value = value;
    });
  }
}
