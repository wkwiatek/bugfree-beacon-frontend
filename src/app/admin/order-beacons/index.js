'use strict';

module.exports = angular.module('app.order-beacons', [])
  .controller('OrderBeaconsController', require('./_controllers/order-beacons.controller.js'))
  .config(require('./config'));
