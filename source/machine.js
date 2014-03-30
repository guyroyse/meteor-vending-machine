if (Meteor.isClient) {

  var insertCoinFn = function(coin) {
    return function() {
      VendingMachine.insertCoin(coin);
    };
  };

  Template.machine.machineState = function() {
      return VendingMachine.fetch();
  };

  Template.machine.events({
    'click #insertPenny'   : insertCoinFn('PENNY'),
    'click #insertNickel'  : insertCoinFn('NICKEL'),
    'click #insertDime'    : insertCoinFn('DIME'),
    'click #insertQuarter' : insertCoinFn('QUARTER')
  });

}
