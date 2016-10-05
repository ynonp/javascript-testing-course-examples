import DivisibilityMatchers from 'utils/divisibility-matchers';

describe('Custom Matcher', function() {
  beforeAll(function() {
    jasmine.addMatchers(DivisibilityMatchers);
  });

  it('should check even-ness of a value', function() {
    expect(2).toBeEven();
  });

  it('should check divisible by', function() {
    expect(10).toBeDivisibleBy(2);
    expect(10).not.toBeDivisibleBy(3);
  });
});
