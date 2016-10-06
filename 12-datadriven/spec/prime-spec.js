import { isPrime } from 'prime';
import {} from 'jasmine-data_driven_tests';


describe('#isPrime', function() {
  all('should be primes',
    [
      [-2 , false] ,
      [0  , false] ,
      [2  , true]  ,
      [3  , true]  ,
      [9  , false] ,
      [11 , true]  ,
      [12 , false] ,
    ],
    function(n, result) {
      expect(isPrime(n)).toEqual(result);
    }
  );
});
