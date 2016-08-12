var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin/edit-account');
  console.log('Admin edit account page opened.');
});

module.exports = router;