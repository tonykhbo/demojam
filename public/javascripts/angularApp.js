
angular.module('mean', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'MainCtrl'
    })
    .state('play', {
      url: '/play',
      templateUrl: 'templates/play.html',
      controller: 'MainCtrl'
    })
    
  $urlRouterProvider.otherwise('play');
}]);
