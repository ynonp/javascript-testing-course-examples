import { __RewireAPI__, writeRandomToDom } from '03-direct-private';

describe('#writeRandomToDOM', function() {
  it('should wrtei the random value to the DOM', function() {
    __RewireAPI__.__Rewire__('_', {
      random: function() { return 50; },
    });
    const d = { textContent: '' };

    writeRandomToDom(d);

    expect(d.textContent).toEqual(50);
  });

});


