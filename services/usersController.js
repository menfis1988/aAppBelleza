'use strict';

var express = require('express');
var User = require('../models/User');


exports.getDetail = (req, res) => {
      User.findOne({ _id: req.params.id}, function(err, user) {
        if (err) {
          return res.send(err);
        }
        res.json(user);
  });
};

exports.updateUser = (req, res, prop) => {
    User.findOne({ _id: req.params.id }, function(err, user) {
        if (err) {
          return res.send(err);
        }
        for (prop in req.body) {
          user[prop] = req.body[prop];
        }
 
        user.save(function(err) {
          if (err) {
            return res.send(err);
          }
        res.json({ message: 'updated!' });
    });
  });
}

// User Admin

exports.postLogin = (req, res, next) => {
  req.assert('email', 'Email no es valido ').isEmail();
  req.assert('password', 'Password no puede estar en blanco').notEmpty();
  

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/');
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      req.flash('errors', info);
      return res.redirect('/');
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
};
