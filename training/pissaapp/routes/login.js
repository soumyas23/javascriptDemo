var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var LoginSchema = new Schema({
    name          :   String,
    email         :  String,
    password      :  String,
    phone         : Number,
    address1      : String,
    address2      : String,
    city 	        : String,
    state         : String,
    pincode       : Number
}, { collection: 'registration'});

    var loginuser = mongoose.model('login', LoginSchema);
    
    router.post ('/', function (req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:9001");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

//save model to MongoDB
    loginuser.find({email:req.body.email,password:req.body.password}, function (err, docs) {
        console.log("##");
        res.json(docs);
        console.log('Got   it', docs);
    });
   
   
});
   
module.exports=router;