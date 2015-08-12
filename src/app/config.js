'use strict';

function config($locationProvider, $routeProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .otherwise({
      redirectTo: '/beacons'
    });
}

module.exports = config;