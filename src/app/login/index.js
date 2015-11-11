'use strict';

module.exports = angular.module('app.login', [])
  .controller('LoginController', require('./_controllers/login.controller'))
  .config(require('./config'));
