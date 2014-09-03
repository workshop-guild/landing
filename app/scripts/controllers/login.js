'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('LoginCtrl', function ($scope, $http, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
      $scope.login = function(){
          console.log("Doing Login Call");
          var username = $scope.email;
          var password = $scope.password;
          console.log($scope.email);
          console.log($scope.password);
          $http({
              method: 'POST', 
              url: 'http://10.25.15.90:8000/login',
              data: { 
                email : username,
                password : password
              }
          })
          .success(function(data, status, headers, config) {
                console.log('success cb');
                console.log(data);
                console.log(status);
                if (status == 200) {
                    if (data.status == 0) {
                        $location.path('#/');
                        $scope.$apply();
                        
                    }
                }
                else {
                    console.log('Login Error: ' + data.errno);
                }
          })
          .error(function(data, status, headers, config) {
                console.log('error cb');
                console.log(data);
                console.log(status);
          });
      };
  });
