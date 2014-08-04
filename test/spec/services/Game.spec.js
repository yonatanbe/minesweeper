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

  it('should build a game', function () {
    expect(new Game().constructor.name.toString()).toBe('Game');
  });

  it('should build a game with rows, cols and number of mines from given args', function () {
    var game = new Game(4, 2, 3);
    expect(game.rows).toBe(4);
    expect(game.cols).toBe(2);
    expect(game.minesCount).toBe(3);
  });

  it('should build a game with a board of size (rows * cols)', function () {
    var game = new Game(4, 2, 3);
    expect(game.board.length).toBe(4);
    expect(game.board[0].length).toBe(2);
  });

  it('should plant n mines in the game\'s board', function () {
    var game = new Game(4, 2, 3);
    game = Game.plantMines.call(game, game.minesCount);
    expect(game.numOfMines()).toBe(3);
  });
});
