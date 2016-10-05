import { addToArrayLater } from 'async-demo';

describe('Async Code', function() {
  beforeEach(function() {
    jasmine.clock().install();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should add to the array later', function() {
    const arr = [1, 2, 3];

    addToArrayLater(arr);
    jasmine.clock().tick(1500);

    expect(arr.length).toEqual(4);
  });
});

