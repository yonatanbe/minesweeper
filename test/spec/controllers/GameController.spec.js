'use strict';

describe('Controller: GameController', function () {

  // load the controller's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  var GameController, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameController = $controller('GameController', {
      $scope: scope
    });
  }));
});
