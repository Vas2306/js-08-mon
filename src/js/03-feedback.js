import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const currentStorage = localStorage.getItem(STORAGE_KEY);

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

dataFromLocalStorage();

function onFormData() {
  const formState = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function onSubmitForm(evt) {
  evt.preventDefault();
  console.log(localStorage.getItem(STORAGE_KEY) || '');
  form.elements.email.value = '';
  form.elements.message.value = '';
  localStorage.clear();
} 

function dataFromLocalStorage() {
  if (!JSON.parse(currentStorage)) {
    form.elements.message.value = '';
    form.elements.email.value = '';
    return;
  }
  form.elements.email.value = JSON.parse(currentStorage).email;
  form.elements.message.value = JSON.parse(currentStorage).message;
}
