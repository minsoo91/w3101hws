(function () {
  'use strict';

  var doubleArray = function(arrayToDouble) {
    return arrayToDouble.map(function(num) {
      return num * 2;
    });
  };

  module.exports = doubleArray;

})();
