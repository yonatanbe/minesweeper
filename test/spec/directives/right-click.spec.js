'use strict';

describe('Directive: rightClick', function () {

  // load the directive's module
  beforeEach(function () {
    module('minesweeperAppInternal');

    //add your mocks here
  });

  var element;
  var scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should change the name from \'danny\' to \'moshe\' on right click', inject(function ($compile) {
    element = angular.element('<div right-click="name = \'moshe\'">{{name}}</div>');
    element = $compile(element)(scope);
    scope.name = 'danny';
    expect(scope.name).toBe('danny');
    element.trigger('contextmenu');
    expect(scope.name).toBe('moshe');
  }));
});
