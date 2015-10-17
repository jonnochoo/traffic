angular
  .module('app', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', { controller: 'IndexController', controllerAs: 'vm', templateUrl: '/views/index.html' })
      .otherwise({ redirectTo: '/' });
  }]);
