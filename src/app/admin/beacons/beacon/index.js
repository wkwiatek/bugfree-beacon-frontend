'use strict';

module.exports = angular.module('app.beacons.beacon', [
  require('./edit').name
])
  .controller('BeaconController', require('./_controllers/beacon.controller.js'))
  .config(require('./config'));
