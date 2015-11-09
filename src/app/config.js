'use strict';

function config($locationProvider, $urlRouterProvider, RestangularProvider, API_BASE_URL) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('beacons');

  RestangularProvider.setBaseUrl(API_BASE_URL);
  RestangularProvider.setResponseInterceptor(function(data, operation, what) {
    if (operation === 'getList') {
      return data;
    }
    return data.data;
  });
}

module.exports = config;