angular.module('app').controller('IndexController', Controller);

Controller.$inject = ['$http', '$interval', 'trafficService'];

function Controller($http, $interval, trafficService) {
  var vm = this;
  vm.reload = reload;
  vm.isLoading = false;

  (function constructor() {
    reload();
    $interval(refresh, 1000);
  })();

  function reload() {
    vm.isLoading = true;
    trafficService.getAlerts().then(result => {
      vm.results = result;
      vm.isLoading = false;
    });
  }

  function refresh() {
    _.each(vm.results, item => { item.refresh(); });
  }
}
