'use strict';

angular.module('app').controller('IndexController', Controller);

Controller.$inject = ['$http'];

function Controller($http) {
  var vm = this;

  (function constructor() {
    $http.get('api').then(function (result) {
      vm.results = _.map(result.data, function (item) {
        return {
          description: item.description,
          location: item.location,
          timestamp: moment(item.timestamp).fromNow()
        };
      });
    });
  })();
}