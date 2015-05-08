'use strict';
/*jshint esnext: true */

class BeaconsCtrl {
  constructor($window, $state, beacons, BeaconsService) {
    let vm = this;
    vm.beacons = beacons;

    vm.time = new Date().getTime();

    vm.removeBeacon = id => {
      if ($window.confirm('Are you sure?')) {
        BeaconsService.removeBeacon(id).then(
          () => $state.go('dashboard.beacons', {}, { reload: true })
        );
      }
    };

  }
}

BeaconsCtrl.$inject = ['$window', '$state', 'beacons', 'BeaconsService'];

export default BeaconsCtrl;
