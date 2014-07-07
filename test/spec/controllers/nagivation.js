'use strict';

describe('Controller: NagivationCtrl', function () {

  // load the controller's module
  beforeEach(module('landingApp'));

  var NagivationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NagivationCtrl = $controller('NagivationCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
