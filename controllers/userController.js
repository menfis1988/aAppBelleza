'use strict';

const mongoose = require('mongoose')
const	User = require('../models/User');
const	passport = require('passport');


exports.renderSignin = function(req, res, next) {
  
  if (!req.user) {
    res.render('signin', {
      title: 'Belleza:: Sign'
    });
  } else {
    return res.redirect('/');
  }
};


exports.signout = function(req, res) {
  
  req.logout();
  res.redirect('/');
};


