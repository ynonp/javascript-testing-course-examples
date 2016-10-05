export default class ColorChanger {
  constructor(colors, rootEl, btnEl) {
    this.rootEl = rootEl;
    this.btnEl  = btnEl;
    this.colors = colors.length > 0 ? colors : ['white'];
    this.currentColor = 0;
    
    this.btnEl.text('Click Me');
    this.handleClick = this.handleClick.bind(this);
    this.btnEl.on('click', this.handleClick);
  }
    
  handleClick() {
    const nextColor = this.nextColor();
    this.rootEl.css('background', nextColor);
  }
  
  nextColor() {
    const res = this.colors[this.currentColor];
    this.currentColor = (this.currentColor + 1) % this.colors.length;
    return res;
  }  
}

