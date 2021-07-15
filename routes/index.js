var express = require('express');
var router = express.Router();
import {start, timer, sleep} from 'utils.js';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Temperature Control' });
  start();
  await sleep(1000);
  timer();
});

module.exports = router;
