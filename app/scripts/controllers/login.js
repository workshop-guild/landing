'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('LoginCtrl', function ($scope, $http) {
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
          $http({
              method: 'POST', 
              url: 'http://localhost:8080/login',
              data: { 
                email : username,
                password : password
              }
          })
          .success(function(data, status, headers, config) {
                console.log('success cb');
                console.log(data);
                console.log(status);
                if (status == 0) {
                    
                }
                else {
                    //alert('login error: ' + status);   
                }
          })
          .error(function(data, status, headers, config) {
                console.log('error cb');
                console.log(data);
                console.log(status);
          });
      };
  });
