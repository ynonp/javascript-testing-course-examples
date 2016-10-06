import Cps from 'cps';
import {} from 'jasmine-jquery';

function mkCps() {
  const cps = new Cps();
  const f = setFixtures('<div class="cps"></div>');
  const $div = f.find('.cps');

  cps.initDOM($div[0]);
  return cps;
}


describe('CPS Logic Spec', function() {
  describe('Clicks Spec', function() {
    it('should allow users to click', function() {
      const cps = mkCps();
      cps.click();

      expect(cps.clicks).toEqual(1);
    });

    it('should call writeValue() after click()', function() {
      const cps = mkCps();
      const writeValueSpy = spyOn(cps, 'writeValue');

      cps.click();

      expect(writeValueSpy).toHaveBeenCalled();
    });

    it('should start at zero', function() {
      const cps = mkCps();
      expect(cps.clicks).toEqual(0);
    });

    it('should count clicks', function() {
      const cps = mkCps();
      cps.click();
      cps.click();
      cps.click();
      cps.click();
      cps.click();
      expect(cps.clicks).toEqual(5);
    });
  });

  describe('Ticks Spec', function() {
    beforeEach(function() {
      jasmine.clock().install();
    });

    afterEach(function() {
      jasmine.clock().uninstall();
    });

    it('should start at 0', function() {
      const cps = mkCps();
      expect(cps.ticks).toEqual(0);
    });

    it('should call writeValue after each tick', function() {
      const cps = mkCps();
      const writeValueSpy = spyOn(cps, 'writeValue');
      jasmine.clock().tick(1100);

      expect(writeValueSpy).toHaveBeenCalled();
    });

    it('should inc with seconds passing', function() {
      const cps = mkCps();
      jasmine.clock().tick(1100);
      expect(cps.ticks).toEqual(1);
    });

    it('should inc with 5 seconds passing', function() {
      const cps = mkCps();
      jasmine.clock().tick(5100);
      expect(cps.ticks).toEqual(5);
    });
  });
});

describe('CPS DOM Spec', function() {
  it('should create its own UI', function() {
    const cps = mkCps();
    expect(cps.el).toContainElement('button');
    expect(cps.el).toContainElement('.panel');
  });

  it('should bind button to click method', function() {
    const cps = mkCps();
    expect(cps.btnEl).toHandleWith('click', cps.click);
  });

  it('should write clicks/ticks to panel', function() {
    const cps = mkCps();
    cps.clicks = 6;
    cps.ticks  = 2;
    cps.writeValue();

    expect(cps.panelEl).toHaveText(3);
  });

  it('should use the bound click', function() {
    const cps = mkCps();

    expect(cps.click.name).toEqual('bound click');
  });
});









