'use strict';

angular.module('ingresse-devApp')

	/**
	 * References main Controlller
	 */
	.controller('ReferencesCtrl', function($scope, $http, $routeParams, $location, $filter, References) {

		// At the beggning, were darkness...
		$scope.referenceTemplate = null;
		$scope.category = null;
		$scope.methodId = null;

		if($routeParams.category) {

			// ... then comes the light
			$scope.category = References.get({categoryId: $routeParams.category});
			$scope.methodId = $routeParams.method;

			// Defines which template will be loaded
			if($routeParams.method === undefined) {
				$scope.referenceTemplate = 'category';
				$scope.disqusIdentifier = 'references.' + $routeParams.category;
			}
			else {
				$scope.referenceTemplate = 'method';
				$scope.disqusIdentifier = 'references.' + $routeParams.category + "." + $routeParams.method;
			}
		}

		/**
		 * Loads selected content in referneces menu
		 */
		$scope.setItem = function (selectedCategory, selectedMethod) {
			$scope.category = References.get({categoryId: selectedCategory});
			$scope.methodId = selectedMethod;

			// Defines which template will be loaded
			if(selectedMethod === undefined) {
				$scope.referenceTemplate = 'category';

				// Refresh url
				$location.path("/references/" + selectedCategory);
				$scope.disqusIdentifier = 'references.' + selectedCategory;
			}
			else {
				$scope.referenceTemplate = 'method';

				// Refresh url
				$location.path("/references/" + selectedCategory + "/" + selectedMethod);
				$scope.disqusIdentifier = 'references.' + selectedCategory + "." + selectedMethod;
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
