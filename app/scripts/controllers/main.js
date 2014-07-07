'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
