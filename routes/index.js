var express = require('express');
var router = express.Router();
var utils = require('./utils');

function startHeater() {
  utils.start();
  utils.sleep(1000).then(() => {
    utils.timer();
  });
}

var startTime = new Date("2021/07/15 00:24:00").getTime()
var currTime = new Date().getTime()

setTimeout(startHeater, startTime - currTime);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Temperature Control' });
});

module.exports = router;
