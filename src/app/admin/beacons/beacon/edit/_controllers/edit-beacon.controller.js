'use strict';

function EditBeaconController($timeout, beacon) {

  var vm = this;
  vm.beacon = beacon;

  vm.update = function() {
    vm.beacon.put().then(function() {
      // TODO: make directive for alerts
      vm.updatedSuccessfully = true;
      $timeout(function(){
        vm.updatedSuccessfully = false;
      }, 5000);
    });
  };

}

EditBeaconController.resolve = {
  beacon: function ($stateParams, Restangular) {
    return Restangular.one('beacons', $stateParams.beaconId).get();
  }
};

module.exports = EditBeaconController;
