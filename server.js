
//ini file seperti index.php
var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller');


app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('Start Server V2 on port : ' + port);



