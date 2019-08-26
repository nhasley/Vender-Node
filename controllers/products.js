var Product = require('../models/product')

module.exports = {
    index,
    new: newProduct,
    show,
    create
    // update,
    // delete: deleteOne
}

function index(req, res) {
    Product.find({}, function (err, products) {
        res.render('products/index', {
            title: 'For Sale',
            products
        });
    });
}

function newProduct(req, res) {
    res.render('products/new', {
        title: 'Add Product'
    });
}

function show(req, res) {
    Product.findById(req.params.id)
        .exec(function (err, product) {
            res.render('products/show', {
                title: `${product.name}`,
                product
            });
        });
}

function create(req, res) {
    var product = new Product(req.body);
    product.save(function (err) {
        if (err) return res.redirect('/products/new');
        res.redirect(`/products/${product._id}`);
    });
}