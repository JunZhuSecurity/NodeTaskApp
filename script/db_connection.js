var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "iloveyou",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});