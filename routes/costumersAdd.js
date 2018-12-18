var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
mongo = require('mongodb')
var url = "mongodb://localhost:27017/";


router.get('/', function(req, res, next) {
    res.render('costumersAdd', { title: 'BEC Bank' });
  }); 

// Opret med POST
router.post('/post', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC_Bank");
    var costumers = {};
    costumers.uid = Number(req.body.uid);
    costumers.owner = req.body.costumer_name;
    costumers.account_name = req.body.account_name;
    costumers.account_accountNumber = Number(req.body.account_accountNumber);
    costumers.account_balance = Number(req.body.account_balance);
    costumers.account_rate = req.body.account_rate;
    dbo.collection("costumers").insertOne(costumers, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
    res.redirect("/costumers");
  });
});

module.exports = router;
