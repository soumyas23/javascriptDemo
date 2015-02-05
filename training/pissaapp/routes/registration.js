var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var RegistrationSchema = new Schema({
    name          :   String,
    email         :  String,
    password      :  String,
    phone         : Number,
    address1      : String,
    address2      : String,
    city 	      : String,
    state         : String,
    pincode       : Number
}, { collection: 'registration'});

    var register = mongoose.model('registration', RegistrationSchema);
    router.post('/', function (req, res) {
     res.header("Access-Control-Allow-Origin", "http://localhost:9001");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var post = new register(req.body);

//save model to MongoDB
    post.save(function (err) {
     if (err) {
        return err;
  }
  else {
    console.log("Post saved");
  }
});
   
   
});
   
module.exports=router;