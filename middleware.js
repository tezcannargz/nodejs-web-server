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

module.exports = middleware;
