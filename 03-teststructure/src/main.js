import Game from 'game';

const game = new Game(Math.floor(Math.random() * 100));

const input = document.querySelector('input');
const panel = document.querySelector('.panel');

input.addEventListener('input', function(ev) {
  const result = game.guess(ev.target.value);
  panel.textContent = result;
});

