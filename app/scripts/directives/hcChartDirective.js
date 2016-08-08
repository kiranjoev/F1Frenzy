'use strict';

angular.module('app.directives').directive('hcChart', function () {

    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '=',
            theme: '='
        },
        link: function (scope, element) {
            Highcharts.setOptions(scope.theme);
            Highcharts.chart(element[0], scope.options);
        }
    };

});