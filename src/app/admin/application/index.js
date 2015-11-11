'use strict';

module.exports = angular.module('app.application', [
  require('./shape').name,
  require('./list-layout').name
])
  .controller('ApplicationController', require('./_controllers/application.controller.js'))
  .config(require('./config'));