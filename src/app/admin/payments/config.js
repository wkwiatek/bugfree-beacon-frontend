'use strict';

function config($stateProvider) {
  $stateProvider.state('admin.payments', {
    url: '/payments',
    templateUrl: 'app/admin/payments/_views/payments.view.html',
    controller: 'PaymentsController',
    controllerAs: 'vm',
    resolve: require('./_controllers/payments.controller').resolve

  });
}

module.exports = config;
