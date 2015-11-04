'use strict';

function SettingsController(invoiceData, $timeout) {
  var vm = this;
  vm.invoiceData = invoiceData;
  vm.update = function() {
    vm.invoiceData.put().then(function() {
      // TODO: make directive for alerts
      vm.updatedSuccessfully = true;
      $timeout(function() {
        vm.updatedSuccessfully = false;
      }, 5000);
    });
  };
}

SettingsController.resolve = {
  invoiceData: function (Restangular) {
    return Restangular.one('customer/invoice-data', '').get();
  }
};

module.exports = SettingsController;
