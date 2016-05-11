var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http) {
	$scope.message = 'Hello Angular!';

	$scope.save = function() {
        var data = $scope.report;
        $http.post('http://localhost:8080/reports' , data).success(function(data, status) {
            $scope.message = 'saved';
    	})
    }   
});