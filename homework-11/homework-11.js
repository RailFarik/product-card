const clickButton = document.querySelector('.subscribe__button');
const input = document.querySelector('.subscribe__input');

clickButton.addEventListener('click', (event) => {
    event.preventDefault();
    const email = input.value.trim();
    if (email === '') {
        console.log('Пустое поле!');
        return;
    };
    if (email.includes(' ')) {
        console.log('Email не должен содержать пробелы');
        return;
    };
    if (!email.includes('@')) {
        console.log('Ошибка: нет @');
        return;
    };
    if (!email.includes('.')) {
        console.log('Отсутствует .');
        return;
    };
    const userData = {
        Email: email
    };
    console.log(userData);
});

// Открытие модального окна.

let user;

const registrationButton = document.querySelector('.registration__button');
const modal = document.querySelector('.modal__title');
const overlay = document.querySelector('.overlay');
const modalClose = document.querySelector('.modal__close');
const modalForm = document.querySelector('.modal__form');
const inputs = modalForm.querySelectorAll('input');
const passwordInput = document.querySelector('.password');
const passwordRepeatInput = document.querySelector('.password__repeat');

inputs.forEach((input) => {
    input.required = true;
});

registrationButton.addEventListener('click', () => {
    modal.classList.add('modal-showed');
    overlay.classList.add('overlay-showed');
});

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal-showed');
    overlay.classList.remove('overlay-showed');
});

// Валидация модального окна:

modalForm.addEventListener('submit', (event) => {
    event.preventDefault();


    if (!modalForm.checkValidity()) {
        alert('Регистрация отклонена.');
        return;
    };

    if (passwordInput.value !== passwordRepeatInput.value) {
        alert('Пароль не совпадает.');
        return;
    };

    user = {
        firstName: inputs[0].value,
        lastName: inputs[1].value,
        birthDate: inputs[2].value,
        login: inputs[3].value,
        password: inputs[4].value,
        passwordRepeat: inputs[5].value,
        createdOn: new Date()
    };

    console.log(user);

    modal.classList.remove('modal-showed');
    overlay.classList.remove('overlay-showed');
    modalForm.reset();
});