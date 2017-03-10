var express = require('express');
var router = express.Router();

var index = require('./routes/index');
router.use(index);

list = require('./routes/list-users');
router.use(list);

products = require('./routes/products');
router.use(products);

var add = require('./routes/add-users');
router.use(add);

module.exports = router;