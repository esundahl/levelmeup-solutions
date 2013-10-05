'use strict'


/**
 * Dependencies
 */

var level = require('level');
var program = require('commander');

program
  .version('0.0.2')
  .parse(process.argv)


var db = level(program.args[0]);
db.get('levelmeup', function (err, val) {
  if (err) throw err;
  console.log(val);
});
