var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('error');
  console.log('Error page opened.');
});

module.exports = router;
