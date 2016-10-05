export function writeRandomValueToDom(domNode, randomizer) {
    domNode.textContent = randomizer.random(100);
}

