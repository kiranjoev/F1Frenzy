/*Define the application routes here*/

'use strict';

angular.module('f1App').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);
	//$urlRouterProvider.when('/', '/home');
    
    $stateProvider
        .state("driverList", {
            url: '/driverList',
            templateUrl: "view/driverList.html",
            controller: "DriverListController"
        });
                                
    $urlRouterProvider.otherwise('/driverList');
}]);