'use strict';

function config($stateProvider) {
  $stateProvider.state('beacons', {
    url: '/beacons',
    templateUrl: 'app/admin/beacons/_views/beacons.view.html',
    controller: 'BeaconsController',
    controllerAs: 'vm'
  });
}

module.exports = config;
