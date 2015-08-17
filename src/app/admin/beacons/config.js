'use strict';

function config($stateProvider) {
  $stateProvider.state('beacons', {
    url: '/beacons',
    templateUrl: 'app/admin/beacons/_views/beacons.view.html',
    controller: 'BeaconsController',
    controllerAs: 'vm',
    resolve: require('./_controllers/beacons.controller').resolve
  });
}

module.exports = config;
