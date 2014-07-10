'use strict';

/**
 * @ngdoc filter
 * @name landingApp.filter:i18n
 * @function
 * @description
 * # i18n
 * Filter in the landingApp.
 */
angular.module('landingApp')
  .filter('i18n', function (i18nService) {

    var resolveFn = function(path, depth, dictionary){
      if (depth === path.length - 1){
        return dictionary[path[depth]] || path[depth];
      }
      return resolveFn(path, ++depth, dictionary[path[depth]]);
    };

    return function (input) {
      var path = input.split('.');
      var dictionary = i18nService.getDictionary();
      return resolveFn(path, 0, dictionary);
    };
  });
