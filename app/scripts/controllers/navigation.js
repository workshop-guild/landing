'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('NavigationCtrl', function($scope, $location, $http){
    $scope.isActive = function(route){
      return route === $location.path();
    };
      
    $http({
        method: 'GET', 
        url: API_END_POINT + '/api/profile/me'
    })
    .success(function(data, status, headers, config) {
        console.log('success cb');
        console.log(data);
        console.log('status:' + status);
        if (status == 200) {
            if (data.status == 0) {
                var myDoc = data.data;
                
                $scope.userProfilePicture = API_END_POINT + '/profile/967739706/profile.jpg';
                $scope.loggedIn = true;
                $scope.username = myDoc._id;
            }
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
  });
