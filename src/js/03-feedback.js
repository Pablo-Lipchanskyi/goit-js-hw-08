import throttle from "lodash.throttle";
const STORAGE_FORM = 'feedback-form-state';
const STORAGE_MAIL = 'feedback-mail';
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('[name=message]'),
    mail: document.querySelector('[name=email]')
};
const formData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextInput, 500));
refs.mail.addEventListener('input', throttle(onMailInput, 500));
refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;
    localStorage.setItem('Data', JSON.stringify(formData))
    
})
savedLocal()

function onTextInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_FORM, message);
    
}
function onMailInput(event) {
    const mail = event.target.value;
    localStorage.setItem(STORAGE_MAIL, mail)
}
function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(STORAGE_FORM);
    localStorage.removeItem(STORAGE_MAIL);
    console.log(formData);
}
function savedLocal() {
    const savedMessage = localStorage.getItem(STORAGE_FORM);
    const savedMail = localStorage.getItem(STORAGE_MAIL);
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
    if (savedMail) {
        refs.mail.value = savedMail;
    }
    
}