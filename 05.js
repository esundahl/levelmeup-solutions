'use strict'


/**
 * Dependencies
 */

var level = require('level');
var fs = require('fs');


var db = level(process.argv[2]);
var file = process.argv[3];

fs.readFile(file, function (err, data) {
  var lines = data.toString().split('\n');
  var batch = [];
  lines.forEach(function(line) {
    var arr = line.split(',');
    batch.push({
      type: arr[0],
      key: arr[1],
      value: arr[2]
    });
  });
  db.batch(batch);
});


