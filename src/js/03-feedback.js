import throttle from "lodash.throttle";
const STORAGE = 'feedback-form-state';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('[name=message]')
};
const formData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextInput, 500));
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('Data', JSON.stringify(formData))
    
})
savedLocal()

function onTextInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE, message);
}
function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGE);
    console.log(JSON.parse(formData))
}
function savedLocal() {
    const savedMessage = localStorage.getItem(STORAGE);
    if (savedMessage) {
        console.log(savedMessage);
        refs.textarea.value = savedMessage;
    }
    
}