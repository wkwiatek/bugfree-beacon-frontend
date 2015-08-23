'use strict';

function EditBeaconController(beacon) {

  var vm = this;
  vm.beacon = beacon;

  vm.update = function() {
    vm.beacon.save();
  }

}

EditBeaconController.resolve = {
  beacon: function ($stateParams, Restangular) {
    return Restangular.one('beacons', $stateParams.beaconId).get();
  }
};

module.exports = EditBeaconController;
