twitter311Module.factory('dataSvc', ['$http',
    function ($http) {
        return {
            query1: function() {
                return $http.get('queryResults/DepartmentCount.json');
                //return $http.get('http://localhost:8834/Trial1/MasterServlet?query1=KCMO', {timeout: 500000});
            },
            query2: function() {
                //return $http.get('queryResults/DepartmentGeo.json');
            	 return $http.get('http://localhost:8834/Trial1/MasterServlet?query2=KCMO', {timeout: 500000});
            },
            query3: function() {
                return $http.get('queryResults/SourceCount.json');
            },
            query4: function() {
            	return $http.get('http://localhost:8834/Trial1/MasterServlet?byzipCode=KCMO', {timeout: 500000});
            },
            query5: function() {
                //return $http.get('queryResults/ProblemStatusGeo.json');
            	 return $http.get('http://localhost:8834/Trial1/MasterServlet?query2=KCMO', {timeout: 500000});
            },
            query6: function(searchText) {
                // return $http.get('restCall?param=searchText');
            	return $http.get('http://localhost:8834/Trial1/MasterServlet?searchString='+searchText,{timeout: 500000});
            },
            query7: function() {
                return $http.get('queryResults/JoinResult.json', {timeout: 500000});
            }
        }
    }
]);

