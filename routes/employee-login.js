var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('employee-login');
  console.log('Employee login page opened.');
});

module.exports = router;