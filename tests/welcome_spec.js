describe('Template.welcome', function() {

  var subject;

  before(function() {

    FauxMeteor.initAsClient();
    FauxMeteor.addTemplate('welcome');

    Router = {};

    require('../source/welcome');

  });

  beforeEach(function() {
    subject = Template.welcome;
  });

  it("has start button text of 'Start Vending Machine", function() {
    expect(subject.startButtonText()).to.equal('Start Vending Machine');
  });

  describe('when clicking the start button', function() {

    beforeEach(function() {
      Router.go = sinon.spy();
      FauxMeteor.triggerEvent('welcome', 'click #start');
    });

    it("goes to the machine page", function() {
      expect(Router.go).to.have.been.calledWith('/machine');
    });

  });

});
