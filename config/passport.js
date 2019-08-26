var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var Product = require('../models/product')


passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK
    },
    function (accessToken, refreshToken, profile, cb) {}
));

passport.serializeUser(function (product, done) {
    done(null, product.id);
});

passport.deserializeUser(function (id, done) {
    Product.findById(id, function (err, product) {
        done(err, product);
    });
});