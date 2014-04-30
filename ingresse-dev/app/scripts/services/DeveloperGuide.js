'use strict';

angular.module('ingresse-devApp')
	.factory('DeveloperGuide', ['$resource', function References($resource) {
		return $resource('assets/developer-guide.json', {}, {
			query: {method:'GET', params:{devGuidePage:'devGuidePage'}, isArray:true}
		});
	}]);