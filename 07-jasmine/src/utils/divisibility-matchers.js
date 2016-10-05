const DivisibilityMatchers = {
  toBeDivisibleBy: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        // expected is the second parameter
        // for example when calling:
        // expect(x).toBeDivisibleBy(y)
        // actual is x and expected is y
        return {
          pass: actual % expected === 0,
        }
      }
    }
  },

  toBeEven: function(util, customEqualityTesters) {
    return {
      compare: function(actual) {
        return {
          pass: actual % 2 === 0,
        }
      }
    }
  },
};


export default DivisibilityMatchers;
