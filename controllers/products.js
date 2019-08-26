var Product = require('../models/product')

module.exports = {
    index,
    new: newProduct
    // show,
    // create,
    // update,
    // delete: deleteOne
}

function index(req, res) {
    res.render('products/index', {
        title: 'For Sale',
        products
    });

}

function newProduct(req, res) {
    res.render('products/new', {
        title: 'Add Product'
    });
}