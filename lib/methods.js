Meteor.methods({
  reset:function(){
    UserInfo.remove({});
  }
})
