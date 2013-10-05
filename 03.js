'use strict'


/**
 * Dependencies
 */

var level = require('level');


var db = level(process.argv[2]);
recurse(0);

function recurse (count) {
  if (count <= 100) {
    db.get('gibberish' + count, function (err, val) {
      if (val) console.log('gibberish' + count + '=' + val);
      recurse(count += 1);
    });
  }
}
