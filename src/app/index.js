'use strict';

require('angular');
require('angular-route');
require('angular-animate');
require('angular-resource');

angular.module('app', [
  'ngRoute',
  'ngAnimate',

  require('./admin/').name
])
.config(require('./config'));