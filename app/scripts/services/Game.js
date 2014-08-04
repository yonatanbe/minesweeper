'use strict';

(function () {

  /* @ngInject */
  function GameFactory(randGenerator) {
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
          board[i].push({isMine: 0});
        }
      }
      return board;
    }

    Game.prototype.getRandMineIndexes = function (size) {
      var randArray = [],
          currRand,
          maxRandNumber = this.rows * this.cols;
      while (randArray.length < size) {
        currRand = randGenerator.generateRand(maxRandNumber);
        if (randArray.indexOf(currRand) === -1) {
          randArray.push(currRand);
        }
      }
      return randArray;
    };

    Game.prototype.plantMines = function (minesIndexesArray) {
      var currRow, currCol;
      var that = this;
      minesIndexesArray.forEach(function (index) {
        currRow = Math.floor(index / that.cols);
        currCol = index % that.cols;
        that.board[currRow][currCol].isMine = 1;
      });
      return this;
    };

    Game.prototype.numOfMines = function () {
      return this.board.reduce(function (sum, currCol) {
        return sum + currCol.reduce(function (colSum, currCell) {
          return colSum + currCell.isMine;
        }, 0)
      }, 0);
    };

    // Public API here

    return Game;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Game', GameFactory);

})();
