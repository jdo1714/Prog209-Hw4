var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jasonsite', { title: 'Jasons Web Hosting' });
});

module.exports = router;
