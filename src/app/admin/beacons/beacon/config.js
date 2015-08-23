'use strict';

function config($stateProvider) {
  $stateProvider
    .state('beacon', {
      url: '/beacons/:beaconId',
      views: {
        '': {
          templateUrl: '/app/admin/beacons/beacon/_views/beacon.view.html',
          controller: 'BeaconController',
          controllerAs: 'vm',
          resolve: require('./_controllers/beacon.controller').resolve
        },
        'edit@beacon': {
          templateUrl: '/app/admin/beacons/beacon/edit/_views/edit-beacon.view.html',
          controller: 'EditBeaconController',
          controllerAs: 'vm',
          resolve: require('./_controllers/beacon.controller').resolve
        }
      }
    });
}

module.exports = config;
