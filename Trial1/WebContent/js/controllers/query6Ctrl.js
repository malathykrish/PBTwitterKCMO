twitter311Module.controller('query6Ctrl', ['$scope','dataSvc',
    function ($scope, dataSvc) {
        $scope.searchText = null;
        $scope.results = [];

        var delegate = function() {
            dataSvc.query6($scope.searchText).success(function(data) {
                for (i = 0; i < data.length; i++) {
                    $scope.results.push(data[i].text);
                }
            });
        }

        $scope.mySearch = delegate;
    }
]);
