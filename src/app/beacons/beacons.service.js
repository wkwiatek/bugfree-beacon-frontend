'use strict';
/*jshint esnext: true */

class BeaconsService {
  constructor($http) {
    this.$http = $http;
  }

  getBeacons() {
    return this.$http.get('http://bejkon.herokuapp.com/beacon', { params: { uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'} })
      .then(result => result.data );
  }

  static beaconsFactory($http) {
    return new BeaconsService($http);
  }
}

BeaconsService.beaconsFactory.$inject = ['$http'];

export default BeaconsService.beaconsFactory;