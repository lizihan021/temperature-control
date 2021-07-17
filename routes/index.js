var express = require('express');
var router = express.Router();
var utils = require('./utils');

function startHeater() {
  utils.start();
  utils.sleep(1000).then(() => {
    utils.timer();
  });
}

var startTime = new Date("2021/07/17 06:24:00").getTime()
var currTime = new Date().getTime()
var currTimeStr = new Date().toString()

setTimeout(startHeater, startTime - currTime);

/* GET home page. */
router.get('/:time', function(req, res, next) {
  res.render('index', {
    title: 'Temperature Control',
    timeout: startTime - currTime,
    currentTime: currTimeStr
  });
});

module.exports = router;
