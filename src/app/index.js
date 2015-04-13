'use strict';
/*jshint esnext: true */

import config from './config';
import MainCtrl from './main/main.controller';
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

  BeaconsModule,
  BeaconAddEditModule

])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/dashboard/beacons');
  })

;