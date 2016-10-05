import _ from 'underscore';

export function writeRandomToDom(domNode) {
  domNode.textContent = _.random(100);
}

