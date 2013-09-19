'use strict';

angular.module('ingresse-devApp', ['ngResource'])
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
			.when('/references/:category', {
			  templateUrl: 'views/references.html',
			  controller: 'ReferencesSpecificCtrl'
			})
			.when('/references/:category/:method', {
			  templateUrl: 'views/references.html',
			  controller: 'ReferencesSpecificCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	})

	.run(function ($rootScope) {
		$rootScope.url = '/';
	});
