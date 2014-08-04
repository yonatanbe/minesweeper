'use strict';

describe('Service: Game', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var Game;

  beforeEach(inject(function (_Game_) {
    Game = _Game_;
  }));

  it('should build game', function () {
    expect(new Game()).toBe(42);
  });

});
