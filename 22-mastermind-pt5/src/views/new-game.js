export default class NewGameView {
  constructor(el) {
    this.formEl = el.querySelector('form');
    this.rootEl = el;
    this.inputEl = el.querySelector('.player-name');

    this.formEl.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleSubmit(ev) {
    ev.preventDefault();

    const playerName = this.inputEl.value;
    if (playerName.length > 0) {
      sessionStorage.setItem(NewGameView.STORAGE_KEY, playerName);
      window.location.href = 'game.html';
    }
  }
}

NewGameView.STORAGE_KEY = 'playerName';
