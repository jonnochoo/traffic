angular.module('app').controller('IndexController', Controller);

Controller.$inject = ['$http', 'trafficService'];

function Controller($http, trafficService) {
  var vm = this;

  (function constructor() {
    trafficService.getAlerts().then(function(result) {
      vm.results = result;
    });
  })();
}
