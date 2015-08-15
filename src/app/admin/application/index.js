'use strict';

module.exports = angular.module('app.application', [
])
  .controller('ApplicationController', require('./_controllers/application.controller.js'))
  .config(require('./config'));
