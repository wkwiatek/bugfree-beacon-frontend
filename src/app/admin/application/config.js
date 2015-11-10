'use strict';

function config($stateProvider) {
  $stateProvider.state('admin.application', {
    url: '/application',
    views: {
      '': {
        templateUrl: 'app/admin/application/_views/application.view.html',
        controller: 'ApplicationController',
        controllerAs: 'vm'
      },
      'shape@admin.application': {
        templateUrl: 'app/admin/application/shape/_views/shape.view.html',
        controller: 'ShapeController',
        controllerAs: 'vm'
      }
    }
  });
}

module.exports = config;
