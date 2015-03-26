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
      .state('beacons', {
        url: '/beacons',
        templateUrl: 'app/beacons/beacons.html',
        controller: BeaconsCtrl,
        controllerAs: 'vm',
        resolve: {
          beacons: BeaconsService =>
            BeaconsService.getBeacons().then(beacons => {
              return beacons;
            })
        }
      });
  });

export default moduleName;