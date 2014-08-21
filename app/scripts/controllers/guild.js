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
    for ( var i = 0; i < 5; ++i ){
      guilds.push( { name: 'Workshop ' + i, description: 'WORKSHOP GUILDDDDD', link:'http://workshop-guild.github.io' } );
    }
  });
