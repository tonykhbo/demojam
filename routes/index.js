var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var passport = require('passport');
325220


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
