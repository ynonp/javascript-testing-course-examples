import BPNumber from 'logic/bpnumber';
import _ from 'underscore';

export default class BPGame {
  constructor() {
    this.roundsLeft  = BPGame.TOTAL_ROUNDS;
    const secret     = _.sample(_.range(1000, 10000).filter((n) => !String(n).match(/(.).*\1/)));
    this.secretValue = new BPNumber(secret);
    this.gameOver = false;
  }

  guess(val) {
    if (this.roundsLeft <= 0) {
      throw new Error('Game Over');
    }

    const res = this.secretValue.cmp(new BPNumber(val));
    this.roundsLeft--;
    if (res.bulls === 4 || this.roundsLeft <= 0) {
      this.gameOver = true;
    }
    return res;
  }
}

BPGame.TOTAL_ROUNDS = 10;

