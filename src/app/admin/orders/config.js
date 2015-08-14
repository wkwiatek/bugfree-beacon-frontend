'use strict';

function config($stateProvider) {
    $stateProvider.state('orders', {
        url: '/orders',
        templateUrl: 'app/admin/orders/_views/orders.view.html',
        controller: 'OrdersController',
        controllerAs: 'vm'
    });
}

module.exports = config;
