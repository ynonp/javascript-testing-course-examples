export function inc(ev) {
  const el = ev.target;
  const currentValue = el.textContent;
  const nextValue = (Number(currentValue)||0) + 1;
  
  el.textContent = nextValue;
}

export function bindEventHandlers() {
  const btns = document.querySelectorAll('.buttons button');
  for (let i=0; i < btns.length; i++) {
    btns[i].addEventListener('click', inc);
  }
}

