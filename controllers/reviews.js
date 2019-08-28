var Product = require('../models/product');

module.exports = {
    create,
    delReview

};

function delReview(req, res, next) {
    Product.findOne({
        'review._id': req.params.id
    }, function (err, product) {
        product.reviews.id(req.params.id).remove();
        product.save(function (err) {
            res.redirect('/products');
        });
    });
}

function create(req, res) {
    Product.findById(req.params.id, function (err, product) {
        product.reviews.push(req.body);
        product.save(function (err) {
            res.redirect(`/products/${product._id}`, {
                user: req.user,
                name: req.query.name
            });
        });
    });
}