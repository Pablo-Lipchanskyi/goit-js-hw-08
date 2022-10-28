const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name=email]'),
    textarea: document.querySelector('[name=message]')
};
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextInput);
savedLocal()

function onTextInput(event) {
    const message = event.target.value;
    localStorage.setItem('feedback-form', message)
}
function onFormSubmit(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(message)
    console.log("Jnghfdrf")
}
function savedLocal() {
    const savedMessage = localStorage.getItem('feedback-form');
    if (savedMessage) {
        console.log(savedMessage);
    }
    
}