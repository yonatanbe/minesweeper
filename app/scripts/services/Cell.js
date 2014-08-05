'use strict';

(function () {

  /* @ngInject */
  function CellFactory() {
    function Cell() {
      this.isMine = 0;
      this.minesNeighborsCount = -1;
      this.flag = false;
    }

    // Service logic
    // ...

    // Public API here
    Cell.prototype.isAMine = function () {
      return this.isMine === 1;
    };

    Cell.prototype.putMine = function () {
      this.isMine = 1;
    };

    Cell.prototype.isFlagged = function () {
      return this.flag;
    };

    Cell.prototype.toggleFlag = function () {
      this.flag = !this.flag;
    };

    return Cell;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Cell', CellFactory);

})();
