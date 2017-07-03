'use strict';

let mongo = require('mongodb');
let client = mongo.MongoClient;
let _db;

module.exports = {
    connect() {
      client.connect('mongodb://gagan:ARIHANT@ds047692.mlab.com:47692/olympics-dev', (err, db) => {
        if(err) {
          console.log(err);
          console.log("Error connecting to mongo - check mongo connections");
          process.exit();
        }
        _db = db;
        console.log("Connected to mongo");
      });
    },
    sports() {
      return _db.collection('sports');
    }
}
