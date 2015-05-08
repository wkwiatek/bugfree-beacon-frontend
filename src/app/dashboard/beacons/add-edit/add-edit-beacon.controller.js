'use strict';
/*jshint esnext: true */

class AddEditBeaconCtrl {
  constructor($scope, beacon, BeaconsService) {
    let vm = this;

    vm.time = new Date().getTime();

    vm.beacon = beacon;
    vm.baseResourceUrl = BeaconsService.baseResourceUrl;

    vm.headerText = beacon ? 'Edit' : 'Add';

    vm.templateTypes = [{
      value: 'ROUNDED_IMAGE',
      image: 'ROUNDED_IMAGE.png'
    }, {
      value: 'SQUARED_IMAGE',
      image: 'SQUARED_IMAGE.png'
    }, {
      value: 'SQUARED_IMAGE_ALIGN_LEFT',
      image: 'SQUARED_IMAGE_ALIGN_LEFT.png'
    }];

    vm.dismiss = () => {
      $scope.$dismiss();
    };

    vm.save = () => {
      if (beacon) {
        BeaconsService.editBeacon(vm.beacon.id, vm.beacon).then(beacon => {
          if (vm.image) {
            BeaconsService.addImageToBeacon(beacon.data.id, vm.image).then(() => {
              $scope.$dismiss();
            });
          } else {
            $scope.$dismiss();
          }
        });
      }
      else {
        BeaconsService.addBeacon(vm.beacon).then(beacon => {
          if (vm.image) {
            BeaconsService.addImageToBeacon(beacon.data.id, vm.image).then(() => {
              $scope.$dismiss();
            });
          } else {
            $scope.$dismiss();
          }
        });
      }
    };

  }
}

AddEditBeaconCtrl.$inject = ['$scope', 'beacon', 'BeaconsService'];

export default AddEditBeaconCtrl;
