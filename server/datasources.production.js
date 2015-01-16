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
