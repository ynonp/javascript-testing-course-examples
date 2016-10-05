import BPGame from 'logic/bpgame';
import BPNumber from 'logic/bpnumber';

describe('Game Flow', function() {
  function mkGame(secret) {
    const g = new BPGame();
    g.secretValue = new BPNumber(secret);
    return g;
  }

  describe('#guess', function() {
    it('should throw after 10 guesses', function() {
      const g = mkGame(2468);

      for (let i=0; i < BPGame.TOTAL_ROUNDS; i++) {
        g.guess(1234);
      }

      expect(() => g.guess(1234)).toThrow();
    });
    it('should call #cmp with other value', function() {
      const g = new BPGame();
      const cmpSpy = spyOn(g.secretValue, 'cmp').and.callThrough();

      const result = g.guess(1234);

      expect(cmpSpy).toHaveBeenCalledWith(new BPNumber(1234));
    });

    it('should ignore invalid guesses', function() {
      const g = new BPGame();
      try {
        g.guess('1111');
      }
      catch (e) { }

      expect(g.roundsLeft).toEqual(BPGame.TOTAL_ROUNDS);
    });

  });

  describe('#gameOver', function() {
    it('should stop after guessing the right number', function() {
      const g = mkGame(2468);
      g.guess(2468);

      expect(g.gameOver).toBeTruthy();
    });

    it('should keep going after guessing the wrong number', function() {
      const g = mkGame(2468);
      g.guess(1234);

      expect(g.gameOver).toBeFalsy();
    });

    it('should let us know how many rounds left', function() {
      const g = mkGame(2468);
      g.guess(1234);

      expect(g.roundsLeft).toEqual(BPGame.TOTAL_ROUNDS - 1);
    });
  });

});
