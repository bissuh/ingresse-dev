'use strict';

angular.module('ingresse-devApp')
	.factory('References', ['$resource', function References($resource) {
		return $resource('references/:categoryId.json', {}, {
			query: {method:'GET', params:{categoryId:'references'}, isArray:true}
		});
	}]);