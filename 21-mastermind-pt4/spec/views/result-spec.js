import {} from 'jasmine-jquery';
import ResultView from 'views/result';

describe('Result View Spec', function() {
  function mkView() {
    const f = setFixtures('<div class="result"></div>');
    const el = f.find('.result')[0];
    return new ResultView(el);
  }

  describe('#setValue', function() {
    beforeEach(function() {
      this.view = mkView();
      this.view.setValue({ bulls: 2, cows: 1 });
      this.markers = this.view.rootEl.querySelectorAll('.marker');
    });

    it('should show bulls are .bull', function() {
      expect(this.markers[0]).toHaveClass('bull');
      expect(this.markers[1]).toHaveClass('bull');
    });

    it('should show cows as .cow', function() {
      expect(this.markers[2]).toHaveClass('cow');
    });

    it('should show other as .none', function() {
      expect(this.markers[3]).toHaveClass('none');
    });

    it('should show 4 markers', function() {
      expect(this.markers.length).toEqual(4);
    });
  });
});
