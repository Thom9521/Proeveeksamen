var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
mongo = require('mongodb')
var url = "mongodb://localhost:27017/";

router.get('/', function(req, res, next) {
    res.render('costumersEdit', { title: 'BEC Bank' });
  }); 

router.post('/put', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC_Bank");
  var id = req.body.idPUT;
  var oldValues = {id: id}
  var newValues={$set: {owner: req.body.ownerPUT, account_name: req.body.account_namePUT, account_accountNumber: req.body.account_accountNumberPUT, account_balance: req.body.account_balancePUT, account_rate: req.body.account_ratePUT}}

    dbo.collection("costumers").updateOne(oldValues, newValues, function (err, res) {
      if (err) throw err;
      console.log("1 document changed");
      db.close();
    });
  res.redirect("/costumers");
});
});
module.exports = router;
