export default class ResultView {
  constructor(el) {
    this.rootEl = el;
  }

  setValue(res) {
    let resultHtml = '';
    for (let i=0; i < res.bulls; i++) {
      resultHtml += '<div class="marker bull"></div>';
    }

    for (let i=0; i < res.cows; i++) {
      resultHtml += '<div class="marker cow"></div>';
    }

    for (let i=(res.bulls + res.cows); i < 4; i++) {
      resultHtml += '<div class="marker none"></div>';
    }

    this.rootEl.innerHTML = resultHtml;
  }
}

