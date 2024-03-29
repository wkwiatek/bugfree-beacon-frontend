'use strict';

function config($stateProvider) {
  $stateProvider
    .state('beacons', {
      url: '/beacons',
      views: {
        '': {
          templateUrl: '/app/admin/beacons/_views/beacons.view.html'
        },
        'conversion@beacons': {
          templateUrl: '/app/admin/beacons/conversion/_views/beacons-conversion.view.html',
          controller: 'BeaconsConversionController',
          controllerAs: 'vm'
        },
        'descriptions@beacons': {
          templateUrl: '/app/admin/beacons/descriptions/_views/beacons-descriptions.view.html',
          controller: 'BeaconsDescriptionsController',
          controllerAs: 'vm'
        }
      },
      resolve: resolveAllBeacons
    });
}

var resolveAllBeacons = {
  beacons: function (Restangular) {
    return Restangular.all('beacons').getList();
  }
};

module.exports = config;
