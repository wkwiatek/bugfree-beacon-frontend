'use strict';

function BeaconsDescriptionsController(beacons) {

    var vm = this;

    vm.determineClass = function (power) {
        if (power < 15) return 'label-danger';
        if (power >= 15 && power < 50) return 'label-warning';
        return 'label-success';
    };

    angular.forEach(beacons, function (value) {
        value.class = vm.determineClass(value.state!=null ? value.state.batteryLevel : 0);
    });

    vm.beacons = beacons;
}

module.exports = BeaconsDescriptionsController;
