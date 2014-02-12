describe('Router', function() {

  var subject;

  before(function() {

    Router = {};
    Router.configure = sinon.spy();
    Router.route = sinon.spy();
    Router.map = function(fn) { 
      fn.apply(this); 
    };
    
    require('../source/router');

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
