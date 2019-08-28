var Product = require('../models/product');

module.exports = {
    create
};


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