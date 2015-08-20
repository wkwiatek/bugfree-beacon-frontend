'use strict';

function config($stateProvider) {
  $stateProvider
    .state('beacons', {
      abstact: true,
      url: '/beacons',
      templateUrl: '/app/admin/beacons/_views/beacons.view.html'
    })
    .state('beacons.conversion', {
      url: '/conversion',
      templateUrl: '/app/admin/beacons/conversion/_views/beacons-conversion.view.html',
      controller: 'BeaconsConversionController',
      controllerAs: 'vm',
      resolve: require('./conversion/_controllers/beacons-conversion.controller').resolve
    })
    .state('beacons.descriptions', {
      url: '/descriptions',
      templateUrl: '/app/admin/beacons/descriptions/_views/beacons-descriptions.view.html',
      controller: 'BeaconsDescriptionsController',
      controllerAs: 'vm',
      resolve: require('./descriptions/_controllers/beacons-descriptions.controller').resolve
    })
    .state('beacon', {
        url: '/beacon/:beaconId',
        templateUrl: '/app/admin/beacons/beacon/_views/beacon.view.html',
        controller: 'BeaconController',
        controllerAs: 'vm',
        resolve: require('./beacon/_controllers/beacon.controller').resolve
    });
}

module.exports = config;
