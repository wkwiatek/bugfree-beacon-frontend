'use strict';
/*jshint esnext: true */

class AddEditBeaconCtrl {
  constructor($scope, beacon) {
    let vm = this;

    console.log(beacon);
    vm.beacon = beacon;

    vm.dismiss = function() {
      $scope.$dismiss();
    };

    $scope.save = function() {

    };
  }
}

AddEditBeaconCtrl.$inject = ['$scope', 'beacon'];

export default AddEditBeaconCtrl;