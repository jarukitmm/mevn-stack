var mongoose = require('mongoose');
var passport = require('passport');
var settings = require('../config/settings');
require('../config/passport')(passport);
var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var User = require('../models/User');

router.post('/register', function(req, res) {
    if (!req.body.user.username || !req.body.user.password) {
      res.json({success: false, msg: 'Please pass username and password.'});
    } else {
      var newUser = new User(req.body.user);
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  });

  router.post('/login', function(req, res) {
    User.findOne({
      username: req.body.user.username
    }, function(err, user) {
      if (err) throw err;
  
      if (!user) {
        res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
      } else {
        // check if password matches
        user.comparePassword(req.body.user.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json(user);
          } else {
            res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
          }
        });
      }
    });
  });
  router.get('/logout',function(res,req){
    // req.logout();
    console.log('ddd: '+req.body)
    // res.send('Null');
  });

  module.exports = router;