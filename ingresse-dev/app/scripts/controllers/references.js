'use strict';

angular.module('ingresse-devApp')
	.controller('ReferencesCtrl', function($scope, $http, References) {

		// Get list of categories in API and ...
		References.query({}, function(data){

			// ... load internal references for each api categories
			$scope.references = [];
			var size = data.length;
			for (var i = 0; i < size; i++) {

				References.get({categoryId: data[i].id}, function(referenceSource) {
					var referenceItem = [{
						name : referenceSource.title,
						id : referenceSource.id,
						methods : referenceSource.methods
					}];

					// ... and send them to scope references object.
					$scope.references = $scope.references.concat(referenceItem);
				});
			}
		});

	})

	.controller('ReferencesSpecificCtrl', function($scope, $http, $routeParams, References) {

		// Get list of categories in API and ...
		References.query({}, function(data){

			// ... load internal references for each api categories
			$scope.references = [];
			var size = data.length;
			for (var i = 0; i < size; i++) {

				References.get({categoryId: data[i].id}, function(referenceSource) {
					var referenceItem = [{
						name : referenceSource.title,
						id : referenceSource.id,
						methods : referenceSource.methods
					}];

					// ... and send them to scope references object.
					$scope.references = $scope.references.concat(referenceItem);
				});
			}
		});

		if($routeParams.method === undefined) {
			$scope.viewContent = 'entity';
		}
		else {
			$scope.viewContent = 'method';
			$scope.selectedMethod = $routeParams.method;
		}

		var category = References.get({categoryId: $routeParams.category});
		$scope.category = category;

	});
