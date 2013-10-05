'use strict'


/**
 * Dependencies
 */

var level = require('level');


var db = level(process.argv[2]);
var obj = JSON.parse(process.argv[3]);
var keys = Object.keys(obj);

keys.forEach(function (key) {
  db.put(key, obj[key], function (err) {
    if (err) throw err;
  });
});
