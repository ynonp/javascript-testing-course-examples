import $ from 'jquery';

export let text = "Hello World!";

export function updateBoxes() {
  $('.sync').val(text);
}

export function addBox() {
  $('.textboxes').append('<input type="text" class="sync" />');
  updateBoxes();
}

export function handleInput(ev) {
  text = ev.target.value;
  updateBoxes();
}

export function bindEventHandlers() {
  $('#btn-add-box').on('click', addBox);
  $('.textboxes').on('input', '.sync', handleInput);
}



