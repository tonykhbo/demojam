
angular.module('mean', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('play', {
      url: '/play',
      templateUrl: 'templates/play.html',
      controller: 'MainCtrl'
    })
    .state('sprint', {
      url: '/sprint',
      templateUrl: 'templates/index.html',
      controller: 'MainCtrl'
    })
  $urlRouterProvider.otherwise('sprint');
}]);
