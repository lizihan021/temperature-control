var express = require('express');
var router = express.Router();
var utils = require('./utils');

var startHistory = []

function startHeater() {
  utils.start();
  utils.sleep(1000).then(() => {
    utils.timer();
  });
  startHistory.push("start at " + new Date().toString())
}

var starttime = new Date().getTime() - 1
var timeoutHandler

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Temperature Control',
    timeoutInMilli: starttime - new Date().getTime(),
    currentTime: new Date().toString(),
    startHistory: startHistory
  });
});

router.get('/:timeoutInHours', function(req, res, next) {
  var timeoutInMilliSeconds = req.params.timeoutInHours * 60 * 60 * 1000
  starttime = new Date().getTime() + timeoutInMilliSeconds
  clearTimeout(timeoutHandler)
  timeoutHandler = setTimeout(startHeater, timeoutInMilliSeconds)
  res.render('index', {
    title: 'Temperature Control',
    timeoutInMilli: starttime - new Date().getTime(),
    currentTime: new Date().toString(),
    startHistory: startHistory
  });
});

module.exports = router;
