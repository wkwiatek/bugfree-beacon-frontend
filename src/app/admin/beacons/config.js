'use strict';

function config($routeProvider) {
  $routeProvider
    .when('/beacons', {
      templateUrl: 'app/admin/beacons/_views/beacons.view.html',
      controller: 'BeaconsController'
    });
}

module.exports = config;
