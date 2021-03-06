var express = require('express');
var router = express.Router();
var productsCtrl = require('../controllers/products');

/* GET users listing. */
router.get('/', productsCtrl.index);
router.get('/new', productsCtrl.new);
router.get('/:id', productsCtrl.show);
router.post('/', productsCtrl.create);
router.put('/:id', productsCtrl.update)
router.get('/:id/edit', productsCtrl.edit)
router.delete('/:id', productsCtrl.delete)

module.exports = router;