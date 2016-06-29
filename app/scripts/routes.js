/*Define the application routes here*/

'use strict';

angular.module('f1App').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);
	//$urlRouterProvider.when('/', '/home');
    
    $stateProvider
        .state("driverList", {
            url: '/champTable',
            templateUrl: "view/champTable.html",
            controller: "DriverListController"
        });
                                
    $urlRouterProvider.otherwise('/champTable');
}]);