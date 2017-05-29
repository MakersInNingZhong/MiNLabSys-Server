var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var port = 3000;
var mysql = require('mysql');
var dbinfo = require("./dbinfo.json")

var connection = mysql.createConnection({
    host: 'localhost',
    user: dbinfo.user,
    password: dbinfo.passwd,
    database: dbinfo.db
});

connection.connect();

server.disable("x-powered-by");
server.disable("etag");

server.use(bodyParser.json());

server.post("/door", function (req, res) {
    uid_string = req.body.uid.join(",");
    connection.query("select name from member where uid=?", [uid_string], function (err, results) {
        if (err) {
            console.error("ERROR " + err);
            res.send(500, "DB ERROR!")
        }
        else {
            if (typeof (results[0]) === "undefined") {
                res.json({ name: "" });
            }
            else {
                console.log(results[0].name + " has opened the door!");
                var return_json = { name: results[0].name };
                res.json(return_json);
            }
        }
    });
});

server.listen(port, function () {
    console.log("Listening on port " + port);
});
