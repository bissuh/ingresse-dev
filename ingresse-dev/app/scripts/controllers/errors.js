'use strict';

angular.module('ingresse-devApp')
  .controller('ErrorsCtrl', function ($scope, $http, $routeParams, $location, $filter, $timeout, References, Errors) {

    $scope.category = '';
    $scope.category = Errors.get({categoryId: $routeParams.category});

    $scope.setItem = function (selectedCategory) {
      $scope.category = References.get({categoryId: selectedCategory});

      // Defines which template will be loaded
      if(selectedMethod === undefined) {
        $scope.referenceTemplate = 'category';

        // Refresh url
        $location.path("/references/" + selectedCategory);
      }
      else {
        $scope.referenceTemplate = 'method';

        // Refresh url
        $location.path("/references/" + selectedCategory + "/" + selectedMethod);
      }
    };

  });
