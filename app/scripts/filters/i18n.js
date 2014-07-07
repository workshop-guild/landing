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

    var resolveFn = function(path, dictionary){
      if (path.length === 1){
        return dictionary[path[0]] || path[0];
      } else {
        var key = path.shift();
        return resolveFn(path, dictionary[key]);
      }
    };

    return function (input) {
      var path = input.split('.');
      var dictionary = i18nService.getDictionary();
      return resolveFn(path, dictionary);
    };
  });
