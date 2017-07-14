/*Template.admins.events({
  "click #js-button2"(event,instance){
    console.log("hey it worked");
    document.write(5 + 6);

  },

})*/
Template.previouswinners.helpers({
  users(){return Pwinners.find({},{limit:10,sort:{when:-1}})},

})


Template.admins.events({
  "click #js-button2"(event, instance){
    var z = UserInfo.find().fetch()
    console.log(JSON.stringify(z));
    var x = Math.round(Math.random()*z.length)
    console.log(x);
    var y = z[x]
    console.dir(y);
    Pwinners.insert({user:y.user,when:y.when,winnings:z.length});
    Meteor.call("reset");

  }
})
