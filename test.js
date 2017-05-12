var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(req, res){
    res.send(200, req.body.address);
});

app.listen(port);
console.log("Listening on port " + port);