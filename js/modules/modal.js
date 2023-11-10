export default class Modal {
  constructor(open, close, container) {
    this.botaoAbrir = document.querySelector(open);
    this.botaoFechar = document.querySelector(close);
    this.containerModal = document.querySelector(container);
    /* bind this ao callback para fazer referencia ao objeto da classe */
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre ou fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }
  // adiciona o evento de toggle ao modal

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }
  // fecha o modal ao clicar do lado de fora

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }
  // adiciona eventos aos elementos do modal

  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
