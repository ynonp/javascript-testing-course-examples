import Messages from 'messages';
import Game from 'game';

describe('Number Guessing Game', function() {
  describe('Valid Gameplay', function() {
    it('should say "Too Low" when number is too low', function() {
      const game = new Game(94);
      const result = game.guess(20);
      expect(result).toEqual(Messages.TOO_LOW);
    });

    it('should say "Too High" when number is too high', function() {
      const game = new Game(94);
      const result = game.guess(120);
      expect(result).toEqual(Messages.TOO_HIGH);
    });

    it('should say "Bravo!" when number is the same', function() {
      const game = new Game(94);
      const result = game.guess(94);
      expect(result).toEqual(Messages.WIN);
    });
  });
});
