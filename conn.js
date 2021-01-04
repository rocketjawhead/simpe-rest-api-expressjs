var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
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
