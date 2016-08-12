var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('employee/current-report');
  console.log('Current report page opened.');
});

module.exports = router;