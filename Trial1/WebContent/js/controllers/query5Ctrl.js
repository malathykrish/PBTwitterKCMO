twitter311Module.controller('query5Ctrl', ['$scope','dataSvc', 'googleMapsSvc',
    function ($scope, dataSvc, googleMapsSvc) {
        var map = googleMapsSvc.initialize('map-canvas');
        var markers = [];
        $scope.statuses = [];
        $scope.colorSet = {
            'RESOL': '60BD68',
            'OPEN': 'F15854',
            'CANC' : 'DECF3F'
        }

        function containsObject(obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    return true;
                }
            }
            return false;
        }

        dataSvc.query5().success(function(data) {
            for (i = 0; i < data.length; i++) {
                if (!containsObject(data[i].status, $scope.statuses)) {
                    $scope.statuses.push(data[i].status)
                }
                var color = $scope.colorSet[data[i].status];
                googleMapsSvc.addStatusMarker(data[i], color, markers, map);
            }
        });
    }
]);