var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

console.log("hai");
var Schema = mongoose.Schema;
var Purchase = new Schema({
    products : Array,
    user:Object
}, { collection: 'purchase'});

    var savepurchase = mongoose.model('purchases', Purchase);
    router.post('/', function (req, res) {
     res.header("Access-Control-Allow-Origin", "http://localhost:9001");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   console.log("hai");
   console.log("router",req.body);
    var post = new savepurchase(req.body);

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