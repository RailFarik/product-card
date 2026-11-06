export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.#initOpen(buttonId);
  }

  open() {
    if (this.isOpen()) {
      return;
    }

    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');

    this.#initClose();
  }

  close() {
    if (!this.isOpen()) {
      return;
    }

    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');

    const closeButton = this.modal.querySelector('#modal-close-button');

    closeButton.removeEventListener('click', this.handleCloseClick);

    if (this.shouldCloseOnOverlay) {
      this.overlay.removeEventListener('click', this.handleOverlayClick);
    }
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);

    button.addEventListener('click', () => {
      this.open();
    });
  }

  #initClose() {
    const closeButton = this.modal.querySelector('#modal-close-button');

    this.handleCloseClick = () => {
      this.close();
    };

    closeButton.addEventListener('click', this.handleCloseClick);

    if (this.shouldCloseOnOverlay) {
      this.handleOverlayClick = () => {
        this.close();
      };

      this.overlay.addEventListener('click', this.handleOverlayClick);
    }
  }
}