'use strict';

function config($stateProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/app/login/_views/login.html',
      controller: 'LoginController',
      controllerAs: 'vm'
    });
}

module.exports = config;
