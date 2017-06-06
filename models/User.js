'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = Schema({
  email: { type: String, unique: true },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  tokens: Array,
  

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
  
  image: { type: String, default: 'img/account_circle_48px.svg'},

  created: { type: Date, default: Date.now },
  
});

module.exports = mongoose.model('User', userSchema);