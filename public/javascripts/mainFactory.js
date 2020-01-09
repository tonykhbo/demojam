angular.module('mean')
.factory('main', ['$http', function($http){

   var main = {
    getChange: function() {
      return $http.get('/env').then(function(res){
        //console.log(res.data);
        return res.data;
      })
    }
  };

  return main;
}]);