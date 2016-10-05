export default class CPS {
  constructor(el) {
    el.innerHTML = `
      <p class="display">0</p>
      <button class="btn-inc">Click</button>
    `;
    this.clicked = this.clicked.bind(this);
    this.ticked  = this.ticked.bind(this);

    this.rootEl    = el;
    this.btnEl     = el.querySelector('.btn-inc');
    this.displayEl = el.querySelector('.display');

    this.ticks  = 0;
    this.clicks = 0;
    this.bindEventHandlers();
  }

  clicked() {
    this.clicks++;
    this.update();
  }

  ticked() {
    this.ticks++;
    this.update();
  }

  update() {
    this.displayEl.textContent = Math.round(this.clicks / this.ticks);
  }

  bindEventHandlers() {
    this.btnEl.addEventListener('click', this.clicked);
    setInterval(this.ticked, 1000);
  }
}

