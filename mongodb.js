'use strict';

var mongodb = require('./node_modules/loopback-connector-mongodb/node_modules/mongodb'),
  mongoUrl = 'mongodb://localhost:27017/vitals-tracker',
  mongoClient = new (mongodb.MongoClient);

var dbExport = module.exports = {};

//t0d0: Build an inverted index of keywords
var mrOpts = {};

var sourceCollection = 'Patient';

var mapFn = function () {
  emit(this.firstName, 1);
  emit(this.lastName, 1);
};

var reduceFn = function (key, vals) {
  return vals.reduce(function (acc, val ) {
    return acc + val;
  }, 0);
};

mrOpts.out = {
  inline: 1
};

mongoClient.connect(mongoUrl, function (err, db) {
  dbExport.db = db;

  dbExport.mapReduce = function () {
    var collection = db.collection(sourceCollection);
    var cb = function (err, results) {
      dbExport.results = results;
    };
    collection.mapReduce(mapFn, reduceFn, mrOpts, cb);
  };
});
