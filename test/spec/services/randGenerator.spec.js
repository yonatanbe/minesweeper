'use strict';

describe('Service: randGenerator', function () {

  // load the service's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  // instantiate service
  var randGenerator;
  beforeEach(inject(function (_randGenerator_) {
    randGenerator = _randGenerator_;
  }));

  it('should generate a number greater than 0', function () {
    expect(randGenerator.generateRand(3)).not.toBeNaN();
    expect(randGenerator.generateRand(3)).not.toBeLessThan(0);
    expect(randGenerator.generateRand(3)).not.toBeGreaterThan(3);
  });

});
