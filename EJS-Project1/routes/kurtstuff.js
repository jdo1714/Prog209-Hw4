var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('Hello from Kurts flower shop');
  res.render('kurtsflowershop', { title: 'Kurts Flower Shop' });
});
router.get('/help', function(req, res, next) {
  //res.send('Hello from Kurts flower shop');
  res.render('kurtshelp', { title: 'Kurts Flower Shop' });
});
router.get('/register', function(req, res, next) {
  //res.send('Hello from Kurts flower shop');
  res.render('kurtregister', { title: 'Kurts Flower Shop' });
});

module.exports = router;
