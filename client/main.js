Template.main.events({
  "click #js-button"(event,instance){
    console.log("hey it worked");
    var z = UserInfo.find().fetch()
    console.dir(z)
    UserInfo.insert({user:Meteor.userId(),when:moment().format('MMMM Do YYYY, h:mm:ss a')})
    location.reload();

  },

  })
  Template.main.helpers({
    clicks(){
      return UserInfo.find().count();
    }
  })


  Template.previouswinners.helpers({
    users(){return Pwinners.find({},{limit:10,sort:{when:-1}})},

  })

/*setInterval(settime, 5000);

//window.onload = settime

function settime(){
  document.getElementById("functiontest").innerHTML = Math.round(Math.random()*1000)
}

function loaded() {
    if (window.location.hash == '#open') alert('ok')
}
window.location.hash = 'open'
window.onload = loaded;*/
