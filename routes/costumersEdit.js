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
  var uid = Number(req.body.uidPUT);
  var oldValues = {uid: uid}
  var newValues={$set: {owner: req.body.ownerPUT, account_name: req.body.account_namePUT, account_accountNumber: Number(req.body.account_accountNumberPUT), account_balance: Number(req.body.account_balancePUT), account_rate: req.body.account_ratePUT}}

    dbo.collection("costumers").updateOne(oldValues, newValues, function (err, res) {
      if (err) throw err;
      console.log("1 document changed");
      db.close();
    });
  res.redirect("/costumers");
});
});

/*Bruges til at få værdierne fra documentent ind som values så man ikke skal skrive
det hele igen. Det virker desværre ikke. */
/*
router.get('/put/json/:uid', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC_Bank");
    //var uidBody = Number(req.body.uidBody);
    dbo.collection("costumers").findOne({uid: Number(req.params.demo)}, function (err, result) {
      if (err) throw err;
      var obj = {};
      obj.costumers = result;
      res.json(obj);
     //res.redirect('/costumersEdit', {obj: obj});
      db.close();
    });
  })
});
*/
module.exports = router;
