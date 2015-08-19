'use strict';

function BeaconsConversionController(beacons) {

  var vm = this;

  vm.content = 'Beacons content (from controller)';

  vm.beacons = beacons;

}

BeaconsConversionController.resolve = {
  beacons: function(Restangular) {
    return Restangular.all('beacons').getList();
  }
};

module.exports = BeaconsConversionController;
