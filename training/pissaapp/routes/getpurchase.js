var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var Purchase = new Schema({
    products : Object,
    user:Object
}, { collection: 'purchase'});


    var purchases = mongoose.model('purchaseslist', Purchase);
    router.get('/', function (req, res) {
     res.header("Access-Control-Allow-Origin", "http://localhost:9001");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   
    purchases.find({}, function (err, docs) {
        console.log("##");
        res.json(docs);
        console.log('Got   it', docs);
    });
   
   
});
   
   

   
module.exports=router;