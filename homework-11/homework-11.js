const subscribeForm = document.querySelector('.subscribe__form');
const input = document.querySelector('.subscribe__input');

subscribeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = input.value.trim();

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
const passwordInput = document.querySelector('.password');
const passwordRepeatInput = document.querySelector('.password__repeat');

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

    const formData = new FormData(modalForm);

    if (formData.get('password') !== formData.get('passwordRepeat')) {
        alert('Пароль не совпадает.');
        return;
    };

    user = {
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        birthDate: formData.get('birthDate'),
        login: formData.get('login'),
        password: formData.get('password'),
        passwordRepeat: formData.get('passwordRepeat'),
        createdOn: new Date()
    };

    console.log(user);

    modal.classList.remove('modal-showed');
    overlay.classList.remove('overlay-showed');
    modalForm.reset();
});