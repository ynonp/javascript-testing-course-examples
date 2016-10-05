import HighScore from 'logic/highscore';
import HighScoreView from 'views/highscore';
import {} from 'jasmine-jquery';

function mkView(hs = new HighScore()) {
  const f = setFixtures('<div class="highscore"></div>');
  const el = f.find('.highscore')[0];
  return new HighScoreView(el, hs);
}

describe('High Score View Spec', function() {
  beforeEach(function() {
    HighScore.clear();
  });

  describe('#ctor', function() {
    it('should call refresh', function() {
      const domSpy = spyOn(HighScoreView.prototype, 'refresh');
      mkView();
      
      expect(domSpy).toHaveBeenCalled();
    });
  });

  describe('#initDOM', function() {
    it('should create a table of top score', function() {
      const hs = new HighScore();
      hs.addScore('joe', 2);
      hs.addScore('jane', 4);
      const view = mkView(hs);

      expect(view.rootEl.querySelector('tr:nth-child(2) td:nth-child(1)').textContent).toEqual('joe');
      expect(view.rootEl.querySelector('tr:nth-child(2) td:nth-child(2)').textContent).toEqual('2');
      expect(view.rootEl.querySelector('tr:nth-child(3) td:nth-child(1)').textContent).toEqual('jane');
      expect(view.rootEl.querySelector('tr:nth-child(3) td:nth-child(2)').textContent).toEqual('4');
    });
  });

});
