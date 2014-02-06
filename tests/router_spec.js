var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');

var expect = chai.expect;
chai.use(sinonChai);

describe('VendingMachine.Router', function() {

  var subject, mockRouter;

  before(function() {

    Router = {
      configure : function() {},
      map : function() {}
    };

    require('../router');

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
