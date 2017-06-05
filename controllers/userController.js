'use strict';

const mongoose = require('mongoose'),
	User = mongoose.model('User'),
	passport = require('passport');


exports.renderSignin = function(req, res, next) {
  
  if (!req.user) {
    res.render('signin', {
      title: 'Belleza:: Sign'
    });
  } else {
    return res.redirect('/');
  }
};


exports.saveOAuthUserProfile = function(req, profile, done) {
  
  User.findOne({
    provider: profile.provider,
    providerId: profile.providerId
  }, function(err, user) {
    
    if (err) {
      return done(err);
    } else {
      
      if (!user) {
       
        var possibleUsername = profile.username || ((profile.email) ? profile.email.split('@')[0] : '');

        User.findUniqueUsername(possibleUsername, null, function(availableUsername) {
          profile.username = availableUsername;
          user = new User(profile);
          user.save(function(err) {
            
            return done(err, user);
          });
        });
      } else {
        
        return done(err, user);
      }
    }
  });
};


exports.signout = function(req, res) {
  
  req.logout();
  res.redirect('/');
};


