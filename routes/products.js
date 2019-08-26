var express = require('express');
var router = express.Router();
var productsCtrl = require('../controllers/products')

/* GET users listing. */
router.get('/', productsCtrl.index);
router.get('/new', productsCtrl.new);
router.get('/:id', productsCtrl.show);
router.post('/', productsCtrl.create);

module.exports = router;