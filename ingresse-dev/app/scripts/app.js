'use strict';

angular.module('ingresse-devApp', ['ngResource', 'ngDisqus'])

	.config(function ($disqusProvider, $routeProvider) {

		$disqusProvider.setShortname('ingresse');
		//$locationProvider.html5Mode(true).hashPrefix('!');
		//$httpProvider.defaults.useXDomain = true;
		//delete $httpProvider.defaults.headers.common['X-Requested-With'];

		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})

			// DEVELOPER GUIDE REFERENCES
			.when('/developer-guide', {
			  templateUrl: 'views/developer-guide.html'
			})
			.when('/developer-guide/auth', {
			  templateUrl: 'views/developer-guide/auth.html'
			})
			.when('/developer-guide/login', {
			  templateUrl: 'views/developer-guide/login.html'
			})
			.when('/developer-guide/checkout', {
			  templateUrl: 'views/developer-guide/checkout.html'
			})
			.when('/developer-guide/filters', {
			  templateUrl: 'views/developer-guide/filters.html'
			})

      // API REFERENCES TEMPLATE
      .when('/references', {
        templateUrl: 'views/references.html'
      })
			.when('/references/:category', {
			  templateUrl: 'views/references.html'
			})
			.when('/references/:category/:method', {
			  templateUrl: 'views/references.html'
			})

      // ERROR DICTIONARY
      .when('/errors/:category', {
        templateUrl: 'views/errors/errors.html'
      })

			.otherwise({
				redirectTo: '/'
			});
	})

	.run(function ($rootScope, $route, $routeParams, $location) {
		$rootScope.appUrl = 'http://bissu.github.io/ingresse-dev/';
		$rootScope.location = $location;
	});
