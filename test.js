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

connection.connect();

app.use(bodyParser.json());

app.post("/", function (req, res) {
    connection.query('select uid from member where name=' + mysql.escape(req.body.name), function (err, rows, fields) {
        if (err) throw err;
        console.log(rows[0]);
	var j = { uid: rows[0].uid, msg: "ok"};
	res.json(j);
    });
});

app.listen(port);
console.log("Listening on port " + port);
