'use strict';
/*jshint esnext: true */

import BeaconsService from './beacons.service';
import BeaconsCtrl from './beacons.controller';

var moduleName = 'app.beacons';

angular.module(moduleName, [])
  .factory('BeaconsService', BeaconsService)
  .controller('BeaconsCtrl', BeaconsCtrl)
  .config(($stateProvider) => {
    $stateProvider
      .state('dashboard.beacons', {
        url: '/beacons',
        templateUrl: 'app/dashboard/beacons/beacons.html',
        controller: BeaconsCtrl,
        controllerAs: 'vm',
        resolve: {
          beacons: BeaconsService =>
            BeaconsService.getBeacons().then(beacons => beacons)
        }
      });
  });

export default moduleName;