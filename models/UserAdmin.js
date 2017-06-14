'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');


const useradminSchema = Schema({
  cedula: { type: Number, unique: true},
  role: { type: String },
  password: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  tokens: Array,
  provider: String,
  created: { type: Date, default: Date.now },
  
});

useradminSchema.pre('save', function save(next) {
  const useradmin = this;
  if (!useradmin.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err); }
    bcrypt.hash(useradmin.password, salt, null, (err, hash) => {
      if (err) { return next(err); }
      useradmin.password = hash;
      next();
    });
  });
});

useradminSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch);
  });
};

useradminSchema.methods.gravatar = function gravatar(size) {
  if (!size) {
    size = 200;
  }
  if (!this.email) {
    return `https://gravatar.com/avatar/?s=${size}&d=retro`;
  }
  const md5 = crypto.createHash('md5').update(this.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=${size}&d=retro`;
};

module.exports = mongoose.model('UserAdmin', useradminSchema);