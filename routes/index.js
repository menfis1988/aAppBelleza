'use strict'

const express = require('express')
const api = express.Router()
const index = require('../services/indexController');
const candidatas = require('../services/candidatasController');
const users = require('../services/usersController');
const passport = require('passport');

// api.get('/', index.render);

api.get('/', index.renderadmin);
api.get('/admin', users.signin)
api.post('/admin/signin', users.signin);
api.get('/admin/signup', users.getSignup);
api.post('/admin/signup', users.postSignup);
api.get('/admin/signout', users.signout);

// Configurar las rutas Candidatas
api.get('/api/candidatas', candidatas.getall)
api.get('/api/candidatas/:id', candidatas.getDetail)
api.post('/api/candidatas', candidatas.addCandidata)
api.put('/api/candidatas/:id', candidatas.updateVoto)

// configurar rutas de Usuario
api.get('/api/user/:id', users.getDetail)
api.put('/api/user/:id', users.updateUser)


// Configurar las rutas Facebook
api.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }));
api.get('/auth/facebook/callback', passport.authenticate('facebook',{ 
  successRedirect: '/', 
  failureRedirect: '/signin' 
}));

//Configurar la route 'signout'
api.get('/signout', index.signout);



module.exports = api