if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function () {
  return {
    fizzBuzz: function (num) {
      // Return false if no number was provided or the value provided is not a number
      if (typeof num === 'undefined' || (!isNaN(parseFloat(num)) && isFinite(num)) === false) {
        return false;
        // If the number is divisible by 3, the function should return 'fizz'
      } else if (num % 3 === 0 && num % 5 !== 0) {
        return 'fizz';
        // If the number is divisible by 5, the function should return 'buzz'
      } else if (num % 3 !== 0 && num % 5 === 0) {
        return 'buzz';
        // If the number is divisible by 3 and 5, the function should return 'fizzbuzz'
      } else if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
      }
      // Otherwise the function should return the number
      return num;
    }
  };
});
