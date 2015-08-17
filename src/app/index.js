'use strict';

// should not be required soon, watch: https://github.com/mgonto/restangular/pull/1088
global._ = require('lodash');

require('angular');
require('restangular');

angular.module('app', [
  require('angular-animate'),
  require('angular-ui-router'),

  'restangular',

  require('./admin/').name
])
.config(require('./config'));