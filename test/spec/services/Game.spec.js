'use strict';

describe('Service: Game', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');
  });

  //add your mocks here
  var randGeneratorMock, randNumbersArrayMock;

  beforeEach(function () {
    randNumbersArrayMock = [];
    randGeneratorMock = {
      generateRand: (function () {
        var currIndex = 0;
        return function () {
          if (currIndex < randNumbersArrayMock.length) {
            return randNumbersArrayMock[currIndex++];
          } else {
            throw 'the indexes array is too short!';

          }
        };
      })()
    };
    module({
      randGenerator: randGeneratorMock
    });
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

  it('should create a unique array of mine indexes of size minesCount', function () {
    var game = new Game(4, 2, 3);
    randNumbersArrayMock = [1, 1, 2, 3, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11];
    var minesIndexes = game.getRandMineIndexes(game.minesCount);
    expect(minesIndexes.length).toBe(game.minesCount);
    var uniqueMinesIndexes = minesIndexes.filter(function (item, i, arr) {
      return arr.indexOf(item) === arr.lastIndexOf(item);
    });
    expect(uniqueMinesIndexes.length).toBe(game.minesCount);
  });

  it('should plant n mines in the game\'s board', function () {
    var game = new Game(4, 2, 3);
    randNumbersArrayMock = [0, 0, 2, 2, 7, 5, 3];
    var minesIndexes = game.getRandMineIndexes(game.minesCount);
    game = game.plantMines(minesIndexes);
    expect(game.numOfMines()).toBe(3);
  });
});
