'use strict';

module.exports = angular.module('app.settings', [
])
    .controller('SettingsController', require('./_controllers/settings.controller.js'))
    .config(require('./config'));
