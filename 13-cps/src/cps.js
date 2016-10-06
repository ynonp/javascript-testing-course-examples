import $ from 'jquery';

export default class Cps {
  constructor() {
    this.clicks = 0;
    this.ticks  = 0;
    setInterval(this.tick.bind(this), 1000);

    this.click = this.click.bind(this);
  }

  click() {
    this.clicks++;
    this.writeValue();
  }

  tick() {
    this.ticks++;
    this.writeValue();
  }

  writeValue() {
    this.panelEl.text(Math.floor(this.clicks / this.ticks));
  }

  initDOM(el) {
    this.el = $(el);
    this.el.html(`
      <button>Click Here</button>
      <p class="panel">0</p>
    `);
    this.btnEl   = this.el.find('button');
    this.panelEl = this.el.find('.panel');
    this.btnEl.on('click', this.click);
  }
}








