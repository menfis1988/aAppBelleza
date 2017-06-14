'use strict';

const passport = require('passport');
var express = require('express');
var User = require('../models/User');
var UserAdmin = require('../models/UserAdmin');


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

// crear usuario desde Postman

exports.getSignup = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('./signup', {
    title: 'Crear Cuenta'
  });
};

exports.postSignup = (req, res, next) => {

  const useradmin = new UserAdmin({
    cedula: req.body.cedula,
    password: req.body.password,
    role: req.body.role,
    provider: 'local'
  });

  UserAdmin.findOne({ cedula: req.body.cedula }, (err, existingUser) => {
    if (err) { return next(err); }
    
    useradmin.save((err) => {
      if (err) { return next(err); }
      req.logIn(useradmin, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/admin');
      });
    });
  });

};

exports.getsignin = (req, res) => {
  if (req.useradmin) {
    return res.redirect('/admin');
  }
  res.render('login', {
    title: 'Login'
  });
};

exports.signin = (req, res, next) => {    

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      res.redirect(req.session.returnTo || '/admin');
    });
  })(req, res, next);
  
};

exports.signout = (req, res) => {
  req.logout();
  res.redirect('/admin');
};
