var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello from the GET Call to the server on the route users');
});

module.exports = router;
