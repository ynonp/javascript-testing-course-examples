describe('Setup and Teardown code', function() {
  beforeEach(function() {
    this.arr = [2, 4, 6, 8];
  });

  it('should add items with push', function() {
    this.arr.push(10);
    expect(this.arr).toEqual([2, 4, 6, 8, 10]);
  });

  it('should remove items with pop', function() {
    this.arr.pop();
    expect(this.arr).toEqual([2, 4, 6]);
  });
});
