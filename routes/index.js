var express = require('express');
var router = express.Router();
var utils = require('./utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Temperature Control' });
  utils.start();
  utils.sleep(1000).then(() => {
    utils.timer();
  });
});

module.exports = router;
