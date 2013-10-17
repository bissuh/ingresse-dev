'use strict';

angular.module('ingresse-devApp')

	/**
	 * References main Controlller
	 */
	.controller('ReferencesCtrl', function($scope, $http, $routeParams, $filter, References) {

		if($routeParams.category) {
			$scope.category = References.get({categoryId: $routeParams.category});

			// Defines which template will be loaded
			if($routeParams.method === undefined) {
				$scope.selectedMethod = null;
			}
			else {
				$scope.selectedMethod = $routeParams.method;
			}
		}

		/**
		 * Loads selected content in referneces menu
		 */
		$scope.setItem = function (selectedCategory, selectedMethod) {
			$scope.category = References.get({categoryId: selectedCategory});
			$scope.selectedMethod = selectedMethod;

			// Defines which template will be loaded
			if(selectedMethod === undefined) {
				$scope.selectedMethod = null;
			}
			else {
				$scope.selectedMethod = selectedMethod;
				console.log($filter('filter')($scope.category.methods, selectedMethod));
			}
		};

	})

	/**
	 * List of references Controller
	 */
	.controller('ReferencesMenuCtrl', function($scope, $http, References) {

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

	});
