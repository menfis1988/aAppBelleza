'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const candidataSchema = Schema({
  nombre: { type: String },
  votos: Number,
  estado: String,
  created: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('Candidata', candidataSchema);