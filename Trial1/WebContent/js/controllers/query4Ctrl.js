twitter311Module.controller('query4Ctrl', ['$scope','dataSvc',
    function ($scope, dataSvc) {
        $scope.zipCounts = [];

        dataSvc.query4().success(function(data) {
            for (i = 0; i < data.length; i++) {
                $scope.zipCounts.push({
                    zip: data[i].word,
                    count: data[i].num
                });
            }
        });
    }
]);