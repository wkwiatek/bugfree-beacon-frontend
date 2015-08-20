'use strict';

function BeaconController(beacon) {

    var vm = this;
    vm.beaconId = beacon.id;

}

BeaconController.resolve = {
    beacon: function($stateParams) {
        //TODO: fetch from server by $stateParams.beaconId
        return {
            "id": $stateParams.beaconId
        };
    }
};

module.exports = BeaconController;
