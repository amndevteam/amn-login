var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin/add-account');
  console.log('Admin add account page opened.');
});

module.exports = router;