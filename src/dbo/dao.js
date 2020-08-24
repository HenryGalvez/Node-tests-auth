const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "test"
});

mysqlConnection.connect(function (err){
    if(err) {
        console.log(err);
        return;
    }else {
        console.log("La Base esta Conectada...");
    }
});

module.exports = mysqlConnection;