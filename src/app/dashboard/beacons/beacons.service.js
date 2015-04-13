'use strict';
/*jshint esnext: true */

class BeaconsService {
  constructor($http, BASE_RESOURCE_URL) {
    this.$http = $http;
    this.baseResourceUrl = BASE_RESOURCE_URL;
  }

  getBeacons() {
    return this.$http.get(this.baseResourceUrl + '/beacon', { params: { uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'} })
      .then(result => result.data);
  }

  getBeacon(id) {
    return this.$http.get(this.baseResourceUrl + '/beacon/' + id )
      .then(result => result.data);
  }

  static beaconsFactory($http, BASE_RESOURCE_URL) {
    return new BeaconsService($http, BASE_RESOURCE_URL);
  }
}

BeaconsService.beaconsFactory.$inject = ['$http', 'BASE_RESOURCE_URL'];

export default BeaconsService.beaconsFactory;