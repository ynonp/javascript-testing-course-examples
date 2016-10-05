import GameView from 'views/game';
import BPGame from 'logic/bpgame';
import HighScore from 'logic/highscore';
import NewGameView from 'views/new-game';

const main = document.querySelector('main');

if (main.classList.contains('game')) {
  const game = new BPGame();
  const playerName = sessionStorage.getItem(NewGameView.STORAGE_KEY) || 'Anonymous';
  const gv = new GameView(main, playerName, new HighScore(), game);
} else {
  const menu = new NewGameView(main);
}

