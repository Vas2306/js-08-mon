import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";
const refs = {
form:document.querySelector('.feedback-form'),
email:document.querySelector('.feedback-form input'),
message:document.querySelector('.feedback-form textarea'), 
}

refs.form.addEventListener('input', throttle(onFormData, 500));
// refs.form.addEventListener('input', onFormData);
refs.form.addEventListener('submit', onSubmitForm);

dataFromLocalStorage();

let formData = {
    "email":'',
    "message":''
   };

function onFormData(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(evt) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {
    "email":'',
    "message":''
   };
}

function dataFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (data) {
    refs.email.value = data.email;
    refs.message.value = data.message;
  }
};
