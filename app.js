var express = require('express');
var router = express.Router();

var index = require('./router/index');
router.use(index);

module.exports = router;