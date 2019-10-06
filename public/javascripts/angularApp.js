
angular.module('mean', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'MainCtrl'
    })
    .state('gallery', {
      url: '/gallery',
      templateUrl: 'templates/gallery.html',
      controller: 'MainCtrl'
    })
    .state('controls', {
      url: '/controls',
      templateUrl: 'templates/controls.html',
      controller: 'MainCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'templates/about.html',
      controller: 'MainCtrl'
    })


  $urlRouterProvider.otherwise('home');
}]);
