describe('Template.machine', function() {

  var subject;

  before(function() {

    Meteor = {};
    Meteor.isClient = true;
    Template = {};
    Template.machine = {};
    Template.machine.events = function(events) {
      this.configuredEvents = events;
    };

    VendingMachine = {};

    require('../source/machine');

  });

  beforeEach(function() {
    subject = Template.machine;
  });

  describe('when querying the state of the machine', function() {

    var machineState;

    beforeEach(function() {
      VendingMachine.fetch = sinon.stub().returns('machine_state');
      machineState = subject.machineState();
    });

    it('returns the machine state', function() {
      expect(machineState).to.equal('machine_state');
    });

    it('calls fetch on the mock', function() {
      expect(VendingMachine.fetch).to.have.been.calledWith();
    });

  });

  describe('when preparing to inserting coins', function() {

    var coinInsertionTestFn = function(coin) {
      var coinUpper = coin.toUpperCase();
      return function() {

        beforeEach(function() {
          subject.configuredEvents['click #insert' + coin]();
        });

        it("inserts a " + coinUpper + " into the machine", function() {
          expect(VendingMachine.insertCoin).to.have.been.calledWith(coinUpper);
        });

      };
    };

    beforeEach(function() {
      VendingMachine.insertCoin = sinon.spy();
    });

    describe('and inserting a PENNY', coinInsertionTestFn('Penny'));
    describe('and inserting a NICKEL', coinInsertionTestFn('Nickel'));
    describe('and inserting a DIME', coinInsertionTestFn('Dime'));
    describe('and inserting a QUARTER', coinInsertionTestFn('Quarter'));

  });

});
