class Modal {
  constructor() {
    this.injectHTML();
    this.modal = document.querySelector(".modal");
    this.closeIcon = document.querySelector(".modal__close");
    this.openModalButton = document.querySelectorAll(".open-modal");
    this.events();
  }

  events() {
    this.openModalButton.forEach((el) =>
      el.addEventListener("click", (e) => this.openTheModal(e))
    );
    this.closeIcon.addEventListener("click", () => this.closeTheModal());
    document.addEventListener("keyup", (e) => this.keyPressHandler(e));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeTheModal();
    }
  }

  openTheModal(e) {
    e.preventDefault();
    this.modal.classList.add("modal--is-visible");
  }

  closeTheModal() {
    this.modal.classList.remove("modal--is-visible");
  }

  injectHTML() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="modal">
          <div class="modal__inner">
              <h2
                class="section-title section-title--blue section-title--less-margin"
              >
              <img src="assets/images/icons/mail.svg" class="section-title__icon" />
                Get in <strong>Touch</strong>
              </h2>
              <div class="wrapper wrapper--narrow">
                <p class="modal__description">
                  Feel free to contact by using any of these platforms!
                </p>
              </div>

              <div class="social-icons">
                <a href="mailto: ozan_ozgen@outlook.com" class="social-icons__icon"
                  ><img src="assets/images/icons/email.svg" alt="email"
                /></a>
                <a href="https://www.linkedin.com/in/719101/" class="social-icons__icon"
                  ><img src="assets/images/icons/linkedin.svg" alt="LinkedIn"
                /></a>
                <a href="https://github.com/OzgenOzan" class="social-icons__icon"
                  ><img src="assets/images/icons/github.svg" alt="GitHub"
                /></a>
                <a href="#" class="social-icons__icon"
                  ><img src="assets/images/icons/youtube.svg" alt="YouTube"
                /></a>
              </div>
          </div>
            <div class="modal__close">X</div>
        </div>
      `
    );
  }
}

export default Modal;
