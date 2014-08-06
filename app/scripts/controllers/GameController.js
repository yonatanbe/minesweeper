'use strict';

(function () {

  /* @ngInject */
  function GameController($scope, Game) {
    this.game = new Game(4, 5, 1);
    var mineIndexes = this.game.getRandMineIndexes();
    this.game.plantMines(mineIndexes);
  }

  angular
    .module('minesweeperAppInternal')
    .controller('GameController', GameController);

})();
