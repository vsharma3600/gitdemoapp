Template.main.events({
  "click #js-button"(event,instance){
    console.log("hey it worked");
    UserInfo.insert({user:Meteor.userId(),when:new Date()})
    location.reload();

  },

  })
