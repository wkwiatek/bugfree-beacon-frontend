'use strict';
/*jshint esnext: true */

import AddEditBeaconCtrl from './add-edit-beacon.controller';

var moduleName = 'app.beacons.add-edit';

angular.module(moduleName, [])
  .controller('AddEditBeaconCtrl', AddEditBeaconCtrl)
  .config(($stateProvider) => {
    $stateProvider
      .state('dashboard.beacons.add', {
        url: '/add',
        onEnter: ($stateParams, $state, $modal) => {
          $modal.open({
            templateUrl: 'app/dashboard/beacons/add-edit/add-edit-beacon.html',
            resolve: {
              beacon: () => {}
            },
            controller: AddEditBeaconCtrl,
            controllerAs: 'vm'
          }).result.then(
            () => $state.go('dashboard.beacons', {}, { reload: true }),
            () => $state.go('dashboard.beacons', {}, { reload: true })
          );
        }
      })
      .state('dashboard.beacons.edit', {
        url: '/edit/:id',
        onEnter: ($stateParams, $state, $modal) => {
          $modal.open({
            templateUrl: 'app/dashboard/beacons/add-edit/add-edit-beacon.html',
            resolve: {
              beacon: BeaconsService => BeaconsService.getBeacon($stateParams.id).then(beacon => beacon.data)
            },
            controller: AddEditBeaconCtrl,
            controllerAs: 'vm'
          }).result.then(
            () => $state.go('dashboard.beacons', {}, { reload: true }),
            () => $state.go('dashboard.beacons', {}, { reload: true })
          );
        }
      });
  });

export default moduleName;
