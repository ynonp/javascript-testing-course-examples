import InputView from 'views/input';
import ResultView from 'views/result';
import HighScoreView from 'views/highscore';
import BPGame from 'logic/bpgame';


export default class GameView {
  constructor(el, playerName, hs, bpgame) {
    this.rootEl = el;
    this.playerName = playerName;
    this.highScore = hs;
    this.game = bpgame;

    this.handleKeyPress = this.handleKeyPress.bind(this);

    this._initDOM();
    this._initSubviews();
    this._bindEventHandlers();

    this._startGame();
  }

  _startGame() {
    this.activeInputIndex = 0;
    this.activeInput = this.inputs[this.activeInputIndex];
    this.activeInput.enable();
  }

  _initDOM() {
    this.rootEl.innerHTML = `
      <div class="half game">
        <div class="header">
        <h2>Hello ${this.playerName}</h2>
        <span class="notification"></span>
        The Secret Number is: <span class="secret">* * * *</span>
        </div>
        <div class="main">
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
          <div class="row"><div class="bpinput"></div><div class="bpresult"></div></div>
        </div>
      </div>
      <div class="half">
        <hr />
        <h1>Top Score</h1>
        <div class="highscore"></div>
      </div>
    `;
    this.notificationEl = this.rootEl.querySelector('.notification');
    this.secretEl = this.rootEl.querySelector('.secret');
  }

  _initSubviews() {
    this.inputs = Array.from(this.rootEl.querySelectorAll('.bpinput')).map((el, idx) => (
      new InputView(el, this)
    )).reverse();
    const hsDiv = this.rootEl.querySelector('.highscore');
    this.highScoreView = new HighScoreView(hsDiv, this.highScore);
  }


  _bindEventHandlers() {
    this.rootEl.addEventListener('keypress', this.handleKeyPress);
  }

  handleKeyPress(ev) {
    const char = String.fromCharCode(ev.charCode);
    if (!isNaN(Number(char))) {
      this.activeInput.setDigit(char);
    }
  }

  nextRound() {
    this.activeInput.disable();

    if (!this.game.gameOver) {
      this.activeInput = this.inputs[++this.activeInputIndex];    
      this.activeInput.enable();
    } else {
      // Game Over... You Lose
      this.gameOver(this.game.roundsLeft > 0);
    }
  }

  gameOver(win) {
    this.secretEl.textContent = this.game.secretValue.toString().split('').join(' ');
    this.notificationEl.textContent = win ? "Bravo! You Win" : "You Lose...";
    if (win) {
      this.highScore.addScore(this.playerName, BPGame.TOTAL_ROUNDS - this.game.roundsLeft);
      this.highScoreView.refresh();
    }
  }

  valueReady(val) {
    let validInput = true;
    try {
      const res        = this.game.guess(val);
      const resultDivs = this.rootEl.querySelectorAll('.bpresult');
      const rv = new ResultView(resultDivs[BPGame.TOTAL_ROUNDS - 1 - this.activeInputIndex]);
      rv.setValue(res);
    }
    catch(e) {
      validInput = false;
    }

    if (validInput) {
      this.nextRound();
    }
  }
}

