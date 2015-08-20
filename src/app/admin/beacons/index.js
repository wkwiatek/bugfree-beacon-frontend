'use strict';

module.exports = angular.module('app.beacons', [
  require('./conversion').name,
  require('./descriptions').name,
  require('./beacon').name
])
  .config(require('./config'));
