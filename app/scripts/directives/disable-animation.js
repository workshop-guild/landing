'use strict';

/**
 * @ngdoc directive
 * @name landingApp.directive:disableAnimation
 * @description
 * # disableAnimation
 */
angular.module('landingApp')
  .directive('disableAnimation', function ($animate) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        attrs.$observe('disableAnimation', function(value){
          $animate.enabled(!value, element);
        });
      }
    };
  });
