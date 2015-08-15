'use strict';

function config($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $urlRouterProvider.otherwise('beacons');
}

module.exports = config;