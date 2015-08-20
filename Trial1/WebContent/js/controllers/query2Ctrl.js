twitter311Module.controller('query2Ctrl', ['$scope','dataSvc', 'googleMapsSvc',
    function ($scope, dataSvc, googleMapsSvc) {
        var map = googleMapsSvc.initialize('map-canvas');
        var markers = [];
        $scope.departments = [];
        $scope.colorSet = [
            '5DA5DA',
            'FAA43A',
            '60BD68',
            'F17CB0',
            'B2912F',
            'B276B2',
            'DECF3F',
            'F15854',
            '4D4D4D'
        ];

        function containsObject(obj, list) {
            var i;
            for (i = 0; i < list.length; i++) {
                if (list[i] === obj) {
                    return true;
                }
            }
            return false;
        }

        dataSvc.query2().success(function(data) {
            for (i = 0; i < data.length; i++) {
                if (!containsObject(data[i].department, $scope.departments)) {
                    $scope.departments.push(data[i].department)
                }
                var color = $scope.colorSet[$scope.departments.indexOf(data[i].department)];
                googleMapsSvc.addDeptMarker(data[i], color, markers, map);
            }
        });
    }
]);