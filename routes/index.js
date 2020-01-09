var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport = require('passport');
//325220


/* GET home page. */
router.get('/', function(req, res,) {
  res.render('index', { title: 'Express' });
});

router.get('/env', function(req, res,) {
  var htmlColor = process.env.MYSTERY;

  console.log(htmlColor);
  res.json(htmlColor);
});


module.exports = router;
