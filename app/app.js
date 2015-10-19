

var app = require('remote').require('app');
// app.getAppPath() return builded folder path

var mime = require('mime');
var minimal = require('./lib/minimal/');
window.$ = window.jQuery = require('jquery');

var envName = window.env.name;

// initialization minimal
var connect = minimal.init();



/*






function createList(list){

  var items = "";
  var i = 0;
  var type = "";
  var extention = "";
  var icon= "";

  console.dir(list)

  $(".login-form").hide(0)
  $("body").removeClass("login").addClass("dashboard");

  for (i = 0; i < list.length; i++) {

    switch (list[i].type) {
      case "d":
          type =  "folder";
          extention = "";
          icon = "folder"
          break;
      case "-":
          type = "file";
          extention = mime.lookup(list[i].name)
          if(extention == "text/html"){
            icon = "code"
          }else if(extention == "image/png"){
            icon = "image"
          }else{
            icon = "noname"
          }
          break;
    }

    if(list[i].name != "." && list[i].name != ".."){

      items += "<li data-target='"+ list[i].name +"' class='icon "+icon+"'>"+list[i].name+" --- "+list[i].size+"</li>";
    }

  }

  $(".list").html(items)
}


$(function(){


  //console.log(util)



  $(document).on("dblclick", ".list li" ,function(){

      var target = $(this).data('target')
      if($(this).hasClass("folder")){
        console.log("yeah")

        c.list("/"+target, function(err, list) {
          if (err) throw err;
          createList(list)
        });





      }
  });


   $("#connect").on("click",function(){


/*
     c.on('ready', function() {
       c.list(function(err, list) {
         if (err) throw err;

         $(".message").addClass("success").text("Success").slideDown();
         setTimeout(function(){
           $(".message").slideUp()
         }, 3000);
         console.log("Succsess")

         createList(list)
       });
     });

     c.on('error', function() {

       $(".message").addClass("error").text("Error").slideDown();
       setTimeout(function(){
         $(".message").slideUp()
       }, 3000);
     });










   });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    /*document.getElementById('greet').innerHTML = greet();
    document.getElementById('platform-info').innerHTML = os.platform();
    document.getElementById('env-name').innerHTML = envName;*/
});
