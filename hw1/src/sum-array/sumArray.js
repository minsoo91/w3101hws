(function () {
  'use strict';

  var sumArray = function sumArray(values) {
    return values.reduce(function(total, current) {
       return total + current;
    });
  };

  module.exports = sumArray; // DON'T CHANGE THIS
})();
