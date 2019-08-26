var express = require('express');
var router = express.Router();
var productsCtrl = require('../controllers/products')

/* GET users listing. */
router.get('/', productsCtrl.index);
router.get('/new', productsCtrl.new);

module.exports = router;