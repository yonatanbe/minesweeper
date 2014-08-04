'use strict';

(function () {

  /* @ngInject */
  function Randgenerator() {

    this.generateRand = function (max) {
      return Math.floor(Math.random() * max);
    };
  }

  angular
    .module('minesweeperAppInternal')
    .service('randGenerator', Randgenerator);

})();
