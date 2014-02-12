describe('VendingMachine.Router', function() {

  require('../source/router');

  var subject;

  before(function() {
    subject = VendingMachine.Router;
    Router = {};
    Router.map = function(fn) { 
      fn.apply(this); 
    };
  });

  beforeEach(function() {
    Router.configure = sinon.spy();
    Router.route = sinon.spy();

    subject.start();
  });

  it("configures the layoutTemplate as 'layout'", function() {
    expect(Router.configure).to.have.been.calledWith(sinon.match.has('layoutTemplate', 'layout'));
  });

  it("configures the notFoundTemplate as 'welcome'", function() {
    expect(Router.configure).to.have.been.calledWith(sinon.match.has('notFoundTemplate', 'welcome'));
  });

  it("maps the 'welcome' route", function() {
    expect(Router.route).to.have.been.calledWith('welcome', {
      path: '/',
      template: 'welcome',
      after: sinon.match.func
    });
  });

  it("maps the 'machine' route", function() {
    expect(Router.route).to.have.been.calledWith('machine', {
      path: '/machine',
      template: 'machine',
      after: sinon.match.func
    });
  });

});
