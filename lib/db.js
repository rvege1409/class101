var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    port :3306,
    user : 'root',
    password : 'ckddn123',
    database : 'mydb'
});

db.connect();
module.exports=db;