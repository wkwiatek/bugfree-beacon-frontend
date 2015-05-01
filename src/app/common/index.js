'use strict';
/*jshint esnext: true */

import fileModel from './fileModel.directive';

var moduleName = 'app.common';

angular.module(moduleName, [])
  .directive('fileModel', fileModel.directiveFactory);

export default moduleName;
