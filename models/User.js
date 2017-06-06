'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = Schema({
  email: { type: String, unique: true },
  provider: String,
  facebook: { type: String, unique: true, sparse: true },
  google: { type: String, unique: true, sparse: true },
  profile: {
    name: { type: String, default: '' },
    gender: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    picture: { type: String, default: '' }
  },
  created: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('User', userSchema);