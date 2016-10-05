import ColorChanger from 'color-changer';
import $ from 'jquery';

const colors = ['red', 'blue', 'green', 'yellow', 'cyan', 'magenta'];
const btn = $('#btn');
const body = $('body');

new ColorChanger(colors, body, btn);


