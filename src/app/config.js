'use strict';

function config($locationProvider, $urlRouterProvider, RestangularProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('beacons');

  RestangularProvider.setBaseUrl('http://bejkon.herokuapp.com');
  RestangularProvider.setResponseInterceptor(function(data, operation, what) {
    return data.data;
  });
}

module.exports = config;