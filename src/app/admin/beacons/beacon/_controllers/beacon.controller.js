'use strict';

function BeaconController(beacon) {

    var vm = this;
    vm.beacon = beacon.data;

}

BeaconController.resolve = {
    beacon: function($stateParams, Restangular) {
        return Restangular.one('beacons', $stateParams.beaconId).get();
    }
};

module.exports = BeaconController;
