'use strict';
/*jshint esnext: true */

class BeaconsCtrl {
  constructor(beacons) {
    let vm = this;
    vm.beacons = beacons;
  }
}

BeaconsCtrl.$inject = ['beacons'];

export default BeaconsCtrl;
