chai = require('chai');
sinon = require('sinon');
sinonChai = require('sinon-chai');

expect = chai.expect;
chai.use(sinonChai);

FauxMeteor = (function() {

  var self = {};

  self.initAsClient = function() {
    Meteor = {};
    Meteor.isClient = true;
    Template = {};
  };

  self.makeClient = function() {
  };

  self.addTemplate = function(templateName) {
    Template[templateName] = {};
    Template[templateName].events = function(events) {
      this.configuredEvents = events;
    };
  };

  self.triggerEvent = function(templateName, event) {
    Template[templateName].configuredEvents[event]();
  };

  return self;

})();
