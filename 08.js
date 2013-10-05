'use strict'



module.exports = function (db, date, cb) {
  var tweets = [];
  var err;
  db.createReadStream({ start: date, end: date + '\xff' })
  .on('data', function (data) {
    tweets.push(data.value);
  })
  .on('error', function (e) {
    err = e;
  })
  .on('end', function () {
    cb(err, tweets);
  });
};
