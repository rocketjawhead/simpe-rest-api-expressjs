var mysql = require('mysql');
var conn = mysql.createConnection({
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : 'root',
    database : 'express'
});

conn.connect(function(err){
    if(!err)
    console.log('Database is connected!');
    else
    console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
});

module.exports = conn;
