import { inc } from 'buttons';
import {} from 'jasmine-jquery';

describe('button test', function() {
  it('should increase button numeric value', function() {
    const btn = setFixtures('<button>0</button>');
    const ev = { target: btn };

    inc(ev);

    expect(btn).toHaveText(1);
  });

  it('should set value to 1 if original value was not a number', function() {
    const btn = setFixtures('<button>hello</button>');
    const ev = { target: btn };

    inc(ev);

    expect(btn).toHaveText(1);
  });
});
