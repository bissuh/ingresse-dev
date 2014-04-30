'use strict';

angular.module('ingresse-devApp')
  .factory('Errors', ['$resource', function Errors($resource) {
    return $resource('references/:categoryId.json', {}, {
      query: {method:'GET', params:{categoryId:'references'}, isArray:true}
    });
  }]);
