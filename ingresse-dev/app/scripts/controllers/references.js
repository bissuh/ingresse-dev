'use strict';

angular.module('ingresse-devApp')
	.controller('ReferencesCtrl', function($scope, $http) {

		// Load references table for link ...
		$http.get('../../references/references.json' ).success(function(data) {

			$scope.references = [];

			// ... load internal references for each api categories
			for (var i in data){
				$http.get('../../references/' + data[i].id + '.json' ).success(function(referenceSource) {
					var referenceItem = [{
						name : data[i].name,
						id : data[i].id,
						methods : referenceSource.methods
					}];

					// ... and send them to scope references object.
					$scope.references = $scope.references.concat(referenceItem);
					console.log($scope.references);
				});
			}
		})

	});
