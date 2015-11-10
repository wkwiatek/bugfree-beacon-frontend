'use strict';

function config($stateProvider) {
  $stateProvider.state('admin.order-beacons', {
    url: '/order-beacons',
    templateUrl: 'app/admin/order-beacons/_views/order-beacons.view.html',
    controller: 'OrderBeaconsController',
    controllerAs: 'vm'
  });
}

module.exports = config;
