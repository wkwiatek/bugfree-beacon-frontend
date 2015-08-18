'use strict';

function BeaconsDescriptionsController(beacons) {

  var vm = this;

  vm.content = 'Beacons content (from controller)';

  vm.beacons = beacons;

}

BeaconsDescriptionsController.resolve = {
  beacons: function(Restangular) {
    return Restangular.all('beacons').getList();
  }
};

module.exports = BeaconsDescriptionsController;
