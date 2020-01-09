angular.module('mean')
.controller('MainCtrl', [
'$scope',
'$http',
'main',
function($scope, $http, main){
    $scope.data = {message: 'Hello'};
    $scope.theColor = "";
   
    main.getChange().then(function(value) {
    	console.log(angular.lowercase(value));
    	if (angular.lowercase(value) == "true") {
    		$scope.theColor = "green";
    	} else {
    		$scope.theColor = "";
    	}
    });

}]);

