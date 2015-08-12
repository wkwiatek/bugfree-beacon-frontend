'use strict';

function config($stateProvider) {
  $stateProvider.state('application', {
    url: '/application',
    templateUrl: 'app/admin/application/_views/application.view.html',
    controller: 'ApplicationController',
    controllerAs: 'vm'
  });
}

module.exports = config;
