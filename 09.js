'use strict'


/**
 * Dependencies
 */

var level = require('level');
var records = require(process.argv[3]);


var db = level(process.argv[2], { valueEncoding: 'json' });

records.forEach(function (record) {
  if (record.type === 'user') storeUser(record);
  else storeRepo(record);
});


function storeUser(record) {
  db.put(record.name, record);
}

function storeRepo(record) {
  db.put(record.user + '!' + record.name, record);
}
