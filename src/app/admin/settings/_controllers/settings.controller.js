'use strict';

function SettingsController($timeout, invoice) {

    var vm = this;
    vm.invoice = invoice;

    vm.update = function () {
        vm.invoice.put().then(function () {
            vm.updatedSuccessfully = true;
            $timeout(function () {
                vm.updatedSuccessfully = false;
            }, 5000);
        });
    }
}
SettingsController.resolve = {
    invoice: function (Restangular) {
        return Restangular.one('/customer/invoice-data').get();
    }
};
module.exports = SettingsController;
