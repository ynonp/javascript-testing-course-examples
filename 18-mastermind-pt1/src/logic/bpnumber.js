export default class BPNumber {
  constructor(val) {
    val = String(val);
    this.valAsString = val;

    if (isNaN(Number(val))) {
      throw new Error('Only numeric values allowed:' + val);
    }
    if (val.charAt(0) === '0') {
      throw new Error('Leading zeros not allowed:' + val);
    }

    this.val = val.
      split('').
      map((n, i) => ({ [n]: i })).
      reduce((acc, val) => Object.assign({}, acc, val))

    if (Object.keys(this.val).length !== 4) {
      throw new Error('Invalid Input: ' + val);
    }
  }

  cmp(other) {
    const result = { bulls: 0, cows: 0 };

    for ( let k of Object.keys(this.val) ) {
      if (this.val[k] === other.val[k]) {
        result.bulls++;
      } else if (typeof other.val[k] !== 'undefined') {
        result.cows++;
      }
    }
    return result;
  }

  toString() {
    return this.valAsString;
  }
}

