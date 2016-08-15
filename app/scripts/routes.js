/*Define the application routes here*/

'use strict';

angular.module('f1App').config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {

    //$locationProvider.html5Mode(true);
    //$urlRouterProvider.when('/', '/home');

    $stateProvider

    .state("home", {
        url: '/home',
        templateUrl: "../app/view/homePage.html",
        controller: "HomePageController"
    })

    .state("driverList", {
        url: '/driverList',
        templateUrl: "../app/view/driverList.html",
        controller: "DriverListController"
    })

    .state("driverInfo", {
        url: '/:driverId/driverInfo',
        templateUrl: "../app/view/driverInfo.html",
        controller: "DriverInfoController"
    })

    .state("constructorList", {
        url: '/constructorList',
        templateUrl: "../app/view/constructorList.html",
        controller: "ConstructorListController"
    })

    .state("constructorInfo", {
        url: ':constructorId/constructorInfo',
        templateUrl: "../app/view/constructorInfo.html",
        controller: "ConstructorInfoController"
    })

    .state("seasonStanding", {
            url: "/seasonStanding",
            templateUrl: "../app/view/seasonStanding.html",
            controller: "SeasonStandingController"
        })
        .state("seasonStanding.raceDetails", {
            //url: "/seasonStanding/:season/:raceId/:raceName/raceDetails",
            templateUrl: "../app/view/raceDetails.html",
            controller: "RaceDetailsController",
            params: {
                season: null,
                raceId: null,
                raceName: null
            }
        })
        .state("seasonStanding.pitDetails", {
            //url: "/seasonStanding/:season/:raceId/:raceName/pitDetails",
            templateUrl: "../app/view/pitDetails.html",
            controller: "PitDetailsController",
            params: {
                season: null,
                raceId: null,
                raceName: null
            }
        })
        .state("seasonStanding.qualifyDetails", {
            //url: "/seasonStanding/:season/:raceId/:raceName/qualifyDetails",
            templateUrl: "../app/view/qualifyDetails.html",
            controller: "QualifyDetailsController",
            params: {
                season: null,
                raceId: null,
                raceName: null
            }
        })

    .state("driverStanding", {
        url: '/driverStanding',
        templateUrl: "../app/view/driverStanding.html",
        controller: "DriverStandingController"
    })

    .state("constructorStanding", {
        url: '/constructorStanding',
        templateUrl: "../app/view/constructorStanding.html",
        controller: "ConstructorStandingController"
    })

    .state("circuitList", {
        url: '/circuitList',
        templateUrl: "../app/view/circuitList.html",
        controller: "CircuitController"
    })

    .state("scheduleDetails", {
        url: '/schedule',
        templateUrl: "../app/view/scheduleDetails.html",
        controller: "ScheduleController"
    })

    .state("resultDetails", {
        url: '/results',
        templateUrl: "../app/view/resultDetails.html",
        controller: "ResultController"
    });

    $urlRouterProvider.otherwise('/home');
}]);