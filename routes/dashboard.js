var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('employee/dashboard');
  console.log('Dashboard page opened.');
});

module.exports = router;