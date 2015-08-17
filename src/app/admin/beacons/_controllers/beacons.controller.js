'use strict';

function BeaconsController(beacons) {

  var vm = this;

  vm.content = 'Beacons content (from controller)';

  vm.beaconz = beacons;

}

BeaconsController.resolve = {
  beacons: function(Restangular) {
    return Restangular.all('beacons').getList();
  }
};

module.exports = BeaconsController;
