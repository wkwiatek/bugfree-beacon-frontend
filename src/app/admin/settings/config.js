'use strict';

function config($stateProvider) {
  $stateProvider
    .state('admin.settings', {
      url: '/settings',
      views: {
        '': {
          templateUrl: '/app/admin/settings/_views/settings.view.html',
          controller: 'SettingsController',
          controllerAs: 'vm',
          resolve: require('./_controllers/settings.controller').resolve
        },
        'basic-info@admin.settings': {
          templateUrl: '/app/admin/settings/basic-info/_views/basic-info.view.html',
          controller: 'BasicInfoController',
          controllerAs: 'vm',
          resolve: require('./basic-info/_controllers/basic-info.controller').resolve
        },
        'translations@admin.settings': {
          templateUrl: '/app/admin/settings/translations/_views/translations.view.html',
          controller: 'TranslationsController',
          controllerAs: 'vm',
          resolve: require('./translations/_controllers/translations.controller').resolve
        }
      }
    });
}

module.exports = config;
