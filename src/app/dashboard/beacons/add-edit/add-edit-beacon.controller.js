'use strict';
/*jshint esnext: true */

class AddEditBeaconCtrl {
  constructor($scope, beacon, BeaconsService) {
    let vm = this;

    vm.beacon = beacon;

    vm.dismiss = function() {
      $scope.$dismiss();
    };

    vm.save = function() {
      if (beacon) {
        BeaconsService.editBeacon(vm.beacon.id, vm.beacon);
      }
      else {
        BeaconsService.addBeacon(vm.beacon).then(() => {
          $scope.$dismiss();
        });
      }
    };
  }
}

AddEditBeaconCtrl.$inject = ['$scope', 'beacon', 'BeaconsService'];

export default AddEditBeaconCtrl;