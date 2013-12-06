'use strict';

angular.module('ingresse-devApp')

	/**
	 * Developer Guide main Controlller
	 */
	.controller('DeveloperGuideCtrl', function($scope, $http, $routeParams, $location, $filter) {
		$scope.disqusIdentifier = 'developer-guide.auth';
		SyntaxHighlighter.all()
	});