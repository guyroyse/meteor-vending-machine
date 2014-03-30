VendingMachine = (function() {

  var getMachineId = function() {
    return Session.get('myMachine');
  };

  var readMachineData = function() {
    return VendingMachines.findOne({ _id : getMachineId() });
  };

  var insertNewMachine = function() {
    var id = VendingMachines.insert({
      balance : 0
    });
    Session.set('myMachine', id);
  };

  var mapDataToMachine = function(data) {
    var display = data.balance === 0 ? 'INSERT COIN' : (data.balance / 100).toFixed(2);
    return {
      display : display
    };
  };

  var COIN_VALUES = {
    NICKEL : 5,
    DIME : 10,
    QUARTER : 25
  };

  var lookupCoinValue = function(coin) {
    return COIN_VALUES[coin] || 0;
  };

  var self = {};

  self.fetch = function() {

    var machineData = readMachineData();
    if (machineData === undefined) {
      insertNewMachine();
      machineData = readMachineData();
    }

    return mapDataToMachine(machineData);

  };

  self.insertCoin = function(coin) {
    VendingMachines.update(getMachineId(), { $inc : { balance : lookupCoinValue(coin) } });
  };

  return self;

})();
