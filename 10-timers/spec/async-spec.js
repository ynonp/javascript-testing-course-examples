import { addToArrayLater } from 'async-demo';

describe('Async Code', function() {
  it('should add to the array later', function(done) {
    const arr = [1, 2, 3];

    addToArrayLater(arr);

    setTimeout(function() {
      expect(arr.length).toEqual(4);
      done();
    }, 1500);
  });
});
