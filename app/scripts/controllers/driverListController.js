'use strict';

angular.module('app.controllers').controller('DriverListController',['$scope', function($scope){
    $scope.driver = {
        StandingsTable : {
            season : "2016",
            StandingsLists : [
                {
                    season :"2016",
                    round :"8",
                    DriverStanding : [
                        {
                             position : "1",
                             positionText :"1",
                             points :"141",
                             wins :"5",
                             Driver : {
                                driverId :"rosberg",
                                permanentNumber :"6",
                                code :"ROS",
                                url:"http:\/\/en.wikipedia.org\/wiki\/Nico_Rosberg",
                                givenName :"Nico",
                                familyName :"Rosberg",
                                dateOfBirth :"1985-06-27",
                                nationality :"German"
                            },
                            Constructors :[
                                {
                                     constructorId : "mercedes",
                                     url :"http:\/\/en.wikipedia.org\/wiki\/Mercedes-Benz_in_Formula_One",
                                     name :"Mercedes",
                                     nationality :"German"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    }
    $scope.driversList = $scope.driver.StandingsTable.StandingsLists[0].DriverStanding;
}]);