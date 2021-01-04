'use-strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req,res){
    connection.query("SELECT * FROM person",function(error,rows,
        fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows,res)
            }
        });
};

exports.createUsers = function(req,res){
    var first_name = req.body.first_name;
    var last_name = req.body.last_name;

    connection.query("SELECT * FROM person WHERE firstname = ?",[first_name],
    function (error,rows,fields){
        if(rows.length === 0){
            connection.query("INSERT INTO person (firstname,lastname) VALUES (?,?)",[first_name,last_name],
            function (error,rows,fields){
                if(error){
                    console.log(error)
                }else{
                    response.ok("success insert",res)
                }
            });
        }else{
            response.failed("Duplicate Data",res)
        }
    })
    
};


exports.findUsers = function(req,res){
    //input post
    // var user_id = req.params.user_id (get)
    var user_id = req.body.user_id

    connection.query("SELECT * FROM person WHERE id = ?",[user_id],
    function (error,rows,fields){
        // console.log(rows);
        if(rows.length === 0){
            console.log("kosong")
        }else{
            var data_json = JSON.stringify(rows) 
            result = data_json.replace(/(^\[)/, '');
            result =  result.replace(/(\]$)/, '');
            obj = JSON.parse(result);
            console.log(obj.id)
        }
        
        // response.ok(rows,res)
        
    });
};



exports.index = function(req,res){
    response.ok("hello wolrd",res)
}