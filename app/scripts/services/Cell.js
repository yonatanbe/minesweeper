'use strict';

(function () {

  /* @ngInject */
  function CellFactory() {
    function Cell() {
      this.isMine = 0;
      this.minesNeighborsCount = -1;
      this.flag = false;
      this.revealed = false;
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

    Cell.prototype.reveal = function () {
      this.revealed = true;
    };

    Cell.prototype.isRevealed = function () {
      return this.revealed;
    };

    return Cell;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Cell', CellFactory);

})();
