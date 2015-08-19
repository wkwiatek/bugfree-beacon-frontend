'use strict';

module.exports = angular.module('app.beacons', [
  require('./conversion').name,
  require('./descriptions').name
])
  .config(require('./config'));
