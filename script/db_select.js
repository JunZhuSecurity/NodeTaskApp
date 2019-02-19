
var queryresult = '';

var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "iloveyou",
    database: "mydb"
});
con.connect(function (err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log("in con connect");
        console.log(result);
        console.log("in con connect");
        queryresult = result;

    });

});

console.log("query result = " + queryresult);

function select_data() {
    var day = new Date();
    // Use getDay function to obtain todays Day.
    // getDay() method returns the day of the week as a number like 0 for Sunday, 1 for Monday,….., 5
    // This value is stored in today variable
    var today = day.getDay();
    // To get the name of the day as Sunday, Monday or Saturday, we have created an array named weekday and stored the values
    var weekday = new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";
    // weekday[today] will return the day of the week as we want
    //document.write("<li>" + "Today is " + weekday[today] + "<br />");



    document.write("<li>" + queryresult.toString() + "<br />");

}