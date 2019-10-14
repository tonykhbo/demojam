angular.module('mean')
.controller('MainCtrl', [
'$scope',
'$http',
function($scope, $http){
    $scope.data = {message: 'Hello'};

    $http.get('content/profile.json')
       .then(function(result){
       		console.log(result);
       		console.log(result.data)
        	$scope.profiles = result.data;
        	console.log($scope.profiles)

        });

}]);

