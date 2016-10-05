export default class InputView {
  constructor(rootEl, parentView) {
    this.rootEl = rootEl;
    this.parentView = parentView;
    
    this.rootEl.innerHTML = `
      <div class="bpinput-digit"></div>
      <div class="bpinput-digit"></div>
      <div class="bpinput-digit"></div>
      <div class="bpinput-digit"></div>
    `;
  }

  setValue(val) {
    const chars = val.split('');
    const digits = this.rootEl.querySelectorAll('.bpinput-digit');

    for (let i=0; i < digits.length; i++) {
      digits[i].textContent = chars[i];
    }

    this.disable();
  }

  enable() {
    const digits = this.rootEl.querySelectorAll('.bpinput-digit');
    for (let i=0; i < digits.length; i++) {
      digits[i].setAttribute('tabindex', 1);
    }
    this.rootEl.querySelector('.bpinput-digit').focus();
  }

  disable() {
    const digits = this.rootEl.querySelectorAll('.bpinput-digit');
    for (let i=0; i < digits.length; i++) {
      digits[i].removeAttribute('tabindex');
    }
  }


  setDigit(val) {
    if ((!document.activeElement) || (document.activeElement.closest('.bpinput') !== this.rootEl)) {
      return;
    }

    const activeDigit = document.activeElement;
    activeDigit.textContent = val;
    const nextDigit = activeDigit.nextElementSibling || this.rootEl.querySelector('.bpinput-digit');
    nextDigit.focus();

    const number = this.rootEl.textContent.replace(/\s/g, '');
    if (number.length === 4) {
      this.parentView.valueReady(number);
    }
  }
}

