'use strict';

require('angular');
require('angular-animate');
require('angular-resource');
require('angular-ui-router');

angular.module('app', [
  'ngAnimate',
  'ui.router',

  require('./admin/').name
])
.config(require('./config'));