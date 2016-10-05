import { bindEventHandlers, inc } from 'buttons-nojquery';
import {} from 'jasmine-jquery';

describe('button test', function() {
  it('should increase button numeric value', function() {
    const btn = setFixtures(`
      <div class="buttons">
        <button>0</button>
      </div>
    `);
    bindEventHandlers();

    var event = new MouseEvent('click', {
      'view': window,
      'bubbles': true,
      'cancelable': true
    });
    btn.find('button')[0].dispatchEvent(event);

    expect(btn).toHaveText('1');
  });

  it('should call the correct handler when clicked', function() {
    const div = setFixtures(`
      <div class="buttons">
        <button>0</button>
      </div>
    `);
    const btn = div.find('button')[0];
    spyOn(btn, 'addEventListener');

    bindEventHandlers();
    
    expect(btn.addEventListener).toHaveBeenCalledWith('click', inc);
  });

});

