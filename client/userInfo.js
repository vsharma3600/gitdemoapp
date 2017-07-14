Template.main.events({
  "click .js-chatsubmit": function(event){
    event.preventDefault();
    console.log("the button was clicked")
    const clickInfo = {createdAt:new Date(), createdBy:Meteor.userId()};
    userInfo.insert(clickInfo);
  },

})
