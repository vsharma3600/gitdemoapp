Template.main.events({
  "click #js-button"(event,instance){
    console.log("hey it worked");
    UserInfo.insert({user:Meteor.userId(),when:new Date()})
    location.reload();

  },

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
