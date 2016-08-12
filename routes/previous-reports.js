var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('employee/previous-reports');
  console.log('Previous reports page opened.');
});

module.exports = router;