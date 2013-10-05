'use strict'


/**
 * Dependencies
 */

var program = require('commander');


program
  .version('0.0.1')
  .parse(process.argv)

console.log('ALL YOUR ' + program.args[0] + ' ARE BELONG TO ' + program.args[1]);

