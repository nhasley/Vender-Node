var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Vender',
    user: req.user
  });
});

// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   res.redirect('/auth/google');
// };

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google', {
    scope: ['profile', 'email']
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google', {
    successRedirect: '/products',
    failureRedirect: '/'
  }
));

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;