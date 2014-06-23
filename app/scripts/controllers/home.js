'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
