'use strict';
/*jshint esnext: true */

class AddEditBeaconCtrl {
  constructor($scope, beacon, BeaconsService) {
    let vm = this;

    vm.beacon = beacon;

    vm.headerText = beacon ? 'Edit' : 'Add';

    vm.templateTypes = [{
      value: 'ROUNDED_IMAGE',
      name: 'Rounded image'
    }];

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