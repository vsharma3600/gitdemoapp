function pickrandomad(){
  var z = ['coke-ad.jpg','mcdonalds-ad.jpg','logo.jpg','tab.jpg','download.jpg','pasch-logo_orig.jpg','75e77b441debf2183d6bc733141681df--the-piano-guys-piano-quotes.jpg'];
  console.log(JSON.stringify(z));
  var x = Math.round(Math.random()*(z.length-1))
  console.log(x);
  var y = z[x]
  console.dir(y);
  return y;

}

Template.main.helpers({
  randad(){return pickrandomad();}
})


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

  Template.main.rendered = function() {
      if(!this._rendered) {
        this._rendered = true;
        $('#pageloadad').modal('show');
      }
  }

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
