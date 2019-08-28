var Product = require('../models/product')

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
                product
            });
        });
}

function update(req, res) {
    Product.findByIdAndUpdate(req.params.id, req.body, () => {
        // console.log(req.body);
        res.redirect(`/products`);
    })
}

// function deleteOne(req, res, next) {
//     Product.findOne({
//         'product._id': req.params.id
//     }, function (err, product) {
//         product.id(req.params.id).remove();
//         product.save(function (err) {
//             res.redirect('/products');
//         });
//     });
// }