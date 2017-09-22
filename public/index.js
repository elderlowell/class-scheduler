angular.module('app', ['ui.router']).config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider
    .otherwise('/');

  $stateProvider
    .state('schedule', {
      url: '/',
      templateUrl: '/components/schedule/scheduleTpl.html'
    });

});
