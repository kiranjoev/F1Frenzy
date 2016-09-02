'use strict';

angular.module('app.controllers').controller('ConstructorListController', ['$scope', 'SeasonService', 'ConstructorService', function ($scope, SeasonService, ConstructorService) {

    $scope.displayLoading = false;
    
    $scope.loadConstructorList = function () {
        $scope.displayLoading = true;
        ConstructorService.getConstructorList('current').then(function (response) {
            console.log(response);
            $scope.constructorList = response.data.MRData.ConstructorTable.Constructors;
            $scope.displayLoading = false;
        }, function (error) {
            console.log(error);
            $scope.displayLoading = false;
        });
    }

    $scope.loadConstructorList();

}]);