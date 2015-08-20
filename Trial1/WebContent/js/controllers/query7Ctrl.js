twitter311Module.controller('query7Ctrl', ['$scope','dataSvc', 'googleMapsSvc',
    function ($scope, dataSvc, googleMapsSvc) {
        var map = googleMapsSvc.initialize('map-canvas');
        var markers = [];
        var color = '4099FF';

        dataSvc.query7().success(function(data) {
            for (i = 0; i < data.length; i++) {
                googleMapsSvc.addTweetMarker(data[i], color, markers, map);
            }
        });
    }
]);