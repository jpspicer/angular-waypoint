var module = angular.module('waypoint-test', ['waypoints'])

module.controller('testController', function ($scope) {
    $scope.testItems = [
        { 'text': 'test1' },
        { 'text': 'test2' },
        { 'text': 'test3' },
        { 'text': 'test4' },
        { 'text': 'test5' },
        { 'text': 'test6' },
        { 'text': 'test7' },
    ];

    $scope.testCallback = function (direction) {
        if (this === this.group.last()) {
            alert("called back: " + direction)
        }
    };
});