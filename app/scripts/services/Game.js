'use strict';

(function () {

  /* @ngInject */
  function GameFactory() {
    function Game(rows, cols, minesCount) {
      this.rows = rows;
      this.cols = cols;
      this.minesCount = minesCount;
      this.board = createEmptyBoard(rows, cols);
    }

    // Service logic
    // ...

    function createEmptyBoard(rows, cols) {
      var board = [];
      for (var i = 0; i < rows; i++) {
        board.push([]);
        for (var j = 0; j < cols; j++) {
          board[i].push(0);
        }
      }
      return board;
    }

    Game.prototype.numOfMines = function () {
      return 3;
    };

//    var meaningOfLife = 42;

    // Public API here
    Game.plantMines = function (minesCount) {
      for (var i = 0; i < minesCount; i++) {
        i = i;
      }
      return this;
    };

    return Game;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Game', GameFactory);

})();
