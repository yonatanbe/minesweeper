'use strict';

(function () {

  /* @ngInject */
  function GameFactory(randGenerator, Cell) {
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
          board[i].push(new Cell());
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
        }, 0);
      }, 0);
    };

    Game.prototype.getMinesNeighborsCount = function (cellRow, cellCol) {
      var cell = this.board[cellRow][cellCol];
      return (cell.isAMine() || cell.minesNeighborsCount !== -1) ?
        cell.minesNeighborsCount : calcMinesNeighbor(this, cellRow, cellCol);
    };

    function calcMinesNeighbor(game, cellRow, cellCol) {
      var cell = game.board[cellRow][cellCol];
      if (!cell.isAMine()) {
        cell.minesNeighborsCount = 0;
        mapEachNeighbor(game, cellRow, cellCol, function (game, row, col) {
          if (game.board[row][col].isAMine()) {
            cell.minesNeighborsCount++;
          }
        });
      }
      return cell.minesNeighborsCount;
    }
//        var rowStart = Math.max(cellRow - 1, 0);
//        var rowFinish = Math.min(cellRow + 1, game.rows - 1);
//        var colStart = Math.max(cellCol - 1, 0);
//        var colFinish = Math.min(cellCol + 1, game.cols - 1);
//        for (var currRow = rowStart; currRow <= rowFinish; currRow++) {
//          for (var currCol = colStart; currCol <= colFinish; currCol++) {
//            if (game.board[currRow][currCol].isAMine()) {
//              cell.minesNeighborsCount++;
//            }
//          }
//        }

    Game.prototype.reveal = function (row, col) {
      var cell = this.board[row][col];
      var totalCellsRevealed = 0;
      if (!cell.isFlagged() && !cell.isRevealed()) {
        cell.reveal();
        var minesNeighborsCount = this.getMinesNeighborsCount(row, col);
        totalCellsRevealed += (minesNeighborsCount !== 0) ?
          1 : 1 + revealNeighbors(this, row, col);
      }
      return totalCellsRevealed;
    };

    function revealNeighbors(game, cellRow, cellCol) {
      var numberOfCellsRevealed;
      numberOfCellsRevealed = mapEachNeighbor(game, cellRow, cellCol, function (game, row, col) {
        return game.reveal(row, col);
      });
      return numberOfCellsRevealed;
    }
//      var rowStart = Math.max(cellRow - 1, 0);
//      var rowFinish = Math.min(cellRow + 1, game.rows - 1);
//      var colStart = Math.max(cellCol - 1, 0);
//      var colFinish = Math.min(cellCol + 1, game.cols - 1);
//      for (var currRow = rowStart; currRow <= rowFinish; currRow++) {
//        for (var currCol = colStart; currCol <= colFinish; currCol++) {
//          if (!game.board[currRow][currCol].isRevealed()) {
//            numberOfCellsRevealed += game.reveal(currRow, currCol);
//          }
//        }
//      }

    function mapEachNeighbor(game, cellRow, cellCol, func) {
      var sum = 0;
      var rowStart = Math.max(cellRow - 1, 0);
      var rowFinish = Math.min(cellRow + 1, game.rows - 1);
      var colStart = Math.max(cellCol - 1, 0);
      var colFinish = Math.min(cellCol + 1, game.cols - 1);

      for (var currRow = rowStart; currRow <= rowFinish; currRow++) {
        for (var currCol = colStart; currCol <= colFinish; currCol++) {
          sum += func(game, currRow, currCol);
        }
      }
      return sum;
    }

    // Public API here

    return Game;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Game', GameFactory);

})();
