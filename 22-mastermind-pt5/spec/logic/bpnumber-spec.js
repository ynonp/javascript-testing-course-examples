import BPNumber from 'logic/bpnumber';
import {} from 'jasmine-data_driven_tests';

describe('BP Number Spec', function() {
  describe('#ctor', function() {
    it('should not allow duplicate digits', function() {
      expect(() => new BPNumber('1012')).toThrow();
    });

    it('should not allow leading zeros', function() {
      expect(() => new BPNumber('0123')).toThrow();
    });

    it('should only allow numeric input', function() {
      expect(() => new BPNumber('a123')).toThrow();
    });

    all('should allow 4 digit numbers', 
      ['12', '312', '7', '12345', '123456'], function(value) {
        expect(() => new BPNumber(value)).toThrow();
      });
    it('should work for strings ', function() {
      expect(() => new BPNumber('1234')).not.toThrow();
    });

    it('should work for numbers too', function() {
      expect(() => new BPNumber(1234)).not.toThrow();
    });
  });

  describe('#cmp', function() {
    all('should return (bulls, cows) between two BPNumbers', 
      [
        ['1234', '1034', 3, 0],
        ['2091', '1902', 0, 4],
        ['1234', '5678', 0, 0],
        ['5981', '5981', 4, 0],
      ],
    function(n1, n2, bulls, cows) {
      const bp1 = new BPNumber(n1);
      const bp2 = new BPNumber(n2);
      expect(bp1.cmp(bp2).bulls).toEqual(bulls);
      expect(bp1.cmp(bp2).cows).toEqual(cows);
    });
  });


  describe('#toString', function() {
    it('should return the string representation of the number', function() {
      const bp1 = new BPNumber('1234');
      expect(bp1.toString()).toEqual('1234');
    });
  });
});
