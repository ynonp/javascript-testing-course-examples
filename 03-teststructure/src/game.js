import Messages from 'messages';

export default class Game {
  constructor(secret) {
    this.secret = secret;
  }

  guess(val) {
    if (val < this.secret) {
      return Messages.TOO_LOW;
    } else if (val > this.secret) {
      return Messages.TOO_HIGH;
    } else {
      return Messages.WIN;
    }
  }
}

