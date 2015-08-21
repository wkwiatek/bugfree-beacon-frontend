'use strict';

module.exports = angular.module('app.payments', [])
  .controller('PaymentsController', require('./_controllers/payments.controller.js'))
  .config(require('./config'));
