var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host: "localhost",
    user: "root",
    password: "iloveyou",
    database: "mydb",
    debug    : false
});

exports.location_internal = function(req, res, next) {
    getExternalLocation(function(err, rows) {
        console.log("indside");
        if (err)
            return next(err);
        console.log(rows);
        console.log("indside");
        res.send(rows);
    });
};

console.log("seperate print");

function getExternalLocation(cb) {
    pool.getConnection(function(err, conn) {
        if (err)
            return cb(err);

        conn.query("SELECT * FROM customers",
            //[id],
            function(err, rows) {
                conn.release();
                cb(err, rows);
            });
    });
}
console.log("end print");