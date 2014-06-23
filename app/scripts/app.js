'use strict';

/**
 * @ngdoc overview
 * @name landingApp
 * @description
 * # landingApp
 *
 * Main module of the application.
 */
angular
  .module('landingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .controller('NavigationCtrl', function($scope, $location){
    $scope.isActive = function(route){
      return route === $location.path();
    };
    $scope.userProfilePicture = 'http://codescaling.files.wordpress.com/2013/08/screen-shot-2013-08-23-at-16-20-07.png';
    $scope.loggedIn = true;
    $scope.username = 'Leon';
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/guilds', {
        templateUrl: 'views/guilds.html',
        controller: 'GuildCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
