(function () {
  'use strict';

  var BallFollower = function BallFollower(start, swaps) {
    this.start = start;
    this.swaps = swaps;
    this.swap = function () {
        var currentSwap = this.swaps.shift();
        var index = currentSwap.indexOf(this.start);
        if (index > -1) {
            currentSwap.splice(index, 1);
            this.start = currentSwap[0];
        }
        return this.start;
    }
  };

  module.exports = BallFollower; // DON'T ALTER THIS
})();
