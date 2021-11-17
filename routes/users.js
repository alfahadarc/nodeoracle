var express = require('express');
var router = express.Router();
var {getEmployess, foo} = require('../controller/userController')


/* GET users listing. */
router.get('/', function(req, res, next) {
  getEmployess(req, res);
  foo()
});



module.exports = router;
