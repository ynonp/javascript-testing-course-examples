export default class HighScore {
  constructor() {
    const score = localStorage.getItem(HighScore.STORAGE_KEY);
    if (score !== null) {
      this.score = JSON.parse(score);
    } else {
      this.score = [];
    }
  }

  getTopScore() {
    return this.score;
  }

  addScore(player, rounds) {
    if (this.score.length >= HighScore.MAX_SIZE && rounds >= this.score[this.score.length-1].rounds) {
      // score too low to be added
      return;
    }

    this.score = [...this.score, { player: player, rounds: rounds }].sort((a, b) => a.rounds - b.rounds);
    localStorage.setItem(HighScore.STORAGE_KEY, JSON.stringify(this.score));
    return true;
  }
}

HighScore.STORAGE_KEY = 'bpscore';
HighScore.MAX_SIZE = 10;

HighScore.clear = function() {
  localStorage.removeItem(HighScore.STORAGE_KEY);
};

