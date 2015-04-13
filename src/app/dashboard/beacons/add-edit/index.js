'use strict';
/*jshint esnext: true */

import AddEditBeaconCtrl from './add-edit-beacon.controller';

var moduleName = 'app.beacons.add-edit';

angular.module(moduleName, [])
  .controller('AddEditBeaconCtrl', AddEditBeaconCtrl)
  .config(($stateProvider) => {
    $stateProvider
      .state('dashboard.beacons.add-edit', {
        url: '/add-edit/:id',
        onEnter: ($stateParams, $state, $modal) => {
          $modal.open({
            templateUrl: 'app/dashboard/beacons/add-edit/add-edit-beacon.html',
            resolve: {
              beacon: (BeaconsService) => {
                console.log('asdqwenqweq');
                console.log($stateParams.id);
                return BeaconsService.getBeacon($stateParams.id).then(beacon => beacon);
              }
            },
            controller: AddEditBeaconCtrl,
            controllerAs: 'vm'
          }).result.then(
            () => $state.transitionTo('dashboard.beacons'),
            () => $state.transitionTo('dashboard.beacons')
          );
        }
      });
  });

export default moduleName;