'use strict';
/*jshint esnext: true */

var moduleName = 'app.config';

angular.module(moduleName, [])
  .constant('BASE_RESOURCE_URL', '//bejkon.herokuapp.com');

export default moduleName;