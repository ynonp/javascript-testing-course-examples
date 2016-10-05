import {} from 'jasmine-jquery';
import {} from 'jasmine-data_driven_tests';
import BPGame from 'logic/bpgame';
import HighScore from 'logic/highscore';
import GameView from 'views/game';
import BPNumber from 'logic/bpnumber';
import ResultView from 'views/result';


describe('Game View', function() {
  function mkView(bpgame = new BPGame(), hs = new HighScore()) {
    const f = setFixtures('<div class="game"></div>');
    const el = f.find('.game')[0];
    const playerName = 'test user';

    return new GameView(el, playerName, hs, bpgame);
  }

  describe('#gameOver', function() {
    it('should call gameOver(false) after 10 mistakes', function() {
      const bpGame = new BPGame();
      bpGame.secretValue = new BPNumber('1234');
      const view = mkView(bpGame);
      const gameOverSpy = spyOn(view, 'gameOver');

      for (let i=0; i<BPGame.TOTAL_ROUNDS + 1; i++) {
        view.valueReady('2468');
      }

      expect(gameOverSpy).toHaveBeenCalledWith(false);
    });

    it('should call gameOver(true) when guessing the correct value', function() {
      const bpGame = new BPGame();
      bpGame.secretValue = new BPNumber('1234');
      const view = mkView(bpGame);
      const gameOverSpy = spyOn(view, 'gameOver');

      view.valueReady('1234');

      expect(gameOverSpy).toHaveBeenCalledWith(true);
    });
  });

  describe('#nextRound', function() {
    it('should move focus to next InputView after valid guess', function() {
      const game = new BPGame();
      game.secretValue = new BPNumber('1234');
      const view = mkView(game);
      const disableSpy = spyOn(view.inputs[0], 'disable');
      const enableSpy = spyOn(view.inputs[1], 'enable');

      view.valueReady('2468');

      expect(disableSpy).toHaveBeenCalled();
      expect(enableSpy).toHaveBeenCalled();
    });

    it('should create a new ResultView with the right value', function() {
      const game = new BPGame();
      game.secretValue = new BPNumber('1234');
      const view = mkView(game);

      const resultSpy = spyOn(ResultView.prototype, 'setValue');

      view.valueReady('2468');

      expect(resultSpy).toHaveBeenCalledWith(game.secretValue.cmp(new BPNumber('2468')));
    });

    it('should not move focus to next InputView after invalid guess', function() {
      const game = new BPGame();
      game.secretValue = new BPNumber('1234');
      const view = mkView(game);
      const disableSpy = spyOn(view.inputs[0], 'disable');
      const enableSpy = spyOn(view.inputs[1], 'enable');

      view.valueReady('1111');

      expect(disableSpy).not.toHaveBeenCalled();
      expect(enableSpy).not.toHaveBeenCalled();
    });
    
  });

});












