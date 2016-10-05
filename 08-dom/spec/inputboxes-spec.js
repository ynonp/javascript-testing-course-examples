import { text, updateBoxes, addBox, handleInput } from 'inputboxes';
import {} from 'jasmine-jquery';
import $ from 'jquery';

describe('input boxes test', function() {
  it('should add boxes', function() {
    const div = setFixtures('<div class="textboxes"></div>');
    addBox();
    expect($('.sync')).toHaveLength(1);
  });

  it('should have the correct value test', function() {
    const div = setFixtures('<div class="textboxes"></div>');
    addBox();
    expect($('.sync')).toHaveValue(text);
  });

  it('should assign the right text to all boxes', function() {
    const div = setFixtures('<div class="textboxes"></div>');
    addBox();
    addBox();
    addBox();
    addBox();

    expect($('.sync')).toHaveValue(text);
  });

  it('should change text via handleInput', function() {
    const div = setFixtures(`<div class="textboxes">
      <input type="text" class="sync" />
      <input type="text" class="sync" />
      <input type="text" class="sync" />
    </div>`);
    const newText = 'new text';
    const ev = { target: { value: newText } };

    handleInput(ev);

    expect($('.sync')).toHaveValue(newText);
  });

});
