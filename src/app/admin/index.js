'use strict';

module.exports = angular.module('app.admin', [
  require('./application/').name,
  require('./beacons/').name
]);
