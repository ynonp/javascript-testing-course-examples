import InputView from 'views/input';
import {} from 'jasmine-jquery';

describe('Input View', function() {
  function mkView() {
    const fixtures = setFixtures('<div class="bpinput"></div>');
    const parentView = jasmine.createSpyObj('parentView', ['valueReady']);
    return new InputView(fixtures.find('.bpinput')[0], parentView);
  }

  describe('#enable', function() {
    it('should set focus on the first digit box', function() {
      const input = mkView();
      input.enable();
      expect(document.activeElement).toEqual(input.rootEl.querySelector('.bpinput-digit:first-child'));
    });

    it('should not be focusable before calling enable', function() {
      const input = mkView();
      expect(document.activeElement).not.toEqual(input.rootEl.querySelector('.bpinput-digit:first-child'));
    });
  });

  describe('#disable', function() {
    it('should remove tabindex after disabled', function() {
      const input = mkView();
      input.disable();
      const digits = input.rootEl.querySelectorAll('.bpinput-digit');
      for (let i=0; i < digits.length; i++) {
        digits[i].focus();
        expect(document.activeElement).not.toEqual(digits[i]);
      }
    });
  });

  describe('#onNewDigit', function() {
    it('should write new digits to the DOM', function() {
      const input = mkView();
      input.enable();
      const activeDigit = document.activeElement;

      input.setDigit(2);

      expect(activeDigit).toHaveText(2);
    });

    it('should move focus to the next box after setDigit', function() {
      const input = mkView();
      input.enable();
      const activeDigit = document.activeElement;

      input.setDigit(2);

      expect(document.activeElement).toEqual('.bpinput-digit:nth-child(2)');
    });

    it('should move focus to first item after setDigit on the last', function() {
      const input = mkView();
      input.enable();
      input.rootEl.querySelector('.bpinput-digit:last-child').focus();

      input.setDigit(2);

      const focusedDigit = document.activeElement;
      expect(focusedDigit).toEqual(input.rootEl.querySelector('.bpinput-digit:first-child'));
    });
  });

  describe('#valueReady', function() {
    it('should report valueReady to parent after 4 digits typed in', function() {
      const input = mkView();
      input.enable();

      input.setDigit(2);
      input.setDigit(3);
      input.setDigit(4);
      input.setDigit(5);

      expect(input.parentView.valueReady).toHaveBeenCalledWith('2345');
    });
  });
});





