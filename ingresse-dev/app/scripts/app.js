'use strict';

angular.module('ingresse-devApp', ['ngResource'])

	.config(function ($disqusProvider, $routeProvider, $locationProvider, $httpProvider) {

		$disqusProvider.setShortname('ingresse');
		//$locationProvider.html5Mode(true).hashPrefix('!');
		//$httpProvider.defaults.useXDomain = true;
		//delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/references', {
			  templateUrl: 'views/references.html',
			})
			.when('/developer-guide', {
			  templateUrl: 'views/developer-guide.html',
			})
			.when('/developer-guide/auth', {
			  templateUrl: 'views/developer-guide/auth.html',
			})
			.when('/developer-guide/login', {
			  templateUrl: 'views/developer-guide/login.html',
			})
			.when('/references/:category', {
			  templateUrl: 'views/references.html',
			})
			.when('/references/:category/:method', {
			  templateUrl: 'views/references.html',
			})
			.otherwise({
				redirectTo: '/'
			});
	})

	.run(function ($rootScope, $route, $routeParams, $location) {
		$rootScope.url = '/';
		$rootScope.location = $location;
	});
