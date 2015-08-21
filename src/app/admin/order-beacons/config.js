'use strict';

function config($stateProvider) {
  $stateProvider.state('order-beacons', {
    url: '/order-beacons',
    templateUrl: 'app/admin/order-beacons/_views/order-beacons.view.html',
    controller: 'OrderBeaconsController',
    controllerAs: 'vm'
  });
}

module.exports = config;
