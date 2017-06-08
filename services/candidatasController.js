'use strict';

var express = require('express');
var Candidata = require('../models/Candidatas');

exports.getall = (req, res) => {
    Candidata.find(function(err, candidata) {
      if (err) {
        return res.send(err);
      }
      res.json(candidata);
    });
  }

exports.addCandidata = (req, res) => {
    var candidata = new Candidata(req.body);

    candidata.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Added' });
    });
  }
