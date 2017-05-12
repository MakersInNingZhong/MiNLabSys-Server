var express = require("express");
var app = express();
var port = 3000;

app.post("/", function(req, res){
    res.send(200, req.body);
});

app.listen(port);
console.log("Listening on port " + port);