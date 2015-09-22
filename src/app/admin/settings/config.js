'use strict';

function config($stateProvider) {
    $stateProvider.state('settings', {
        url: '/settings',
        templateUrl: 'app/admin/settings/_views/settings.view.html',
        controller: 'SettingsController',
        controllerAs: 'vm',
        resolve: require('./_controllers/settings.controller').resolve
    });
}

module.exports = config;
