var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');


var Schema = mongoose.Schema;
var Items = new Schema({
    name          :   String,
    price         :   Number,
    description   :   String,
    type          :   String,
    category      :   String,
    image         :   String
    
}, { collection: 'Items'});

    var itemlst = mongoose.model('itemlist', Items);
    router.get('/', function (req, res) {
     res.header("Access-Control-Allow-Origin", "http://localhost:9001");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

   
    itemlst.find({}, function (err, docs) {
        console.log("##");
        res.json(docs);
        console.log('Got   it', docs);
    });
   
   
});
   
   

   
module.exports=router;