var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin/admin-dashboard');
  console.log('Admin dashboard page opened.');
});

module.exports = router;