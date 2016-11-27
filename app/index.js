var express = require('express');
var app = express();

console.log("DB IP : " + process.env.dbip);

var mysql = require('mysql');

app.listen((process.env.PORT || 8082), function() {
console.log("running..");
});

var pool = mysql.createPool({
	localAddress : process.env.dbip,
	user : "root",
	password : "gitsr4h4514"
});

//pool.getConnection(function(err, c) {
//if (err) {
//console.log(err);
//} else {
//console.log(c);
//}
//});

console.log("end");
