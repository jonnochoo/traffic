angular.module('app').controller('IndexController', Controller);

Controller.$inject = ['$http', '$interval', 'trafficService'];

function Controller($http, $interval, trafficService) {
  var vm = this;

  (function constructor() {
    trafficService.getAlerts().then(result => {
      vm.results = result;
    });
    $interval(refresh, 1000);
  })();

  function refresh() {
    _.each(vm.results, item => { item.refresh(); });
  }
}
