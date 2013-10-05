'use strict'


/**
 * Dependencies
 */

var level = require('level');


module.exports = function (db, date, cb) {
  var count = 0;
  var err;

  db.createReadStream({ start: date })
  .on('data', function (data) {
    count += 1;
  })
  .on('error', function(e) {
    err = e;
  })
  .on('end', function () {
    cb(err, count);
  });
};
