var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin/current-report');
  console.log('Admin current report page opened.');
});

module.exports = router;