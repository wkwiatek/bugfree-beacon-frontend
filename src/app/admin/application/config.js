'use strict';

function config($routeProvider) {
  $routeProvider
    .when('/application', {
      templateUrl: 'app/admin/application/_views/application.view.html',
      controller: 'ApplicationController'
    });
}

module.exports = config;
