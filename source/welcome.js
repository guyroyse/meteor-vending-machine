if (Meteor.isClient) {

  Template.welcome.events({
    'click #start' : function() {
      Router.go('/machine');
    }
  });

}
