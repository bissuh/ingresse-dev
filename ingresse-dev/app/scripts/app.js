'use strict';

angular.module('ingresse-devApp', ['ngResource'])

	.config(function ($routeProvider, $locationProvider) {

		$locationProvider.html5Mode(true);

		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/references', {
			  templateUrl: 'views/references.html',
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

		// $scope.$watch('locationPath', function(path) {
	 //    $location.path(path);
		// });

		// $scope.$watch(function() {
		// 		return $location.path();
		// 	}, function(path) {
		// 		$scope.locationPath = path;
		// });
	});
