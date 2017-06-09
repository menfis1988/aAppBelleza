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
