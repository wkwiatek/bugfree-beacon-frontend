'use strict';

function EditBeaconController($http, $timeout, beacon, API_BASE_URL) {

  var vm = this;
  vm.beacon = beacon;

  vm.imageUrl = vm.beacon.data.imageUrl + '?' + new Date().getTime();

  vm.update = function() {
    vm.beacon.put().then(function() {

      var fd = new FormData();
      fd.append('file', vm.file);
      $http.post(API_BASE_URL + '/beacons/' + vm.beacon.id + '/photo', fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined }
      });

      // TODO: make directive for alerts
      vm.updatedSuccessfully = true;
      $timeout(function() {
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
