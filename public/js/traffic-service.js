angular.module('app').factory('trafficService', Service);

function Service($http) {
  return {
    getAlerts: getAlerts
  };

  function getAlerts() {
    return $http.get('api').then(result => {
      return _.map(result.data, item => {
        return new Alert(item);
      });
    });
  }
}
