var Product = require('../models/product')
var User = require('../models/user')

module.exports = {
    index,
    new: newProduct,
    show,
    create,
    edit,
    update,
    delete: deleteOne
}

function index(req, res) {
    Product.find({
        userId: req.user
    }, function (err, products) {
        res.render('products/index', {
            title: 'For Sale',
            user: req.user,
            products
        });
    });
}

function newProduct(req, res) {
    Product.find({
        userId: req.user
    }, function (err, products) {
        res.render('products/new', {
            title: 'Add Product',
            user: req.user,
            products
        });
    })
}


function show(req, res) {
    Product.findById(req.params.id)
        .exec(function (err, product) {
            res.render('products/show', {
                title: `${product.name}`,
                user: req.user,
                product
            });
        });
}

// 
function create(req, res) {
    var product = new Product(req.body);
    product.save(function (err) {
        if (err) return res.redirect('/products/new');
        res.redirect(`/products`);
    });
}

function deleteOne(req, res) {
    Product.findByIdAndRemove(req.params.id).then(function (err) {
        res.redirect('/products');
    })
}

function edit(req, res) {
    Product.findById(req.params.id)
        .exec(function (err, product) {
            res.render(`products/edit`, {
                title: `Edit ${product.name} Posting`,
                user: req.user,
                product
            });
        });
}

function update(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect(`/products`);
    })
}