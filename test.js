var express = require("express");
var app = express();
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

app.use(bodyParser.json());

app.post("/", function (req, res) {
    connection.connect();
    connection.query('select * from member where name='+req.body.name, function (err, rows, fields) {
        if (err) throw err;
        console.log(rows[0]);
    });
    connection.end();
    res.send("ok");
});

app.listen(port);
console.log("Listening on port " + port);
