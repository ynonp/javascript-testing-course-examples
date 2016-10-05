export function addToArrayLater(arr) {
  setTimeout(function() {
    arr.push(10);
  }, 1000);
}

export function foo() {
  return "foo";
}
