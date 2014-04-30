'use strict';

angular.module('ingresse-devApp')
  .controller('ErrorsCtrl', ['$scope', '$routeParams', 'Errors', function ($scope, $routeParams, Errors) {

    $scope.category = '';
    $scope.category = Errors.get({categoryId: $routeParams.category});

  }]);
