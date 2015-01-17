'use strict';

module.exports = {
  "db": {
    "name": "db",
    "connector": "memory"
  },
  "mongodb": {
    "name": "mongodb",
    "connector": "mongodb",
    "url": process.env.MONGOLAB_URI
  }
};

//console.log('I am datasources.production.js');
//console.log(process.env);
