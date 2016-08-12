var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin-login');
  console.log('Admin login page opened.');
});

module.exports = router;