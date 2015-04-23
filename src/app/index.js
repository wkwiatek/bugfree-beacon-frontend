'use strict';
/*jshint esnext: true */

import config from './config';
import DashboardCtrl from './dashboard/dashboard.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';
import BeaconsModule from './dashboard/beacons/index';
import BeaconAddEditModule from './dashboard/beacons/add-edit/index';

angular.module('bugfreeBeaconFrontend', [

  config,

  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'restangular',
  'ui.router',
  'ui.bootstrap',
  'colorpicker.module',

  BeaconsModule,
  BeaconAddEditModule

])
  .controller('DashboardCtrl', DashboardCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      });

    $urlRouterProvider.otherwise('/dashboard/beacons');
  })

;