'use strict';

/**
 * @ngdoc service
 * @name landingApp.i18nService
 * @description
 * # i18nService
 * Factory in the landingApp.
 */
angular.module('landingApp')
  .factory('i18nService', function ($resource) {
    // Service logic
    // ...
    var DictionaryEndpoint = $resource('/i18n/en_US.json');
    var dictionary = DictionaryEndpoint.get();

    // Public API here
    return {
      getDictionary: function(){
        return dictionary;
      }
    };
  });
