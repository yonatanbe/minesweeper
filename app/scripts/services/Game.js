'use strict';

(function () {

  /* @ngInject */
  function GameFactory() {
    var Game = {};

    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    Game.someMethod = function () {
      return meaningOfLife;
    };

    return Game;
  }

  angular
    .module('minesweeperAppInternal')
    .factory('Game', GameFactory);

})();
