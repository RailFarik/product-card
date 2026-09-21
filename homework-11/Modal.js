export default Modal;

class Modal {
    constructor(id) {
        this.modal = document.getElementById(id);
        this.overlay = document.querySelector('.overlay');
        this.listenCloseButton();
    }

    open() {
        this.modal.classList.add('modal-showed');
        this.overlay.classList.add('overlay-showed');
    }

    close() {
        this.modal.classList.remove('modal-showed');
        this.overlay.classList.remove('overlay-showed');
    }

    isOpen() {
        return this.modal.classList.contains('modal-showed');
    }

    listenCloseButton() {
        const closeButton = this.modal.querySelector('.modal__close');

        closeButton.addEventListener('click', () => {
            this.close();
        });
    }
};