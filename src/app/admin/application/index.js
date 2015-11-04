'use strict';

module.exports = angular.module('app.application', [
  require('./shape').name
])
  .controller('ApplicationController', require('./_controllers/application.controller.js'))
  .config(require('./config'));
