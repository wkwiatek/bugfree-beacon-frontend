'use strict';

function PaymentsController(payments) {

  var vm = this;

  vm.payments = payments;
}

PaymentsController.resolve = {
  payments: function (Restangular) {
    return Restangular.all('payments').getList();
  }
};

module.exports = PaymentsController;
