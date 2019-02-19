var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 100,
    host: "localhost",
    user: "root",
    password: "iloveyou",
    database: "mydb",
    debug    : false
});

function executeQuery(query, callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            return callback(err, null);
        }
        else if (connection) {
            connection.query(query, function (err, rows, fields) {
                connection.release();
                if (err) {
                    return callback(err, null);
                }
                return callback(null, rows);
            })
        }
        else {
            return callback(true, "No Connection");
        }
    });
}


function getResult(query,callback) {
    executeQuery(query, function (err, rows) {
        if (!err) {
            callback(null,rows);
        }
        else {
            callback(true,err);
        }
    });
}

function getServers()
{
    getResult("select * from table",function(err,rows){
        if(!err){
            return rows;
        }else{
            console.log(err);
        }
    });

}

var results;
var test = getCustomers();
function getCustomers()
{
    var resultobj = getResult("SELECT * FROM customers",function(err,rows){
        if(!err){
            results = rows;
            console.log("rows=");
            console.log(rows);
            return rows;
        }else{
            console.log(err);
        }
    });
    return resultobj;


}
console.log("end of the program:")
console.log(results);
// function content(){
//     //var queryresults = getCustomers();
//     var div = document.getElementById("demo");
//     div.textContent = "examples";//queryresults.toString();
//     var text = div.textContent;
//     var div = document.getElementById("demo");
//     div.style="font-size:24px";
// }
