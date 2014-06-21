'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
