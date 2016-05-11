var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http) {

	$http.get("http://localhost:8080/reports")
   		.then(function(response) {
      		$scope.reports = response.data;
    });

	$scope.save = function() {
        var data = $scope.report;
        $http.post('http://localhost:8080/reports' , data).success(function(data, status) {
        	$http.get("http://localhost:8080/reports")
   			.then(function(response) {
      			$scope.reports = response.data;
    		});
    	})
    }

});