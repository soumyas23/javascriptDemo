var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var Items = new Schema({
    name          :   String,
    price         :   Number,
    description   :  String,
    type          :  String,
    category      : String,
    image         : String
    
}, { collection: 'Items'});

    var item = mongoose.model('itemname', Items);
    router.post('/', function (req, res) {
     res.header("Access-Control-Allow-Origin", "http://localhost:9001");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    var post = new item(req.body);

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