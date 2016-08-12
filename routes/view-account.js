var express = require('express');
var router = express.Router();

/* GET employee login page. */
router.get('/', function(req, res, next) {
  res.render('admin/view-account');
  console.log('Admin view account page opened.');
});

module.exports = router;