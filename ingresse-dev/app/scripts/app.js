'use strict';

angular.module('ingresse-devApp', [])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/references', {
			  templateUrl: 'views/references.html',
			  controller: 'ReferencesCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})

	.run(function ($rootScope) {
		$rootScope.url = 'http://localhost:9000/';
	});
