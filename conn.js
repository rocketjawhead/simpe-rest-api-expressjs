var mysql = require('mysql');
var conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'express'
});

conn.connect(function(err){
    if(err)
    throw err;
});

module.exports = conn;
