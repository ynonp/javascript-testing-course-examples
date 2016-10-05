import $ from 'jquery';

export function inc(ev) {
  const $el = $(ev.target);
  const currentValue = $el.text();
  const nextValue = (Number(currentValue)||0) + 1;
  
  $el.text(nextValue);
}

export function bindEventHandlers() {
  $('.buttons button').on('click', inc);
}
