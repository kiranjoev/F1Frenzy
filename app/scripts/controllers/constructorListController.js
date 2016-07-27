'use strict';

angular.module('app.controllers').controller('ConstructorListController', ['$scope', 'SeasonService', 'ConstructorService', function ($scope, SeasonService, ConstructorService) {

    $scope.loadConstructorList = function () {
        ConstructorService.getConstructorList('current').then(function (response) {
            console.log(response);
            $scope.constructorList = response.data.MRData.ConstructorTable.Constructors;
        }, function (error) {
            console.log(error);
        });
    }

    $scope.loadConstructorList();

}]);