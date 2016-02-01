angular.module('waypoints', [])
.directive('waypoint', function () {

    return {
        scope:{
            callback: '&',
            offset: '@'
        },
        link: function (scope, elem, attrs) {
            var waypoint = new Waypoint({
                element: elem[0],
                handler: scope.callback(),
                offset: scope.offset
            })
        }
    }
});