
var queryresult = '';

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "iloveyou",
    database: "mydb"
});

getTopics = function(cb) {

    var strQuery = "SELECT * FROM customers";

    con.query(strQuery, function(err, rows){
        if (err) {
            throw err;
        } else {
            cb(rows);
            console.log(rows);
        }
    });

    con.end();
};

// getTopics();
//
// DBmodule.getTopics(function(rows){
//     console.log(rows);
// });