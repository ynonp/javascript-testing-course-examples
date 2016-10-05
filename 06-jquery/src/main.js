import $ from 'jquery';

let text = 'Hello World';

function updateBoxes() {
  $('.sync').val(text);
}

function addBox() {
  $('.textboxes').append('<input type="text" class="sync" />');
  updateBoxes();
}

function handleInput(ev) {
  text = ev.target.value;
  updateBoxes();
}

function inc(ev) {
  const $el = $(ev.target);
  const currentValue = $el.text();
  const nextValue = Number(currentValue) + 1;
  
  $el.text(nextValue);
}

$('.buttons button').on('click', inc);
$('#btn-add-box').on('click', addBox);
$('.textboxes').on('input', '.sync', handleInput);

