var express = require("express");
var app = express();
var PORT = 3000;

var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log("özel route girildi!!!");
    next();
  },
  //girilen herhangi bir route varsa onun hangi method ile çağırıldığını versin
  logger : function(req, res, next) {
    console.log(req.method + " " + req.originalUrl);
    next();
  }
}

//bu aplication da kullanılacak şeyi belirtiyoruz
 app.use(middleware.logger);

//req bizim isteğimiz ile beraber gelen parametreleri veriri json verisi, header bilgisi vs .res istek karşılanıktan sonra geriye verilecek cevabı belirtir
app.get("/", function(req, res){
  res.send("Express Merhaba!!!");
})

app.get("/hakkimda", middleware.requireAuthentication, function(req, res){
  res.send("Hakkımda Sayfası");
})

app.use(express.static(__dirname + '/public'));
// console.log(__dirname);

app.listen(PORT, function(){
  console.log("Express server " + PORT + "başlatıldı...");
});

// app.listen(3000);
