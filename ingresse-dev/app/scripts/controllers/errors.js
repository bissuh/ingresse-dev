'use strict';

angular.module('ingresse-devApp')
  .controller('ErrorsCtrl', function ($scope, $http, $routeParams, $location, $filter, $timeout, References, Errors) {

    $scope.category = '';
    $scope.category = Errors.get({categoryId: $routeParams.category});

  });
