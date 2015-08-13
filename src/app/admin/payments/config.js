'use strict';

function config($stateProvider) {
    $stateProvider.state('payments', {
        url: '/payments',
        templateUrl: 'app/admin/payments/_views/payments.view.html',
        controller: 'PaymentsController',
        controllerAs: 'vm'
    });
}

module.exports = config;
