twitter311Module.controller('twitter311Ctrl', ['$scope',
    function ($scope) {
        $scope.templates =
            [
                { name: 'query1', title: 'Count', subtitle: 'by Department', url: 'html/query1.html'},
                { name: 'query2', title: 'GeoLocation', subtitle: 'by Department', url: 'html/query2.html'},
                { name: 'query3', title: 'Count', subtitle: 'by Source', url: 'html/query3.html'},
                { name: 'query4', title: 'Count', subtitle: 'by Zip Code', url: 'html/query4.html'},
                { name: 'query5', title: 'GeoLocation', subtitle: 'by Status', url: 'html/query5.html'},
                { name: 'query6', title: 'Tweet', subtitle: 'by Keyword Search', url: 'html/query6.html'},
                { name: 'query7', title: 'GeoLocation', subtitle: 'by Tweet', url: 'html/query7.html'}
            ];
        $scope.template = $scope.templates[0];

        $scope.click = function(name) {
            for(var i = 0; i < $scope.templates.length; i++) {
                if ($scope.templates[i].name == name) {
                    $scope.template = $scope.templates[i];
                    break;
                }
            }
        }

        $scope.isActive = function(name) {
            return name === $scope.template.name;
        }
    }
]);
