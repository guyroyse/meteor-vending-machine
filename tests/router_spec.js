describe('VendingMachine.Router', function() {

  var subject, mockRouter;

  before(function() {

    Router = {
      configure : function() {},
      map : function() {}
    };

    require('../source/router');

    subject = VendingMachine.Router;

  });

  beforeEach(function() {
    mockRouter = sinon.mock(Router);
  });

  it('calls configure with expected templates', function() {

    mockRouter.expects('configure').once().withExactArgs({
      layoutTemplate: 'layout',
      notFoundTemplate: 'welcome'
    });

    subject.start();

    mockRouter.verify();

  });

  it('maps routes', function() {

    mockRouter.expects('map').once();

    subject.start();

    mockRouter.verify();

  });

});
