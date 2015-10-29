angular.module('app').controller('IndexController', Controller);

Controller.$inject = ['$http', '$interval', 'trafficService'];

function Controller($http, $interval, trafficService) {
  var vm = this;
  vm.reload = reload;

  (function constructor() {
    reload();
    $interval(refresh, 1000);
  })();

  function reload() {
    trafficService.getAlerts().then(result => {
      vm.results = result;
    });
  }

  function refresh() {
    _.each(vm.results, item => { item.refresh(); });
  }
}
