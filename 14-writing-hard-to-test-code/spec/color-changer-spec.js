import ColorChanger from 'color-changer';
import {} from 'jasmine-jquery';

const DEFAULT_COLORS = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];

function buildColorChanger(colors = DEFAULT_COLORS) {
  const fixture = setFixtures('<div><button></button></div>');
  const root = fixture.find('div');
  const btn  = fixture.find('button');
  return new ColorChanger(colors, root, btn);
}

describe('Color Changer', function() {
  describe('#btn.click', function() {
    it('should call ColorChanger.click', function() {      
      const cc = buildColorChanger();
      expect(cc.btnEl).toHandleWith('click', cc.handleClick);
    });

    it('should use a bound version', function() {
      const cc = buildColorChanger();
      expect(cc.handleClick.name).toEqual('bound handleClick');
    });
  });

  describe('#nextColor', function() {
    it('should return the first color from the array on first call', function() {
      const cc = buildColorChanger();
      expect(cc.nextColor()).toEqual(DEFAULT_COLORS[0]);
    });

    it('should return the second color from the array on second call', function() {
      const cc = buildColorChanger();
      cc.nextColor();

      expect(cc.nextColor()).toEqual(DEFAULT_COLORS[1]);
    });

    it('should return the first color after the last one', function() {
      const cc = buildColorChanger();

      cc.currentColor = DEFAULT_COLORS.length-1;
      cc.nextColor();

      expect(cc.currentColor).toEqual(0);
    });

    it('should return white if color array is empty', function() {
      const cc = buildColorChanger([]);
      expect(cc.nextColor()).toEqual('white');
    });
  });

  describe('#setColor', function() {
    it('should set the color of the rootEl according to nextColor', function() {
      const cc = buildColorChanger();
      const color = cc.colors[cc.currentColor];
      cc.handleClick();

      expect(cc.rootEl).toHaveCss({ backgroundColor: color });
    });
  });
});
