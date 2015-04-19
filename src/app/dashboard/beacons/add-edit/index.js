'use strict';
/*jshint esnext: true */

import AddEditBeaconCtrl from './add-edit-beacon.controller';

var moduleName = 'app.beacons.add-edit';

var openModal = ($stateParams, $state, $modal, isEdit) => {
  var resolveBeacon = isEdit ?
    BeaconsService => BeaconsService.getBeacon($stateParams.id).then(beacon => beacon.data)
    :
    () => {};

  $modal.open({
    templateUrl: 'app/dashboard/beacons/add-edit/add-edit-beacon.html',
    resolve: {
      beacon: resolveBeacon
    },
    controller: AddEditBeaconCtrl,
    controllerAs: 'vm'
  }).result.then(
    () => $state.transitionTo('dashboard.beacons'),
    () => $state.transitionTo('dashboard.beacons')
  );
};


angular.module(moduleName, [])
  .controller('AddEditBeaconCtrl', AddEditBeaconCtrl)
  .config(($stateProvider) => {
    $stateProvider
      .state('dashboard.beacons.add', {
        url: '/add',
        onEnter: ($stateParams, $state, $modal) => {
          openModal($stateParams, $state, $modal);
        }
      })
      .state('dashboard.beacons.edit', {
        url: '/edit/:id',
        onEnter: ($stateParams, $state, $modal) => {
          openModal($stateParams, $state, $modal, true);
        }
      });
  });

export default moduleName;