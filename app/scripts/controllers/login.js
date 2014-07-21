'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('LoginCtrl', function ($scope, $resource) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
      $scope.login = function(){
          console.log("hehe");
          var username = $scope.email;
          var password = $scope.password;
          console.log($scope.email);
          console.log($scope.password);
          $resource('http://localhost:8080/login').get();
      };
  });
