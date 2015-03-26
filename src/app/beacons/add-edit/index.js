'use strict';
/*jshint esnext: true */

import AddEditBeaconCtrl from './add-edit-beacon.controller';

var moduleName = 'app.beacons.add-edit';

angular.module(moduleName, [])
  .controller('AddEditBeaconCtrl', AddEditBeaconCtrl)
  .config(($stateProvider) => {
    $stateProvider
      .state('beacons.add-edit', {
        url: '/add-edit/:id',
        onEnter: ($stateParams, $state, $modal) => {
          $modal.open({
            templateUrl: 'app/beacons/add-edit/add-edit-beacon.html',
            resolve: {
              beacon: () => {
                return { bejkon : 'asdasdqwe'};
              }
            },
            controller: AddEditBeaconCtrl,
            controllerAs: 'vm'
          }).result.then(
            result => $state.transitionTo('beacons'),
            err => $state.transitionTo('beacons')
          );
        }
      });
  });

export default moduleName;