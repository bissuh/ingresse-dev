'use strict';

angular.module('ingresse-devApp')

	/**
	 * Developer Guide main Controlller
	 */
	.controller('DeveloperGuideCtrl', ['$scope', function($scope) {
		$scope.disqusIdentifier = 'developer-guide.auth';
		prettyPrint();
	}]);