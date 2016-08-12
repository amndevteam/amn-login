var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin/previous-reports');
  console.log('Admin previous reports page opened.');
});

module.exports = router;