'use strict';

(function () {

  /* @ngInject */
  function GameController($scope, Game) {
    this.newGame = {};
    this.game = new Game(10, 10, 20);
    var mineIndexes = this.game.getRandMineIndexes();
    this.game.plantMines(mineIndexes);

    this.startNewGame = function () {
      this.game = new Game(this.newGame.rows, this.newGame.cols, this.newGame.minesCount);
      var mineIndexes = this.game.getRandMineIndexes();
      this.game.plantMines(mineIndexes);
    }
  }

  angular
    .module('minesweeperAppInternal')
    .controller('GameController', GameController);

})();
