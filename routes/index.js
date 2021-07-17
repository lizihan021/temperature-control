var express = require('express');
var router = express.Router();
var utils = require('./utils');

function startHeater() {
  utils.start();
  utils.sleep(1000).then(() => {
    utils.timer();
  });
}

var timeout = 2147483647
var starttime = new Date().getTime() + timeout
var timeoutHandler = setTimeout(startHeater, timeout);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Temperature Control',
    timeoutInMilli: starttime - new Date().getTime(),
    currentTime: new Date().toString()
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
    currentTime: new Date().toString()
  });
});

module.exports = router;
