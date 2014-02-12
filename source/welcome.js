if (Meteor.isClient) {

  Template.welcome.startButtonText = function() {
    return 'Start Vending Machine';
  };

  Template.welcome.events({
    'click #start' : function() {
      Router.go('/machine');
    }
  });

}
