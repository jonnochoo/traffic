var express = require('express');
var router = express.Router();
var traffic = require('./../lib/traffic');

router.get('/', function(req, res) {
  return res.render('index');
});

router.get('/api', function(req, res) {
  traffic.getTweets(function(err, results) {
    return res.json(results);
  });
})

module.exports = router;
