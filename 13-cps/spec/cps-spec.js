import $ from 'jquery';
import {} from 'jasmine-jquery';
import Cps from 'cps';

function buildCps() {
  const el = setFixtures('<div class="cps"></div>')[0];
  const cps = new Cps(el);
  return cps;
}

describe('DOM Building', function() {
  it('should build an inc button', function() {
    const cps = buildCps();

    expect(cps.rootEl).toContainElement('.btn-inc');
  });

  it('should build a display panel', function() {
    const cps = buildCps();

    expect(cps.rootEl).toContainElement('.display');
  });
});

describe('Clicker', function() {
  describe('clicking logic', function() {
    it('should start at 0', function() {
      const cps = buildCps();

      expect(cps.clicks).toEqual(0);
    });

    it('should inc value when clicked', function() {
      const cps = buildCps();
      cps.clicked();

      expect(cps.clicks).toEqual(1);
    });

    it('should inc value multiple times', function() {
      const cps = buildCps();
      cps.clicked();
      cps.clicked();
      cps.clicked();

      expect(cps.clicks).toEqual(3);
    });
  });

  describe('Clicker / DOM', function() {
    it('should bind btn.click -> cps.clicked', function() {
      const cps = buildCps();

      spyOn(cps.btnEl, 'addEventListener');
      cps.bindEventHandlers();

      expect(cps.btnEl.addEventListener).toHaveBeenCalledWith('click', cps.clicked);
    });

    it('should call bindEventHandlers from ctro', function() {
      spyOn(Cps.prototype, 'bindEventHandlers');
      const cps = buildCps();
      expect(Cps.prototype.bindEventHandlers).toHaveBeenCalled();
    });

    it('should bind cps.clicked', function() {
      const cps = buildCps();
      expect(cps.clicked.name).toEqual('bound clicked');
    });
  });
});

describe('Time Counter', function() {
  describe('Timer Logic', function() {
    it('should start ticks counter at 0', function() {
      const cps = buildCps();
      expect(cps.ticks).toEqual(0);
    });

    it('should increase ticks counter each call', function() {
      const cps = buildCps();
      cps.ticked();
      cps.ticked();
      cps.ticked();

      expect(cps.ticks).toEqual(3);
    });
  });

  describe('Timer Events', function() {
    beforeEach(function() { jasmine.clock().install()   });
    afterEach(function()  { jasmine.clock().uninstall() });

    it('should call ticked every second', function() {
      const cps = buildCps();
      jasmine.clock().tick(4001);
      expect(cps.ticks).toEqual(4);
    });

    it('should bind ticked', function() {
      const cps = buildCps();
      expect(cps.ticked.name).toEqual('bound ticked');
    });
  });
});

describe('#update', function() {
  it('should update display with round(clicks/ticks)', function() {
    const cps = buildCps();
    Object.assign(cps, { ticks: 5, clicks: 10 });

    cps.update();

    expect(cps.displayEl).toHaveText(2);
  });

  it('should call update after clicked', function() {
    const cps = buildCps();
    spyOn(cps, 'update');

    cps.clicked();

    expect(cps.update).toHaveBeenCalled();
  });

  it('should call update after ticked', function() {
    const cps = buildCps();
    spyOn(cps, 'update');

    cps.ticked();

    expect(cps.update).toHaveBeenCalled();
  });
});
/*

describe('Timed Clicks', function() {
  beforeEach(function() {
    jasmine.clock().install();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should inc ticks as seconds pass', function() {
    const cps = buildCps();

    jasmine.clock().tick(10);
    jasmine.clock().tick(1000);

    expect(cps.ticks).toEqual(1);
  });

  it('should show clicks/ticks in the display panel', function() {
    const cps = buildCps();

    const panel = $(cps.displayEl);
    jasmine.clock().tick(10);
    jasmine.clock().tick(1000);

    expect(panel).toHaveText(0);
  });

  it('should show clicks/ticks > 0 in the display panel', function() {
    const cps = buildCps();
    const panel = $(cps.displayEl);
    jasmine.clock().tick(10);
    jasmine.clock().tick(1000);

    cps.clicked();
    cps.clicked();
    expect(panel).toHaveText(2);
  });
});

describe('Event Binding', function() {
  it('should bind click to #clicked', function() {
    const cps = buildCps();
    const btn = cps.btnEl;

    const incSpy = spyOn(btn, 'addEventListener');
    cps.bindEventHandlers();

    expect(incSpy).toHaveBeenCalledWith('click', cps.clicked);
  });

  it('should call bindEventHandlers automatically from constructor', function() {
    const bindSpy = spyOn(Cps.prototype, 'bindEventHandlers');

    const cps = buildCps();
    expect(bindSpy).toHaveBeenCalled;
  });

  it('should call initDOM automatically from constructor', function() {
    const initDOMSpy = spyOn(Cps.prototype, 'initDOM').and.callThrough();

    const cps = buildCps();

    expect(initDOMSpy).toHaveBeenCalled;
  });

  it('should bind clicked to the correct this', function() {
    const cps = buildCps();

    expect(cps.clicked.name).toMatch(/^bound\s/);
  });    

  it('should bind ticked to the correct this', function() {
    const cps = buildCps();

    expect(cps.ticked.name).toMatch(/^bound\s/);
  });
});
*/
