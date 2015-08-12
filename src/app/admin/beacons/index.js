'use strict';

module.exports = angular.module('app.beacons', [
])
  .controller('BeaconsController', require('./_controllers/beacons.controller.js'))
  .config(require('./config'));
