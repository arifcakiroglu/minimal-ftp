// Here is the starting point for code of your own application.
// All stuff below is just to show you how it works. You can delete all of it.

// Modules which you authored in this project are intended to be
// imported through new ES6 syntax.
import { greet } from './hello_world/hello_world';

// Node.js modules and those from npm
// are required the same way as always.
var os = require('os');
var app = require('remote').require('app');
var jetpack = require('fs-jetpack').cwd(app.getAppPath());
var Client = require('ftp');
var mime = require('mime');

window.$ = window.jQuery = require('jquery');



// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
//console.log(jetpack.read('package.json', 'json'));

// window.env contains data from config/env_XXX.json file.
var envName = window.env.name;

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


  //console.log(minimal)

  var c = new Client();

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






     // connect to localhost:21 as anonymous
     c.connect({
       host: $("#host").val(),
       user: $("#user").val(),
       password : $("#password").val(),
       port: "21"
     });



   });
});


document.addEventListener('DOMContentLoaded', function() {
    /*document.getElementById('greet').innerHTML = greet();
    document.getElementById('platform-info').innerHTML = os.platform();
    document.getElementById('env-name').innerHTML = envName;*/
});
