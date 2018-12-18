var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
mongo = require('mongodb')
var url = "mongodb://localhost:27017/";

/* GET home page. *//*
router.get('/', function(req, res, next) {
  res.render('costumers', { title: 'Kunder' });
});
*/
//Hent med GET
router.get('/', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC_Bank");
    dbo.collection("costumers").find({}).toArray(function (err, result) {
      if (err) throw err;
      var obj = {};
      obj.costumers = result;
      //res.json(obj);
      res.render('costumers', obj);
      db.close();
    });
  })
});
router.post('/delete/:id', function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC_Bank");
  var id = req.params.id;
  dbo.collection("costumers").deleteOne({ _id: new mongo.ObjectId(id) }, function (err, results) {

  });
  //res.json({ success: id })
  res.redirect("/costumers");
});
});

router.get('/json/:uid', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BEC_Bank");
    dbo.collection("costumers").findOne({uid: Number(req.params.uid)}, function (err, result) {
      if (err) throw err;
      var obj = {};
      obj.costumers = result;
     res.json(obj);
      db.close();
    });
  })
});
module.exports = router;
