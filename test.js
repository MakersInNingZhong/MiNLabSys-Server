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

server.use(bodyParser.json());

server.post("/door", function (req, res) {
    uid_string = req.body.uid.join(",");
    try {
        connection.query("select name from member where uid=?", [uid_string], function (err, results) {
            if (err) throw err;
            var return_json = { name: results[0].name };
            res.json(return_json);
        });
    }
    catch (err) {
        console.error(err);
        res.send(500, "DB Error");
    }
});

server.listen(port, function () {
    console.log("Listening on port " + port);
});
