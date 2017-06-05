// Invocar modo JavaScript 'strict'
'use strict';

const passport = require('passport');
const mongoose = require('mongoose');

//Definir el método de configuración de Passport
module.exports = () => {
  //Cargar el modelo 'User'
  const Users = require('../models/User');
  
  //Usar el método 'serializeUser' para serializar la id del usuario
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
  //Cargar los archivos de configuración de estrategias de Passport
  require('./strategies/facebook.js')();
};