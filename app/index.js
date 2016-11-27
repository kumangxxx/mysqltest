console.log("DB IP : " + process.env.dbip);

var mysql = require('mysql');

var pool = mysql.createPool({
	localAddress : process.env.dbip,
	user : "root",
	password : "gitsr4h4514"
});

pool.getConnection(function(err, c) {
if (err) {
console.log(err);
} else {
console.log(c);
}
});
