'use strict';

module.exports = angular.module('app.settings', [
  require('./basic-info').name,
  require('./translations').name
])
  .controller('SettingsController', require('./_controllers/settings.controller.js'))
  .config(require('./config'));
