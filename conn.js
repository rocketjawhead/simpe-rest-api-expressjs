var mysql = require('mysql');
var conn = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'express',
    insecureAuth : true
});

conn.connect(function(err){
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
});

module.exports = conn;
