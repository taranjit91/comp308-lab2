var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

/**
 * Get port from environment and store in Express.
 */
let port = process.env.PORT || '3000';
app.set('port', port);

//Serves all the request which includes /images in the url from Images folder
app.use('/images', express.static(__dirname + '/images'));
app.listen(port,function(){
  console.log("Live at Port 3000");
});