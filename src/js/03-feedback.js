import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
// const formValueToLocal = {};
messageFromLocal();

formEl.addEventListener('input', throttle(onInputElements, 1000));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  event.currentTarget.reset();

  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInputElements(e) {
  // formValueToLocal[e.target.name] = e.target.value;
  let someDatasFromLocal = localStorage.getItem(LOCALSTORAGE_KEY);

  someDatasFromLocal = someDatasFromLocal ? JSON.parse(someDatasFromLocal) : {};

  someDatasFromLocal[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(someDatasFromLocal));
}

function messageFromLocal() {
  const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);

  if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);

    Object.entries(parsedMessage).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}
