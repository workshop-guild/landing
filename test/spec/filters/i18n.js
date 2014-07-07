'use strict';

describe('Filter: i18n', function () {

  // load the filter's module
  beforeEach(module('landingApp'));

  // initialize a new instance of the filter before each test
  var i18n;
  beforeEach(inject(function ($filter) {
    i18n = $filter('i18n');
  }));

  it('should return Log In', function () {
    var text = 'login';
    expect(i18n(text)).toBe('Log In');
  });

});
