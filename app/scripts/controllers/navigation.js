'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('NavigationCtrl', function($scope, $location){
    $scope.isActive = function(route){
      return route === $location.path();
    };
    $scope.userProfilePicture = 'http://codescaling.files.wordpress.com/2013/08/screen-shot-2013-08-23-at-16-20-07.png';
    $scope.loggedIn = false;
    $scope.username = 'Leon';
  });
