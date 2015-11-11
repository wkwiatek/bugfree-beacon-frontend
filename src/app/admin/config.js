'use strict';

function config($stateProvider) {
  $stateProvider.state('admin', {
    abstract: true,
    templateUrl: '/app/admin/_views/admin.html'
  });
}

module.exports = config;
