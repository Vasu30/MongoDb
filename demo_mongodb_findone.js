var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");

//   Find one 
//   dbo.collection("customers").findOne({}, function(err, result) {

//   Find All  
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    // console.log(result.name);  //   Find one 
    console.log(result);  //   Find All  
    db.close();
  });
});