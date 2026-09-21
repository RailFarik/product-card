import Modal from './Modal.js';
import Form from './Form.js';

const subscribeForm = document.querySelector('.subscribe__form');

subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(subscribeForm);
    const userEmail = Object.fromEntries(formData.entries());

    console.log(userEmail);
});

// Открытие модального окна.

const registrationButton = document.querySelector('.registration__button');
const modalForm = document.querySelector('.modal__form');
const modal = new Modal('modal');
const form = new Form('registrationForm');

registrationButton.addEventListener('click', () => {
    modal.open();
});

// Валидация модального окна:

form.form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.isValid()) {
        alert('Регистрация отклонена.');
        return;
    }
    const userData = form.getValues();

    if (userData.password!== userData.passwordRepeat) {
        alert('Пароль не совпадает.');
        return;
    }

    userData.createdOn = new Date();

    console.log(userData);

    modal.close();
    form.reset();
});