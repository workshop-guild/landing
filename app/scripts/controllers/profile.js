'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
