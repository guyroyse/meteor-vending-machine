Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'welcome'
});

Router.map(function() {
  this.route('home', { 
    path: '/',
    after: function() { document.title = 'Vending Machine | Home'; } 
  });
  this.route('machine', {
    after: function() { document.title = 'Vending Machine | Start Vending!'; } 
  });
});

