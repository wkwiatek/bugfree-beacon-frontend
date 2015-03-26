'use strict';
/*jshint esnext: true */

class AddEditBeaconCtrl {
  constructor($scope, beacon) {
    let vm = this;

    vm.dismiss = function() {
      $scope.$dismiss();
    };

    $scope.save = function() {

    };
  }
}

AddEditBeaconCtrl.$inject = ['$scope', 'beacon'];

export default AddEditBeaconCtrl;