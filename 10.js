'use strict'


module.exports.init = function (db, words, callback) {
  words.forEach(function (word) {
    db.put(word.length + '!' + word, word);
  });
  callback();
};

module.exports.query = function (db, word, callback) {
  var length = word.length;
  var q = word.split('*')[0];
  var result = [];
  db.createReadStream({
    start: length + '!' + q,
    end: length + '!' + q + '\xff'
  })
  .on('data', function (data) {
    result.push(data.value);
  })
  .on('error', function (err) {
    callback(err);
  })
  .on('end', function () {
    callback(null, result);
  });
};
