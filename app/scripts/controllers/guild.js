'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:GuildCtrl
 * @description
 * # GuildCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('GuildCtrl', function ($scope) {
    var guilds = $scope.guilds = [];
    for ( var i = 0; i < 20; ++i ){
      var j = i;
      var description = 'Workshop Guild';
      while ( j-- > 0 ){ description += 'Workshop Guild'; }
      guilds.push( { name: 'Workshop ' + i, description: description, link:'http://workshop-guild.github.io' } );
    }
  });