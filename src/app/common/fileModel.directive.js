'use strict';
/*jshint esnext: true */

class FileModel {

  constructor($parse) {
    this.restrict = 'A';
    this.$parse = $parse;
  }

  link(scope, element, attrs) {
    let model = this.$parse(attrs.fileModel);
    let modelSetter = model.assign;

    element.bind('change', function(){
      scope.$apply(function(){
        modelSetter(scope, element[0].files[0]);
      });
    });
  }

  static directiveFactory($parse){
    FileModel.instance = new FileModel($parse);
    return FileModel.instance;
  }

  // it's required to have this available inside link function
  compile() {
    return this.link.bind(this);
  }

}

FileModel.directiveFactory.$inject = ['$parse'];

export default FileModel;
