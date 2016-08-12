var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin/delete-account');
  console.log('Admin delete account page opened.');
});

module.exports = router;