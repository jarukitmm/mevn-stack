var user = require('../controller/user.controller');
var passport = require('passport');
module.exports = function (app) {
  app.route('/users/signup')
    .get(user.renderSignup)
    .post(user.signup);
  app.route('/users/login')
    .get(user.renderLogin)
    .post(passport.authenticate('local', {
        // successRedirect: '/',
        // failureRedirect: '/users/login',
        failureFlash: true
      }),
      function (req, res) {
        res.json({ user: req.user });
        // res.json({message:'hello'});
      }
    );
  app.post('/logout', user.logout);
};