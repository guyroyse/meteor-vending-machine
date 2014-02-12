VendingMachine = {};

VendingMachine.Router = (function() {

  var self = {};

  self.start = function() {

    Router.configure({
      layoutTemplate: 'layout',
      notFoundTemplate: 'welcome'
    });

    Router.map(function() {

      var self = this;

      var titleRoute = function(name, path, title) {
        self.route(name, {
          path: path,
          template: name,
          after: function() {
            document.title = title;
          }
        });
      };

      titleRoute('welcome', '/', 'Vending Machine | Home');
      titleRoute('machine', '/machine', 'Vending Machine | Start Vending');

    });

  };

  return self;

})();

