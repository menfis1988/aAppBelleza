'use strict'

const express = require('express')
const api = express.Router()
const index = require('../services/indexController');
const passport = require('passport');

api.get('/', index.render);

// Configurar las rutas Facebook

api.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }));
api.get('/auth/facebook/callback', passport.authenticate('facebook',{ 
  successRedirect: '/', 
  failureRedirect: '/signin' 
}));

//Configurar la route 'signout'
api.get('/signout', index.signout);



module.exports = api