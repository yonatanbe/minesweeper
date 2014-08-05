'use strict';

describe('Service: Cell', function () {

  var cell;

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var Cell;
  beforeEach(inject(function (_Cell_) {
    Cell = _Cell_;
    cell = new Cell();
  }));

  it('should build a cell', function () {
    expect(new Cell().constructor.name.toString()).toBe('Cell');
  });

  it('should build a cell with initialized fields', function () {
    expect(cell.isMine).toBe(0);
    expect(cell.minesNeighborsCount).toBe(-1);
    expect(cell.flag).toBe(false);
    expect(cell.revealed).toBe(false);
  });

  it('should initialize a cell not to be a mine', function () {
    expect(cell.isAMine()).toBeFalsy();
  });

  it('should be able to set a cell to be a mine', function () {
    cell.putMine();
    expect(cell.isAMine()).toBeTruthy();
  });

  it('should be able to toggle a cell\'s flag', function () {
    expect(cell.isFlagged()).toBeFalsy();
    cell.toggleFlag();
    expect(cell.isFlagged()).toBeTruthy();
    cell.toggleFlag();
    expect(cell.isFlagged()).toBeFalsy();
  });

  it('should be able to set the revealed flag of the cell to true', function () {
    cell.reveal();
    expect(cell.isRevealed()).toBeTruthy();
  });
});
