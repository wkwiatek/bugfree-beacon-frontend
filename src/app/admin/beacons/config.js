'use strict';

function config($stateProvider) {
    $stateProvider
        .state('beacons', {
            url: '/beacons',
            views: {
                '': {
                    templateUrl: '/app/admin/beacons/_views/beacons.view.html'
                },
                'conversion@beacons': {
                    templateUrl: '/app/admin/beacons/conversion/_views/beacons-conversion.view.html',
                    controller: 'BeaconsConversionController',
                    controllerAs: 'vm',
                    resolve: resolveAllBeacons
                },
                'descriptions@beacons': {
                    templateUrl: '/app/admin/beacons/descriptions/_views/beacons-descriptions.view.html',
                    controller: 'BeaconsDescriptionsController',
                    controllerAs: 'vm',
                    resolve: resolveAllBeacons
                }
            }
        })
        .state('beacon', {
            url: '/beacons/:beaconId',
            templateUrl: '/app/admin/beacons/beacon/_views/beacon.view.html',
            controller: 'BeaconController',
            controllerAs: 'vm',
            resolve: require('./beacon/_controllers/beacon.controller').resolve
        });
}

var resolveAllBeacons = {
    beacons: function(Restangular) {
        return Restangular.all('beacons').getList();
    }
};

module.exports = config;
