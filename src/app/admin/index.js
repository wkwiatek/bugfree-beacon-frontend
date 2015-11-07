'use strict';

module.exports = angular.module('app.admin', [
  require('./application/').name,
  require('./beacons/').name,
  require('./order-beacons/').name,
  require('./payments/').name,
  require('./settings/').name
]);
