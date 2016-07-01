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
        })
        .state("constructorList", {
            url: '/constructorList',
            templateUrl: "view/constructorList.html",
            controller: "ConstructorController"
        })
        .state("circuitList", {
            url: '/circuitList',
            templateUrl: "view/circuitList.html",
            controller: "CircuitController"
        })
        .state("scheduleDetails", {
            url: '/schedule',
            templateUrl: "view/scheduleDetails.html",
            controller: "ScheduleController"
        })
        .state("resultDetails", {
            url: '/results',
            templateUrl: "view/resultDetails.html",
            controller: "ResultController"
        });
                                
    $urlRouterProvider.otherwise('/driverList');
}]);