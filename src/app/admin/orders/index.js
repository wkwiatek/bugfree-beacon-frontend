'use strict';

module.exports = angular.module('app.orders', [
])
    .controller('OrdersController', require('./_controllers/orders.controller.js'))
    .config(require('./config'));
