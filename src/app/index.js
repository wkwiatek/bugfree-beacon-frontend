'use strict';

// should not be required soon, watch: https://github.com/mgonto/restangular/pull/1088
global._ = require('lodash');

require('angular');
require('restangular');

angular.module('app', [
  require('angular-animate'),
  require('angular-ui-router'),
  require('ng-file-upload'),
  require('angular-loading-bar'),

  'restangular',
  'tc.chartjs',
  'ngAnimate',

  require('./admin/').name
])
.constant('API_BASE_URL', 'https://bejkon.herokuapp.com')
.config(require('./config'));