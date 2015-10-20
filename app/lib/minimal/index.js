
var ftp = require('ftp');

module.exports = {
  version: '1.0',
  init: function(){

    this.client = new ftp();
    this.connect();

    return this
  },
  getList : function(){
    var _self = this;
    this.client.list("/",function(err, list) {
      if (err) throw err;

      $(".message").addClass("success").text("Success").slideDown();
      setTimeout(function(){
        $(".message").slideUp()
      }, 3000);


      list.forEach(function(e){
        //console.dir(e)
      })


    });


this.client.status(function(err, currentDir){
  if (err) throw err;
  console.log(currentDir)
});

    this.client.lastMod("/htdocs/1.png",function(err, currentDir){
      if (err) throw err;
      //console.log(currentDir)
    });


    this.client.cwd("/htdocs/stylesheets",function(err, currentDir){
      if (err) throw err;
      //console.log(currentDir)
    });



    this.client.pwd(function(err, currentDir){
      if (err) throw err;
      //console.log(currentDir)
    });
    this.client.listSafe(function(err, currentDir){
      if (err) throw err;
      //console.dir(currentDir)
    });

  },
  ready: function(){
    var _self = this;
    this.client.on('ready', function() {
      _self.getList();
    });
  },
  connect: function(client) {
    this.client.connect({
      host: "ftp.byethost7.com",
      user: "b7_16761643",
      password : "yanone61",
      port: "21"
    });

    this.ready();
  }
}
