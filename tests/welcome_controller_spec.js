describe('Template.welcome', function() {

  var subject;

  before(function() {

    Meteor = {};
    Meteor.isClient = true;
    Template = {};
    Template.welcome = {};
    Template.welcome.events = function(events) {
      this.configuredEvents = events;
    };

    Router = {};

    require('../source/welcome');

  });

  beforeEach(function() {
    subject = Template.welcome;
  });

  describe('when clicking start', function() {

    beforeEach(function() {
      Router.go = sinon.spy();
      subject.configuredEvents['click #start']();
    });

    it("goes the the machine page", function() {
      expect(Router.go).to.have.been.calledWith('/machine');
    });

  });

});

