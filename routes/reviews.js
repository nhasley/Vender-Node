var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/products/:id/reviews', reviewsCtrl.create);
router.delete('/products/:id/reviews/:id', isLoggedIn, reviewsCtrl.delReview);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;