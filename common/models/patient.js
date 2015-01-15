module.exports = function(Patient) {

  Patient.search = function(searchText, cb) {
    console.log(searchText);
    // This is the db instance you get when you connect to mongo using the node client.
    var mongoDb = this.getDataSource().connector,
      collection = mongoDb.collection(this.modelName),
      selector = { "$text": { "$search": searchText }};
    // Use the mongodb node client's API here
    //console.log(collection);
    console.log(selector);
    collection.find(selector, function(err, cursor){
      cursor.toArray(cb);
    });
  };

  Patient.remoteMethod(
    'search',
    {
      accepts: {arg: 'searchText', type: 'string'},
      returns: {arg: 'results', type: 'object', root: true},
      http: {verb: 'get'}
    }
  );

};
