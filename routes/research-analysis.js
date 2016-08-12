var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('employee/research-analysis');
  console.log('Research and analysis page opened.');
});

module.exports = router;